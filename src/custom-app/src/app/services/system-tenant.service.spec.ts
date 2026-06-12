import { mapSystemTenants, SystemTenant } from './system-tenant.service';
import { GetSystemTenantsQuery } from '../graphQL/getSystemTenants.generated';

/**
 * Tests the GraphQL result mapping extracted from SystemTenantService.
 * The service uses Angular's inject() which makes direct instantiation
 * awkward in vitest, so we test the pure mapping logic independently —
 * same pattern as MaintenanceModeService.
 */
describe('mapSystemTenants', () => {
  function createResult(
    nodes: ({ rtId: string; name: string } | null)[],
  ): GetSystemTenantsQuery {
    return {
      runtime: {
        systemTenant: {
          edges: nodes.map((node) => ({ node })),
        },
      },
    };
  }

  it('maps edges to flat id/name rows', () => {
    const result = mapSystemTenants(
      createResult([
        { rtId: '1', name: 'Acme' },
        { rtId: '2', name: 'Globex' },
      ]),
    );
    expect(result).toEqual<SystemTenant[]>([
      { id: '1', name: 'Acme' },
      { id: '2', name: 'Globex' },
    ]);
  });

  it('drops null nodes', () => {
    const result = mapSystemTenants(
      createResult([{ rtId: '1', name: 'Acme' }, null]),
    );
    expect(result).toEqual<SystemTenant[]>([{ id: '1', name: 'Acme' }]);
  });

  it('returns an empty array for empty edges', () => {
    expect(mapSystemTenants(createResult([]))).toEqual([]);
  });

  it('returns an empty array when data is missing', () => {
    expect(mapSystemTenants(null)).toEqual([]);
    expect(mapSystemTenants(undefined)).toEqual([]);
    expect(mapSystemTenants({})).toEqual([]);
  });
});
