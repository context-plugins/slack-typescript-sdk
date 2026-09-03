import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  migrationExchange(
    request: Migration.MigrationExchangeRequest,
    options?: RequestOptions,
  ): ApiPromise<MigrationExchangesuccessschema, Migration.MigrationExchangeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/migration.exchange"),
        auth: this.#auth.slackAuth,
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
    token: string;
    users: string;
    teamId?: string;
    toOld?: boolean;
    contentType: ContentType;
  };

  export class MigrationExchangeError extends ResponseError<
    Declared<"migrationExchangeerrorschema1", MigrationExchangeerrorschema1>
  > {
    static readonly errors: ErrorDecoders<MigrationExchangeError> = [
      {
        on: [400, 599],
        kind: "migrationExchangeerrorschema1",
        decode: { kind: "json", schema: migrationExchangeerrorschema1Schema },
      },
    ];
  }
}
