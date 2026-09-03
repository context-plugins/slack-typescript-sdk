import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class AdminConversationsRestrictAccess {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminConversationsRestrictAccessAddGroup(
    request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Defaultsuccesstemplate,
    AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.restrictAccess.addGroup"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "group_id", value: request.groupId, schema: s.string() },
            { name: "channel_id", value: request.channelId, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError,
      },
      options,
    );
  }

  adminConversationsRestrictAccessListGroups(
    request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Defaultsuccesstemplate,
    AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.restrictAccess.listGroups"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel_id", value: request.channelId, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError,
      },
      options,
    );
  }

  adminConversationsRestrictAccessRemoveGroup(
    request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Defaultsuccesstemplate,
    AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.conversations.restrictAccess.removeGroup"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "group_id", value: request.groupId, schema: s.string() },
            { name: "channel_id", value: request.channelId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError,
      },
      options,
    );
  }
}

export namespace AdminConversationsRestrictAccess {
  export type AdminConversationsRestrictAccessAddGroupRequest = {
    contentType: ContentType;
    token: string;
    groupId: string;
    channelId: string;
    teamId?: string;
  };

  export class AdminConversationsRestrictAccessAddGroupError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessAddGroupError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessListGroupsRequest = {
    token: string;
    channelId: string;
    teamId?: string;
    contentType: ContentType;
  };

  export class AdminConversationsRestrictAccessListGroupsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessListGroupsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminConversationsRestrictAccessRemoveGroupRequest = {
    contentType: ContentType;
    token: string;
    teamId: string;
    groupId: string;
    channelId: string;
  };

  export class AdminConversationsRestrictAccessRemoveGroupError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsRestrictAccessRemoveGroupError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
