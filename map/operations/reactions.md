<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reactions — operations

Accessor: `client.reactions` · Source: `src/resources/reactions.ts` · 4 operations · Request types: namespace `Reactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### reactionsAdd

- **Signature**: `reactionsAdd(request: Reactions.ReactionsAddRequest, options?: RequestOptions): ApiPromise<ReactionsAddschema, ApiError>`
- **Wire**: `POST /reactions.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReactionsAddschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reactions.ReactionsAddRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `timestamp` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ReactionsAddschema` | `reactionsAddschemaSchema` | `src/models/reactions-addschema.ts` |

### reactionsGet

- **Signature**: `reactionsGet(request: Reactions.ReactionsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /reactions.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reactions.ReactionsGetRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `channel` | `query` | — | `string` | no |
| `file` | `query` | — | `string` | no |
| `fileComment` | `query` | `file_comment` | `string` | no |
| `full` | `query` | — | `boolean` | no |
| `timestamp` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |

### reactionsList

- **Signature**: `reactionsList(request: Reactions.ReactionsListRequest, options?: RequestOptions): ApiPromise<ReactionsListschema, ApiError>`
- **Wire**: `GET /reactions.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReactionsListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reactions.ReactionsListRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `user` | `query` | — | `string` | no |
| `full` | `query` | — | `boolean` | no |
| `count` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ReactionsListschema` | `reactionsListschemaSchema` | `src/models/reactions-listschema.ts` |

### reactionsRemove

- **Signature**: `reactionsRemove(request: Reactions.ReactionsRemoveRequest, options?: RequestOptions): ApiPromise<ReactionsRemoveschema, ApiError>`
- **Wire**: `POST /reactions.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReactionsRemoveschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reactions.ReactionsRemoveRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `name` | `form` | — | `string` | yes |
| `file` | `form` | — | `string` | no |
| `fileComment` | `form` | `file_comment` | `string` | no |
| `channel` | `form` | — | `string` | no |
| `timestamp` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ReactionsRemoveschema` | `reactionsRemoveschemaSchema` | `src/models/reactions-removeschema.ts` |

