<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminTeamsOwners — operations

Accessor: `client.adminTeamsOwners` · Source: `src/resources/admin-teams-owners.ts` · 1 operation · Request and error types: namespace `AdminTeamsOwners`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminTeamsOwnersList

- **Signature**: `adminTeamsOwnersList(request: AdminTeamsOwners.AdminTeamsOwnersListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsOwners.AdminTeamsOwnersListError>`
- **Wire**: `GET /admin.teams.owners.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsOwners.AdminTeamsOwnersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsOwners.AdminTeamsOwnersListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `teamId` | `query` | `team_id` | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

