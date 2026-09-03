<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamApi — operations

Accessor: `client.teamApi` · Source: `src/resources/team-api.ts` · 5 operations · Request and error types: namespace `TeamApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### teamAccessLogs

- **Signature**: `teamAccessLogs(request: TeamApi.TeamAccessLogsRequest, options?: RequestOptions): ApiPromise<TeamAccessLogsschema, TeamApi.TeamAccessLogsError>`
- **Wire**: `GET /team.accessLogs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamAccessLogsschema`
- **Error**: `TeamApi.TeamAccessLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamAccessLogserrorschema1"` [400–599] `TeamAccessLogserrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `TeamAccessLogserrorschema1` | `teamAccessLogserrorschema1Schema` | `src/models/team-access-logserrorschema1.ts` |

### teamBillableInfo

- **Signature**: `teamBillableInfo(request: TeamApi.TeamBillableInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, TeamApi.TeamBillableInfoError>`
- **Wire**: `GET /team.billableInfo`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `TeamApi.TeamBillableInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### teamInfo

- **Signature**: `teamInfo(request: TeamApi.TeamInfoRequest, options?: RequestOptions): ApiPromise<TeamInfoschema, TeamApi.TeamInfoError>`
- **Wire**: `GET /team.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamInfoschema`
- **Error**: `TeamApi.TeamInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamInfoerrorschema1"` [400–599] `TeamInfoerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `TeamInfoerrorschema1` | `teamInfoerrorschema1Schema` | `src/models/team-infoerrorschema1.ts` |

### teamIntegrationLogs

- **Signature**: `teamIntegrationLogs(request: TeamApi.TeamIntegrationLogsRequest, options?: RequestOptions): ApiPromise<TeamIntegrationLogsschema, TeamApi.TeamIntegrationLogsError>`
- **Wire**: `GET /team.integrationLogs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamIntegrationLogsschema`
- **Error**: `TeamApi.TeamIntegrationLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamIntegrationLogserrorschema1"` [400–599] `TeamIntegrationLogserrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `TeamIntegrationLogserrorschema1` | `teamIntegrationLogserrorschema1Schema` | `src/models/team-integration-logserrorschema1.ts` |

### teamProfileGet

- **Signature**: `teamProfileGet(request: TeamApi.TeamProfileGetRequest, options?: RequestOptions): ApiPromise<TeamProfileGetsuccessschema, TeamApi.TeamProfileGetError>`
- **Wire**: `GET /team.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamProfileGetsuccessschema`
- **Error**: `TeamApi.TeamProfileGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamProfileGeterrorschema1"` [400–599] `TeamProfileGeterrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `TeamProfileGeterrorschema1` | `teamProfileGeterrorschema1Schema` | `src/models/team-profile-geterrorschema1.ts` |

