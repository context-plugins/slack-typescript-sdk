<!-- Generated file — do not edit; regenerated with the SDK. -->

# Admin — operations

Accessor: `client.admin` · Source: `src/resources/admin.ts` · 56 operations · Request and error types: namespace `Admin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### adminAppsApprove

- **Signature**: `adminAppsApprove(request: Admin.AdminAppsApproveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsApproveError>`
- **Wire**: `POST /admin.apps.approve`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminAppsApproveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminAppsApproveRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `appId` | `form` | `app_id` | `string` | no |
| `requestId` | `form` | `request_id` | `string` | no |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminAppsApprovedList

- **Signature**: `adminAppsApprovedList(request: Admin.AdminAppsApprovedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsApprovedListError>`
- **Wire**: `GET /admin.apps.approved.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminAppsApprovedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminAppsApprovedListRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `teamId` | `query` | `team_id` | `string` | no |
| `enterpriseId` | `query` | `enterprise_id` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminAppsRequestsList

- **Signature**: `adminAppsRequestsList(request: Admin.AdminAppsRequestsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRequestsListError>`
- **Wire**: `GET /admin.apps.requests.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminAppsRequestsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminAppsRequestsListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `teamId` | `query` | `team_id` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminAppsRestrict

- **Signature**: `adminAppsRestrict(request: Admin.AdminAppsRestrictRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRestrictError>`
- **Wire**: `POST /admin.apps.restrict`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminAppsRestrictError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminAppsRestrictRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `appId` | `form` | `app_id` | `string` | no |
| `requestId` | `form` | `request_id` | `string` | no |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminAppsRestrictedList

- **Signature**: `adminAppsRestrictedList(request: Admin.AdminAppsRestrictedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminAppsRestrictedListError>`
- **Wire**: `GET /admin.apps.restricted.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminAppsRestrictedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminAppsRestrictedListRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `teamId` | `query` | `team_id` | `string` | no |
| `enterpriseId` | `query` | `enterprise_id` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminConversationsArchive

- **Signature**: `adminConversationsArchive(request: Admin.AdminConversationsArchiveRequest, options?: RequestOptions): ApiPromise<AdminConversationsArchiveschema, Admin.AdminConversationsArchiveError>`
- **Wire**: `POST /admin.conversations.archive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsArchiveschema`
- **Error**: `Admin.AdminConversationsArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsArchiveerrorschema1"` [400–599] `AdminConversationsArchiveerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsArchiveRequest` (3):

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

- **Signature**: `adminConversationsConvertToPrivate(request: Admin.AdminConversationsConvertToPrivateRequest, options?: RequestOptions): ApiPromise<AdminConversationsConvertToPrivateschema, Admin.AdminConversationsConvertToPrivateError>`
- **Wire**: `POST /admin.conversations.convertToPrivate`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsConvertToPrivateschema`
- **Error**: `Admin.AdminConversationsConvertToPrivateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsConvertToPrivateerrorschema1"` [400–599] `AdminConversationsConvertToPrivateerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsConvertToPrivateRequest` (3):

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

- **Signature**: `adminConversationsCreate(request: Admin.AdminConversationsCreateRequest, options?: RequestOptions): ApiPromise<AdminConversationsCreateschema, Admin.AdminConversationsCreateError>`
- **Wire**: `POST /admin.conversations.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsCreateschema`
- **Error**: `Admin.AdminConversationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsCreateerrorschema1"` [400–599] `AdminConversationsCreateerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsCreateRequest` (7):

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

- **Signature**: `adminConversationsDelete(request: Admin.AdminConversationsDeleteRequest, options?: RequestOptions): ApiPromise<AdminConversationsDeleteschema, Admin.AdminConversationsDeleteError>`
- **Wire**: `POST /admin.conversations.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsDeleteschema`
- **Error**: `Admin.AdminConversationsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsDeleteerrorschema1"` [400–599] `AdminConversationsDeleteerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsDeleteRequest` (3):

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

- **Signature**: `adminConversationsDisconnectShared(request: Admin.AdminConversationsDisconnectSharedRequest, options?: RequestOptions): ApiPromise<AdminConversationsRenameschema, Admin.AdminConversationsDisconnectSharedError>`
- **Wire**: `POST /admin.conversations.disconnectShared`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsRenameschema`
- **Error**: `Admin.AdminConversationsDisconnectSharedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsDisconnectSharederrorschema1"` [400–599] `AdminConversationsDisconnectSharederrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsDisconnectSharedRequest` (4):

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

### adminConversationsEkmListOriginalConnectedChannelInfo

- **Signature**: `adminConversationsEkmListOriginalConnectedChannelInfo(request: Admin.AdminConversationsEkmListOriginalConnectedChannelInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError>`
- **Wire**: `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsEkmListOriginalConnectedChannelInfoRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `channelIds` | `query` | `channel_ids` | `string` | no |
| `teamIds` | `query` | `team_ids` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminConversationsGetConversationPrefs

- **Signature**: `adminConversationsGetConversationPrefs(request: Admin.AdminConversationsGetConversationPrefsRequest, options?: RequestOptions): ApiPromise<AdminConversationsGetConversationPrefsschema, Admin.AdminConversationsGetConversationPrefsError>`
- **Wire**: `GET /admin.conversations.getConversationPrefs`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsGetConversationPrefsschema`
- **Error**: `Admin.AdminConversationsGetConversationPrefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsUnarchiveerrorschema1"` [400–599] `AdminConversationsUnarchiveerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsGetConversationPrefsRequest` (3):

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

- **Signature**: `adminConversationsGetTeams(request: Admin.AdminConversationsGetTeamsRequest, options?: RequestOptions): ApiPromise<AdminConversationsGetTeamsschema, Admin.AdminConversationsGetTeamsError>`
- **Wire**: `GET /admin.conversations.getTeams`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsGetTeamsschema`
- **Error**: `Admin.AdminConversationsGetTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsGetTeamserrorschema1"` [400–599] `AdminConversationsGetTeamserrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsGetTeamsRequest` (5):

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

- **Signature**: `adminConversationsInvite(request: Admin.AdminConversationsInviteRequest, options?: RequestOptions): ApiPromise<AdminConversationsInviteschema, Admin.AdminConversationsInviteError>`
- **Wire**: `POST /admin.conversations.invite`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsInviteschema`
- **Error**: `Admin.AdminConversationsInviteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsInviteerrorschema1"` [400–599] `AdminConversationsInviteerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsInviteRequest` (4):

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

- **Signature**: `adminConversationsRename(request: Admin.AdminConversationsRenameRequest, options?: RequestOptions): ApiPromise<AdminConversationsRenameschema1, Admin.AdminConversationsRenameError>`
- **Wire**: `POST /admin.conversations.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsRenameschema1`
- **Error**: `Admin.AdminConversationsRenameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsUnarchiveerrorschema21"` [400–599] `AdminConversationsUnarchiveerrorschema21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsRenameRequest` (4):

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

### adminConversationsRestrictAccessAddGroup

- **Signature**: `adminConversationsRestrictAccessAddGroup(request: Admin.AdminConversationsRestrictAccessAddGroupRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessAddGroupError>`
- **Wire**: `POST /admin.conversations.restrictAccess.addGroup`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminConversationsRestrictAccessAddGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsRestrictAccessAddGroupRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `groupId` | `form` | `group_id` | `string` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminConversationsRestrictAccessListGroups

- **Signature**: `adminConversationsRestrictAccessListGroups(request: Admin.AdminConversationsRestrictAccessListGroupsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessListGroupsError>`
- **Wire**: `GET /admin.conversations.restrictAccess.listGroups`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminConversationsRestrictAccessListGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsRestrictAccessListGroupsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `channelId` | `query` | `channel_id` | `string` | yes |
| `teamId` | `query` | `team_id` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminConversationsRestrictAccessRemoveGroup

- **Signature**: `adminConversationsRestrictAccessRemoveGroup(request: Admin.AdminConversationsRestrictAccessRemoveGroupRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessRemoveGroupError>`
- **Wire**: `POST /admin.conversations.restrictAccess.removeGroup`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminConversationsRestrictAccessRemoveGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsRestrictAccessRemoveGroupRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `groupId` | `form` | `group_id` | `string` | yes |
| `channelId` | `form` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminConversationsSearch

- **Signature**: `adminConversationsSearch(request: Admin.AdminConversationsSearchRequest, options?: RequestOptions): ApiPromise<AdminConversationsSearchschema, Admin.AdminConversationsSearchError>`
- **Wire**: `GET /admin.conversations.search`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdminConversationsSearchschema`
- **Error**: `Admin.AdminConversationsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsSearcherrorschema1"` [400–599] `AdminConversationsSearcherrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsSearchRequest` (9):

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

- **Signature**: `adminConversationsSetConversationPrefs(request: Admin.AdminConversationsSetConversationPrefsRequest, options?: RequestOptions): ApiPromise<AdminConversationsSetConversationPrefsschema, Admin.AdminConversationsSetConversationPrefsError>`
- **Wire**: `POST /admin.conversations.setConversationPrefs`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsSetConversationPrefsschema`
- **Error**: `Admin.AdminConversationsSetConversationPrefsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsSetConversationPrefserrorschema1"` [400–599] `AdminConversationsSetConversationPrefserrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsSetConversationPrefsRequest` (4):

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

- **Signature**: `adminConversationsSetTeams(request: Admin.AdminConversationsSetTeamsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminConversationsSetTeamsError>`
- **Wire**: `POST /admin.conversations.setTeams`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminConversationsSetTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsSetTeamsRequest` (6):

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

- **Signature**: `adminConversationsUnarchive(request: Admin.AdminConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise<AdminConversationsUnarchiveschema, Admin.AdminConversationsUnarchiveError>`
- **Wire**: `POST /admin.conversations.unarchive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `AdminConversationsUnarchiveschema`
- **Error**: `Admin.AdminConversationsUnarchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"adminConversationsUnarchiveerrorschema31"` [400–599] `AdminConversationsUnarchiveerrorschema31` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminConversationsUnarchiveRequest` (3):

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

### adminEmojiAdd

- **Signature**: `adminEmojiAdd(request: Admin.AdminEmojiAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiAddError>`
- **Wire**: `POST /admin.emoji.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminEmojiAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminEmojiAddRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `url` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiAddAlias

- **Signature**: `adminEmojiAddAlias(request: Admin.AdminEmojiAddAliasRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiAddAliasError>`
- **Wire**: `POST /admin.emoji.addAlias`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminEmojiAddAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminEmojiAddAliasRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `aliasFor` | `form` | `alias_for` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiList

- **Signature**: `adminEmojiList(request: Admin.AdminEmojiListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiListError>`
- **Wire**: `GET /admin.emoji.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminEmojiListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminEmojiListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiRemove

- **Signature**: `adminEmojiRemove(request: Admin.AdminEmojiRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiRemoveError>`
- **Wire**: `POST /admin.emoji.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminEmojiRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminEmojiRemoveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiRename

- **Signature**: `adminEmojiRename(request: Admin.AdminEmojiRenameRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminEmojiRenameError>`
- **Wire**: `POST /admin.emoji.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminEmojiRenameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminEmojiRenameRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `newName` | `form` | `new_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminInviteRequestsApprove

- **Signature**: `adminInviteRequestsApprove(request: Admin.AdminInviteRequestsApproveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsApproveError>`
- **Wire**: `POST /admin.inviteRequests.approve`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminInviteRequestsApproveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminInviteRequestsApproveRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `inviteRequestId` | `form` | `invite_request_id` | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminInviteRequestsApprovedList

- **Signature**: `adminInviteRequestsApprovedList(request: Admin.AdminInviteRequestsApprovedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsApprovedListError>`
- **Wire**: `GET /admin.inviteRequests.approved.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminInviteRequestsApprovedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminInviteRequestsApprovedListRequest` (5):

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

### adminInviteRequestsDeniedList

- **Signature**: `adminInviteRequestsDeniedList(request: Admin.AdminInviteRequestsDeniedListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsDeniedListError>`
- **Wire**: `GET /admin.inviteRequests.denied.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminInviteRequestsDeniedListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminInviteRequestsDeniedListRequest` (5):

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

### adminInviteRequestsDeny

- **Signature**: `adminInviteRequestsDeny(request: Admin.AdminInviteRequestsDenyRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsDenyError>`
- **Wire**: `POST /admin.inviteRequests.deny`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminInviteRequestsDenyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminInviteRequestsDenyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `inviteRequestId` | `form` | `invite_request_id` | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminInviteRequestsList

- **Signature**: `adminInviteRequestsList(request: Admin.AdminInviteRequestsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminInviteRequestsListError>`
- **Wire**: `GET /admin.inviteRequests.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminInviteRequestsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminInviteRequestsListRequest` (5):

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

### adminTeamsAdminsList

- **Signature**: `adminTeamsAdminsList(request: Admin.AdminTeamsAdminsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsAdminsListError>`
- **Wire**: `GET /admin.teams.admins.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsAdminsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsAdminsListRequest` (5):

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

### adminTeamsCreate

- **Signature**: `adminTeamsCreate(request: Admin.AdminTeamsCreateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsCreateError>`
- **Wire**: `POST /admin.teams.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsCreateRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamDomain` | `form` | `team_domain` | `string` | yes |
| `teamName` | `form` | `team_name` | `string` | yes |
| `teamDescription` | `form` | `team_description` | `string` | no |
| `teamDiscoverability` | `form` | `team_discoverability` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsList

- **Signature**: `adminTeamsList(request: Admin.AdminTeamsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsListError>`
- **Wire**: `GET /admin.teams.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsOwnersList

- **Signature**: `adminTeamsOwnersList(request: Admin.AdminTeamsOwnersListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsOwnersListError>`
- **Wire**: `GET /admin.teams.owners.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsOwnersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsOwnersListRequest` (5):

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

### adminTeamsSettingsInfo

- **Signature**: `adminTeamsSettingsInfo(request: Admin.AdminTeamsSettingsInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsInfoError>`
- **Wire**: `GET /admin.teams.settings.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsSettingsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsSettingsInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `team_id` | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsSettingsSetDefaultChannels

- **Signature**: `adminTeamsSettingsSetDefaultChannels(request: Admin.AdminTeamsSettingsSetDefaultChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDefaultChannelsError>`
- **Wire**: `POST /admin.teams.settings.setDefaultChannels`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsSettingsSetDefaultChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsSettingsSetDefaultChannelsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `channelIds` | `form` | `channel_ids` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsSettingsSetDescription

- **Signature**: `adminTeamsSettingsSetDescription(request: Admin.AdminTeamsSettingsSetDescriptionRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDescriptionError>`
- **Wire**: `POST /admin.teams.settings.setDescription`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsSettingsSetDescriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsSettingsSetDescriptionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `description` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsSettingsSetDiscoverability

- **Signature**: `adminTeamsSettingsSetDiscoverability(request: Admin.AdminTeamsSettingsSetDiscoverabilityRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDiscoverabilityError>`
- **Wire**: `POST /admin.teams.settings.setDiscoverability`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsSettingsSetDiscoverabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsSettingsSetDiscoverabilityRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `discoverability` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsSettingsSetIcon

- **Signature**: `adminTeamsSettingsSetIcon(request: Admin.AdminTeamsSettingsSetIconRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetIconError>`
- **Wire**: `POST /admin.teams.settings.setIcon`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsSettingsSetIconError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsSettingsSetIconRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `imageUrl` | `form` | `image_url` | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminTeamsSettingsSetName

- **Signature**: `adminTeamsSettingsSetName(request: Admin.AdminTeamsSettingsSetNameRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetNameError>`
- **Wire**: `POST /admin.teams.settings.setName`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminTeamsSettingsSetNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminTeamsSettingsSetNameRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `name` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsergroupsAddChannels

- **Signature**: `adminUsergroupsAddChannels(request: Admin.AdminUsergroupsAddChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsAddChannelsError>`
- **Wire**: `POST /admin.usergroups.addChannels`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsergroupsAddChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsergroupsAddChannelsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroupId` | `form` | `usergroup_id` | `string` | yes |
| `channelIds` | `form` | `channel_ids` | `string` | yes |
| `teamId` | `form` | `team_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsergroupsAddTeams

- **Signature**: `adminUsergroupsAddTeams(request: Admin.AdminUsergroupsAddTeamsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsAddTeamsError>`
- **Wire**: `POST /admin.usergroups.addTeams`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsergroupsAddTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsergroupsAddTeamsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroupId` | `form` | `usergroup_id` | `string` | yes |
| `teamIds` | `form` | `team_ids` | `string` | yes |
| `autoProvision` | `form` | `auto_provision` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsergroupsListChannels

- **Signature**: `adminUsergroupsListChannels(request: Admin.AdminUsergroupsListChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsListChannelsError>`
- **Wire**: `GET /admin.usergroups.listChannels`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsergroupsListChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsergroupsListChannelsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `usergroupId` | `query` | `usergroup_id` | `string` | yes |
| `teamId` | `query` | `team_id` | `string` | no |
| `includeNumMembers` | `query` | `include_num_members` | `boolean` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsergroupsRemoveChannels

- **Signature**: `adminUsergroupsRemoveChannels(request: Admin.AdminUsergroupsRemoveChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsergroupsRemoveChannelsError>`
- **Wire**: `POST /admin.usergroups.removeChannels`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsergroupsRemoveChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsergroupsRemoveChannelsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `usergroupId` | `form` | `usergroup_id` | `string` | yes |
| `channelIds` | `form` | `channel_ids` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersAssign

- **Signature**: `adminUsersAssign(request: Admin.AdminUsersAssignRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersAssignError>`
- **Wire**: `POST /admin.users.assign`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersAssignError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersAssignRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `userId` | `form` | `user_id` | `string` | yes |
| `isRestricted` | `form` | `is_restricted` | `boolean` | no |
| `isUltraRestricted` | `form` | `is_ultra_restricted` | `boolean` | no |
| `channelIds` | `form` | `channel_ids` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersInvite

- **Signature**: `adminUsersInvite(request: Admin.AdminUsersInviteRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersInviteError>`
- **Wire**: `POST /admin.users.invite`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersInviteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersInviteRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `email` | `form` | — | `string` | yes |
| `channelIds` | `form` | `channel_ids` | `string` | yes |
| `customMessage` | `form` | `custom_message` | `string` | no |
| `realName` | `form` | `real_name` | `string` | no |
| `resend` | `form` | — | `boolean` | no |
| `isRestricted` | `form` | `is_restricted` | `boolean` | no |
| `isUltraRestricted` | `form` | `is_ultra_restricted` | `boolean` | no |
| `guestExpirationTs` | `form` | `guest_expiration_ts` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersList

- **Signature**: `adminUsersList(request: Admin.AdminUsersListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersListError>`
- **Wire**: `GET /admin.users.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersListRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamId` | `query` | `team_id` | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersRemove

- **Signature**: `adminUsersRemove(request: Admin.AdminUsersRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersRemoveError>`
- **Wire**: `POST /admin.users.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersRemoveRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `userId` | `form` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersSessionInvalidate

- **Signature**: `adminUsersSessionInvalidate(request: Admin.AdminUsersSessionInvalidateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSessionInvalidateError>`
- **Wire**: `POST /admin.users.session.invalidate`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersSessionInvalidateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersSessionInvalidateRequest` (4):

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

- **Signature**: `adminUsersSessionReset(request: Admin.AdminUsersSessionResetRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSessionResetError>`
- **Wire**: `POST /admin.users.session.reset`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersSessionResetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersSessionResetRequest` (5):

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

### adminUsersSetAdmin

- **Signature**: `adminUsersSetAdmin(request: Admin.AdminUsersSetAdminRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetAdminError>`
- **Wire**: `POST /admin.users.setAdmin`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersSetAdminError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersSetAdminRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `userId` | `form` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersSetExpiration

- **Signature**: `adminUsersSetExpiration(request: Admin.AdminUsersSetExpirationRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetExpirationError>`
- **Wire**: `POST /admin.users.setExpiration`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersSetExpirationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersSetExpirationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `userId` | `form` | `user_id` | `string` | yes |
| `expirationTs` | `form` | `expiration_ts` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersSetOwner

- **Signature**: `adminUsersSetOwner(request: Admin.AdminUsersSetOwnerRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetOwnerError>`
- **Wire**: `POST /admin.users.setOwner`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersSetOwnerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersSetOwnerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `userId` | `form` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminUsersSetRegular

- **Signature**: `adminUsersSetRegular(request: Admin.AdminUsersSetRegularRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Admin.AdminUsersSetRegularError>`
- **Wire**: `POST /admin.users.setRegular`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Admin.AdminUsersSetRegularError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Admin.AdminUsersSetRegularRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamId` | `form` | `team_id` | `string` | yes |
| `userId` | `form` | `user_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

