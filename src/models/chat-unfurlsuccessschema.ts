import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response from chat.unfurl method */
export type ChatUnfurlsuccessschema = {
  ok: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chatUnfurlsuccessschemaSchema: Schema<ChatUnfurlsuccessschema> =
  s.object<ChatUnfurlsuccessschema>(
    {
      ok: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
