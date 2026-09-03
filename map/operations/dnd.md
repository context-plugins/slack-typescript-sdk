<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dnd — operations

Accessor: `client.dnd` · Source: `src/resources/dnd.ts` · 5 operations · Request and error types: namespace `Dnd`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### dndEndDnd

- **Signature**: `dndEndDnd(request: Dnd.DndEndDndRequest, options?: RequestOptions): ApiPromise<DndEndDndschema, Dnd.DndEndDndError>`
- **Wire**: `POST /dnd.endDnd`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DndEndDndschema`
- **Error**: `Dnd.DndEndDndError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"dndEndDnderrorschema1"` [400–599] `DndEndDnderrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dnd.DndEndDndRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DndEndDndschema` | `dndEndDndschemaSchema` | `src/models/dnd-end-dndschema.ts` |
| `DndEndDnderrorschema1` | `dndEndDnderrorschema1Schema` | `src/models/dnd-end-dnderrorschema1.ts` |

### dndEndSnooze

- **Signature**: `dndEndSnooze(request: Dnd.DndEndSnoozeRequest, options?: RequestOptions): ApiPromise<DndEndSnoozeschema, Dnd.DndEndSnoozeError>`
- **Wire**: `POST /dnd.endSnooze`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DndEndSnoozeschema`
- **Error**: `Dnd.DndEndSnoozeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"dndEndSnoozeerrorschema1"` [400–599] `DndEndSnoozeerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dnd.DndEndSnoozeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DndEndSnoozeschema` | `dndEndSnoozeschemaSchema` | `src/models/dnd-end-snoozeschema.ts` |
| `DndEndSnoozeerrorschema1` | `dndEndSnoozeerrorschema1Schema` | `src/models/dnd-end-snoozeerrorschema1.ts` |

### dndInfo

- **Signature**: `dndInfo(request: Dnd.DndInfoRequest, options?: RequestOptions): ApiPromise<DndInfoschema, Dnd.DndInfoError>`
- **Wire**: `GET /dnd.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DndInfoschema`
- **Error**: `Dnd.DndInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"dndInfoerrorschema1"` [400–599] `DndInfoerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dnd.DndInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DndInfoschema` | `dndInfoschemaSchema` | `src/models/dnd-infoschema.ts` |
| `DndInfoerrorschema1` | `dndInfoerrorschema1Schema` | `src/models/dnd-infoerrorschema1.ts` |

### dndSetSnooze

- **Signature**: `dndSetSnooze(request: Dnd.DndSetSnoozeRequest, options?: RequestOptions): ApiPromise<DndSetSnoozeschema, Dnd.DndSetSnoozeError>`
- **Wire**: `POST /dnd.setSnooze`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `DndSetSnoozeschema`
- **Error**: `Dnd.DndSetSnoozeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"dndSetSnoozeerrorschema1"` [400–599] `DndSetSnoozeerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dnd.DndSetSnoozeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `numMinutes` | `form` | `num_minutes` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DndSetSnoozeschema` | `dndSetSnoozeschemaSchema` | `src/models/dnd-set-snoozeschema.ts` |
| `DndSetSnoozeerrorschema1` | `dndSetSnoozeerrorschema1Schema` | `src/models/dnd-set-snoozeerrorschema1.ts` |

### dndTeamInfo

- **Signature**: `dndTeamInfo(request: Dnd.DndTeamInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Dnd.DndTeamInfoError>`
- **Wire**: `GET /dnd.teamInfo`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Dnd.DndTeamInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dnd.DndTeamInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `users` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

