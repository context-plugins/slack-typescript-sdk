<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppsPermissions — operations

Accessor: `client.appsPermissions` · Source: `src/resources/apps-permissions.ts` · 2 operations · Request and error types: namespace `AppsPermissions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### appsPermissionsInfo

- **Signature**: `appsPermissionsInfo(request: AppsPermissions.AppsPermissionsInfoRequest, options?: RequestOptions): ApiPromise<AppsPermissionsInfoschema, AppsPermissions.AppsPermissionsInfoError>`
- **Wire**: `GET /apps.permissions.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsInfoschema`
- **Error**: `AppsPermissions.AppsPermissionsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsInfoerrorschema1"` [400–599] `AppsPermissionsInfoerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppsPermissions.AppsPermissionsInfoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppsPermissionsInfoschema` | `appsPermissionsInfoschemaSchema` | `src/models/apps-permissions-infoschema.ts` |
| `AppsPermissionsInfoerrorschema1` | `appsPermissionsInfoerrorschema1Schema` | `src/models/apps-permissions-infoerrorschema1.ts` |

### appsPermissionsRequest

- **Signature**: `appsPermissionsRequest(request: AppsPermissions.AppsPermissionsRequestRequest, options?: RequestOptions): ApiPromise<AppsPermissionsRequestschema, AppsPermissions.AppsPermissionsRequestError>`
- **Wire**: `GET /apps.permissions.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsRequestschema`
- **Error**: `AppsPermissions.AppsPermissionsRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsRequesterrorschema1"` [400–599] `AppsPermissionsRequesterrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `AppsPermissionsRequesterrorschema1` | `appsPermissionsRequesterrorschema1Schema` | `src/models/apps-permissions-requesterrorschema1.ts` |

