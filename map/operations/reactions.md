<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reactions — operations

Accessor: `client.reactions` · Source: `src/resources/reactions.ts` · 4 operations · Request and error types: namespace `Reactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### reactionsAdd

- **Signature**: `reactionsAdd(request: Reactions.ReactionsAddRequest, options?: RequestOptions): ApiPromise<ReactionsAddschema, Reactions.ReactionsAddError>`
- **Wire**: `POST /reactions.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ReactionsAddschema`
- **Error**: `Reactions.ReactionsAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reactionsAdderrorschema1"` [400–599] `ReactionsAdderrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `ReactionsAdderrorschema1` | `reactionsAdderrorschema1Schema` | `src/models/reactions-adderrorschema1.ts` |

### reactionsGet

- **Signature**: `reactionsGet(request: Reactions.ReactionsGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Reactions.ReactionsGetError>`
- **Wire**: `GET /reactions.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `Reactions.ReactionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reactionsGeterrorschema1"` [400–599] `ReactionsGeterrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `ReactionsGeterrorschema1` | `reactionsGeterrorschema1Schema` | `src/models/reactions-geterrorschema1.ts` |

### reactionsList

- **Signature**: `reactionsList(request: Reactions.ReactionsListRequest, options?: RequestOptions): ApiPromise<ReactionsListschema, Reactions.ReactionsListError>`
- **Wire**: `GET /reactions.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReactionsListschema`
- **Error**: `Reactions.ReactionsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reactionsListerrorschema1"` [400–599] `ReactionsListerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `ReactionsListerrorschema1` | `reactionsListerrorschema1Schema` | `src/models/reactions-listerrorschema1.ts` |

### reactionsRemove

- **Signature**: `reactionsRemove(request: Reactions.ReactionsRemoveRequest, options?: RequestOptions): ApiPromise<ReactionsRemoveschema, Reactions.ReactionsRemoveError>`
- **Wire**: `POST /reactions.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ReactionsRemoveschema`
- **Error**: `Reactions.ReactionsRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reactionsRemoveerrorschema1"` [400–599] `ReactionsRemoveerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `ReactionsRemoveerrorschema1` | `reactionsRemoveerrorschema1Schema` | `src/models/reactions-removeerrorschema1.ts` |

