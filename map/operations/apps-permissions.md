<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppsPermissions — operations

Accessor: `client.appsPermissions` · Source: `src/resources/apps-permissions.ts` · 2 operations · Request types: namespace `AppsPermissions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsPermissionsInfo

- **Signature**: `appsPermissionsInfo(request: AppsPermissions.AppsPermissionsInfoRequest, options?: RequestOptions): ApiPromise<AppsPermissionsInfoschema, ApiError>`
- **Wire**: `GET /apps.permissions.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AppsPermissions.AppsPermissionsInfoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppsPermissionsInfoschema` | `appsPermissionsInfoschemaSchema` | `src/models/apps-permissions-infoschema.ts` |

### appsPermissionsRequest

- **Signature**: `appsPermissionsRequest(request: AppsPermissions.AppsPermissionsRequestRequest, options?: RequestOptions): ApiPromise<AppsPermissionsRequestschema, ApiError>`
- **Wire**: `GET /apps.permissions.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsRequestschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AppsPermissions.AppsPermissionsRequestRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `scopes` | `query` | — | `string` | yes |
| `triggerId` | `query` | `trigger_id` | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppsPermissionsRequestschema` | `appsPermissionsRequestschemaSchema` | `src/models/apps-permissions-requestschema.ts` |

