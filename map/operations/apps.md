<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.apps` · Source: `src/resources/apps.ts` · 8 operations · Request types: namespace `Apps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsEventAuthorizationsList

- **Signature**: `appsEventAuthorizationsList(request: Apps.AppsEventAuthorizationsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /apps.event.authorizations.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsEventAuthorizationsListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `eventContext` | `query` | `event_context` | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### appsPermissionsInfo

- **Signature**: `appsPermissionsInfo(request: Apps.AppsPermissionsInfoRequest, options?: RequestOptions): ApiPromise<AppsPermissionsInfoschema, ApiError>`
- **Wire**: `GET /apps.permissions.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsPermissionsInfoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppsPermissionsInfoschema` | `appsPermissionsInfoschemaSchema` | `src/models/apps-permissions-infoschema.ts` |

### appsPermissionsRequest

- **Signature**: `appsPermissionsRequest(request: Apps.AppsPermissionsRequestRequest, options?: RequestOptions): ApiPromise<AppsPermissionsRequestschema, ApiError>`
- **Wire**: `GET /apps.permissions.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsRequestschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsPermissionsRequestRequest` (4):

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

### appsPermissionsResourcesList

- **Signature**: `appsPermissionsResourcesList(request: Apps.AppsPermissionsResourcesListRequest, options?: RequestOptions): ApiPromise<AppsPermissionsResourcesListsuccessschema, ApiError>`
- **Wire**: `GET /apps.permissions.resources.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsResourcesListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsPermissionsResourcesListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppsPermissionsResourcesListsuccessschema` | `appsPermissionsResourcesListsuccessschemaSchema` | `src/models/apps-permissions-resources-listsuccessschema.ts` |

### appsPermissionsScopesList

- **Signature**: `appsPermissionsScopesList(request: Apps.AppsPermissionsScopesListRequest, options?: RequestOptions): ApiPromise<ApiPermissionsScopesListsuccessschema, ApiError>`
- **Wire**: `GET /apps.permissions.scopes.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiPermissionsScopesListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsPermissionsScopesListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ApiPermissionsScopesListsuccessschema` | `apiPermissionsScopesListsuccessschemaSchema` | `src/models/api-permissions-scopes-listsuccessschema.ts` |

### appsPermissionsUsersList

- **Signature**: `appsPermissionsUsersList(request: Apps.AppsPermissionsUsersListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /apps.permissions.users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsPermissionsUsersListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### appsPermissionsUsersRequest

- **Signature**: `appsPermissionsUsersRequest(request: Apps.AppsPermissionsUsersRequestRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /apps.permissions.users.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsPermissionsUsersRequestRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `scopes` | `query` | — | `string` | yes |
| `triggerId` | `query` | `trigger_id` | `string` | yes |
| `user` | `query` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### appsUninstall

- **Signature**: `appsUninstall(request: Apps.AppsUninstallRequest, options?: RequestOptions): ApiPromise<AppsUninstallschema, ApiError>`
- **Wire**: `GET /apps.uninstall`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsUninstallschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Apps.AppsUninstallRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `clientId` | `query` | `client_id` | `string` | no |
| `clientSecret` | `query` | `client_secret` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AppsUninstallschema` | `appsUninstallschemaSchema` | `src/models/apps-uninstallschema.ts` |

