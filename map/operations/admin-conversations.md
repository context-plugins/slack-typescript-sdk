<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminConversations — operations

Accessor: `client.adminConversations` · Source: `src/resources/admin-conversations.ts` · 13 operations · Request and error types: namespace `AdminConversations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminConversationsArchive

- **Signature**: `adminConversationsArchive(request: AdminConversations.AdminConversationsArchiveRequest, options?: RequestOptions): ApiPromise<AdminConversationsArchiveschema, AdminConversations.AdminConversationsArchiveError>`
- **Wire**: `POST /admin.conversations.archive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsArchiveschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsArchiveerrorschema1"` [default — any status no arm above covers] `AdminConversationsArchiveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsArchiveerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsArchiveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsArchiveschema` | `adminConversationsArchiveschemaSchema` | `src/models/admin-conversations-archiveschema.ts` |
| `AdminConversationsArchiveerrorschema1` | `adminConversationsArchiveerrorschema1Schema` | `src/models/admin-conversations-archiveerrorschema1.ts` |

### adminConversationsConvertToPrivate

- **Signature**: `adminConversationsConvertToPrivate(request: AdminConversations.AdminConversationsConvertToPrivateRequest, options?: RequestOptions): ApiPromise<AdminConversationsConvertToPrivateschema, AdminConversations.AdminConversationsConvertToPrivateError>`
- **Wire**: `POST /admin.conversations.convertToPrivate`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsConvertToPrivateschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsConvertToPrivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsConvertToPrivateerrorschema1"` [default — any status no arm above covers] `AdminConversationsConvertToPrivateerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsConvertToPrivateerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsConvertToPrivateRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsConvertToPrivateschema` | `adminConversationsConvertToPrivateschemaSchema` | `src/models/admin-conversations-convert-to-privateschema.ts` |
| `AdminConversationsConvertToPrivateerrorschema1` | `adminConversationsConvertToPrivateerrorschema1Schema` | `src/models/admin-conversations-convert-to-privateerrorschema1.ts` |

### adminConversationsCreate

- **Signature**: `adminConversationsCreate(request: AdminConversations.AdminConversationsCreateRequest, options?: RequestOptions): ApiPromise<AdminConversationsCreateschema, AdminConversations.AdminConversationsCreateError>`
- **Wire**: `POST /admin.conversations.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsCreateschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsCreateerrorschema1"` [default — any status no arm above covers] `AdminConversationsCreateerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsCreateerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsCreateRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `name` | `form` | — | `string` | yes |
| `isPrivate` | `form` | `is_private` | `boolean` | yes |
| `description` | `form` | — | `string` | no |
| `orgWide` | `form` | `org_wide` | `boolean` | no |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsCreateschema` | `adminConversationsCreateschemaSchema` | `src/models/admin-conversations-createschema.ts` |
| `AdminConversationsCreateerrorschema1` | `adminConversationsCreateerrorschema1Schema` | `src/models/admin-conversations-createerrorschema1.ts` |

### adminConversationsDelete

- **Signature**: `adminConversationsDelete(request: AdminConversations.AdminConversationsDeleteRequest, options?: RequestOptions): ApiPromise<AdminConversationsDeleteschema, AdminConversations.AdminConversationsDeleteError>`
- **Wire**: `POST /admin.conversations.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsDeleteerrorschema1"` [default — any status no arm above covers] `AdminConversationsDeleteerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsDeleteerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsDeleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsDeleteschema` | `adminConversationsDeleteschemaSchema` | `src/models/admin-conversations-deleteschema.ts` |
| `AdminConversationsDeleteerrorschema1` | `adminConversationsDeleteerrorschema1Schema` | `src/models/admin-conversations-deleteerrorschema1.ts` |

### adminConversationsDisconnectShared

