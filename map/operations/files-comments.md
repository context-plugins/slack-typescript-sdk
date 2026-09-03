<!-- Generated file — do not edit; regenerated with the SDK. -->

# FilesComments — operations

Accessor: `client.filesComments` · Source: `src/resources/files-comments.ts` · 1 operation · Request and error types: namespace `FilesComments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### filesCommentsDelete

- **Signature**: `filesCommentsDelete(request: FilesComments.FilesCommentsDeleteRequest, options?: RequestOptions): ApiPromise<FilesCommentsDeleteschema, FilesComments.FilesCommentsDeleteError>`
- **Wire**: `POST /files.comments.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FilesCommentsDeleteschema`
- **Error**: `FilesComments.FilesCommentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesCommentsDeleteerrorschema1"` [400–599] `FilesCommentsDeleteerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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

