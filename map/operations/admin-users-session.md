<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminUsersSession — operations

Accessor: `client.adminUsersSession` · Source: `src/resources/admin-users-session.ts` · 2 operations · Request and error types: namespace `AdminUsersSession`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminUsersSessionInvalidate

- **Signature**: `adminUsersSessionInvalidate(request: AdminUsersSession.AdminUsersSessionInvalidateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionInvalidateError>`
- **Wire**: `POST /admin.users.session.invalidate`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminUsersSession.AdminUsersSessionInvalidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminUsersSession.AdminUsersSessionInvalidateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `sessionId` | `form` | `session_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersSessionReset

- **Signature**: `adminUsersSessionReset(request: AdminUsersSession.AdminUsersSessionResetRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionResetError>`
- **Wire**: `POST /admin.users.session.reset`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminUsersSession.AdminUsersSessionResetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminUsersSession.AdminUsersSessionResetRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `userId` | `form` | `user_id` | `string` | yes |
| `mobileOnly` | `form` | `mobile_only` | `boolean` | no |
| `webOnly` | `form` | `web_only` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

