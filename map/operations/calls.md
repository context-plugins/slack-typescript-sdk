<!-- Generated file — do not edit; regenerated with the SDK. -->

# Calls — operations

Accessor: `client.calls` · Source: `src/resources/calls.ts` · 6 operations · Request and error types: namespace `Calls`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### callsAdd

- **Signature**: `callsAdd(request: Calls.CallsAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Calls.CallsAddError>`
- **Wire**: `POST /calls.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Calls.CallsAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsAddRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `externalUniqueId` | `form` | `external_unique_id` | `string` | yes |
| `joinUrl` | `form` | `join_url` | `string` | yes |
| `externalDisplayId` | `form` | `external_display_id` | `string` | no |
| `desktopAppJoinUrl` | `form` | `desktop_app_join_url` | `string` | no |
| `dateStart` | `form` | `date_start` | `number` | no |
| `title` | `form` | — | `string` | no |
| `createdBy` | `form` | `created_by` | `string` | no |
| `users` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### callsEnd

- **Signature**: `callsEnd(request: Calls.CallsEndRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Calls.CallsEndError>`
- **Wire**: `POST /calls.end`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Calls.CallsEndError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsEndRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `id` | `form` | — | `string` | yes |
| `duration` | `form` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### callsInfo

- **Signature**: `callsInfo(request: Calls.CallsInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Calls.CallsInfoError>`
- **Wire**: `GET /calls.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Calls.CallsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `query` | — | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### callsParticipantsAdd

- **Signature**: `callsParticipantsAdd(request: Calls.CallsParticipantsAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Calls.CallsParticipantsAddError>`
- **Wire**: `POST /calls.participants.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Calls.CallsParticipantsAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsParticipantsAddRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `id` | `form` | — | `string` | yes |
| `users` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### callsParticipantsRemove

- **Signature**: `callsParticipantsRemove(request: Calls.CallsParticipantsRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Calls.CallsParticipantsRemoveError>`
- **Wire**: `POST /calls.participants.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Calls.CallsParticipantsRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsParticipantsRemoveRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `id` | `form` | — | `string` | yes |
| `users` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### callsUpdate

- **Signature**: `callsUpdate(request: Calls.CallsUpdateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Calls.CallsUpdateError>`
- **Wire**: `POST /calls.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Calls.CallsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Calls.CallsUpdateRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `id` | `form` | — | `string` | yes |
| `title` | `form` | — | `string` | no |
| `joinUrl` | `form` | `join_url` | `string` | no |
| `desktopAppJoinUrl` | `form` | `desktop_app_join_url` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

