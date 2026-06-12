/**
 * DTO for one row of the /tenant-mode page. Sourced from the CK type SystemTenantModeConfiguration
 * via the GraphQL query in graphQL/getTenantMode.graphql.
 */
export interface TenantModeEntry {
  maintenanceLevel: string;
  environmentMode: string;
}
