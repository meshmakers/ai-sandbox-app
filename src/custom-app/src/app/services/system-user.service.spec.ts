import { mapSystemUserQuery } from './system-user.service';
import { GetSystemUserQuery } from '../graphQL/getSystemUser.generated';

/**
 * Tests the GraphQL-result mapping extracted from SystemUserService.
 * The service uses Angular's inject() which makes direct instantiation awkward
 * in vitest, so the pure mapping logic is tested independently — same approach
 * as MaintenanceModeService.
 */
describe('mapSystemUserQuery', () => {
  function queryWith(
    node: { rtId: string; userName?: string | null; email?: string | null } | null,
  ): GetSystemUserQuery {
    return {
      runtime: {
        user: {
          edges: node ? [{ node }] : [],
        },
      },
    };
  }

  it('maps userName -> name and email through', () => {
    const result = mapSystemUserQuery(
      queryWith({ rtId: 'u-1', userName: 'jdoe', email: 'jdoe@example.com' }),
    );
    expect(result).toEqual({ rtId: 'u-1', name: 'jdoe', email: 'jdoe@example.com' });
  });

  it('coerces missing userName/email to empty strings', () => {
    const result = mapSystemUserQuery(
      queryWith({ rtId: 'u-2', userName: null, email: null }),
    );
    expect(result).toEqual({ rtId: 'u-2', name: '', email: '' });
  });

  it('returns null when there are no edges', () => {
    expect(mapSystemUserQuery(queryWith(null))).toBeNull();
  });

  it('returns null for empty/undefined data', () => {
    expect(mapSystemUserQuery(undefined)).toBeNull();
    expect(mapSystemUserQuery({})).toBeNull();
  });
});
