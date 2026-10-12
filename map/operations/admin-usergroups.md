<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminUsergroups — operations

Accessor: `client.adminUsergroups` · Source: `src/resources/admin-usergroups.ts` · 4 operations · Request and error types: namespace `AdminUsergroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminUsergroupsAddChannels

- **Signature**: `adminUsergroupsAddChannels(request: AdminUsergroups.AdminUsergroupsAddChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddChannelsError>`
- **Wire**: `POST /admin.usergroups.addChannels`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminUsergroups.AdminUsergroupsAddChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminUsergroups.AdminUsergroupsAddChannelsRequest` (5):

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

- **Signature**: `adminUsergroupsAddTeams(request: AdminUsergroups.AdminUsergroupsAddTeamsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddTeamsError>`
- **Wire**: `POST /admin.usergroups.addTeams`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminUsergroups.AdminUsergroupsAddTeamsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminUsergroups.AdminUsergroupsAddTeamsRequest` (5):

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

- **Signature**: `adminUsergroupsListChannels(request: AdminUsergroups.AdminUsergroupsListChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsListChannelsError>`
- **Wire**: `GET /admin.usergroups.listChannels`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminUsergroups.AdminUsergroupsListChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminUsergroups.AdminUsergroupsListChannelsRequest` (5):

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

- **Signature**: `adminUsergroupsRemoveChannels(request: AdminUsergroups.AdminUsergroupsRemoveChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsRemoveChannelsError>`
- **Wire**: `POST /admin.usergroups.removeChannels`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminUsergroups.AdminUsergroupsRemoveChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminUsergroups.AdminUsergroupsRemoveChannelsRequest` (4):

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