- **Signature**: `adminConversationsDisconnectShared(request: AdminConversations.AdminConversationsDisconnectSharedRequest, options?: RequestOptions): ApiPromise<AdminConversationsRenameschema, AdminConversations.AdminConversationsDisconnectSharedError>`
- **Wire**: `POST /admin.conversations.disconnectShared`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsRenameschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsDisconnectSharedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsDisconnectSharederrorschema1"` [default — any status no arm above covers] `AdminConversationsDisconnectSharederrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsDisconnectSharederrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsDisconnectSharedRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |
| `leavingTeamIds` | `form` | `leaving_team_ids` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsRenameschema` | `adminConversationsRenameschemaSchema` | `src/models/admin-conversations-renameschema.ts` |
| `AdminConversationsDisconnectSharederrorschema1` | `adminConversationsDisconnectSharederrorschema1Schema` | `src/models/admin-conversations-disconnect-sharederrorschema1.ts` |

### adminConversationsGetConversationPrefs

- **Signature**: `adminConversationsGetConversationPrefs(request: AdminConversations.AdminConversationsGetConversationPrefsRequest, options?: RequestOptions): ApiPromise<AdminConversationsGetConversationPrefsschema, AdminConversations.AdminConversationsGetConversationPrefsError>`
- **Wire**: `GET /admin.conversations.getConversationPrefs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsGetConversationPrefsschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsGetConversationPrefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsUnarchiveerrorschema1"` [default — any status no arm above covers] `AdminConversationsUnarchiveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsUnarchiveerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsGetConversationPrefsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `query` | `channel_id` | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsGetConversationPrefsschema` | `adminConversationsGetConversationPrefsschemaSchema` | `src/models/admin-conversations-get-conversation-prefsschema.ts` |
| `AdminConversationsUnarchiveerrorschema1` | `adminConversationsUnarchiveerrorschema1Schema` | `src/models/admin-conversations-unarchiveerrorschema1.ts` |

### adminConversationsGetTeams

- **Signature**: `adminConversationsGetTeams(request: AdminConversations.AdminConversationsGetTeamsRequest, options?: RequestOptions): ApiPromise<AdminConversationsGetTeamsschema, AdminConversations.AdminConversationsGetTeamsError>`
- **Wire**: `GET /admin.conversations.getTeams`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsGetTeamsschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsGetTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsGetTeamserrorschema1"` [default — any status no arm above covers] `AdminConversationsGetTeamserrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsGetTeamserrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsGetTeamsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `query` | `channel_id` | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsGetTeamsschema` | `adminConversationsGetTeamsschemaSchema` | `src/models/admin-conversations-get-teamsschema.ts` |
| `AdminConversationsGetTeamserrorschema1` | `adminConversationsGetTeamserrorschema1Schema` | `src/models/admin-conversations-get-teamserrorschema1.ts` |

### adminConversationsInvite

- **Signature**: `adminConversationsInvite(request: AdminConversations.AdminConversationsInviteRequest, options?: RequestOptions): ApiPromise<AdminConversationsInviteschema, AdminConversations.AdminConversationsInviteError>`
- **Wire**: `POST /admin.conversations.invite`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsInviteschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsInviteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsInviteerrorschema1"` [default — any status no arm above covers] `AdminConversationsInviteerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsInviteerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsInviteRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `userIds` | `form` | `user_ids` | `string` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsInviteschema` | `adminConversationsInviteschemaSchema` | `src/models/admin-conversations-inviteschema.ts` |
| `AdminConversationsInviteerrorschema1` | `adminConversationsInviteerrorschema1Schema` | `src/models/admin-conversations-inviteerrorschema1.ts` |

### adminConversationsRename

