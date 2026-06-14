import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GetTenantModeGQL, GetTenantModeQuery } from '../graphQL/getTenantMode.generated';
import { TenantModeEntry } from '../models/tenant-mode-entry';

/**
 * Loads SystemTenantModeConfiguration records for the /tenant-mode page via the Runtime GraphQL API.
 * Mirrors the Apollo pattern used by MaintenanceModeService.
 */
@Injectable({
  providedIn: 'root',
})
export class TenantModeService {
  private readonly tenantModeGQL = inject(GetTenantModeGQL);

  fetchTenantMode(first = 100): Observable<TenantModeEntry[]> {
    return this.tenantModeGQL
      .fetch({ variables: { first }, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapTenantModeResult(result.data)),
        catchError(() => of<TenantModeEntry[]>([])),
      );
  }
}

/**
 * Maps the GraphQL connection result to a flat list of TenantModeEntry rows.
 * Extracted as a pure function so it can be unit-tested without Angular DI.
 */
export function mapTenantModeResult(
  data: GetTenantModeQuery | null | undefined,
): TenantModeEntry[] {
  const edges = data?.runtime?.systemTenantModeConfiguration?.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({
      maintenanceLevel: node.maintenanceLevel,
      environmentMode: node.environmentMode,
    }));
}
