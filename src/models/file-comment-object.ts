import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reactionobjectSchema, type Reactionobject } from "./reactionobject.js";

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
};

export const fileCommentObjectSchema: Schema<FileCommentObject> = s.object<FileCommentObject>({
  comment: s.string(),
  created: s.int(),
  id: s.string(),
  isIntro: s.boolean(),
  isStarred: s.optional(s.boolean()),
  numStars: s.optional(s.int()),
  pinnedInfo: s.optional(s.record(s.string(), s.unknown())),
  pinnedTo: s.optional(s.array(s.string())),
  reactions: s.optional(s.array(s.lazy(() => reactionobjectSchema))),
  timestamp: s.int(),
  user: s.string(),
  _keysMap: {
    isIntro: "is_intro",
    isStarred: "is_starred",
    numStars: "num_stars",
    pinnedInfo: "pinned_info",
    pinnedTo: "pinned_to",
  },
});
