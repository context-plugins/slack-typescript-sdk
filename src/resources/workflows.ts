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

export class Workflows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  workflowsStepCompleted(
    request: Workflows.WorkflowsStepCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Workflows.WorkflowsStepCompletedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/workflows.stepCompleted"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "workflow_step_execute_id", value: request.workflowStepExecuteId, schema: s.string() },
          { name: "outputs", value: request.outputs, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Workflows.WorkflowsStepCompletedError,
      },
      options,
    );
  }

  workflowsStepFailed(
    request: Workflows.WorkflowsStepFailedRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Workflows.WorkflowsStepFailedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/workflows.stepFailed"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "workflow_step_execute_id", value: request.workflowStepExecuteId, schema: s.string() },
          { name: "error", value: request.error, schema: s.string() },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Workflows.WorkflowsStepFailedError,
      },
      options,
    );
  }

  workflowsUpdateStep(
    request: Workflows.WorkflowsUpdateStepRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Workflows.WorkflowsUpdateStepError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/workflows.updateStep"),
        auth: this.#auth.slackAuth,
        query: [
          { name: "workflow_step_edit_id", value: request.workflowStepEditId, schema: s.string() },
          { name: "inputs", value: request.inputs, schema: s.optional(s.string()) },
          { name: "outputs", value: request.outputs, schema: s.optional(s.string()) },
          { name: "step_name", value: request.stepName, schema: s.optional(s.string()) },
          { name: "step_image_url", value: request.stepImageUrl, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.string() },
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: defaultsuccesstemplateSchema },
        errorFactory: Workflows.WorkflowsUpdateStepError,
      },
      options,
    );
  }
}

export namespace Workflows {
  export type WorkflowsStepCompletedRequest = {
    workflowStepExecuteId: string;
    outputs?: string;
    token: string;
    contentType: ContentType;
  };

  export class WorkflowsStepCompletedError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<WorkflowsStepCompletedError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type WorkflowsStepFailedRequest = {
    workflowStepExecuteId: string;
    error: string;
    token: string;
    contentType: ContentType;
  };

  export class WorkflowsStepFailedError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<WorkflowsStepFailedError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type WorkflowsUpdateStepRequest = {
    workflowStepEditId: string;
    inputs?: string;
    outputs?: string;
    stepName?: string;
    stepImageUrl?: string;
    token: string;
    contentType: ContentType;
  };

  export class WorkflowsUpdateStepError extends ResponseError<
    Declared<"defaulterrortemplate1", Defaulterrortemplate1>
  > {
    static readonly errors: ErrorDecoders<WorkflowsUpdateStepError> = [
      {
        on: [400, 599],
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
