import { describe, it, expect } from 'vitest';
import { mapTenantModeResult } from './tenant-mode.service';
import { GetTenantModeQuery } from '../graphQL/getTenantMode.generated';

describe('mapTenantModeResult', () => {
  it('returns empty array when data is null', () => {
    expect(mapTenantModeResult(null)).toEqual([]);
  });

  it('returns empty array when data is undefined', () => {
    expect(mapTenantModeResult(undefined)).toEqual([]);
  });

  it('returns empty array when edges list is missing', () => {
    expect(
      mapTenantModeResult({
        runtime: { systemTenantModeConfiguration: {} },
      } as unknown as GetTenantModeQuery),
    ).toEqual([]);
  });

  it('drops null nodes', () => {
    const result = mapTenantModeResult({
      runtime: { systemTenantModeConfiguration: { edges: [null, { node: null }] } },
    } as unknown as GetTenantModeQuery);
    expect(result).toEqual([]);
  });

  it('maps maintenanceLevel + environmentMode from nodes', () => {
    const result = mapTenantModeResult({
      runtime: {
        systemTenantModeConfiguration: {
          edges: [
            { node: { rtId: '1', maintenanceLevel: 'OFF', environmentMode: 'PRODUCTION' } },
          ],
        },
      },
    } as unknown as GetTenantModeQuery);
    expect(result).toEqual([{ maintenanceLevel: 'OFF', environmentMode: 'PRODUCTION' }]);
  });
});
