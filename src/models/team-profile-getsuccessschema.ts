import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profileInternalSchema, profileSchema, type Profile } from "./profile.js";

/** Schema for successful response from team.profile.get method */
export type TeamProfileGetsuccessschema = {
  ok: boolean;
  profile: Profile;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamProfileGetsuccessschemaProperties: s.Shape<TeamProfileGetsuccessschema> = {
  ok: s.boolean(),
  profile: profileInternalSchema,
};

export const teamProfileGetsuccessschemaInternalSchema: Schema<TeamProfileGetsuccessschema> =
  s.object<TeamProfileGetsuccessschema>(teamProfileGetsuccessschemaProperties, {
    additionalProperties: s.json(),
  });

export const teamProfileGetsuccessschemaSchema: Schema<TeamProfileGetsuccessschema> = s.lazySchema(() =>
  s.object<TeamProfileGetsuccessschema>(
    {
      ...teamProfileGetsuccessschemaProperties,
      profile: profileSchema,
    },
    { additionalProperties: s.json() },
  ),
);
