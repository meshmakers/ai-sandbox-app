import { Injectable, signal } from '@angular/core';
import { Role } from '../models/role';

/**
 * Sort roles alphabetically by name (case-insensitive), returning a new array.
 * Extracted as a pure function so it can be unit-tested without the DI container.
 */
export function sortRolesByName(roles: readonly Role[]): Role[] {
  return [...roles].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
  );
}

/**
 * Default seed list of system roles.
 *
 * NOTE: This is placeholder data so the page renders something meaningful out
 * of the box. The OctoMesh roles live in the Identity service and are not yet
 * exposed through the tenant GraphQL runtime API consumed by this app. Replace
 * `DEFAULT_ROLES` (and the signal seed below) with a live fetch once a roles
 * query is available — mirror the Apollo pattern in MaintenanceModeService.
 */
const DEFAULT_ROLES: readonly Role[] = [
  { name: 'Administrator' },
  { name: 'Operator' },
  { name: 'Viewer' },
];

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private readonly rolesSignal = signal<Role[]>(sortRolesByName(DEFAULT_ROLES));

  /** System roles, sorted by name. */
  readonly roles = this.rolesSignal.asReadonly();

  /** Replace the current role list (e.g. after a live fetch). */
  setRoles(roles: readonly Role[]): void {
    this.rolesSignal.set(sortRolesByName(roles));
  }
}
