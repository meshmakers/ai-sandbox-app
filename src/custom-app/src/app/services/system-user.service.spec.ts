import { mapSystemUsers } from './system-user.service';
import { GetSystemUsersQuery } from '../graphQL/getSystemUsers.generated';

/**
 * Tests the GraphQL-result mapping extracted from SystemUserService.
 * The service uses Angular's inject() which makes direct instantiation
 * difficult in vitest, so we test the pure mapping logic independently.
 */
describe('mapSystemUsers', () => {
  function createResult(
    nodes: ({ rtId: string; userName?: string | null; email?: string | null } | null)[],
  ): GetSystemUsersQuery {
    return {
      runtime: {
        user: {
          edges: nodes.map((node) => ({ node })),
        },
      },
    };
  }

  it('maps user nodes to flat rows', () => {
    const result = createResult([
      { rtId: '1', userName: 'alice', email: 'alice@example.com' },
      { rtId: '2', userName: 'bob', email: 'bob@example.com' },
    ]);
    expect(mapSystemUsers(result)).toEqual([
      { rtId: '1', userName: 'alice', email: 'alice@example.com' },
      { rtId: '2', userName: 'bob', email: 'bob@example.com' },
    ]);
  });

  it('coerces missing userName/email to empty strings', () => {
    const result = createResult([{ rtId: '3', userName: null, email: null }]);
    expect(mapSystemUsers(result)).toEqual([
      { rtId: '3', userName: '', email: '' },
    ]);
  });

  it('skips null nodes', () => {
    const result = createResult([
      null,
      { rtId: '4', userName: 'carol', email: 'carol@example.com' },
    ]);
    expect(mapSystemUsers(result)).toEqual([
      { rtId: '4', userName: 'carol', email: 'carol@example.com' },
    ]);
  });

  it('returns an empty array when there are no edges', () => {
    expect(mapSystemUsers(createResult([]))).toEqual([]);
    expect(mapSystemUsers(undefined)).toEqual([]);
    expect(mapSystemUsers(null)).toEqual([]);
  });
});
