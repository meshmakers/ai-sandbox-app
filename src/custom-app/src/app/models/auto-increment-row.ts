/**
 * A single row in the AutoIncrement list view.
 *
 * `name` is the entity's `rtWellKnownName` — the System/AutoIncrement CK type
 * has no dedicated `name` attribute, so the well-known name is its display name.
 */
export interface AutoIncrementRow {
  rtId: string;
  name: string;
  currentValue: number;
}
