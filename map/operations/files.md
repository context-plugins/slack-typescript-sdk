<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.files` · Source: `src/resources/files.ts` · 13 operations · Request types: namespace `Files`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### filesCommentsDelete

- **Signature**: `filesCommentsDelete(request: Files.FilesCommentsDeleteRequest, options?: RequestOptions): ApiPromise<FilesCommentsDeleteschema, ApiError>`
- **Wire**: `POST /files.comments.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FilesCommentsDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesCommentsDeleteRequest` (4):

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

### filesDelete

- **Signature**: `filesDelete(request: Files.FilesDeleteRequest, options?: RequestOptions): ApiPromise<FilesDeleteschema, ApiError>`
- **Wire**: `POST /files.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FilesDeleteschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesDeleteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `file` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesDeleteschema` | `filesDeleteschemaSchema` | `src/models/files-deleteschema.ts` |

### filesInfo

- **Signature**: `filesInfo(request: Files.FilesInfoRequest, options?: RequestOptions): ApiPromise<FilesInfoschema, ApiError>`
- **Wire**: `GET /files.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilesInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesInfoRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `file` | `query` | — | `string` | no |
| `count` | `query` | — | `string` | no |
| `page` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesInfoschema` | `filesInfoschemaSchema` | `src/models/files-infoschema.ts` |

### filesList

- **Signature**: `filesList(request: Files.FilesListRequest, options?: RequestOptions): ApiPromise<FilesListschema, ApiError>`
- **Wire**: `GET /files.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilesListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesListRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `user` | `query` | — | `string` | no |
| `channel` | `query` | — | `string` | no |
| `tsFrom` | `query` | `ts_from` | `number` | no |
| `tsTo` | `query` | `ts_to` | `number` | no |
| `types` | `query` | — | `string` | no |
| `count` | `query` | — | `string` | no |
| `page` | `query` | — | `string` | no |
| `showFilesHiddenByLimit` | `query` | `show_files_hidden_by_limit` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesListschema` | `filesListschemaSchema` | `src/models/files-listschema.ts` |

### filesRemoteAdd

- **Signature**: `filesRemoteAdd(request: Files.FilesRemoteAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /files.remote.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRemoteAddRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | no |
| `externalId` | `form` | `external_id` | `string` | no |
| `title` | `form` | — | `string` | no |
| `filetype` | `form` | — | `string` | no |
| `externalUrl` | `form` | `external_url` | `string` | no |
| `previewImage` | `form` | `preview_image` | `string` | no |
| `indexableFileContents` | `form` | `indexable_file_contents` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### filesRemoteInfo

- **Signature**: `filesRemoteInfo(request: Files.FilesRemoteInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /files.remote.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRemoteInfoRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `file` | `query` | — | `string` | no |
| `externalId` | `query` | `external_id` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### filesRemoteList

- **Signature**: `filesRemoteList(request: Files.FilesRemoteListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /files.remote.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRemoteListRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `channel` | `query` | — | `string` | no |
| `tsFrom` | `query` | `ts_from` | `number` | no |
| `tsTo` | `query` | `ts_to` | `number` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### filesRemoteRemove

- **Signature**: `filesRemoteRemove(request: Files.FilesRemoteRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /files.remote.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRemoteRemoveRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | no |
| `file` | `form` | — | `string` | no |
| `externalId` | `form` | `external_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### filesRemoteShare

- **Signature**: `filesRemoteShare(request: Files.FilesRemoteShareRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /files.remote.share`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRemoteShareRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `file` | `query` | — | `string` | no |
| `externalId` | `query` | `external_id` | `string` | no |
| `channels` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### filesRemoteUpdate

- **Signature**: `filesRemoteUpdate(request: Files.FilesRemoteUpdateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /files.remote.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRemoteUpdateRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | no |
| `file` | `form` | — | `string` | no |
| `externalId` | `form` | `external_id` | `string` | no |
| `title` | `form` | — | `string` | no |
| `filetype` | `form` | — | `string` | no |
| `externalUrl` | `form` | `external_url` | `string` | no |
| `previewImage` | `form` | `preview_image` | `string` | no |
| `indexableFileContents` | `form` | `indexable_file_contents` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### filesRevokePublicUrl

- **Signature**: `filesRevokePublicUrl(request: Files.FilesRevokePublicUrlRequest, options?: RequestOptions): ApiPromise<FilesRevokePublicUrLschema, ApiError>`
- **Wire**: `POST /files.revokePublicURL`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FilesRevokePublicUrLschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesRevokePublicUrlRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `file` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesRevokePublicUrLschema` | `filesRevokePublicUrLschemaSchema` | `src/models/files-revoke-public-ur-lschema.ts` |

### filesSharedPublicUrl

- **Signature**: `filesSharedPublicUrl(request: Files.FilesSharedPublicUrlRequest, options?: RequestOptions): ApiPromise<FilesSharedPublicUrLschema, ApiError>`
- **Wire**: `POST /files.sharedPublicURL`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FilesSharedPublicUrLschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesSharedPublicUrlRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `file` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesSharedPublicUrLschema` | `filesSharedPublicUrLschemaSchema` | `src/models/files-shared-public-ur-lschema.ts` |

### filesUpload

- **Signature**: `filesUpload(request: Files.FilesUploadRequest, options?: RequestOptions): ApiPromise<FilesUploadschema, ApiError>`
- **Wire**: `POST /files.upload`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FilesUploadschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Files.FilesUploadRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | no |
| `file` | `form` | — | `string` | no |
| `content` | `form` | — | `string` | no |
| `filetype` | `form` | — | `string` | no |
| `filename` | `form` | — | `string` | no |
| `title` | `form` | — | `string` | no |
| `initialComment` | `form` | `initial_comment` | `string` | no |
| `channels` | `form` | — | `string` | no |
| `threadTs` | `form` | `thread_ts` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `FilesUploadschema` | `filesUploadschemaSchema` | `src/models/files-uploadschema.ts` |

