<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsergroupsUsers — operations

Accessor: `client.usergroupsUsers` · Source: `src/resources/usergroups-users.ts` · 2 operations · Request and error types: namespace `UsergroupsUsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usergroupsUsersList

- **Signature**: `usergroupsUsersList(request: UsergroupsUsers.UsergroupsUsersListRequest, options?: RequestOptions): ApiPromise<UsergroupsUsersListschema, UsergroupsUsers.UsergroupsUsersListError>`
- **Wire**: `GET /usergroups.users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsergroupsUsersListschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `UsergroupsUsers.UsergroupsUsersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usergroupsUsersListerrorschema1"` [default — any status no arm above covers] `UsergroupsUsersListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsergroupsUsersListerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `UsergroupsUsers.UsergroupsUsersListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `usergroup` | `query` | — | `string` | yes |
| `includeDisabled` | `query` | `include_disabled` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsUsersListschema` | `usergroupsUsersListschemaSchema` | `src/models/usergroups-users-listschema.ts` |
| `UsergroupsUsersListerrorschema1` | `usergroupsUsersListerrorschema1Schema` | `src/models/usergroups-users-listerrorschema1.ts` |

### usergroupsUsersUpdate

- **Signature**: `usergroupsUsersUpdate(request: UsergroupsUsers.UsergroupsUsersUpdateRequest, options?: RequestOptions): ApiPromise<UsergroupsUsersUpdateschema, UsergroupsUsers.UsergroupsUsersUpdateError>`
- **Wire**: `POST /usergroups.users.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsergroupsUsersUpdateschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `UsergroupsUsers.UsergroupsUsersUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usergroupsUsersUpdateerrorschema1"` [default — any status no arm above covers] `UsergroupsUsersUpdateerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsergroupsUsersUpdateerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `UsergroupsUsers.UsergroupsUsersUpdateRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroup` | `form` | — | `string` | yes |
| `users` | `form` | — | `string` | yes |
| `includeCount` | `form` | `include_count` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsUsersUpdateschema` | `usergroupsUsersUpdateschemaSchema` | `src/models/usergroups-users-updateschema.ts` |
| `UsergroupsUsersUpdateerrorschema1` | `usergroupsUsersUpdateerrorschema1Schema` | `src/models/usergroups-users-updateerrorschema1.ts` |

