import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { canThreadSchema, type CanThread } from "./can-thread.js";
import { whoCanPostSchema, type WhoCanPost } from "./who-can-post.js";

export type Prefs1 = {
  canThread?: CanThread;
  whoCanPost?: WhoCanPost;
};

export const prefs1Schema: Schema<Prefs1> = s.object<Prefs1>({
  canThread: s.optional(s.lazy(() => canThreadSchema)),
  whoCanPost: s.optional(s.lazy(() => whoCanPostSchema)),
  _keysMap: {
    canThread: "can_thread",
    whoCanPost: "who_can_post",
  },
});
