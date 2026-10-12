<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stars — operations

Accessor: `client.stars` · Source: `src/resources/stars.ts` · 3 operations · Request and error types: namespace `Stars`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### starsAdd

- **Signature**: `starsAdd(request: Stars.StarsAddRequest, options?: RequestOptions): ApiPromise<StarsAddschema, Stars.StarsAddError>`
- **Wire**: `POST /stars.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StarsAddschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Stars.StarsAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"starsAdderrorschema1"` [default — any status no arm above covers] `StarsAdderrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `StarsAdderrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Stars.StarsAddRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | no |
| `file` | `form` | — | `string` | no |
| `fileComment` | `form` | `file_comment` | `string` | no |
| `timestamp` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `StarsAddschema` | `starsAddschemaSchema` | `src/models/stars-addschema.ts` |
| `StarsAdderrorschema1` | `starsAdderrorschema1Schema` | `src/models/stars-adderrorschema1.ts` |

### starsList

- **Signature**: `starsList(request: Stars.StarsListRequest, options?: RequestOptions): ApiPromise<StarsListschema, Stars.StarsListError>`
- **Wire**: `GET /stars.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StarsListschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Stars.StarsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"starsListerrorschema1"` [default — any status no arm above covers] `StarsListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `StarsListerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Stars.StarsListRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `count` | `query` | — | `string` | no |
| `page` | `query` | — | `string` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `StarsListschema` | `starsListschemaSchema` | `src/models/stars-listschema.ts` |
| `StarsListerrorschema1` | `starsListerrorschema1Schema` | `src/models/stars-listerrorschema1.ts` |

### starsRemove

- **Signature**: `starsRemove(request: Stars.StarsRemoveRequest, options?: RequestOptions): ApiPromise<StarsRemoveschema, Stars.StarsRemoveError>`
- **Wire**: `POST /stars.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StarsRemoveschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Stars.StarsRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"starsRemoveerrorschema1"` [default — any status no arm above covers] `StarsRemoveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `StarsRemoveerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Stars.StarsRemoveRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | no |
| `file` | `form` | — | `string` | no |
| `fileComment` | `form` | `file_comment` | `string` | no |
| `timestamp` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `StarsRemoveschema` | `starsRemoveschemaSchema` | `src/models/stars-removeschema.ts` |
| `StarsRemoveerrorschema1` | `starsRemoveerrorschema1Schema` | `src/models/stars-removeerrorschema1.ts` |

