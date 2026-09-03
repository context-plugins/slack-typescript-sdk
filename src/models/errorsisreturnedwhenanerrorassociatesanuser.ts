import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsInviteErrorEnumSchema,
  type ConversationsInviteErrorEnum,
} from "./conversations-invite-error-enum.js";

export type Errorsisreturnedwhenanerrorassociatesanuser = {
  error: ConversationsInviteErrorEnum;
  ok: "False";
  user?: string;
};

export const errorsisreturnedwhenanerrorassociatesanuserSchema: Schema<Errorsisreturnedwhenanerrorassociatesanuser> =
  s.object<Errorsisreturnedwhenanerrorassociatesanuser>({
    error: conversationsInviteErrorEnumSchema,
    ok: s.literal("False"),
    user: s.optional(s.string()),
  });
