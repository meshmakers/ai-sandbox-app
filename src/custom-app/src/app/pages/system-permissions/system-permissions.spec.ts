import { parseScopes } from '../../models/scopes';

/**
 * Tests the scope-list logic backing the System Permissions page.
 * The page component uses Angular's inject() which makes direct instantiation
 * awkward in vitest, so we test the pure parseScopes() helper it renders.
 */
describe('System Permissions scope list (parseScopes)', () => {
  it('splits a space-delimited scope string into sorted names', () => {
    expect(parseScopes('openid profile octo_api offline_access')).toEqual([
      'octo_api',
      'offline_access',
      'openid',
      'profile',
    ]);
  });

  it('returns an empty array for null, undefined, or blank input', () => {
    expect(parseScopes(null)).toEqual([]);
    expect(parseScopes(undefined)).toEqual([]);
    expect(parseScopes('')).toEqual([]);
    expect(parseScopes('   ')).toEqual([]);
  });

  it('collapses extra whitespace and de-duplicates names', () => {
    expect(parseScopes('  openid   profile  openid ')).toEqual([
      'openid',
      'profile',
    ]);
  });
});
