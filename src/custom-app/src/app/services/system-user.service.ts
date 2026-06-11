import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  GetSystemUsersGQL,
  GetSystemUsersQuery,
} from '../graphQL/getSystemUsers.generated';
import { SystemUser } from '../models/system-user';

/**
 * Maps the raw GraphQL result for `System.Identity-2/User` to flat
 * {@link SystemUser} rows. Pure function so it can be unit-tested without
 * Angular's inject() context (vitest).
 */
export function mapSystemUsers(
  data: GetSystemUsersQuery | null | undefined,
): SystemUser[] {
  const edges = data?.runtime?.user?.edges ?? [];
  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({
      rtId: node.rtId,
      userName: node.userName ?? '',
      email: node.email ?? '',
    }));
}

@Injectable({
  providedIn: 'root',
})
export class SystemUserService {
  private readonly getSystemUsersGQL = inject(GetSystemUsersGQL);

  getUsers(): Observable<SystemUser[]> {
    return this.getSystemUsersGQL
      .fetch({ variables: {}, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapSystemUsers(result.data)),
        catchError(() => of([])),
      );
  }
}
