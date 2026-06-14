import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetUsageRecordsGQL, GetUsageRecordsQuery } from '../graphQL/getUsageRecords.generated';
import { UsageRecordsEntry } from '../models/usage-records-entry';

/**
 * Loads System.Ai-3/AiUsageRecord records for the /usage-records page via the Runtime GraphQL API.
 * Mirrors the Apollo pattern used by MaintenanceModeService.
 */
@Injectable({
  providedIn: 'root',
})
export class UsageRecordsService {
  private readonly usageRecordsGQL = inject(GetUsageRecordsGQL);

  fetchUsageRecords(first = 100): Observable<UsageRecordsEntry[]> {
    return this.usageRecordsGQL
      .fetch({ variables: { first }, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapUsageRecordsResult(result.data)),
        catchError(() => of<UsageRecordsEntry[]>([])),
      );
  }
}

/**
 * Maps the GraphQL connection result to a flat list of UsageRecordsEntry rows.
 * Extracted as a pure function so it can be unit-tested without Angular DI.
 */
export function mapUsageRecordsResult(
  data: GetUsageRecordsQuery | null | undefined,
): UsageRecordsEntry[] {
  const edges = data?.runtime?.systemAiAiUsageRecord?.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({
      rtId: node.rtId,
      at: node.at,
      model: node.model,
      inputTokens: node.inputTokens,
      outputTokens: node.outputTokens,
      costCents: node.costCents,
    }));
}
