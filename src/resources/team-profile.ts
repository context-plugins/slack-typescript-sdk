import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  teamProfileGeterrorschema1Schema,
  type TeamProfileGeterrorschema1,
} from "../models/team-profile-geterrorschema1.js";
import {
  teamProfileGetsuccessschemaSchema,
  type TeamProfileGetsuccessschema,
} from "../models/team-profile-getsuccessschema.js";
import type { Servers } from "../servers.js";

export class TeamProfile {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * team_profile_get
   *
   * @remarks
   * Retrieve a team's profile.
   *
   * @returns Typical success response
   *
   * @throws {@link TeamProfile.TeamProfileGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamProfileGet(
    request: TeamProfile.TeamProfileGetRequest,
    options?: RequestOptions,
  ): ApiPromise<TeamProfileGetsuccessschema, TeamProfile.TeamProfileGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/team.profile.get"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "visibility", value: request.visibility, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: teamProfileGetsuccessschemaSchema },
        errorFactory: TeamProfile.TeamProfileGetError,
      },
      options,
    );
  }
}

export namespace TeamProfile {
  export type TeamProfileGetRequest = {
    /** Authentication token. Requires scope: `users.profile:read` */
    token: string;
    /** Filter by visibility. */
    visibility?: string;
    contentType: ContentType;
  };

  export class TeamProfileGetError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"teamProfileGeterrorschema1", TeamProfileGeterrorschema1>
    >;

    static readonly errors: ErrorDecoders<TeamProfileGetError> = [
      {
        on: "default",
        kind: "teamProfileGeterrorschema1",
        decode: { kind: "json", schema: teamProfileGeterrorschema1Schema },
      },
    ];
  }
}
