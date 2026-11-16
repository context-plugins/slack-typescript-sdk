import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Schema for successful response chat.getPermalink */
export type ChatGetPermalinksuccessschema = {
  channel: string;
  ok: boolean;
  permalink: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const chatGetPermalinksuccessschemaProperties: s.Shape<ChatGetPermalinksuccessschema> = {
  channel: s.string(),
  ok: s.boolean(),
  permalink: s.string(),
};

export const chatGetPermalinksuccessschemaInternalSchema: Schema<ChatGetPermalinksuccessschema> =
  s.object<ChatGetPermalinksuccessschema>(chatGetPermalinksuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const chatGetPermalinksuccessschemaSchema: Schema<ChatGetPermalinksuccessschema> = s.lazySchema(() =>
  s.object<ChatGetPermalinksuccessschema>(
    {
      ...chatGetPermalinksuccessschemaProperties,
      channel: s.string().check(s.pattern("^[CGD][A-Z0-9]{8,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
