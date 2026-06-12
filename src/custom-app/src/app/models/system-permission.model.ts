/**
 * A single OAuth API scope exposed by the OctoMesh platform, surfaced on the
 * System Permissions page. `name` is the scope identifier requested during the
 * OIDC flow; `displayName` is the human-readable label from the Identity Server.
 */
export interface SystemPermission {
  readonly name: string;
  readonly displayName: string;
}
