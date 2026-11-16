<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reminders — operations

Accessor: `client.reminders` · Source: `src/resources/reminders.ts` · 5 operations · Request types: namespace `Reminders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### remindersAdd

- **Signature**: `remindersAdd(request: Reminders.RemindersAddRequest, options?: RequestOptions): ApiPromise<RemindersAddschema, ApiError>`
- **Wire**: `POST /reminders.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemindersAddschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### remindersComplete

- **Signature**: `remindersComplete(request: Reminders.RemindersCompleteRequest, options?: RequestOptions): ApiPromise<RemindersCompleteschema, ApiError>`
- **Wire**: `POST /reminders.complete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemindersCompleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### remindersDelete

- **Signature**: `remindersDelete(request: Reminders.RemindersDeleteRequest, options?: RequestOptions): ApiPromise<RemindersDeleteschema, ApiError>`
- **Wire**: `POST /reminders.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemindersDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### remindersInfo

- **Signature**: `remindersInfo(request: Reminders.RemindersInfoRequest, options?: RequestOptions): ApiPromise<RemindersInfoschema, ApiError>`
- **Wire**: `GET /reminders.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RemindersInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### remindersList

- **Signature**: `remindersList(request: Reminders.RemindersListRequest, options?: RequestOptions): ApiPromise<RemindersListschema, ApiError>`
- **Wire**: `GET /reminders.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RemindersListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reminders.RemindersListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RemindersListschema` | `remindersListschemaSchema` | `src/models/reminders-listschema.ts` |