- **Signature**: `adminConversationsRename(request: AdminConversations.AdminConversationsRenameRequest, options?: RequestOptions): ApiPromise<AdminConversationsRenameschema1, AdminConversations.AdminConversationsRenameError>`
- **Wire**: `POST /admin.conversations.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsRenameschema1`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsRenameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsUnarchiveerrorschema21"` [default — any status no arm above covers] `AdminConversationsUnarchiveerrorschema21` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsUnarchiveerrorschema21`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsRenameRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |
| `name` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsRenameschema1` | `adminConversationsRenameschema1Schema` | `src/models/admin-conversations-renameschema1.ts` |
| `AdminConversationsUnarchiveerrorschema21` | `adminConversationsUnarchiveerrorschema21Schema` | `src/models/admin-conversations-unarchiveerrorschema21.ts` |

### adminConversationsSearch

- **Signature**: `adminConversationsSearch(request: AdminConversations.AdminConversationsSearchRequest, options?: RequestOptions): ApiPromise<AdminConversationsSearchschema, AdminConversations.AdminConversationsSearchError>`
- **Wire**: `GET /admin.conversations.search`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsSearchschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsSearcherrorschema1"` [default — any status no arm above covers] `AdminConversationsSearcherrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsSearcherrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsSearchRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamIds` | `query` | `team_ids` | `string` | no |
| `query` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `searchChannelTypes` | `query` | `search_channel_types` | `string` | no |
| `sort` | `query` | — | `string` | no |
| `sortDir` | `query` | `sort_dir` | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsSearchschema` | `adminConversationsSearchschemaSchema` | `src/models/admin-conversations-searchschema.ts` |
| `AdminConversationsSearcherrorschema1` | `adminConversationsSearcherrorschema1Schema` | `src/models/admin-conversations-searcherrorschema1.ts` |

### adminConversationsSetConversationPrefs

- **Signature**: `adminConversationsSetConversationPrefs(request: AdminConversations.AdminConversationsSetConversationPrefsRequest, options?: RequestOptions): ApiPromise<AdminConversationsSetConversationPrefsschema, AdminConversations.AdminConversationsSetConversationPrefsError>`
- **Wire**: `POST /admin.conversations.setConversationPrefs`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsSetConversationPrefsschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsSetConversationPrefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsSetConversationPrefserrorschema1"` [default — any status no arm above covers] `AdminConversationsSetConversationPrefserrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsSetConversationPrefserrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsSetConversationPrefsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |
| `prefs` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsSetConversationPrefsschema` | `adminConversationsSetConversationPrefsschemaSchema` | `src/models/admin-conversations-set-conversation-prefsschema.ts` |
| `AdminConversationsSetConversationPrefserrorschema1` | `adminConversationsSetConversationPrefserrorschema1Schema` | `src/models/admin-conversations-set-conversation-prefserrorschema1.ts` |

### adminConversationsSetTeams

- **Signature**: `adminConversationsSetTeams(request: AdminConversations.AdminConversationsSetTeamsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminConversations.AdminConversationsSetTeamsError>`
- **Wire**: `POST /admin.conversations.setTeams`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsSetTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsSetTeamsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | no |
| `targetTeamIds` | `form` | `target_team_ids` | `string` | no |
| `orgChannel` | `form` | `org_channel` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminConversationsUnarchive

- **Signature**: `adminConversationsUnarchive(request: AdminConversations.AdminConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise<AdminConversationsUnarchiveschema, AdminConversations.AdminConversationsUnarchiveError>`
- **Wire**: `POST /admin.conversations.unarchive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsUnarchiveschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversations.AdminConversationsUnarchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsUnarchiveerrorschema31"` [default — any status no arm above covers] `AdminConversationsUnarchiveerrorschema31` · `"undeclared"` [a `default`-matched body that did not fit `AdminConversationsUnarchiveerrorschema31`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversations.AdminConversationsUnarchiveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AdminConversationsUnarchiveschema` | `adminConversationsUnarchiveschemaSchema` | `src/models/admin-conversations-unarchiveschema.ts` |
| `AdminConversationsUnarchiveerrorschema31` | `adminConversationsUnarchiveerrorschema31Schema` | `src/models/admin-conversations-unarchiveerrorschema31.ts` |

