<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 12 operations · Request types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usersConversations

- **Signature**: `usersConversations(request: Users.UsersConversationsRequest, options?: RequestOptions): ApiPromise<UsersConversationssuccessschema, ApiError>`
- **Wire**: `GET /users.conversations`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersConversationssuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersConversationsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `user` | `query` | — | `string` | no |
| `types` | `query` | — | `string` | no |
| `excludeArchived` | `query` | `exclude_archived` | `boolean` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersConversationssuccessschema` | `usersConversationssuccessschemaSchema` | `src/models/users-conversationssuccessschema.ts` |

### usersDeletePhoto

- **Signature**: `usersDeletePhoto(request: Users.UsersDeletePhotoRequest, options?: RequestOptions): ApiPromise<UsersDeletePhotoschema, ApiError>`
- **Wire**: `POST /users.deletePhoto`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersDeletePhotoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersDeletePhotoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersDeletePhotoschema` | `usersDeletePhotoschemaSchema` | `src/models/users-delete-photoschema.ts` |

### usersGetPresence

- **Signature**: `usersGetPresence(request: Users.UsersGetPresenceRequest, options?: RequestOptions): ApiPromise<ApImethodusersGetPresence, ApiError>`
- **Wire**: `GET /users.getPresence`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApImethodusersGetPresence`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersGetPresenceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ApImethodusersGetPresence` | `apImethodusersGetPresenceSchema` | `src/models/ap-imethodusers-get-presence.ts` |

### usersIdentity

- **Signature**: `usersIdentity(request: Users.UsersIdentityRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /users.identity`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersIdentityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |

### usersInfo

- **Signature**: `usersInfo(request: Users.UsersInfoRequest, options?: RequestOptions): ApiPromise<UsersInfosuccessschema, ApiError>`
- **Wire**: `GET /users.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersInfosuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersInfoRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `includeLocale` | `query` | `include_locale` | `boolean` | no |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersInfosuccessschema` | `usersInfosuccessschemaSchema` | `src/models/users-infosuccessschema.ts` |

### usersList

- **Signature**: `usersList(request: Users.UsersListRequest, options?: RequestOptions): ApiPromise<UsersListschema, ApiError>`
- **Wire**: `GET /users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `includeLocale` | `query` | `include_locale` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersListschema` | `usersListschemaSchema` | `src/models/users-listschema.ts` |

### usersLookupByEmail

- **Signature**: `usersLookupByEmail(request: Users.UsersLookupByEmailRequest, options?: RequestOptions): ApiPromise<UsersLookupByEmailsuccessschema, ApiError>`
- **Wire**: `GET /users.lookupByEmail`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersLookupByEmailsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersLookupByEmailRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `email` | `query` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersLookupByEmailsuccessschema` | `usersLookupByEmailsuccessschemaSchema` | `src/models/users-lookup-by-emailsuccessschema.ts` |

### usersProfileGet

- **Signature**: `usersProfileGet(request: Users.UsersProfileGetRequest, options?: RequestOptions): ApiPromise<UsersProfileGetschema, ApiError>`
- **Wire**: `GET /users.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersProfileGetschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersProfileGetRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `includeLabels` | `query` | `include_labels` | `boolean` | no |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersProfileGetschema` | `usersProfileGetschemaSchema` | `src/models/users-profile-getschema.ts` |

### usersProfileSet

- **Signature**: `usersProfileSet(request: Users.UsersProfileSetRequest, options?: RequestOptions): ApiPromise<UsersProfileSetschema, ApiError>`
- **Wire**: `POST /users.profile.set`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersProfileSetschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersProfileSetRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `name` | `form` | — | `string` | no |
| `profile` | `form` | — | `string` | no |
| `user` | `form` | — | `string` | no |
| `value` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersProfileSetschema` | `usersProfileSetschemaSchema` | `src/models/users-profile-setschema.ts` |

### usersSetActive

- **Signature**: `usersSetActive(request: Users.UsersSetActiveRequest, options?: RequestOptions): ApiPromise<UsersSetActiveschema, ApiError>`
- **Wire**: `POST /users.setActive`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersSetActiveschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersSetActiveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersSetActiveschema` | `usersSetActiveschemaSchema` | `src/models/users-set-activeschema.ts` |

### usersSetPhoto

- **Signature**: `usersSetPhoto(request: Users.UsersSetPhotoRequest, options?: RequestOptions): ApiPromise<UsersSetPhotoschema, ApiError>`
- **Wire**: `POST /users.setPhoto`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersSetPhotoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersSetPhotoRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `cropW` | `form` | `crop_w` | `string` | no |
| `cropX` | `form` | `crop_x` | `string` | no |
| `cropY` | `form` | `crop_y` | `string` | no |
| `image` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersSetPhotoschema` | `usersSetPhotoschemaSchema` | `src/models/users-set-photoschema.ts` |

### usersSetPresence

- **Signature**: `usersSetPresence(request: Users.UsersSetPresenceRequest, options?: RequestOptions): ApiPromise<UsersSetPresenceschema, ApiError>`
- **Wire**: `POST /users.setPresence`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersSetPresenceschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Users.UsersSetPresenceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `presence` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersSetPresenceschema` | `usersSetPresenceschemaSchema` | `src/models/users-set-presenceschema.ts` |

