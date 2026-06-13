import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetAgentSessionsGQL, GetAgentSessionsQuery } from '../graphQL/getAgentSessions.generated';
import { AgentSessionsEntry } from '../models/agent-sessions-entry';

/**
 * Loads System.Ai-3/AiAgentSession records for the /agent-sessions page via the Runtime GraphQL API.
 * Mirrors the Apollo pattern used by MaintenanceModeService.
 */
@Injectable({
  providedIn: 'root',
})
export class AgentSessionsService {
  private readonly agentSessionsGQL = inject(GetAgentSessionsGQL);

  fetchAgentSessions(first = 100): Observable<AgentSessionsEntry[]> {
    return this.agentSessionsGQL
      .fetch({ variables: { first }, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapAgentSessionsResult(result.data)),
        catchError(() => of<AgentSessionsEntry[]>([])),
      );
  }
}

/**
 * Maps the GraphQL connection result to a flat list of AgentSessionsEntry rows.
 * Extracted as a pure function so it can be unit-tested without Angular DI.
 */
export function mapAgentSessionsResult(
  data: GetAgentSessionsQuery | null | undefined,
): AgentSessionsEntry[] {
  const edges = data?.runtime?.GetAgentSessions?.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({
          rtId: node.rtId,
          status: node.status,
          startedAt: node.startedAt,
          completedAt: node.completedAt ?? null,
          jobKind: node.jobKind ?? null,
          goalSummary: node.goalSummary,
    }));
}
