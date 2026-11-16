<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppsPermissionsUsers — operations

Accessor: `client.appsPermissionsUsers` · Source: `src/resources/apps-permissions-users.ts` · 2 operations · Request types: namespace `AppsPermissionsUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsPermissionsUsersList

- **Signature**: `appsPermissionsUsersList(request: AppsPermissionsUsers.AppsPermissionsUsersListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /apps.permissions.users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AppsPermissionsUsers.AppsPermissionsUsersListRequest` (4):

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

- **Signature**: `appsPermissionsUsersRequest(request: AppsPermissionsUsers.AppsPermissionsUsersRequestRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /apps.permissions.users.request`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AppsPermissionsUsers.AppsPermissionsUsersRequestRequest` (5):

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

