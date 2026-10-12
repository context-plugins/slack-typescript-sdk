import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * dialog_open
   *
   * @remarks
   * Open a dialog with a user
   *
   * @returns Typical success response is quite minimal.
   *
   * @throws {@link Dialog.DialogOpenError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dialogOpen(
    request: Dialog.DialogOpenRequest,
    options?: RequestOptions,
  ): ApiPromise<DialogOpenschema, Dialog.DialogOpenError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/dialog.open"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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
    /** The dialog definition. This must be a JSON-encoded string. */
    dialog: string;
    /** Exchange a trigger to post to the user. */
    triggerId: string;
    /** Authentication token. Requires scope: `none` */
    token: string;
    contentType: ContentType;
  };

  export class DialogOpenError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"dialogOpenerrorschema1", DialogOpenerrorschema1>>;

    static readonly errors: ErrorDecoders<DialogOpenError> = [
      {
        on: "default",
        kind: "dialogOpenerrorschema1",
        decode: { kind: "json", schema: dialogOpenerrorschema1Schema },
      },
    ];
  }
}
