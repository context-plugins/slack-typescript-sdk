<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminConversationsRestrictAccess — operations

Accessor: `client.adminConversationsRestrictAccess` · Source: `src/resources/admin-conversations-restrict-access.ts` · 3 operations · Request and error types: namespace `AdminConversationsRestrictAccess`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminConversationsRestrictAccessAddGroup

- **Signature**: `adminConversationsRestrictAccessAddGroup(request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError>`
- **Wire**: `POST /admin.conversations.restrictAccess.addGroup`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupRequest` (5):

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

- **Signature**: `adminConversationsRestrictAccessListGroups(request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError>`
- **Wire**: `GET /admin.conversations.restrictAccess.listGroups`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsRequest` (4):

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

- **Signature**: `adminConversationsRestrictAccessRemoveGroup(request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError>`
- **Wire**: `POST /admin.conversations.restrictAccess.removeGroup`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupRequest` (5):

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

