import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";
import { blockKitblockSchema, type BlockKitblock } from "./block-kitblock.js";
import { botProfileObjectSchema, type BotProfileObject } from "./bot-profile-object.js";
import { fileCommentObjectSchema, type FileCommentObject } from "./file-comment-object.js";
import { fileobjectSchema, type Fileobject } from "./fileobject.js";
import { icons1Schema, type Icons1 } from "./icons1.js";
import { objsUserProfileShortSchema, type ObjsUserProfileShort } from "./objs-user-profile-short.js";
import { reactionobjectSchema, type Reactionobject } from "./reactionobject.js";

export type Messageobject = {
  attachments?: Attachment[];
  blocks?: BlockKitblock[];
  botId?: Record<string, unknown>;
  botProfile?: BotProfileObject;
  clientMsgId?: string;
  comment?: FileCommentObject;
  displayAsBot?: boolean;
  file?: Fileobject;
  files?: Fileobject[];
  icons?: Icons1;
  inviter?: string;
  isDelayedMessage?: boolean;
  isIntro?: boolean;
  isStarred?: boolean;
  lastRead?: string;
  latestReply?: string;
  name?: string;
  oldName?: string;
  parentUserId?: string;
  permalink?: string;
  pinnedTo?: string[];
  purpose?: string;
  reactions?: Reactionobject[];
  replyCount?: number;
  replyUsers?: string[];
  replyUsersCount?: number;
  sourceTeam?: string;
  subscribed?: boolean;
  subtype?: string;
  team?: string;
  text: string;
  threadTs?: string;
  topic?: string;
  ts: string;
  type: string;
  unreadCount?: number;
  upload?: boolean;
  user?: string;
  userProfile?: ObjsUserProfileShort;
  userTeam?: string;
  username?: string;
};

export const messageobjectSchema: Schema<Messageobject> = s.object<Messageobject>({
  attachments: s.optional(s.array(s.lazy(() => attachmentSchema))),
  blocks: s.optional(s.array(s.lazy(() => blockKitblockSchema))),
  botId: s.optional(s.record(s.string(), s.unknown())),
  botProfile: s.optional(s.lazy(() => botProfileObjectSchema)),
  clientMsgId: s.optional(s.string()),
  comment: s.optional(s.lazy(() => fileCommentObjectSchema)),
  displayAsBot: s.optional(s.boolean()),
  file: s.optional(s.lazy(() => fileobjectSchema)),
  files: s.optional(s.array(s.lazy(() => fileobjectSchema))),
  icons: s.optional(s.lazy(() => icons1Schema)),
  inviter: s.optional(s.string()),
  isDelayedMessage: s.optional(s.boolean()),
  isIntro: s.optional(s.boolean()),
  isStarred: s.optional(s.boolean()),
  lastRead: s.optional(s.string()),
  latestReply: s.optional(s.string()),
  name: s.optional(s.string()),
  oldName: s.optional(s.string()),
  parentUserId: s.optional(s.string()),
  permalink: s.optional(s.string()),
  pinnedTo: s.optional(s.array(s.string())),
  purpose: s.optional(s.string()),
  reactions: s.optional(s.array(s.lazy(() => reactionobjectSchema))),
  replyCount: s.optional(s.number()),
  replyUsers: s.optional(s.array(s.string())),
  replyUsersCount: s.optional(s.number()),
  sourceTeam: s.optional(s.string()),
  subscribed: s.optional(s.boolean()),
  subtype: s.optional(s.string()),
  team: s.optional(s.string()),
  text: s.string(),
  threadTs: s.optional(s.string()),
  topic: s.optional(s.string()),
  ts: s.string(),
  type: s.string(),
  unreadCount: s.optional(s.number()),
  upload: s.optional(s.boolean()),
  user: s.optional(s.string()),
  userProfile: s.optional(s.lazy(() => objsUserProfileShortSchema)),
  userTeam: s.optional(s.string()),
  username: s.optional(s.string()),
  _keysMap: {
    botId: "bot_id",
    botProfile: "bot_profile",
    clientMsgId: "client_msg_id",
    displayAsBot: "display_as_bot",
    isDelayedMessage: "is_delayed_message",
    isIntro: "is_intro",
    isStarred: "is_starred",
    lastRead: "last_read",
    latestReply: "latest_reply",
    oldName: "old_name",
    parentUserId: "parent_user_id",
    pinnedTo: "pinned_to",
    replyCount: "reply_count",
    replyUsers: "reply_users",
    replyUsersCount: "reply_users_count",
    sourceTeam: "source_team",
    threadTs: "thread_ts",
    unreadCount: "unread_count",
    userProfile: "user_profile",
    userTeam: "user_team",
  },
});
