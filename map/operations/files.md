<!-- Generated file — do not edit; regenerated with the SDK. -->

# Files — operations

Accessor: `client.files` · Source: `src/resources/files.ts` · 13 operations · Request and error types: namespace `Files`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### filesCommentsDelete

- **Signature**: `filesCommentsDelete(request: Files.FilesCommentsDeleteRequest, options?: RequestOptions): ApiPromise<FilesCommentsDeleteschema, Files.FilesCommentsDeleteError>`
- **Wire**: `POST /files.comments.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FilesCommentsDeleteschema`
- **Error**: `Files.FilesCommentsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesCommentsDeleteerrorschema1"` [400–599] `FilesCommentsDeleteerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesCommentsDeleteerrorschema1` | `filesCommentsDeleteerrorschema1Schema` | `src/models/files-comments-deleteerrorschema1.ts` |

### filesDelete

- **Signature**: `filesDelete(request: Files.FilesDeleteRequest, options?: RequestOptions): ApiPromise<FilesDeleteschema, Files.FilesDeleteError>`
- **Wire**: `POST /files.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FilesDeleteschema`
- **Error**: `Files.FilesDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesDeleteerrorschema1"` [400–599] `FilesDeleteerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesDeleteerrorschema1` | `filesDeleteerrorschema1Schema` | `src/models/files-deleteerrorschema1.ts` |

### filesInfo

- **Signature**: `filesInfo(request: Files.FilesInfoRequest, options?: RequestOptions): ApiPromise<FilesInfoschema, Files.FilesInfoError>`
- **Wire**: `GET /files.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilesInfoschema`
- **Error**: `Files.FilesInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesInfoerrorschema1"` [400–599] `FilesInfoerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesInfoerrorschema1` | `filesInfoerrorschema1Schema` | `src/models/files-infoerrorschema1.ts` |

### filesList

- **Signature**: `filesList(request: Files.FilesListRequest, options?: RequestOptions): ApiPromise<FilesListschema, Files.FilesListError>`
- **Wire**: `GET /files.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FilesListschema`
- **Error**: `Files.FilesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesListerrorschema1"` [400–599] `FilesListerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesListerrorschema1` | `filesListerrorschema1Schema` | `src/models/files-listerrorschema1.ts` |

### filesRemoteAdd

- **Signature**: `filesRemoteAdd(request: Files.FilesRemoteAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteAddError>`
- **Wire**: `POST /files.remote.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Files.FilesRemoteAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### filesRemoteInfo

- **Signature**: `filesRemoteInfo(request: Files.FilesRemoteInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteInfoError>`
- **Wire**: `GET /files.remote.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Files.FilesRemoteInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### filesRemoteList

- **Signature**: `filesRemoteList(request: Files.FilesRemoteListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteListError>`
- **Wire**: `GET /files.remote.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Files.FilesRemoteListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### filesRemoteRemove

- **Signature**: `filesRemoteRemove(request: Files.FilesRemoteRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteRemoveError>`
- **Wire**: `POST /files.remote.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Files.FilesRemoteRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### filesRemoteShare

- **Signature**: `filesRemoteShare(request: Files.FilesRemoteShareRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteShareError>`
- **Wire**: `GET /files.remote.share`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Files.FilesRemoteShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### filesRemoteUpdate

- **Signature**: `filesRemoteUpdate(request: Files.FilesRemoteUpdateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Files.FilesRemoteUpdateError>`
- **Wire**: `POST /files.remote.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Files.FilesRemoteUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### filesRevokePublicUrl

- **Signature**: `filesRevokePublicUrl(request: Files.FilesRevokePublicUrlRequest, options?: RequestOptions): ApiPromise<FilesRevokePublicUrLschema, Files.FilesRevokePublicUrlError>`
- **Wire**: `POST /files.revokePublicURL`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FilesRevokePublicUrLschema`
- **Error**: `Files.FilesRevokePublicUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesRevokePublicUrLerrorschema1"` [400–599] `FilesRevokePublicUrLerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesRevokePublicUrLerrorschema1` | `filesRevokePublicUrLerrorschema1Schema` | `src/models/files-revoke-public-ur-lerrorschema1.ts` |

### filesSharedPublicUrl

- **Signature**: `filesSharedPublicUrl(request: Files.FilesSharedPublicUrlRequest, options?: RequestOptions): ApiPromise<FilesSharedPublicUrLschema, Files.FilesSharedPublicUrlError>`
- **Wire**: `POST /files.sharedPublicURL`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FilesSharedPublicUrLschema`
- **Error**: `Files.FilesSharedPublicUrlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesSharedPublicUrLerrorschema1"` [400–599] `FilesSharedPublicUrLerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesSharedPublicUrLerrorschema1` | `filesSharedPublicUrLerrorschema1Schema` | `src/models/files-shared-public-ur-lerrorschema1.ts` |

### filesUpload

- **Signature**: `filesUpload(request: Files.FilesUploadRequest, options?: RequestOptions): ApiPromise<FilesUploadschema, Files.FilesUploadError>`
- **Wire**: `POST /files.upload`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FilesUploadschema`
- **Error**: `Files.FilesUploadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"filesUploaderrorschema1"` [400–599] `FilesUploaderrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `FilesUploaderrorschema1` | `filesUploaderrorschema1Schema` | `src/models/files-uploaderrorschema1.ts` |

