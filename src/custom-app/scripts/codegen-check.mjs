// Regenerates the GraphQL code and fails when the committed files differ from the generator output.
// Usage: node scripts/codegen-check.mjs [config] [generatedDir] [generatedExtension]
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const [configFile = 'codegen.yml', generatedDir = 'src/app/graphQL', generatedExtension = '.generated.ts'] =
  process.argv.slice(2);
const sharedTypesFile = 'globalTypes.ts';

function fail(reason, files = []) {
  console.error(`codegen check failed: ${reason}`);
  for (const file of files) {
    console.error(`  ${file}`);
  }
  process.exit(1);
}

function run(command, args) {
  return spawnSync(command, args, { encoding: 'utf8', shell: false });
}

function nonEmptyLines(text) {
  return text.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
}

function codegenBinPath() {
  const require = createRequire(path.resolve('package.json'));
  const codegenPackageName = '@graphql-codegen/cli';
  let packageDir = path.dirname(require.resolve(codegenPackageName));
  while (packageDir !== path.dirname(packageDir)) {
    const manifestPath = path.join(packageDir, 'package.json');
    if (existsSync(manifestPath)) {
      const packageManifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
      if (packageManifest.name === codegenPackageName) {
        return path.join(packageDir, packageManifest.bin['graphql-codegen']);
      }
    }
    packageDir = path.dirname(packageDir);
  }
  fail(`${codegenPackageName} is not installed; run npm ci`);
}

function regenerate() {
  const codegenBin = codegenBinPath();
  const generation = spawnSync(process.execPath, [codegenBin, '--config', configFile], { stdio: 'inherit', shell: false });
  if (generation.error || generation.status !== 0) {
    fail(`graphql-codegen --config ${configFile} did not succeed`);
  }
}

function checkNoChanges() {
  const diff = run('git', ['diff', '--name-only', '--', generatedDir]);
  if (diff.error || diff.status !== 0) {
    fail('git diff could not run');
  }
  const changedFiles = nonEmptyLines(diff.stdout);
  if (changedFiles.length > 0) {
    fail('generated files differ from the committed ones; run npm run codegen and commit the result', changedFiles);
  }
}

function checkNoUntrackedOrDeleted() {
  const status = run('git', ['status', '--porcelain', '--', generatedDir]);
  if (status.error || status.status !== 0) {
    fail('git status could not run');
  }
  const pendingFiles = nonEmptyLines(status.stdout);
  if (pendingFiles.length > 0) {
    fail('generated files are new, deleted or not committed', pendingFiles);
  }
}

function checkNoOrphans() {
  if (!existsSync(generatedDir)) {
    fail(`generated directory ${generatedDir} does not exist`);
  }
  const fileNames = readdirSync(generatedDir);
  const operationNames = new Set(
    fileNames.filter((fileName) => fileName.endsWith('.graphql')).map((fileName) => fileName.slice(0, -'.graphql'.length)),
  );
  const orphanFiles = fileNames
    .filter((fileName) => fileName.endsWith(generatedExtension) && fileName !== sharedTypesFile)
    .filter((fileName) => !operationNames.has(fileName.slice(0, -generatedExtension.length)))
    .map((fileName) => path.join(generatedDir, fileName));
  if (orphanFiles.length > 0) {
    fail('generated files without a matching .graphql document', orphanFiles);
  }
}

regenerate();
checkNoChanges();
checkNoUntrackedOrDeleted();
checkNoOrphans();
console.log(`codegen check passed: ${generatedDir} matches ${configFile}`);
