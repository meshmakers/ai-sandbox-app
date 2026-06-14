import type { SystemAiJobKind, SystemAiSessionStatus } from '../graphQL/globalTypes';

/**
 * DTO for one row of the /agent-sessions page. Sourced from the CK type System.Ai-3/AiAgentSession
 * via the GraphQL query in graphQL/getAgentSessions.graphql. Status and jobKind use the generated
 * CK enum unions so accidental invalid values fail at compile time; completedAt and jobKind are
 * required but nullable because mapAgentSessionsResult normalises absent values to null.
 */
export interface AgentSessionsEntry {
  rtId: string;
  status: SystemAiSessionStatus;
  startedAt: string;
  completedAt: string | null;
  jobKind: SystemAiJobKind | null;
  goalSummary: string;
}
