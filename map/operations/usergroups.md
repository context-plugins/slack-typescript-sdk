<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usergroups — operations

Accessor: `client.usergroups` · Source: `src/resources/usergroups.ts` · 7 operations · Request types: namespace `Usergroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usergroupsCreate

- **Signature**: `usergroupsCreate(request: Usergroups.UsergroupsCreateRequest, options?: RequestOptions): ApiPromise<UsergroupsCreateschema, ApiError>`
- **Wire**: `POST /usergroups.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsergroupsCreateschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsCreateRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `name` | `form` | — | `string` | yes |
| `channels` | `form` | — | `string` | no |
| `description` | `form` | — | `string` | no |
| `handle` | `form` | — | `string` | no |
| `includeCount` | `form` | `include_count` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsCreateschema` | `usergroupsCreateschemaSchema` | `src/models/usergroups-createschema.ts` |

### usergroupsDisable

- **Signature**: `usergroupsDisable(request: Usergroups.UsergroupsDisableRequest, options?: RequestOptions): ApiPromise<UsergroupsDisableschema, ApiError>`
- **Wire**: `POST /usergroups.disable`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsergroupsDisableschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsDisableRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroup` | `form` | — | `string` | yes |
| `includeCount` | `form` | `include_count` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsDisableschema` | `usergroupsDisableschemaSchema` | `src/models/usergroups-disableschema.ts` |

### usergroupsEnable

- **Signature**: `usergroupsEnable(request: Usergroups.UsergroupsEnableRequest, options?: RequestOptions): ApiPromise<UsergroupsEnableschema, ApiError>`
- **Wire**: `POST /usergroups.enable`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsergroupsEnableschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsEnableRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroup` | `form` | — | `string` | yes |
| `includeCount` | `form` | `include_count` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsEnableschema` | `usergroupsEnableschemaSchema` | `src/models/usergroups-enableschema.ts` |

### usergroupsList

- **Signature**: `usergroupsList(request: Usergroups.UsergroupsListRequest, options?: RequestOptions): ApiPromise<UsergroupsListschema, ApiError>`
- **Wire**: `GET /usergroups.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsergroupsListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `includeUsers` | `query` | `include_users` | `boolean` | no |
| `includeCount` | `query` | `include_count` | `boolean` | no |
| `includeDisabled` | `query` | `include_disabled` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsListschema` | `usergroupsListschemaSchema` | `src/models/usergroups-listschema.ts` |

### usergroupsUpdate

- **Signature**: `usergroupsUpdate(request: Usergroups.UsergroupsUpdateRequest, options?: RequestOptions): ApiPromise<UsergroupsUpdateschema, ApiError>`
- **Wire**: `POST /usergroups.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsergroupsUpdateschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsUpdateRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroup` | `form` | — | `string` | yes |
| `handle` | `form` | — | `string` | no |
| `description` | `form` | — | `string` | no |
| `channels` | `form` | — | `string` | no |
| `includeCount` | `form` | `include_count` | `boolean` | no |
| `name` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsergroupsUpdateschema` | `usergroupsUpdateschemaSchema` | `src/models/usergroups-updateschema.ts` |

### usergroupsUsersList

- **Signature**: `usergroupsUsersList(request: Usergroups.UsergroupsUsersListRequest, options?: RequestOptions): ApiPromise<UsergroupsUsersListschema, ApiError>`
- **Wire**: `GET /usergroups.users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsergroupsUsersListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsUsersListRequest` (4):

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

### usergroupsUsersUpdate

- **Signature**: `usergroupsUsersUpdate(request: Usergroups.UsergroupsUsersUpdateRequest, options?: RequestOptions): ApiPromise<UsergroupsUsersUpdateschema, ApiError>`
- **Wire**: `POST /usergroups.users.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsergroupsUsersUpdateschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usergroups.UsergroupsUsersUpdateRequest` (5):

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

