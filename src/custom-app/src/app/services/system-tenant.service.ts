import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  GetSystemTenantsGQL,
  GetSystemTenantsQuery,
} from '../graphQL/getSystemTenants.generated';

/** A tenant row as rendered by the SystemTenantList page. */
export interface SystemTenant {
  id: string;
  name: string;
}

/**
 * Maps the raw GetSystemTenants GraphQL result into the flat row shape the
 * grid binds to. Kept as a free function (no `inject()`) so it can be unit
 * tested without bootstrapping Angular DI — same approach as
 * MaintenanceModeService.
 */
export function mapSystemTenants(
  data: GetSystemTenantsQuery | null | undefined,
): SystemTenant[] {
  const edges = data?.runtime?.systemTenant?.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({ id: node.rtId, name: node.name }));
}

@Injectable({ providedIn: 'root' })
export class SystemTenantService {
  private readonly getSystemTenantsGQL = inject(GetSystemTenantsGQL);

  getTenants(): Observable<SystemTenant[]> {
    return this.getSystemTenantsGQL
      .fetch({ variables: {}, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapSystemTenants(result.data)),
        catchError(() => of([])),
      );
  }
}
