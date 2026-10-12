<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reminders — operations

Accessor: `client.reminders` · Source: `src/resources/reminders.ts` · 5 operations · Request and error types: namespace `Reminders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### remindersAdd

- **Signature**: `remindersAdd(request: Reminders.RemindersAddRequest, options?: RequestOptions): ApiPromise<RemindersAddschema, Reminders.RemindersAddError>`
- **Wire**: `POST /reminders.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemindersAddschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Reminders.RemindersAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"remindersAdderrorschema1"` [default — any status no arm above covers] `RemindersAdderrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `RemindersAdderrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Reminders.RemindersAddRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `text` | `form` | — | `string` | yes |
| `time` | `form` | — | `string` | yes |
| `user` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RemindersAddschema` | `remindersAddschemaSchema` | `src/models/reminders-addschema.ts` |
| `RemindersAdderrorschema1` | `remindersAdderrorschema1Schema` | `src/models/reminders-adderrorschema1.ts` |

### remindersComplete

- **Signature**: `remindersComplete(request: Reminders.RemindersCompleteRequest, options?: RequestOptions): ApiPromise<RemindersCompleteschema, Reminders.RemindersCompleteError>`
- **Wire**: `POST /reminders.complete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemindersCompleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Reminders.RemindersCompleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"remindersCompleteerrorschema1"` [default — any status no arm above covers] `RemindersCompleteerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `RemindersCompleteerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Reminders.RemindersCompleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `reminder` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RemindersCompleteschema` | `remindersCompleteschemaSchema` | `src/models/reminders-completeschema.ts` |
| `RemindersCompleteerrorschema1` | `remindersCompleteerrorschema1Schema` | `src/models/reminders-completeerrorschema1.ts` |

### remindersDelete

- **Signature**: `remindersDelete(request: Reminders.RemindersDeleteRequest, options?: RequestOptions): ApiPromise<RemindersDeleteschema, Reminders.RemindersDeleteError>`
- **Wire**: `POST /reminders.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemindersDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Reminders.RemindersDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"remindersDeleteerrorschema1"` [default — any status no arm above covers] `RemindersDeleteerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `RemindersDeleteerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Reminders.RemindersDeleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `reminder` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RemindersDeleteschema` | `remindersDeleteschemaSchema` | `src/models/reminders-deleteschema.ts` |
| `RemindersDeleteerrorschema1` | `remindersDeleteerrorschema1Schema` | `src/models/reminders-deleteerrorschema1.ts` |

### remindersInfo

- **Signature**: `remindersInfo(request: Reminders.RemindersInfoRequest, options?: RequestOptions): ApiPromise<RemindersInfoschema, Reminders.RemindersInfoError>`
- **Wire**: `GET /reminders.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RemindersInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Reminders.RemindersInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"remindersInfoerrorschema1"` [default — any status no arm above covers] `RemindersInfoerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `RemindersInfoerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Reminders.RemindersInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `reminder` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RemindersInfoschema` | `remindersInfoschemaSchema` | `src/models/reminders-infoschema.ts` |
| `RemindersInfoerrorschema1` | `remindersInfoerrorschema1Schema` | `src/models/reminders-infoerrorschema1.ts` |

### remindersList

- **Signature**: `remindersList(request: Reminders.RemindersListRequest, options?: RequestOptions): ApiPromise<RemindersListschema, Reminders.RemindersListError>`
- **Wire**: `GET /reminders.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RemindersListschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Reminders.RemindersListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"remindersListerrorschema1"` [default — any status no arm above covers] `RemindersListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `RemindersListerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Reminders.RemindersListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RemindersListschema` | `remindersListschemaSchema` | `src/models/reminders-listschema.ts` |
| `RemindersListerrorschema1` | `remindersListerrorschema1Schema` | `src/models/reminders-listerrorschema1.ts` |

