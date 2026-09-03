import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsInviteErrorEnumSchema,
  type ConversationsInviteErrorEnum,
} from "./conversations-invite-error-enum.js";
import {
  errorsisreturnedwhenanerrorassociatesanuserSchema,
  type Errorsisreturnedwhenanerrorassociatesanuser,
} from "./errorsisreturnedwhenanerrorassociatesanuser.js";

export type ConversationsInviteerrorschema11 = {
  callstack?: string;
  error?: ConversationsInviteErrorEnum;
  errors?: Errorsisreturnedwhenanerrorassociatesanuser[];
  needed?: string;
  ok: "False";
  provided?: string;
};

export const conversationsInviteerrorschema11Schema: Schema<ConversationsInviteerrorschema11> =
  s.object<ConversationsInviteerrorschema11>({
    callstack: s.optional(s.string()),
    error: s.optional(s.lazy(() => conversationsInviteErrorEnumSchema)),
    errors: s.optional(s.array(s.lazy(() => errorsisreturnedwhenanerrorassociatesanuserSchema))),
    needed: s.optional(s.string()),
    ok: s.literal("False"),
    provided: s.optional(s.string()),
  });
