import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentSchema, type Current } from "./current.js";

export type ExternalOrgMigrations = {
  current: Current[];
  dateUpdated: number;
};

export const externalOrgMigrationsSchema: Schema<ExternalOrgMigrations> = s.object<ExternalOrgMigrations>({
  current: s.array(s.lazy(() => currentSchema)),
  dateUpdated: s.number(),
  _keysMap: {
    dateUpdated: "date_updated",
  },
});
