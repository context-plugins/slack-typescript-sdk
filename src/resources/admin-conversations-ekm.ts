import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * admin_conversations_ekm_listOriginalConnectedChannelInfo
   *
   * @remarks
   * List all disconnected channels—i.e., channels that were once connected to other workspaces and
   * then disconnected—and the corresponding original channel IDs for key revocation with EKM.
   *
   * @returns Typical success response
   *
   * @throws {@link
   * AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
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
        urlTemplate: this.#servers.default("/admin.conversations.ekm.listOriginalConnectedChannelInfo"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "channel_ids", value: request.channelIds, schema: s.optional(s.string()) },
          { name: "team_ids", value: request.teamIds, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
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
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    /** A comma-separated list of channels to filter to. */
    channelIds?: string;
    /**
     * A comma-separated list of the workspaces to which the channels you would like returned
     * belong.
     */
    teamIds?: string;
    /** The maximum number of items to return. Must be between 1 - 1000 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    contentType: ContentType;
  };

  export class AdminConversationsEkmListOriginalConnectedChannelInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminConversationsEkmListOriginalConnectedChannelInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
