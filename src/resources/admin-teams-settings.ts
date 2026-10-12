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

export class AdminTeamsSettings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_teams_settings_info
   *
   * @remarks
   * Fetch information about settings in a workspace
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeamsSettings.AdminTeamsSettingsInfoError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsInfo(
    request: AdminTeamsSettings.AdminTeamsSettingsInfoRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.teams.settings.info"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * admin_teams_settings_setDefaultChannels
   *
   * @remarks
   * Set the default channels of a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetDefaultChannels(
    request: AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setDefaultChannels"),
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

  /**
   * admin_teams_settings_setDescription
   *
   * @remarks
   * Set the description of a given workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetDescription(
    request: AdminTeamsSettings.AdminTeamsSettingsSetDescriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setDescription"),
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

  /**
   * admin_teams_settings_setDiscoverability
   *
   * @remarks
   * An API method that allows admins to set the discoverability of a given workspace
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetDiscoverability(
    request: AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setDiscoverability"),
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

  /**
   * admin_teams_settings_setIcon
   *
   * @remarks
   * Sets the icon of a workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeamsSettings.AdminTeamsSettingsSetIconError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetIcon(
    request: AdminTeamsSettings.AdminTeamsSettingsSetIconRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetIconError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setIcon"),
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

  /**
   * admin_teams_settings_setName
   *
   * @remarks
   * Set the name of a given workspace.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeamsSettings.AdminTeamsSettingsSetNameError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsSettingsSetName(
    request: AdminTeamsSettings.AdminTeamsSettingsSetNameRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetNameError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.settings.setName"),
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
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsSettingsInfoError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsInfoError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDefaultChannelsRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /** ID for the workspace to set the default channel for. */
    teamId: string;
    /** An array of channel IDs. */
    channelIds: string;
  };

  export class AdminTeamsSettingsSetDefaultChannelsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDefaultChannelsError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDescriptionRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** ID for the workspace to set the description for. */
    teamId: string;
    /** The new description for the workspace. */
    description: string;
  };

  export class AdminTeamsSettingsSetDescriptionError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDescriptionError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetDiscoverabilityRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** The ID of the workspace to set discoverability on. */
    teamId: string;
    /**
     * This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`,
     * or `unlisted`.
     */
    discoverability: string;
  };

  export class AdminTeamsSettingsSetDiscoverabilityError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetDiscoverabilityError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetIconRequest = {
    contentType: ContentType;
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    /** Image URL for the icon */
    imageUrl: string;
    /** ID for the workspace to set the icon for. */
    teamId: string;
  };

  export class AdminTeamsSettingsSetIconError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetIconError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsSettingsSetNameRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** ID for the workspace to set the name for. */
    teamId: string;
    /** The new name of the workspace. */
    name: string;
  };

  export class AdminTeamsSettingsSetNameError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsSettingsSetNameError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
