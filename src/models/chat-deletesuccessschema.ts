import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response of chat.delete method */
export type ChatDeletesuccessschema = {
  channel: string;
  ok: boolean;
  ts: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatDeletesuccessschemaProperties: s.Shape<ChatDeletesuccessschema> = {
  channel: s.string(),
  ok: s.boolean(),
  ts: s.string(),
};

export const chatDeletesuccessschemaInternalSchema: Schema<ChatDeletesuccessschema> =
  s.object<ChatDeletesuccessschema>(chatDeletesuccessschemaProperties, { additionalProperties: s.json() });

export const chatDeletesuccessschemaSchema: Schema<ChatDeletesuccessschema> = s.lazySchema(() =>
  s.object<ChatDeletesuccessschema>(
    {
      ...chatDeletesuccessschemaProperties,
      channel: s.string().check(s.pattern("^[CGD][A-Z0-9]{8,}$")),
      ts: s.string().check(s.pattern("^\\d{10}\\.\\d{6}$")),
    },
    { additionalProperties: s.json() },
  ),
);
