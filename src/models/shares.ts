import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Shares = {
  private?: Record<string, unknown>;
  public?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sharesSchema: Schema<Shares> = s.object<Shares>(
  {
    private: s.optional(s.record(s.string(), s.unknown())),
    public: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
