import { SystemPermissionsService } from './system-permissions.service';

/**
 * SystemPermissionsService has no injected dependencies, so it can be
 * instantiated directly in vitest. These tests pin the catalogue shape and the
 * alphabetical-by-name ordering the page relies on.
 */
describe('SystemPermissionsService', () => {
  const service = new SystemPermissionsService();

  it('returns a non-empty list of scopes', () => {
    expect(service.getPermissions().length).toBeGreaterThan(0);
  });

  it('orders scopes alphabetically by name', () => {
    const names = service.getPermissions().map((p) => p.name);
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  });

  it('exposes a name and displayName for every scope', () => {
    for (const permission of service.getPermissions()) {
      expect(permission.name).toBeTruthy();
      expect(permission.displayName).toBeTruthy();
    }
  });

  it('returns a fresh array so callers cannot mutate the catalogue', () => {
    const first = service.getPermissions();
    first.pop();
    expect(service.getPermissions().length).toBe(first.length + 1);
  });
});
