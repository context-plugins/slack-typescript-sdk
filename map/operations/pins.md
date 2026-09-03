<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pins — operations

Accessor: `client.pins` · Source: `src/resources/pins.ts` · 3 operations · Request and error types: namespace `Pins`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### pinsAdd

- **Signature**: `pinsAdd(request: Pins.PinsAddRequest, options?: RequestOptions): ApiPromise<PinsAddschema, Pins.PinsAddError>`
- **Wire**: `POST /pins.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `PinsAddschema`
- **Error**: `Pins.PinsAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"pinsAdderrorschema1"` [400–599] `PinsAdderrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.PinsAddRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `timestamp` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `PinsAddschema` | `pinsAddschemaSchema` | `src/models/pins-addschema.ts` |
| `PinsAdderrorschema1` | `pinsAdderrorschema1Schema` | `src/models/pins-adderrorschema1.ts` |

### pinsList

- **Signature**: `pinsList(request: Pins.PinsListRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Pins.PinsListError>`
- **Wire**: `GET /pins.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `Pins.PinsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"pinsListerrorschema1"` [400–599] `PinsListerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.PinsListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `channel` | `query` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `PinsListerrorschema1` | `pinsListerrorschema1Schema` | `src/models/pins-listerrorschema1.ts` |

### pinsRemove

- **Signature**: `pinsRemove(request: Pins.PinsRemoveRequest, options?: RequestOptions): ApiPromise<PinsRemoveschema, Pins.PinsRemoveError>`
- **Wire**: `POST /pins.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `PinsRemoveschema`
- **Error**: `Pins.PinsRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"pinsRemoveerrorschema1"` [400–599] `PinsRemoveerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Pins.PinsRemoveRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `timestamp` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `PinsRemoveschema` | `pinsRemoveschemaSchema` | `src/models/pins-removeschema.ts` |
| `PinsRemoveerrorschema1` | `pinsRemoveerrorschema1Schema` | `src/models/pins-removeerrorschema1.ts` |

