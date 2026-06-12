/**
 * Parses an OAuth scope string (space-delimited, as stored in config.json /
 * AuthorizeOptions) into a sorted, de-duplicated list of scope names. Used by
 * the System Permissions page to list the scopes the Custom-App is configured
 * to request from the OctoMesh identity service.
 *
 * Kept free of Angular dependencies so it can be unit-tested directly in vitest.
 */
export function parseScopes(scope: string | null | undefined): string[] {
  if (!scope) {
    return [];
  }

  const names = scope
    .split(/\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  return Array.from(new Set(names)).sort((a, b) => a.localeCompare(b));
}
