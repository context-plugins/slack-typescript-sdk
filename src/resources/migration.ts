import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  migrationExchangeerrorschema1Schema,
  type MigrationExchangeerrorschema1,
} from "../models/migration-exchangeerrorschema1.js";
import {
  migrationExchangesuccessschemaSchema,
  type MigrationExchangesuccessschema,
} from "../models/migration-exchangesuccessschema.js";
import type { Servers } from "../servers.js";

export class Migration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * migration_exchange
   *
   * @remarks
   * For Enterprise Grid workspaces, map local user IDs to global user IDs
   *
   * @returns Typical success response when mappings exist for the specified user IDs
   *
   * @throws {@link Migration.MigrationExchangeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  migrationExchange(
    request: Migration.MigrationExchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<MigrationExchangesuccessschema, Migration.MigrationExchangeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/migration.exchange"),
        auth: this.#auth.slackAuth,
        pathParams: [],
        query: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "users", value: request.users, schema: s.string() },
          { name: "team_id", value: request.teamId, schema: s.optional(s.string()) },
          { name: "to_old", value: request.toOld, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Content-Type", value: request.contentType, schema: contentTypeSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: migrationExchangesuccessschemaSchema },
        errorFactory: Migration.MigrationExchangeError,
      },
      options,
    );
  }
}

export namespace Migration {
  export type MigrationExchangeRequest = {
    /** Authentication token. Requires scope: `tokens.basic` */
    token: string;
    /** A comma-separated list of user ids, up to 400 per request */
    users: string;
    /** Specify team_id starts with `T` in case of Org Token */
    teamId?: string;
    /**
     * Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to
     * `false`.
     */
    toOld?: boolean;
    contentType: ContentType;
  };

  export class MigrationExchangeError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"migrationExchangeerrorschema1", MigrationExchangeerrorschema1>
    >;

    static readonly errors: ErrorDecoders<MigrationExchangeError> = [
      {
        on: "default",
        kind: "migrationExchangeerrorschema1",
        decode: { kind: "json", schema: migrationExchangeerrorschema1Schema },
      },
    ];
  }
}
