import { mapAuditLogResult } from './audit-log.service';
import { GetAuditLogQuery } from '../graphQL/getAuditLog.generated';

/**
 * Tests the GraphQL-result mapping extracted from AuditLogService.
 * The service itself uses Angular's inject(), which makes direct instantiation
 * difficult in vitest, so we test the pure mapping logic independently — the
 * same approach used for MaintenanceModeService.
 */
describe('mapAuditLogResult', () => {
  function nodeResult(
    nodes: {
      rtId: string;
      at: string;
      eventType: string;
      actorRef: string;
      targetRef?: string | null;
      detail?: string | null;
    }[],
  ): GetAuditLogQuery {
    return {
      runtime: {
        systemAiAuditEvent: {
          edges: nodes.map((node) => ({ node })),
        },
      },
    };
  }

  it('maps audit event nodes to entries', () => {
    const result = mapAuditLogResult(
      nodeResult([
        {
          rtId: '1',
          at: '2026-06-12T10:00:00Z',
          eventType: 'credential.refreshed',
          actorRef: 'system',
          targetRef: 'lease-1',
          detail: '{"generation":3}',
        },
      ]),
    );

    expect(result).toEqual([
      {
        rtId: '1',
        at: '2026-06-12T10:00:00Z',
        eventType: 'credential.refreshed',
        actorRef: 'system',
        targetRef: 'lease-1',
        detail: '{"generation":3}',
      },
    ]);
  });

  it('normalises missing optional fields to null', () => {
    const result = mapAuditLogResult(
      nodeResult([
        {
          rtId: '2',
          at: '2026-06-12T11:00:00Z',
          eventType: 'quota.exceeded',
          actorRef: 'agent',
        },
      ]),
    );

    expect(result[0].targetRef).toBeNull();
    expect(result[0].detail).toBeNull();
  });

  it('skips null nodes in the edge list', () => {
    const data: GetAuditLogQuery = {
      runtime: {
        systemAiAuditEvent: {
          edges: [
            { node: null },
            {
              node: {
                rtId: '3',
                at: '2026-06-12T12:00:00Z',
                eventType: 'approval.decided',
                actorRef: 'user-42',
                targetRef: null,
                detail: null,
              },
            },
          ],
        },
      },
    };

    const result = mapAuditLogResult(data);
    expect(result).toHaveLength(1);
    expect(result[0].rtId).toBe('3');
  });

  it('returns an empty array when there are no edges', () => {
    expect(mapAuditLogResult({ runtime: { systemAiAuditEvent: { edges: [] } } })).toEqual([]);
  });

  it('returns an empty array for null/undefined data', () => {
    expect(mapAuditLogResult(null)).toEqual([]);
    expect(mapAuditLogResult(undefined)).toEqual([]);
  });
});
