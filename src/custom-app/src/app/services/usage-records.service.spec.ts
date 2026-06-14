import { describe, it, expect } from 'vitest';
import { mapUsageRecordsResult } from './usage-records.service';

describe('mapUsageRecordsResult', () => {
  it('returns empty array when data is null', () => {
    expect(mapUsageRecordsResult(null)).toEqual([]);
  });

  it('returns empty array when data is undefined', () => {
    expect(mapUsageRecordsResult(undefined)).toEqual([]);
  });

  it('returns empty array when edges list is missing', () => {
    expect(mapUsageRecordsResult({ runtime: { systemAiAiUsageRecord: {} } } as any)).toEqual([]);
  });

  it('drops null nodes', () => {
    const result = mapUsageRecordsResult({
      runtime: { systemAiAiUsageRecord: { edges: [null, { node: null }] } },
    } as any);
    expect(result).toEqual([]);
  });

  it('maps nodes to UsageRecordsEntry rows', () => {
    const result = mapUsageRecordsResult({
      runtime: {
        systemAiAiUsageRecord: {
          edges: [
            {
              node: {
                rtId: 'rec-1',
                at: '2026-06-14T10:00:00Z',
                model: 'claude-opus-4-7',
                inputTokens: 1200,
                outputTokens: 340,
                costCents: 5.5,
              },
            },
          ],
        },
      },
    } as any);
    expect(result).toEqual([
      {
        rtId: 'rec-1',
        at: '2026-06-14T10:00:00Z',
        model: 'claude-opus-4-7',
        inputTokens: 1200,
        outputTokens: 340,
        costCents: 5.5,
      },
    ]);
  });
});
