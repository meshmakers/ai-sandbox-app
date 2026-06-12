import { sortRolesByName } from './roles.service';
import { Role } from '../models/role';

/**
 * Tests the pure role-sorting logic used by RolesService. The service itself
 * relies on Angular's signal/inject machinery, so we test the extracted pure
 * function directly (same approach as MaintenanceModeService's spec).
 */
describe('sortRolesByName', () => {
  it('sorts roles alphabetically by name', () => {
    const input: Role[] = [
      { name: 'Viewer' },
      { name: 'Administrator' },
      { name: 'Operator' },
    ];
    expect(sortRolesByName(input).map((r) => r.name)).toEqual([
      'Administrator',
      'Operator',
      'Viewer',
    ]);
  });

  it('is case-insensitive', () => {
    const input: Role[] = [{ name: 'beta' }, { name: 'Alpha' }];
    expect(sortRolesByName(input).map((r) => r.name)).toEqual(['Alpha', 'beta']);
  });

  it('does not mutate the input array', () => {
    const input: Role[] = [{ name: 'B' }, { name: 'A' }];
    sortRolesByName(input);
    expect(input.map((r) => r.name)).toEqual(['B', 'A']);
  });

  it('returns an empty array for empty input', () => {
    expect(sortRolesByName([])).toEqual([]);
  });
});
