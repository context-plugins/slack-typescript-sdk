<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workflows — operations

Accessor: `client.workflows` · Source: `src/resources/workflows.ts` · 3 operations · Request types: namespace `Workflows`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### workflowsStepCompleted

- **Signature**: `workflowsStepCompleted(request: Workflows.WorkflowsStepCompletedRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /workflows.stepCompleted`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workflows.WorkflowsStepCompletedRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowStepExecuteId` | `query` | `workflow_step_execute_id` | `string` | yes |
| `outputs` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### workflowsStepFailed

- **Signature**: `workflowsStepFailed(request: Workflows.WorkflowsStepFailedRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /workflows.stepFailed`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workflows.WorkflowsStepFailedRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowStepExecuteId` | `query` | `workflow_step_execute_id` | `string` | yes |
| `error` | `query` | — | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### workflowsUpdateStep

- **Signature**: `workflowsUpdateStep(request: Workflows.WorkflowsUpdateStepRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /workflows.updateStep`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Workflows.WorkflowsUpdateStepRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workflowStepEditId` | `query` | `workflow_step_edit_id` | `string` | yes |
| `inputs` | `query` | — | `string` | no |
| `outputs` | `query` | — | `string` | no |
| `stepName` | `query` | `step_name` | `string` | no |
| `stepImageUrl` | `query` | `step_image_url` | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

