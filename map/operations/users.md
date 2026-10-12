<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `src/resources/users.ts` · 12 operations · Request and error types: namespace `Users`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usersConversations

- **Signature**: `usersConversations(request: Users.UsersConversationsRequest, options?: RequestOptions): ApiPromise<UsersConversationssuccessschema, Users.UsersConversationsError>`
- **Wire**: `GET /users.conversations`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersConversationssuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersConversationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersConversationserrorschema1"` [default — any status no arm above covers] `UsersConversationserrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersConversationserrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersConversationserrorschema1` | `usersConversationserrorschema1Schema` | `src/models/users-conversationserrorschema1.ts` |

### usersDeletePhoto

- **Signature**: `usersDeletePhoto(request: Users.UsersDeletePhotoRequest, options?: RequestOptions): ApiPromise<UsersDeletePhotoschema, Users.UsersDeletePhotoError>`
- **Wire**: `POST /users.deletePhoto`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersDeletePhotoschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersDeletePhotoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersDeletePhotoerrorschema1"` [default — any status no arm above covers] `UsersDeletePhotoerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersDeletePhotoerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersDeletePhotoRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersDeletePhotoschema` | `usersDeletePhotoschemaSchema` | `src/models/users-delete-photoschema.ts` |
| `UsersDeletePhotoerrorschema1` | `usersDeletePhotoerrorschema1Schema` | `src/models/users-delete-photoerrorschema1.ts` |

### usersGetPresence

- **Signature**: `usersGetPresence(request: Users.UsersGetPresenceRequest, options?: RequestOptions): ApiPromise<ApImethodusersGetPresence, Users.UsersGetPresenceError>`
- **Wire**: `GET /users.getPresence`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApImethodusersGetPresence`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersGetPresenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersCountserrorschema1"` [default — any status no arm above covers] `UsersCountserrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersCountserrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersCountserrorschema1` | `usersCountserrorschema1Schema` | `src/models/users-countserrorschema1.ts` |

### usersIdentity

- **Signature**: `usersIdentity(request: Users.UsersIdentityRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Users.UsersIdentityError>`
- **Wire**: `GET /users.identity`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersIdentityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersIdentityerrorschema1"` [default — any status no arm above covers] `UsersIdentityerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersIdentityerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersIdentityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersIdentityerrorschema1` | `usersIdentityerrorschema1Schema` | `src/models/users-identityerrorschema1.ts` |

### usersInfo

- **Signature**: `usersInfo(request: Users.UsersInfoRequest, options?: RequestOptions): ApiPromise<UsersInfosuccessschema, Users.UsersInfoError>`
- **Wire**: `GET /users.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersInfosuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersInfoerrorschema1"` [default — any status no arm above covers] `UsersInfoerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersInfoerrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersInfoerrorschema1` | `usersInfoerrorschema1Schema` | `src/models/users-infoerrorschema1.ts` |

### usersList

- **Signature**: `usersList(request: Users.UsersListRequest, options?: RequestOptions): ApiPromise<UsersListschema, Users.UsersListError>`
- **Wire**: `GET /users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersListschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersListerrorschema1"` [default — any status no arm above covers] `UsersListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersListerrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersListerrorschema1` | `usersListerrorschema1Schema` | `src/models/users-listerrorschema1.ts` |

### usersLookupByEmail

- **Signature**: `usersLookupByEmail(request: Users.UsersLookupByEmailRequest, options?: RequestOptions): ApiPromise<UsersLookupByEmailsuccessschema, Users.UsersLookupByEmailError>`
- **Wire**: `GET /users.lookupByEmail`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersLookupByEmailsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersLookupByEmailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersLookupByEmailerrorschema1"` [default — any status no arm above covers] `UsersLookupByEmailerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersLookupByEmailerrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersLookupByEmailerrorschema1` | `usersLookupByEmailerrorschema1Schema` | `src/models/users-lookup-by-emailerrorschema1.ts` |

### usersProfileGet

- **Signature**: `usersProfileGet(request: Users.UsersProfileGetRequest, options?: RequestOptions): ApiPromise<UsersProfileGetschema, Users.UsersProfileGetError>`
- **Wire**: `GET /users.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersProfileGetschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersProfileGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersProfileGeterrorschema1"` [default — any status no arm above covers] `UsersProfileGeterrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersProfileGeterrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersProfileGeterrorschema1` | `usersProfileGeterrorschema1Schema` | `src/models/users-profile-geterrorschema1.ts` |

### usersProfileSet

- **Signature**: `usersProfileSet(request: Users.UsersProfileSetRequest, options?: RequestOptions): ApiPromise<UsersProfileSetschema, Users.UsersProfileSetError>`
- **Wire**: `POST /users.profile.set`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersProfileSetschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersProfileSetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersProfileSeterrorschema1"` [default — any status no arm above covers] `UsersProfileSeterrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersProfileSeterrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersProfileSeterrorschema1` | `usersProfileSeterrorschema1Schema` | `src/models/users-profile-seterrorschema1.ts` |

### usersSetActive

- **Signature**: `usersSetActive(request: Users.UsersSetActiveRequest, options?: RequestOptions): ApiPromise<UsersSetActiveschema, Users.UsersSetActiveError>`
- **Wire**: `POST /users.setActive`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersSetActiveschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersSetActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersSetActiveerrorschema1"` [default — any status no arm above covers] `UsersSetActiveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersSetActiveerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Users.UsersSetActiveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersSetActiveschema` | `usersSetActiveschemaSchema` | `src/models/users-set-activeschema.ts` |
| `UsersSetActiveerrorschema1` | `usersSetActiveerrorschema1Schema` | `src/models/users-set-activeerrorschema1.ts` |

### usersSetPhoto

- **Signature**: `usersSetPhoto(request: Users.UsersSetPhotoRequest, options?: RequestOptions): ApiPromise<UsersSetPhotoschema, Users.UsersSetPhotoError>`
- **Wire**: `POST /users.setPhoto`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersSetPhotoschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersSetPhotoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersSetPhotoerrorschema1"` [default — any status no arm above covers] `UsersSetPhotoerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersSetPhotoerrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersSetPhotoerrorschema1` | `usersSetPhotoerrorschema1Schema` | `src/models/users-set-photoerrorschema1.ts` |

### usersSetPresence

- **Signature**: `usersSetPresence(request: Users.UsersSetPresenceRequest, options?: RequestOptions): ApiPromise<UsersSetPresenceschema, Users.UsersSetPresenceError>`
- **Wire**: `POST /users.setPresence`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersSetPresenceschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Users.UsersSetPresenceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"usersSetPresenceerrorschema1"` [default — any status no arm above covers] `UsersSetPresenceerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `UsersSetPresenceerrorschema1`] `rawBody: ArrayBuffer`

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
| `UsersSetPresenceerrorschema1` | `usersSetPresenceerrorschema1Schema` | `src/models/users-set-presenceerrorschema1.ts` |

