import { Injectable } from '@angular/core';
import { SystemPermission } from '../models/system-permission.model';

/**
 * Exposes the platform's OAuth API scopes ("system permissions"). The catalogue
 * mirrors the tenant's Identity Server scope set; it is held here as a static
 * list because scopes are an Identity Server concern and are not part of the
 * Tenant API GraphQL schema the rest of the app queries.
 */
@Injectable({
  providedIn: 'root',
})
export class SystemPermissionsService {
  private readonly permissions: readonly SystemPermission[] = [
    { name: 'identityAPI.full_access', displayName: 'Read and write access to user management' },
    { name: 'identityAPI.read_only', displayName: 'Read-only access to user management' },
    { name: 'assetSystemAPI.full_access', displayName: 'Read and write access to asset system management' },
    { name: 'assetSystemAPI.read_only', displayName: 'Read-only access to asset system management' },
    { name: 'assetTenantAPI.full_access', displayName: 'Read and write access to asset tenant management' },
    { name: 'assetTenantAPI.read_only', displayName: 'Read-only access to asset tenant management' },
    { name: 'communicationSystemAPI.full_access', displayName: 'Read and write access to communication controller system management' },
    { name: 'communicationTenantAPI.full_access', displayName: 'Read and write access to communication controller tenant management' },
    { name: 'communicationTenantAPI.read_only', displayName: 'Read-only access to communication controller tenant management' },
    { name: 'botAPI.full_access', displayName: 'Read and write access to bot management API' },
    { name: 'botAPI.read_only', displayName: 'Read-only access to bot management API' },
    { name: 'reportingSystemAPI.full_access', displayName: 'Read and write access to reporting system management' },
    { name: 'reportingTenantAPI.full_access', displayName: 'Read and write access to reporting tenant management' },
    { name: 'reportingTenantAPI.read_only', displayName: 'Read-only access to reporting tenant management' },
    { name: 'fdaDataAPI.full_access', displayName: 'Full Access FDA Data API' },
    { name: 'fdaDataAPI.read_only', displayName: 'Readonly Access FDA Data API' },
    { name: 'maco-app.systemAPI.full_access', displayName: 'Maco System API Full Access' },
    { name: 'maco-app.tenantAPI.full_access', displayName: 'Maco Tenant API Full Access' },
    { name: 'maco-app.tenantAPI.read_only', displayName: 'Maco Tenant API Read Only' },
    { name: 'maco-app.developer', displayName: 'Maco Developer Access' },
    { name: 'octo_api', displayName: 'Full access to all Octo platform APIs' },
    { name: 'octo_api.read_only', displayName: 'Read-only access to all Octo platform APIs' },
    { name: 'octo_api.data_model_management', displayName: 'Manage construction kit data models' },
  ];

  /** Scopes ordered alphabetically by name. */
  getPermissions(): SystemPermission[] {
    return [...this.permissions].sort((a, b) => a.name.localeCompare(b.name));
  }
}
