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

export class AdminUsergroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminUsergroupsAddChannels(
    request: AdminUsergroups.AdminUsergroupsAddChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.usergroups.addChannels"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  adminUsergroupsAddTeams(
    request: AdminUsergroups.AdminUsergroupsAddTeamsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddTeamsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.usergroups.addTeams"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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

  adminUsergroupsListChannels(
    request: AdminUsergroups.AdminUsergroupsListChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsListChannelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.usergroups.listChannels"),
        auth: this.#auth.slackAuth,
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

  adminUsergroupsRemoveChannels(
    request: AdminUsergroups.AdminUsergroupsRemoveChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsRemoveChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.usergroups.removeChannels"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
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
    token: string;
    contentType: ContentType;
    usergroupId: string;
    channelIds: string;
    teamId?: string;
  };

  export class AdminUsergroupsAddChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsAddChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsAddTeamsRequest = {
    token: string;
    contentType: ContentType;
    usergroupId: string;
    teamIds: string;
    autoProvision?: boolean;
  };

  export class AdminUsergroupsAddTeamsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsAddTeamsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsListChannelsRequest = {
    usergroupId: string;
    teamId?: string;
    includeNumMembers?: boolean;
    token: string;
    contentType: ContentType;
  };

  export class AdminUsergroupsListChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsListChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminUsergroupsRemoveChannelsRequest = {
    token: string;
    contentType: ContentType;
    usergroupId: string;
    channelIds: string;
  };

  export class AdminUsergroupsRemoveChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminUsergroupsRemoveChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
