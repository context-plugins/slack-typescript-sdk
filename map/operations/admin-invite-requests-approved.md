<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminInviteRequestsApproved — operations

Accessor: `client.adminInviteRequestsApproved` · Source: `src/resources/admin-invite-requests-approved.ts` · 1 operation · Request and error types: namespace `AdminInviteRequestsApproved`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminInviteRequestsApprovedList

- **Signature**: `adminInviteRequestsApprovedList(request: AdminInviteRequestsApproved.AdminInviteRequestsApprovedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError>`
- **Wire**: `GET /admin.inviteRequests.approved.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminInviteRequestsApproved.AdminInviteRequestsApprovedListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `team_id` | `string` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

