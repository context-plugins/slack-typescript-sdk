import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsInviteErrorEnumSchema,
  type ConversationsInviteErrorEnum,
} from "./conversations-invite-error-enum.js";

export type Errorsisreturnedwhenanerrorassociatesanuser = {
  error: ConversationsInviteErrorEnum;
  ok: boolean;
  user?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorsisreturnedwhenanerrorassociatesanuserProperties: s.Shape<Errorsisreturnedwhenanerrorassociatesanuser> =
  {
    error: conversationsInviteErrorEnumSchema,
    ok: s.boolean(),
    user: s.optional(s.string()),
  };

export const errorsisreturnedwhenanerrorassociatesanuserInternalSchema: Schema<Errorsisreturnedwhenanerrorassociatesanuser> =
  s.object<Errorsisreturnedwhenanerrorassociatesanuser>(
    errorsisreturnedwhenanerrorassociatesanuserProperties,
    { additionalProperties: s.json() },
  );

export const errorsisreturnedwhenanerrorassociatesanuserSchema: Schema<Errorsisreturnedwhenanerrorassociatesanuser> =
  s.lazySchema(() =>
    s.object<Errorsisreturnedwhenanerrorassociatesanuser>(
      {
        ...errorsisreturnedwhenanerrorassociatesanuserProperties,
        user: s.optional(s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$"))),
      },
      { additionalProperties: s.json() },
    ),
  );
