import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
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

  /**
   * admin_conversations_restrictAccess_addGroup
   *
   * @remarks
   * Add an allowlist of IDP groups for accessing a channel
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRestrictAccessAddGroup(
    request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.restrictAccess.addGroup"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * admin_conversations_restrictAccess_listGroups
   *
   * @remarks
   * List all IDP Groups linked to a channel
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRestrictAccessListGroups(
    request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.conversations.restrictAccess.listGroups"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * admin_conversations_restrictAccess_removeGroup
   *
   * @remarks
   * Remove a linked IDP group linked from a private channel
   *
   * @returns Typical success response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminConversationsRestrictAccessRemoveGroup(
    request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.conversations.restrictAccess.removeGroup"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace AdminConversationsRestrictAccess {
  export type AdminConversationsRestrictAccessAddGroupRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    /**
     * The [IDP
     * Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org)
     * ID to be an allowlist for the private channel.
     */
    groupId: string;
    /** The channel to link this group to. */
    channelId: string;
    /**
     * The workspace where the channel exists. This argument is required for channels only tied to
     * one workspace, and optional for channels that are shared across an organization.
     */
    teamId?: string;
  };

  export type AdminConversationsRestrictAccessListGroupsRequest = {
    /** Authentication token. Requires scope: `admin.conversations:read` */
    token: string;
    channelId: string;
    /**
     * The workspace where the channel exists. This argument is required for channels only tied to
     * one workspace, and optional for channels that are shared across an organization.
     */
    teamId?: string;
    contentType: ContentType;
  };

  export type AdminConversationsRestrictAccessRemoveGroupRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.conversations:write` */
    token: string;
    /**
     * The workspace where the channel exists. This argument is required for channels only tied to
     * one workspace, and optional for channels that are shared across an organization.
     */
    teamId: string;
    /**
     * The [IDP
     * Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org)
     * ID to remove from the private channel.
     */
    groupId: string;
    /** The channel to remove the linked group from. */
    channelId: string;
  };
}
