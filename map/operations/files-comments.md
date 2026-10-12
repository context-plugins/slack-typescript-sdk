<!-- Generated file — do not edit; regenerated with the SDK. -->

# FilesComments — operations

Accessor: `client.filesComments` · Source: `src/resources/files-comments.ts` · 1 operation · Request and error types: namespace `FilesComments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### filesCommentsDelete

- **Signature**: `filesCommentsDelete(request: FilesComments.FilesCommentsDeleteRequest, options?: RequestOptions): ApiPromise<FilesCommentsDeleteschema, FilesComments.FilesCommentsDeleteError>`
- **Wire**: `POST /files.comments.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FilesCommentsDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesComments.FilesCommentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesCommentsDeleteerrorschema1"` [default — any status no arm above covers] `FilesCommentsDeleteerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `FilesCommentsDeleteerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `FilesComments.FilesCommentsDeleteRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `file` | `form` | — | `string` | no |
| `id` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesCommentsDeleteschema` | `filesCommentsDeleteschemaSchema` | `src/models/files-comments-deleteschema.ts` |
| `FilesCommentsDeleteerrorschema1` | `filesCommentsDeleteerrorschema1Schema` | `src/models/files-comments-deleteerrorschema1.ts` |

