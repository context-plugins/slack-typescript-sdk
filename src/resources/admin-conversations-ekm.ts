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

export class AdminConversationsEkm {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminConversationsEkmListOriginalConnectedChannelInfo(
    request: AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<
    Defaultsuccesstemplate,
    AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.conversations.ekm.listOriginalConnectedChannelInfo"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel_ids", value: request.channelIds, schema: s.optional(s.string()) },
          { name: "team_ids", value: request.teamIds, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError,
      },
      options,
    );
  }
}

export namespace AdminConversationsEkm {
  export type AdminConversationsEkmListOriginalConnectedChannelInfoRequest = {
    token: string;
    channelIds?: string;
    teamIds?: string;
    limit?: number;
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminConversationsEkmListOriginalConnectedChannelInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminConversationsEkmListOriginalConnectedChannelInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
