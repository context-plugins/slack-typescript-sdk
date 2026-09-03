<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 1 operation · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### searchMessages

- **Signature**: `searchMessages(request: Search.SearchMessagesRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Search.SearchMessagesError>`
- **Wire**: `GET /search.messages`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Search.SearchMessagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchMessagesRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `query` | `query` | — | `string` | yes |
| `count` | `query` | — | `number` | no |
| `highlight` | `query` | — | `boolean` | no |
| `page` | `query` | — | `number` | no |
| `sort` | `query` | — | `string` | no |
| `sortDir` | `query` | `sort_dir` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

