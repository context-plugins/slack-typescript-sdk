import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionsListErrorEnumSchema, type ReactionsListErrorEnum } from "./reactions-list-error-enum.js";

/** Schema for error response from reactions.list method */
export type ReactionsListerrorschema1Error = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error: ReactionsListErrorEnum;
  ok: boolean;
};

export const reactionsListerrorschema1ErrorSchema: Schema<ReactionsListerrorschema1Error> =
  s.object<ReactionsListerrorschema1Error>({
    callstack: s.optional(s.string()),
    error: reactionsListErrorEnumSchema,
    ok: s.boolean(),
  });
