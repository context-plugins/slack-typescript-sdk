<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apps — operations

Accessor: `client.apps` · Source: `src/resources/apps.ts` · 8 operations · Request and error types: namespace `Apps`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsEventAuthorizationsList

- **Signature**: `appsEventAuthorizationsList(request: Apps.AppsEventAuthorizationsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Apps.AppsEventAuthorizationsListError>`
- **Wire**: `GET /apps.event.authorizations.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsEventAuthorizationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### appsPermissionsInfo

- **Signature**: `appsPermissionsInfo(request: Apps.AppsPermissionsInfoRequest, options?: RequestOptions): ApiPromise<AppsPermissionsInfoschema, Apps.AppsPermissionsInfoError>`
- **Wire**: `GET /apps.permissions.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsPermissionsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsInfoerrorschema1"` [default — any status no arm above covers] `AppsPermissionsInfoerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AppsPermissionsInfoerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Apps.AppsPermissionsInfoRequest` (2):

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

- **Signature**: `appsPermissionsRequest(request: Apps.AppsPermissionsRequestRequest, options?: RequestOptions): ApiPromise<AppsPermissionsRequestschema, Apps.AppsPermissionsRequestError>`
- **Wire**: `GET /apps.permissions.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsRequestschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsPermissionsRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsRequesterrorschema1"` [default — any status no arm above covers] `AppsPermissionsRequesterrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AppsPermissionsRequesterrorschema1`] `rawBody: ArrayBuffer`

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
| `AppsPermissionsRequesterrorschema1` | `appsPermissionsRequesterrorschema1Schema` | `src/models/apps-permissions-requesterrorschema1.ts` |

### appsPermissionsResourcesList

- **Signature**: `appsPermissionsResourcesList(request: Apps.AppsPermissionsResourcesListRequest, options?: RequestOptions): ApiPromise<AppsPermissionsResourcesListsuccessschema, Apps.AppsPermissionsResourcesListError>`
- **Wire**: `GET /apps.permissions.resources.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsResourcesListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsPermissionsResourcesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsResourcesListerrorschema1"` [default — any status no arm above covers] `AppsPermissionsResourcesListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AppsPermissionsResourcesListerrorschema1`] `rawBody: ArrayBuffer`

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
| `AppsPermissionsResourcesListerrorschema1` | `appsPermissionsResourcesListerrorschema1Schema` | `src/models/apps-permissions-resources-listerrorschema1.ts` |

### appsPermissionsScopesList

- **Signature**: `appsPermissionsScopesList(request: Apps.AppsPermissionsScopesListRequest, options?: RequestOptions): ApiPromise<ApiPermissionsScopesListsuccessschema, Apps.AppsPermissionsScopesListError>`
- **Wire**: `GET /apps.permissions.scopes.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiPermissionsScopesListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsPermissionsScopesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsScopesListerrorschema1"` [default — any status no arm above covers] `AppsPermissionsScopesListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AppsPermissionsScopesListerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Apps.AppsPermissionsScopesListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ApiPermissionsScopesListsuccessschema` | `apiPermissionsScopesListsuccessschemaSchema` | `src/models/api-permissions-scopes-listsuccessschema.ts` |
| `AppsPermissionsScopesListerrorschema1` | `appsPermissionsScopesListerrorschema1Schema` | `src/models/apps-permissions-scopes-listerrorschema1.ts` |

### appsPermissionsUsersList

- **Signature**: `appsPermissionsUsersList(request: Apps.AppsPermissionsUsersListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Apps.AppsPermissionsUsersListError>`
- **Wire**: `GET /apps.permissions.users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsPermissionsUsersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### appsPermissionsUsersRequest

- **Signature**: `appsPermissionsUsersRequest(request: Apps.AppsPermissionsUsersRequestRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Apps.AppsPermissionsUsersRequestError>`
- **Wire**: `GET /apps.permissions.users.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsPermissionsUsersRequestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### appsUninstall

- **Signature**: `appsUninstall(request: Apps.AppsUninstallRequest, options?: RequestOptions): ApiPromise<AppsUninstallschema, Apps.AppsUninstallError>`
- **Wire**: `GET /apps.uninstall`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsUninstallschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Apps.AppsUninstallError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsUninstallerrorschema1"` [default — any status no arm above covers] `AppsUninstallerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AppsUninstallerrorschema1`] `rawBody: ArrayBuffer`

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
| `AppsUninstallerrorschema1` | `appsUninstallerrorschema1Schema` | `src/models/apps-uninstallerrorschema1.ts` |

