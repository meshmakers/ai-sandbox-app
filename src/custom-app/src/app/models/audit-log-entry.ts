/**
 * A single AiAuditEvent record surfaced on the /audit-log list page.
 *
 * Shape is driven by the CK type System.Ai-3/AiAuditEvent — an append-only,
 * tenant-scoped audit record for security- and lifecycle-relevant events
 * (credential registrations, approval decisions, quota crossings, admin actions).
 */
export interface AuditLogEntry {
  /** Runtime id of the audit record. */
  rtId: string;
  /** Event timestamp (ISO 8601). */
  at: string;
  /** Dot-namespaced event identifier, e.g. "credential.refreshed", "quota.exceeded". */
  eventType: string;
  /** Actor that produced the event: an OctoMesh user-rtId, "agent", or "system". */
  actorRef: string;
  /** Optional rtId of the entity the event refers to. Empty for tenant-wide events. */
  targetRef: string | null;
  /** JSON-encoded, EventType-specific structured detail. */
  detail: string | null;
}
