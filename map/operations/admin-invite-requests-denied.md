<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminInviteRequestsDenied — operations

Accessor: `client.adminInviteRequestsDenied` · Source: `src/resources/admin-invite-requests-denied.ts` · 1 operation · Request and error types: namespace `AdminInviteRequestsDenied`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminInviteRequestsDeniedList

- **Signature**: `adminInviteRequestsDeniedList(request: AdminInviteRequestsDenied.AdminInviteRequestsDeniedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError>`
- **Wire**: `GET /admin.inviteRequests.denied.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminInviteRequestsDenied.AdminInviteRequestsDeniedListRequest` (5):

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

