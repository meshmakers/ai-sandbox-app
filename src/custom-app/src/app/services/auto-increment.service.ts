import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  GetAutoIncrementsGQL,
  GetAutoIncrementsQuery,
} from '../graphQL/getAutoIncrements.generated';
import { AutoIncrementRow } from '../models/auto-increment-row';

/**
 * Maps the GraphQL connection result into flat list rows.
 * Extracted as a pure function so it can be unit-tested without Angular DI.
 */
export function mapAutoIncrements(
  data: GetAutoIncrementsQuery | null | undefined
): AutoIncrementRow[] {
  const edges = data?.runtime?.systemAutoIncrement?.edges;
  if (!edges) {
    return [];
  }

  return edges
    .map((edge) => edge?.node)
    .filter((node): node is NonNullable<typeof node> => node != null)
    .map((node) => ({
      rtId: node.rtId,
      name: node.rtWellKnownName ?? '',
      currentValue: node.currentValue,
    }));
}

@Injectable({
  providedIn: 'root',
})
export class AutoIncrementService {
  private readonly getAutoIncrementsGQL = inject(GetAutoIncrementsGQL);

  getAutoIncrements(): Observable<AutoIncrementRow[]> {
    return this.getAutoIncrementsGQL
      .fetch({ variables: {}, fetchPolicy: 'network-only' })
      .pipe(
        map((result) => mapAutoIncrements(result.data)),
        catchError(() => of([]))
      );
  }
}
