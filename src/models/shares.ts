import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Shares = {
  private?: Record<string, unknown>;
  public?: Record<string, unknown>;
};

export const sharesSchema: Schema<Shares> = s.object<Shares>({
  private: s.optional(s.record(s.string(), s.unknown())),
  public: s.optional(s.record(s.string(), s.unknown())),
});
