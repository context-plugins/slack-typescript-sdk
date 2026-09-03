import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import {
  dialogOpenerrorschema1Schema,
  type DialogOpenerrorschema1,
} from "../models/dialog-openerrorschema1.js";
import { dialogOpenschemaSchema, type DialogOpenschema } from "../models/dialog-openschema.js";
import type { Servers } from "../servers.js";

export class Dialog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  dialogOpen(
    request: Dialog.DialogOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<DialogOpenschema, Dialog.DialogOpenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/dialog.open"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "dialog", value: request.dialog, schema: s.string() },
          { name: "trigger_id", value: request.triggerId, schema: s.string() },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dialogOpenschemaSchema },
        errorFactory: Dialog.DialogOpenError,
      },
      options,
    );
  }
}

export namespace Dialog {
  export type DialogOpenRequest = {
    dialog: string;
    triggerId: string;
    token: string;
    contentType: ContentType;
  };

  export class DialogOpenError extends ResponseError<
    Declared<"dialogOpenerrorschema1", DialogOpenerrorschema1>
  > {
    static readonly errors: ErrorDecoders<DialogOpenError> = [
      {
        on: [400, 599],
        kind: "dialogOpenerrorschema1",
        decode: { kind: "json", schema: dialogOpenerrorschema1Schema },
      },
    ];
  }
}
