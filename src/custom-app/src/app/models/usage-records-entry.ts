/**
 * DTO for one row of the /usage-records page. Sourced from the CK type System.Ai-3/AiUsageRecord
 * via the GraphQL query in graphQL/getUsageRecords.graphql.
 */
export interface UsageRecordsEntry {
  rtId: string;
  at: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  costCents: number;
}
