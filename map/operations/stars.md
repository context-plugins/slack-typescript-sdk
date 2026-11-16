<!-- Generated file — do not edit; regenerated with the SDK. -->

# Stars — operations

Accessor: `client.stars` · Source: `src/resources/stars.ts` · 3 operations · Request types: namespace `Stars`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### starsAdd

- **Signature**: `starsAdd(request: Stars.StarsAddRequest, options?: RequestOptions): ApiPromise<StarsAddschema, ApiError>`
- **Wire**: `POST /stars.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StarsAddschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### starsList

- **Signature**: `starsList(request: Stars.StarsListRequest, options?: RequestOptions): ApiPromise<StarsListschema, ApiError>`
- **Wire**: `GET /stars.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StarsListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### starsRemove

- **Signature**: `starsRemove(request: Stars.StarsRemoveRequest, options?: RequestOptions): ApiPromise<StarsRemoveschema, ApiError>`
- **Wire**: `POST /stars.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StarsRemoveschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

