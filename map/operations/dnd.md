<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dnd — operations

Accessor: `client.dnd` · Source: `src/resources/dnd.ts` · 5 operations · Request types: namespace `Dnd`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dndEndDnd

- **Signature**: `dndEndDnd(request: Dnd.DndEndDndRequest, options?: RequestOptions): ApiPromise<DndEndDndschema, ApiError>`
- **Wire**: `POST /dnd.endDnd`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DndEndDndschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Dnd.DndEndDndRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DndEndDndschema` | `dndEndDndschemaSchema` | `src/models/dnd-end-dndschema.ts` |

### dndEndSnooze

- **Signature**: `dndEndSnooze(request: Dnd.DndEndSnoozeRequest, options?: RequestOptions): ApiPromise<DndEndSnoozeschema, ApiError>`
- **Wire**: `POST /dnd.endSnooze`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DndEndSnoozeschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Dnd.DndEndSnoozeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DndEndSnoozeschema` | `dndEndSnoozeschemaSchema` | `src/models/dnd-end-snoozeschema.ts` |

### dndInfo

- **Signature**: `dndInfo(request: Dnd.DndInfoRequest, options?: RequestOptions): ApiPromise<DndInfoschema, ApiError>`
- **Wire**: `GET /dnd.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DndInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### dndSetSnooze

- **Signature**: `dndSetSnooze(request: Dnd.DndSetSnoozeRequest, options?: RequestOptions): ApiPromise<DndSetSnoozeschema, ApiError>`
- **Wire**: `POST /dnd.setSnooze`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DndSetSnoozeschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### dndTeamInfo

- **Signature**: `dndTeamInfo(request: Dnd.DndTeamInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /dnd.teamInfo`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

