import { mapAutoIncrements } from './auto-increment.service';
import { GetAutoIncrementsQuery } from '../graphQL/getAutoIncrements.generated';

/**
 * Tests the pure mapping logic of AutoIncrementService.
 * The service uses Angular's inject() which makes direct instantiation difficult
 * in vitest, so the GraphQL-to-row mapping is extracted and tested independently.
 */
describe('mapAutoIncrements', () => {
  function buildQuery(
    nodes: ({ rtId: string; rtWellKnownName?: string | null; currentValue: number } | null)[]
  ): GetAutoIncrementsQuery {
    return {
      runtime: {
        systemAutoIncrement: {
          edges: nodes.map((node) => ({ node })),
        },
      },
    };
  }

  it('maps nodes to rows with name + currentValue', () => {
    const rows = mapAutoIncrements(
      buildQuery([
        { rtId: '1', rtWellKnownName: 'invoice-seq', currentValue: 42 },
        { rtId: '2', rtWellKnownName: 'order-seq', currentValue: 7 },
      ])
    );

    expect(rows).toEqual([
      { rtId: '1', name: 'invoice-seq', currentValue: 42 },
      { rtId: '2', name: 'order-seq', currentValue: 7 },
    ]);
  });

  it('falls back to empty string when rtWellKnownName is null', () => {
    const rows = mapAutoIncrements(
      buildQuery([{ rtId: '1', rtWellKnownName: null, currentValue: 0 }])
    );

    expect(rows[0].name).toBe('');
    expect(rows[0].currentValue).toBe(0);
  });

  it('skips null nodes', () => {
    const rows = mapAutoIncrements(
      buildQuery([null, { rtId: '3', rtWellKnownName: 'kept', currentValue: 5 }])
    );

    expect(rows).toHaveLength(1);
    expect(rows[0].rtId).toBe('3');
  });

  it('returns an empty array when there is no data', () => {
    expect(mapAutoIncrements(undefined)).toEqual([]);
    expect(mapAutoIncrements(null)).toEqual([]);
    expect(mapAutoIncrements({})).toEqual([]);
  });

  it('returns an empty array for empty edges', () => {
    expect(mapAutoIncrements(buildQuery([]))).toEqual([]);
  });
});
