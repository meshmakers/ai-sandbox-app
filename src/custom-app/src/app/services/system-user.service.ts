import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  GetSystemUserGQL,
  GetSystemUserQuery,
} from '../graphQL/getSystemUser.generated';
import { SystemUser } from '../models/system-user';

/**
 * Maps the GraphQL `GetSystemUser` result to a flat {@link SystemUser} view model.
 *
 * Extracted as a free function so it can be unit-tested in vitest without the
 * Angular injector (see system-user.service.spec.ts) — same approach the
 * MaintenanceModeService logic uses.
 */
export function mapSystemUserQuery(
  data: GetSystemUserQuery | null | undefined,
): SystemUser | null {
  const node = data?.runtime?.user?.edges?.[0]?.node;
  if (!node) {
    return null;
  }
  return {
    rtId: node.rtId,
    name: node.userName ?? '',
    email: node.email ?? '',
  };
}

@Injectable({
  providedIn: 'root',
})
export class SystemUserService {
  private readonly getSystemUserGQL = inject(GetSystemUserGQL);

  /** Fetches a single system user by its runtime id (rtId). */
  getUser(rtId: string): Observable<SystemUser | null> {
    return this.getSystemUserGQL
      .fetch({ variables: { rtId }, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapSystemUserQuery(result.data)),
        catchError(() => of(null)),
      );
  }
}
