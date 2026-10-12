<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminAppsApproved — operations

Accessor: `client.adminAppsApproved` · Source: `src/resources/admin-apps-approved.ts` · 1 operation · Request and error types: namespace `AdminAppsApproved`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminAppsApprovedList

- **Signature**: `adminAppsApprovedList(request: AdminAppsApproved.AdminAppsApprovedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminAppsApproved.AdminAppsApprovedListError>`
- **Wire**: `GET /admin.apps.approved.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminAppsApproved.AdminAppsApprovedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminAppsApproved.AdminAppsApprovedListRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `teamId` | `query` | `team_id` | `string` | no |
| `enterpriseId` | `query` | `enterprise_id` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

