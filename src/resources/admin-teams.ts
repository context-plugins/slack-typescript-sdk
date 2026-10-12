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

export class AdminTeams {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * admin_teams_create
   *
   * @remarks
   * Create an Enterprise team.
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeams.AdminTeamsCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsCreate(
    request: AdminTeams.AdminTeamsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeams.AdminTeamsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/admin.teams.create"),
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
            { name: "team_domain", value: request.teamDomain, schema: s.string() },
            { name: "team_name", value: request.teamName, schema: s.string() },
            { name: "team_description", value: request.teamDescription, schema: s.optional(s.string()) },
            {
              name: "team_discoverability",
              value: request.teamDiscoverability,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeams.AdminTeamsCreateError,
      },
      options,
    );
  }

  /**
   * admin_teams_list
   *
   * @remarks
   * List all teams on an Enterprise organization
   *
   * @returns Typical success response
   *
   * @throws {@link AdminTeams.AdminTeamsListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adminTeamsList(
    request: AdminTeams.AdminTeamsListRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, AdminTeams.AdminTeamsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/admin.teams.list"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: AdminTeams.AdminTeamsListError,
      },
      options,
    );
  }
}

export namespace AdminTeams {
  export type AdminTeamsCreateRequest = {
    /** Authentication token. Requires scope: `admin.teams:write` */
    token: string;
    contentType: ContentType;
    /** Team domain (for example, slacksoftballteam). */
    teamDomain: string;
    /** Team name (for example, Slack Softball Team). */
    teamName: string;
    /** Description for the team. */
    teamDescription?: string;
    /**
     * Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or
     * `unlisted`.
     */
    teamDiscoverability?: string;
  };

  export class AdminTeamsCreateError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsCreateError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type AdminTeamsListRequest = {
    /** The maximum number of items to return. Must be between 1 - 100 both inclusive. */
    limit?: number;
    /**
     * Set `cursor` to `next_cursor` returned by the previous call to list items in the next page.
     */
    cursor?: string;
    /** Authentication token. Requires scope: `admin.teams:read` */
    token: string;
    contentType: ContentType;
  };

  export class AdminTeamsListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<AdminTeamsListError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
