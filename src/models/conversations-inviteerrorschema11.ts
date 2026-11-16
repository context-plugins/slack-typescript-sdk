import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  conversationsInviteErrorEnumSchema,
  type ConversationsInviteErrorEnum,
} from "./conversations-invite-error-enum.js";
import {
  errorsisreturnedwhenanerrorassociatesanuserInternalSchema,
  errorsisreturnedwhenanerrorassociatesanuserSchema,
  type Errorsisreturnedwhenanerrorassociatesanuser,
} from "./errorsisreturnedwhenanerrorassociatesanuser.js";

/** Schema for error response from conversations.invite method */
export type ConversationsInviteerrorschema11 = {
  /** Note: PHP callstack is only visible in dev/qa */
  callstack?: string;
  error?: ConversationsInviteErrorEnum;
  errors?: Errorsisreturnedwhenanerrorassociatesanuser[];
  needed?: string;
  ok: boolean;
  provided?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const conversationsInviteerrorschema11Properties: s.Shape<ConversationsInviteerrorschema11> = {
  callstack: s.optional(s.string()),
  error: s.optional(s.lazy(() => conversationsInviteErrorEnumSchema)),
  errors: s.optional(s.array(s.lazy(() => errorsisreturnedwhenanerrorassociatesanuserInternalSchema))),
  needed: s.optional(s.string()),
  ok: s.boolean(),
  provided: s.optional(s.string()),
};

export const conversationsInviteerrorschema11InternalSchema: Schema<ConversationsInviteerrorschema11> =
  s.object<ConversationsInviteerrorschema11>(conversationsInviteerrorschema11Properties, {
    additionalProperties: s.json(),
  });

export const conversationsInviteerrorschema11Schema: Schema<ConversationsInviteerrorschema11> = s.lazySchema(
  () =>
    s.object<ConversationsInviteerrorschema11>(
      {
        ...conversationsInviteerrorschema11Properties,
        errors: s.optional(
          s
            .array(s.lazy(() => errorsisreturnedwhenanerrorassociatesanuserSchema))
            .check(s.minLength(1), s.uniqueItems()),
        ),
      },
      { additionalProperties: s.json() },
    ),
);
