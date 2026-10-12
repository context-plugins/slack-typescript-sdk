import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { defaulterrortemplate1Schema, type Defaulterrortemplate1 } from "../models/defaulterrortemplate1.js";
import {
  defaultsuccesstemplateSchema,
  type Defaultsuccesstemplate,
} from "../models/defaultsuccesstemplate.js";
import type { Servers } from "../servers.js";

export class AdminUsergroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_usergroups_addChannels
   *
   * @remarks
   * Add one or more default channels to an IDP group.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsergroups.AdminUsergroupsAddChannelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsAddChannels(
    request: AdminUsergroups.AdminUsergroupsAddChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.usergroups.addChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsergroups.AdminUsergroupsAddChannelsError,
      },
      options,
    );
  }

  /**
   * admin_usergroups_addTeams
   *
   * @remarks
   * Associate one or more default workspaces with an organization-wide IDP group.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsergroups.AdminUsergroupsAddTeamsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsAddTeams(
    request: AdminUsergroups.AdminUsergroupsAddTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.usergroups.addTeams"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
            { name: "team_ids", value: request.teamIds, schema: s.string() },
            { name: "auto_provision", value: request.autoProvision, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsergroups.AdminUsergroupsAddTeamsError,
      },
      options,
    );
  }

  /**
   * admin_usergroups_listChannels
   *
   * @remarks
   * List the channels linked to an org-level IDP group (user group).
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsergroups.AdminUsergroupsListChannelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsListChannels(
    request: AdminUsergroups.AdminUsergroupsListChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsListChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.usergroups.listChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "include_num_members", value: request.includeNumMembers, schema: s.optional(s.boolean()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsergroups.AdminUsergroupsListChannelsError,
      },
      options,
    );
  }

  /**
   * admin_usergroups_removeChannels
   *
   * @remarks
   * Remove one or more default channels from an org-level IDP group (user group).
   *
   * @returns Typical success response
   *
   * @throws {@link AdminUsergroups.AdminUsergroupsRemoveChannelsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminUsergroupsRemoveChannels(
    request: AdminUsergroups.AdminUsergroupsRemoveChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsRemoveChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.usergroups.removeChannels"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "usergroup_id", value: request.usergroupId, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminUsergroups.AdminUsergroupsRemoveChannelsError,
      },
      options,
    );
  }
}

export namespace AdminUsergroups {
  export type AdminUsergroupsAddChannelsRequest = {
    /** Authentication token. Requires scope: `admin.usergroups:write` */
    token: string;
    contentType: ContentType;
    /** ID of the IDP group to add default channels for. */
    usergroupId: string;
    /** Comma separated string of channel IDs. */
    channelIds: string;
    /** The workspace to add default channels in. */
    teamId?: string;
  };

  export class AdminUsergroupsAddChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsAddChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsAddTeamsRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** An encoded usergroup (IDP Group) ID. */
    usergroupId: string;
    /**
     * A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the
     * organization associated with the token.
     */
    teamIds: string;
    /**
     * When `true`, this method automatically creates new workspace accounts for the IDP group
     * members.
     */
    autoProvision?: boolean;
  };

  export class AdminUsergroupsAddTeamsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsAddTeamsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsListChannelsRequest = {
    /** ID of the IDP group to list default channels for. */
    usergroupId: string;
    /** ID of the the workspace. */
    teamId?: string;
    /** Flag to include or exclude the count of members per channel. */
    includeNumMembers?: boolean;
    /** Authentication token. Requires scope: `admin.usergroups:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminUsergroupsListChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsListChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsRemoveChannelsRequest = {
    /** Authentication token. Requires scope: `admin.usergroups:write` */
    token: string;
    contentType: ContentType;
    /** ID of the IDP Group */
    usergroupId: string;
    /** Comma-separated string of channel IDs */
    channelIds: string;
  };

  export class AdminUsergroupsRemoveChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminUsergroupsRemoveChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
