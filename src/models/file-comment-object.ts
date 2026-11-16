import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reactionobjectInternalSchema, reactionobjectSchema, type Reactionobject } from "./reactionobject.js";

export type FileCommentObject = {
  comment: string;
  created: number;
  id: string;
  isIntro: boolean;
  isStarred?: boolean;
  numStars?: number;
  pinnedInfo?: Record<string, unknown>;
  pinnedTo?: string[];
  reactions?: Reactionobject[];
  timestamp: number;
  user: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fileCommentObjectProperties: s.Shape<FileCommentObject> = {
  comment: s.string(),
  created: s.int(),
  id: s.string(),
  isIntro: s.boolean(),
  isStarred: s.optional(s.boolean()),
  numStars: s.optional(s.int()),
  pinnedInfo: s.optional(s.record(s.string(), s.unknown())),
  pinnedTo: s.optional(s.array(s.string())),
  reactions: s.optional(s.array(s.lazy(() => reactionobjectInternalSchema))),
  timestamp: s.int(),
  user: s.string(),
  _keysMap: {
    isIntro: "is_intro",
    isStarred: "is_starred",
    numStars: "num_stars",
    pinnedInfo: "pinned_info",
    pinnedTo: "pinned_to",
  },
};

export const fileCommentObjectInternalSchema: Schema<FileCommentObject> = s.object<FileCommentObject>(
  fileCommentObjectProperties,
  { additionalProperties: s.json() },
);

export const fileCommentObjectSchema: Schema<FileCommentObject> = s.lazySchema(() =>
  s.object<FileCommentObject>(
    {
      ...fileCommentObjectProperties,
      id: s.string().check(s.pattern("^Fc[A-Z0-9]{8,}$")),
      pinnedTo: s.optional(s.array(s.string().check(s.pattern("^[CGD][A-Z0-9]{8,}$")))),
      reactions: s.optional(s.array(s.lazy(() => reactionobjectSchema))),
      user: s.string().check(s.pattern("^[UW][A-Z0-9]{2,}$")),
    },
    { additionalProperties: s.json() },
  ),
);
