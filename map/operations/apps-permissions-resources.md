<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppsPermissionsResources — operations

Accessor: `client.appsPermissionsResources` · Source: `src/resources/apps-permissions-resources.ts` · 1 operation · Request and error types: namespace `AppsPermissionsResources`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### appsPermissionsResourcesList

- **Signature**: `appsPermissionsResourcesList(request: AppsPermissionsResources.AppsPermissionsResourcesListRequest, options?: RequestOptions): ApiPromise<AppsPermissionsResourcesListsuccessschema, AppsPermissionsResources.AppsPermissionsResourcesListError>`
- **Wire**: `GET /apps.permissions.resources.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsPermissionsResourcesListsuccessschema`
- **Error**: `AppsPermissionsResources.AppsPermissionsResourcesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"appsPermissionsResourcesListerrorschema1"` [400–599] `AppsPermissionsResourcesListerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppsPermissionsResources.AppsPermissionsResourcesListRequest` (4):

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

