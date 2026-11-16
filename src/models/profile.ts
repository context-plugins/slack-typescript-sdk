import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  objsTeamProfileFieldInternalSchema,
  objsTeamProfileFieldSchema,
  type ObjsTeamProfileField,
} from "./objs-team-profile-field.js";

export type Profile = {
  fields: ObjsTeamProfileField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const profileProperties: s.Shape<Profile> = {
  fields: s.array(s.lazy(() => objsTeamProfileFieldInternalSchema)),
};

export const profileInternalSchema: Schema<Profile> = s.object<Profile>(profileProperties, {
  additionalProperties: s.json(),
});

export const profileSchema: Schema<Profile> = s.lazySchema(() =>
  s.object<Profile>(
    {
      ...profileProperties,
      fields: s.array(s.lazy(() => objsTeamProfileFieldSchema)).check(s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
