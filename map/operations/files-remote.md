<!-- Generated file — do not edit; regenerated with the SDK. -->

# FilesRemote — operations

Accessor: `client.filesRemote` · Source: `src/resources/files-remote.ts` · 6 operations · Request and error types: namespace `FilesRemote`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### filesRemoteAdd

- **Signature**: `filesRemoteAdd(request: FilesRemote.FilesRemoteAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteAddError>`
- **Wire**: `POST /files.remote.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesRemote.FilesRemoteAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `FilesRemote.FilesRemoteAddRequest` (8):

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

- **Signature**: `filesRemoteInfo(request: FilesRemote.FilesRemoteInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteInfoError>`
- **Wire**: `GET /files.remote.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesRemote.FilesRemoteInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `FilesRemote.FilesRemoteInfoRequest` (4):

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

- **Signature**: `filesRemoteList(request: FilesRemote.FilesRemoteListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteListError>`
- **Wire**: `GET /files.remote.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesRemote.FilesRemoteListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `FilesRemote.FilesRemoteListRequest` (7):

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

- **Signature**: `filesRemoteRemove(request: FilesRemote.FilesRemoteRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteRemoveError>`
- **Wire**: `POST /files.remote.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesRemote.FilesRemoteRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `FilesRemote.FilesRemoteRemoveRequest` (4):

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

- **Signature**: `filesRemoteShare(request: FilesRemote.FilesRemoteShareRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteShareError>`
- **Wire**: `GET /files.remote.share`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesRemote.FilesRemoteShareError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `FilesRemote.FilesRemoteShareRequest` (5):

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

- **Signature**: `filesRemoteUpdate(request: FilesRemote.FilesRemoteUpdateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, FilesRemote.FilesRemoteUpdateError>`
- **Wire**: `POST /files.remote.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `FilesRemote.FilesRemoteUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `FilesRemote.FilesRemoteUpdateRequest` (9):

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

