/**
 * Flat view model for a system user, derived from the CK type
 * `System.Identity-2.7.0/User-1` (attributes `userName`, `email`).
 */
export interface SystemUser {
  rtId: string;
  name: string;
  email: string;
}
