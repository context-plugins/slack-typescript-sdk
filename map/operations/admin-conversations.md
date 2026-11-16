<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminConversations — operations

Accessor: `client.adminConversations` · Source: `src/resources/admin-conversations.ts` · 13 operations · Request types: namespace `AdminConversations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminConversationsArchive

- **Signature**: `adminConversationsArchive(request: AdminConversations.AdminConversationsArchiveRequest, options?: RequestOptions): ApiPromise<AdminConversationsArchiveschema, ApiError>`
- **Wire**: `POST /admin.conversations.archive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsArchiveschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsConvertToPrivate

- **Signature**: `adminConversationsConvertToPrivate(request: AdminConversations.AdminConversationsConvertToPrivateRequest, options?: RequestOptions): ApiPromise<AdminConversationsConvertToPrivateschema, ApiError>`
- **Wire**: `POST /admin.conversations.convertToPrivate`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsConvertToPrivateschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsCreate

- **Signature**: `adminConversationsCreate(request: AdminConversations.AdminConversationsCreateRequest, options?: RequestOptions): ApiPromise<AdminConversationsCreateschema, ApiError>`
- **Wire**: `POST /admin.conversations.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsCreateschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsDelete

- **Signature**: `adminConversationsDelete(request: AdminConversations.AdminConversationsDeleteRequest, options?: RequestOptions): ApiPromise<AdminConversationsDeleteschema, ApiError>`
- **Wire**: `POST /admin.conversations.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsDisconnectShared

- **Signature**: `adminConversationsDisconnectShared(request: AdminConversations.AdminConversationsDisconnectSharedRequest, options?: RequestOptions): ApiPromise<AdminConversationsRenameschema, ApiError>`
- **Wire**: `POST /admin.conversations.disconnectShared`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsRenameschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsGetConversationPrefs

- **Signature**: `adminConversationsGetConversationPrefs(request: AdminConversations.AdminConversationsGetConversationPrefsRequest, options?: RequestOptions): ApiPromise<AdminConversationsGetConversationPrefsschema, ApiError>`
- **Wire**: `GET /admin.conversations.getConversationPrefs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsGetConversationPrefsschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsGetTeams

- **Signature**: `adminConversationsGetTeams(request: AdminConversations.AdminConversationsGetTeamsRequest, options?: RequestOptions): ApiPromise<AdminConversationsGetTeamsschema, ApiError>`
- **Wire**: `GET /admin.conversations.getTeams`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsGetTeamsschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsInvite

- **Signature**: `adminConversationsInvite(request: AdminConversations.AdminConversationsInviteRequest, options?: RequestOptions): ApiPromise<AdminConversationsInviteschema, ApiError>`
- **Wire**: `POST /admin.conversations.invite`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsInviteschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsRename

- **Signature**: `adminConversationsRename(request: AdminConversations.AdminConversationsRenameRequest, options?: RequestOptions): ApiPromise<AdminConversationsRenameschema1, ApiError>`
- **Wire**: `POST /admin.conversations.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsRenameschema1`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsSearch

- **Signature**: `adminConversationsSearch(request: AdminConversations.AdminConversationsSearchRequest, options?: RequestOptions): ApiPromise<AdminConversationsSearchschema, ApiError>`
- **Wire**: `GET /admin.conversations.search`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsSearchschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsSetConversationPrefs

- **Signature**: `adminConversationsSetConversationPrefs(request: AdminConversations.AdminConversationsSetConversationPrefsRequest, options?: RequestOptions): ApiPromise<AdminConversationsSetConversationPrefsschema, ApiError>`
- **Wire**: `POST /admin.conversations.setConversationPrefs`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsSetConversationPrefsschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsSetTeams

- **Signature**: `adminConversationsSetTeams(request: AdminConversations.AdminConversationsSetTeamsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /admin.conversations.setTeams`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminConversationsUnarchive

- **Signature**: `adminConversationsUnarchive(request: AdminConversations.AdminConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise<AdminConversationsUnarchiveschema, ApiError>`
- **Wire**: `POST /admin.conversations.unarchive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AdminConversationsUnarchiveschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

