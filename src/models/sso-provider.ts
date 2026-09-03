import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SsoProvider = {
  label?: string;
  name?: string;
  type?: string;
};

export const ssoProviderSchema: Schema<SsoProvider> = s.object<SsoProvider>({
  label: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
});
