<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamApi — operations

Accessor: `client.teamApi` · Source: `src/resources/team-api.ts` · 5 operations · Request types: namespace `TeamApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### teamAccessLogs

- **Signature**: `teamAccessLogs(request: TeamApi.TeamAccessLogsRequest, options?: RequestOptions): ApiPromise<TeamAccessLogsschema, ApiError>`
- **Wire**: `GET /team.accessLogs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamAccessLogsschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamApi.TeamAccessLogsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `before` | `query` | — | `string` | no |
| `count` | `query` | — | `string` | no |
| `page` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `TeamAccessLogsschema` | `teamAccessLogsschemaSchema` | `src/models/team-access-logsschema.ts` |

### teamBillableInfo

- **Signature**: `teamBillableInfo(request: TeamApi.TeamBillableInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /team.billableInfo`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamApi.TeamBillableInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### teamInfo

- **Signature**: `teamInfo(request: TeamApi.TeamInfoRequest, options?: RequestOptions): ApiPromise<TeamInfoschema, ApiError>`
- **Wire**: `GET /team.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamApi.TeamInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `team` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `TeamInfoschema` | `teamInfoschemaSchema` | `src/models/team-infoschema.ts` |

### teamIntegrationLogs

- **Signature**: `teamIntegrationLogs(request: TeamApi.TeamIntegrationLogsRequest, options?: RequestOptions): ApiPromise<TeamIntegrationLogsschema, ApiError>`
- **Wire**: `GET /team.integrationLogs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamIntegrationLogsschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamApi.TeamIntegrationLogsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `appId` | `query` | `app_id` | `string` | no |
| `changeType` | `query` | `change_type` | `string` | no |
| `count` | `query` | — | `string` | no |
| `page` | `query` | — | `string` | no |
| `serviceId` | `query` | `service_id` | `string` | no |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `TeamIntegrationLogsschema` | `teamIntegrationLogsschemaSchema` | `src/models/team-integration-logsschema.ts` |

### teamProfileGet

- **Signature**: `teamProfileGet(request: TeamApi.TeamProfileGetRequest, options?: RequestOptions): ApiPromise<TeamProfileGetsuccessschema, ApiError>`
- **Wire**: `GET /team.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamProfileGetsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamApi.TeamProfileGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `visibility` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `TeamProfileGetsuccessschema` | `teamProfileGetsuccessschemaSchema` | `src/models/team-profile-getsuccessschema.ts` |

