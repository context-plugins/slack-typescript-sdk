import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * workflows_stepCompleted
   *
   * @remarks
   * Indicate that an app's step in a workflow completed execution.
   *
   * @returns Typical success response
   *
   * @throws {@link Workflows.WorkflowsStepCompletedError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  workflowsStepCompleted(
    request: Workflows.WorkflowsStepCompletedRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Workflows.WorkflowsStepCompletedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workflows.stepCompleted"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * workflows_stepFailed
   *
   * @remarks
   * Indicate that an app's step in a workflow failed to execute.
   *
   * @returns Typical success response
   *
   * @throws {@link Workflows.WorkflowsStepFailedError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  workflowsStepFailed(
    request: Workflows.WorkflowsStepFailedRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Workflows.WorkflowsStepFailedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workflows.stepFailed"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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

  /**
   * workflows_updateStep
   *
   * @remarks
   * Update the configuration for a workflow extension step.
   *
   * @returns Typical success response
   *
   * @throws {@link Workflows.WorkflowsUpdateStepError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SlackWebApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  workflowsUpdateStep(
    request: Workflows.WorkflowsUpdateStepRequest,
    options?: RequestOptions,
  ): ApiPromise<Defaultsuccesstemplate, Workflows.WorkflowsUpdateStepError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workflows.updateStep"),
        auth: this.#auth.slackAuth,
        pathParams: [],
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
    /** Context identifier that maps to the correct workflow step execution. */
    workflowStepExecuteId: string;
    /**
     * Key-value object of outputs from your step. Keys of this object reflect the configured `key`
     * properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your
     * `workflow_step` object.
     */
    outputs?: string;
    /** Authentication token. Requires scope: `workflow.steps:execute` */
    token: string;
    contentType: ContentType;
  };

  export class WorkflowsStepCompletedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<WorkflowsStepCompletedError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type WorkflowsStepFailedRequest = {
    /** Context identifier that maps to the correct workflow step execution. */
    workflowStepExecuteId: string;
    /**
     * A JSON-based object with a `message` property that should contain a human readable error
     * message.
     */
    error: string;
    /** Authentication token. Requires scope: `workflow.steps:execute` */
    token: string;
    contentType: ContentType;
  };

  export class WorkflowsStepFailedError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<WorkflowsStepFailedError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }

  export type WorkflowsUpdateStepRequest = {
    /**
     * A context identifier provided with `view_submission` payloads used to call back to
     * `workflows.updateStep`.
     */
    workflowStepEditId: string;
    /**
     * A JSON key-value map of inputs required from a user during configuration. This is the data
     * your app expects to receive when the workflow step starts. **Please note**: the embedded
     * variable format is set and replaced by the workflow system. You cannot create custom
     * variables that will be replaced at runtime. [Read more about variables in workflow steps
     * here](/workflows/steps#variables).
     */
    inputs?: string;
    /**
     * An JSON array of output objects used during step execution. This is the data your app agrees
     * to provide when your workflow step was executed.
     */
    outputs?: string;
    /**
     * An optional field that can be used to override the step name that is shown in the Workflow
     * Builder.
     */
    stepName?: string;
    /**
     * An optional field that can be used to override app image that is shown in the Workflow
     * Builder.
     */
    stepImageUrl?: string;
    /** Authentication token. Requires scope: `workflow.steps:execute` */
    token: string;
    contentType: ContentType;
  };

  export class WorkflowsUpdateStepError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"defaulterrortemplate1", Defaulterrortemplate1>>;

    static readonly errors: ErrorDecoders<WorkflowsUpdateStepError> = [
      {
        on: "default",
        kind: "defaulterrortemplate1",
        decode: { kind: "json", schema: defaulterrortemplate1Schema },
      },
    ];
  }
}
