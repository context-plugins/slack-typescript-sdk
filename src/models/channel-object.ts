import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { purposeSchema, type Purpose } from "./purpose.js";
import { topicSchema, type Topic } from "./topic.js";

export type ChannelObject = {
  acceptedUser?: string;
  created: number;
  creator: string;
  id: string;
  isArchived?: boolean;
  isChannel: boolean;
  isFrozen?: boolean;
  isGeneral?: boolean;
  isMember?: boolean;
  isMoved?: number;
  isMpim: boolean;
  isNonThreadable?: boolean;
  isOrgShared: boolean;
  isPendingExtShared?: boolean;
  isPrivate: boolean;
  isReadOnly?: boolean;
  isShared: boolean;
  isThreadOnly?: boolean;
  lastRead?: string;
  latest?: Record<string, unknown>;
  members: string[];
  name: string;
  nameNormalized: string;
  numMembers?: number;
  pendingShared?: string[];
  previousNames?: string[];
  priority?: number;
  purpose: Purpose;
  topic: Topic;
  unlinked?: number;
  unreadCount?: number;
  unreadCountDisplay?: number;
};

export const channelObjectSchema: Schema<ChannelObject> = s.object<ChannelObject>({
  acceptedUser: s.optional(s.string()),
  created: s.number(),
  creator: s.string(),
  id: s.string(),
  isArchived: s.optional(s.boolean()),
  isChannel: s.boolean(),
  isFrozen: s.optional(s.boolean()),
  isGeneral: s.optional(s.boolean()),
  isMember: s.optional(s.boolean()),
  isMoved: s.optional(s.number()),
  isMpim: s.boolean(),
  isNonThreadable: s.optional(s.boolean()),
  isOrgShared: s.boolean(),
  isPendingExtShared: s.optional(s.boolean()),
  isPrivate: s.boolean(),
  isReadOnly: s.optional(s.boolean()),
  isShared: s.boolean(),
  isThreadOnly: s.optional(s.boolean()),
  lastRead: s.optional(s.string()),
  latest: s.optional(s.record(s.string(), s.unknown())),
  members: s.array(s.string()),
  name: s.string(),
  nameNormalized: s.string(),
  numMembers: s.optional(s.number()),
  pendingShared: s.optional(s.array(s.string())),
  previousNames: s.optional(s.array(s.string())),
  priority: s.optional(s.number()),
  purpose: purposeSchema,
  topic: topicSchema,
  unlinked: s.optional(s.number()),
  unreadCount: s.optional(s.number()),
  unreadCountDisplay: s.optional(s.number()),
  _keysMap: {
    acceptedUser: "accepted_user",
    isArchived: "is_archived",
    isChannel: "is_channel",
    isFrozen: "is_frozen",
    isGeneral: "is_general",
    isMember: "is_member",
    isMoved: "is_moved",
    isMpim: "is_mpim",
    isNonThreadable: "is_non_threadable",
    isOrgShared: "is_org_shared",
    isPendingExtShared: "is_pending_ext_shared",
    isPrivate: "is_private",
    isReadOnly: "is_read_only",
    isShared: "is_shared",
    isThreadOnly: "is_thread_only",
    lastRead: "last_read",
    nameNormalized: "name_normalized",
    numMembers: "num_members",
    pendingShared: "pending_shared",
    previousNames: "previous_names",
    unreadCount: "unread_count",
    unreadCountDisplay: "unread_count_display",
  },
});
