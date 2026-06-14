import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAuditLogGQL, GetAuditLogQuery } from '../graphQL/getAuditLog.generated';
import { AuditLogEntry } from '../models/audit-log-entry';

/**
 * Loads AiAuditEvent records (System.Ai-3/AiAuditEvent) for the /audit-log page
 * via the Runtime GraphQL API, mirroring the Apollo pattern used by
 * MaintenanceModeService.
 *
 * Errors are deliberately NOT swallowed here — the caller can distinguish a
 * genuine "no audit events" empty list from a failed fetch and surface a
 * retry message accordingly.
 */
@Injectable({
  providedIn: 'root',
})
export class AuditLogService {
  private readonly getAuditLogGQL = inject(GetAuditLogGQL);

  fetchAuditLog(first = 100): Observable<AuditLogEntry[]> {
    return this.getAuditLogGQL
      .fetch({ variables: { first }, fetchPolicy: 'network-only' })
      .pipe(map((result) => mapAuditLogResult(result.data)));
  }
}

/**
 * Maps the GraphQL connection result to a flat list of AuditLogEntry rows.
 * Extracted as a pure function so it can be unit-tested without Angular DI
 * (the surrounding service relies on inject(), which vitest cannot construct).
 */
export function mapAuditLogResult(
  data: GetAuditLogQuery | null | undefined,
): AuditLogEntry[] {
  const edges = data?.runtime?.systemAiAuditEvent?.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({
      rtId: node.rtId,
      at: node.at,
      eventType: node.eventType,
      actorRef: node.actorRef,
      targetRef: node.targetRef ?? null,
      detail: node.detail ?? null,
    }));
}
