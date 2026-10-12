<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminTeamsSettings — operations

Accessor: `client.adminTeamsSettings` · Source: `src/resources/admin-teams-settings.ts` · 6 operations · Request and error types: namespace `AdminTeamsSettings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminTeamsSettingsInfo

- **Signature**: `adminTeamsSettingsInfo(request: AdminTeamsSettings.AdminTeamsSettingsInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsInfoError>`
- **Wire**: `GET /admin.teams.settings.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsSettings.AdminTeamsSettingsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsSettings.AdminTeamsSettingsInfoRequest` (3):

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

- **Signature**: `adminTeamsSettingsSetDefaultChannels(request: AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError>`
- **Wire**: `POST /admin.teams.settings.setDefaultChannels`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsRequest` (4):

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

- **Signature**: `adminTeamsSettingsSetDescription(request: AdminTeamsSettings.AdminTeamsSettingsSetDescriptionRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError>`
- **Wire**: `POST /admin.teams.settings.setDescription`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsSettings.AdminTeamsSettingsSetDescriptionRequest` (4):

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

- **Signature**: `adminTeamsSettingsSetDiscoverability(request: AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError>`
- **Wire**: `POST /admin.teams.settings.setDiscoverability`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityRequest` (4):

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

- **Signature**: `adminTeamsSettingsSetIcon(request: AdminTeamsSettings.AdminTeamsSettingsSetIconRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetIconError>`
- **Wire**: `POST /admin.teams.settings.setIcon`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsSettings.AdminTeamsSettingsSetIconError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsSettings.AdminTeamsSettingsSetIconRequest` (4):

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

- **Signature**: `adminTeamsSettingsSetName(request: AdminTeamsSettings.AdminTeamsSettingsSetNameRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetNameError>`
- **Wire**: `POST /admin.teams.settings.setName`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminTeamsSettings.AdminTeamsSettingsSetNameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminTeamsSettings.AdminTeamsSettingsSetNameRequest` (4):

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

