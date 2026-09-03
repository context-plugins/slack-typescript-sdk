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

export class AdminTeamsSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adminTeamsSettingsInfo(
    request: AdminTeamsSettings.AdminTeamsSettingsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/admin.teams.settings.info"),
        auth: this.#auth.slackAuth,
        query: [{ name: "team_id", value: request.teamId, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeamsSettings.AdminTeamsSettingsInfoError,
      },
      options,
    );
  }

  adminTeamsSettingsSetDefaultChannels(
    request: AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setDefaultChannels"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "channel_ids", value: request.channelIds, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError,
      },
      options,
    );
  }

  adminTeamsSettingsSetDescription(
    request: AdminTeamsSettings.AdminTeamsSettingsSetDescriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setDescription"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "description", value: request.description, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError,
      },
      options,
    );
  }

  adminTeamsSettingsSetDiscoverability(
    request: AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setDiscoverability"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "discoverability", value: request.discoverability, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError,
      },
      options,
    );
  }

  adminTeamsSettingsSetIcon(
    request: AdminTeamsSettings.AdminTeamsSettingsSetIconRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetIconError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setIcon"),
        auth: this.#auth.slackAuth,
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "token", value: request.token, schema: s.string() },
            { name: "image_url", value: request.imageUrl, schema: s.string() },
            { name: "team_id", value: request.teamId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeamsSettings.AdminTeamsSettingsSetIconError,
      },
      options,
    );
  }

  adminTeamsSettingsSetName(
    request: AdminTeamsSettings.AdminTeamsSettingsSetNameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetNameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/admin.teams.settings.setName"),
        auth: this.#auth.slackAuth,
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "team_id", value: request.teamId, schema: s.string() },
            { name: "name", value: request.name, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeamsSettings.AdminTeamsSettingsSetNameError,
      },
      options,
    );
  }
}

export namespace AdminTeamsSettings {
  export type AdminTeamsSettingsInfoRequest = {
    teamId: string;
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsSettingsInfoError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsInfoError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDefaultChannelsRequest = {
    contentType: ContentType;
    token: string;
    teamId: string;
    channelIds: string;
  };

  export class AdminTeamsSettingsSetDefaultChannelsError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDefaultChannelsError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDescriptionRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    description: string;
  };

  export class AdminTeamsSettingsSetDescriptionError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDescriptionError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDiscoverabilityRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    discoverability: string;
  };

  export class AdminTeamsSettingsSetDiscoverabilityError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDiscoverabilityError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetIconRequest = {
    contentType: ContentType;
    token: string;
    imageUrl: string;
    teamId: string;
  };

  export class AdminTeamsSettingsSetIconError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetIconError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetNameRequest = {
    token: string;
    contentType: ContentType;
    teamId: string;
    name: string;
  };

  export class AdminTeamsSettingsSetNameError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetNameError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
