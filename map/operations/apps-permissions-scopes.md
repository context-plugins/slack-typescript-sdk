<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppsPermissionsScopes — operations

Accessor: `client.appsPermissionsScopes` · Source: `src/resources/apps-permissions-scopes.ts` · 1 operation · Request types: namespace `AppsPermissionsScopes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### appsPermissionsScopesList

- **Signature**: `appsPermissionsScopesList(request: AppsPermissionsScopes.AppsPermissionsScopesListRequest, options?: RequestOptions): ApiPromise<ApiPermissionsScopesListsuccessschema, ApiError>`
- **Wire**: `GET /apps.permissions.scopes.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiPermissionsScopesListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AppsPermissionsScopes.AppsPermissionsScopesListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ApiPermissionsScopesListsuccessschema` | `apiPermissionsScopesListsuccessschemaSchema` | `src/models/api-permissions-scopes-listsuccessschema.ts` |

