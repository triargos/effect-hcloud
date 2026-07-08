import { Schema } from "effect";

/** Pagination metadata returned by every list endpoint under `meta.pagination`. */
export const Pagination = Schema.Struct({
  page: Schema.Int,
  per_page: Schema.Int,
  previous_page: Schema.NullOr(Schema.Int),
  next_page: Schema.NullOr(Schema.Int),
  last_page: Schema.NullOr(Schema.Int),
  total_entries: Schema.NullOr(Schema.Int),
});
export type Pagination = typeof Pagination.Type;
