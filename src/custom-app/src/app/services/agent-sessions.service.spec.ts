import { describe, it, expect } from 'vitest';
import { mapAgentSessionsResult } from './agent-sessions.service';

describe('mapAgentSessionsResult', () => {
  it('returns empty array when data is null', () => {
    expect(mapAgentSessionsResult(null)).toEqual([]);
  });

  it('returns empty array when data is undefined', () => {
    expect(mapAgentSessionsResult(undefined)).toEqual([]);
  });

  it('returns empty array when edges list is missing', () => {
    expect(mapAgentSessionsResult({ runtime: { GetAgentSessions: {} } } as never)).toEqual([]);
  });

  it('drops null nodes', () => {
    const result = mapAgentSessionsResult({
      runtime: { GetAgentSessions: { edges: [null, { node: null }] } },
    } as never);
    expect(result).toEqual([]);
  });

  it('maps nodes to AgentSessionsEntry rows', () => {
    const result = mapAgentSessionsResult({
      runtime: {
        GetAgentSessions: {
          edges: [
            {
              node: {
                rtId: 'rt-1',
                status: 'ACTIVE',
                startedAt: '2026-06-14T10:00:00Z',
                completedAt: '2026-06-14T10:05:00Z',
                jobKind: 'ADMIN',
                goalSummary: 'Goal 1',
              },
            },
            {
              node: {
                rtId: 'rt-2',
                status: 'COMPLETED',
                startedAt: '2026-06-14T09:00:00Z',
                completedAt: null,
                jobKind: null,
                goalSummary: 'Goal 2',
              },
            },
          ],
        },
      },
    } as never);

    expect(result).toEqual([
      {
        rtId: 'rt-1',
        status: 'ACTIVE',
        startedAt: '2026-06-14T10:00:00Z',
        completedAt: '2026-06-14T10:05:00Z',
        jobKind: 'ADMIN',
        goalSummary: 'Goal 1',
      },
      {
        rtId: 'rt-2',
        status: 'COMPLETED',
        startedAt: '2026-06-14T09:00:00Z',
        completedAt: null,
        jobKind: null,
        goalSummary: 'Goal 2',
      },
    ]);
  });

  it('normalises undefined completedAt/jobKind to null', () => {
    const result = mapAgentSessionsResult({
      runtime: {
        GetAgentSessions: {
          edges: [
            {
              node: {
                rtId: 'rt-3',
                status: 'FAILED',
                startedAt: '2026-06-14T08:00:00Z',
                goalSummary: 'Goal 3',
              },
            },
          ],
        },
      },
    } as never);

    expect(result).toEqual([
      {
        rtId: 'rt-3',
        status: 'FAILED',
        startedAt: '2026-06-14T08:00:00Z',
        completedAt: null,
        jobKind: null,
        goalSummary: 'Goal 3',
      },
    ]);
  });
});
