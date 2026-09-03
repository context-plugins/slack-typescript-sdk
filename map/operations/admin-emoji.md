<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminEmoji — operations

Accessor: `client.adminEmoji` · Source: `src/resources/admin-emoji.ts` · 5 operations · Request and error types: namespace `AdminEmoji`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### adminEmojiAdd

- **Signature**: `adminEmojiAdd(request: AdminEmoji.AdminEmojiAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddError>`
- **Wire**: `POST /admin.emoji.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `AdminEmoji.AdminEmojiAddError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminEmoji.AdminEmojiAddRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `url` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiAddAlias

- **Signature**: `adminEmojiAddAlias(request: AdminEmoji.AdminEmojiAddAliasRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddAliasError>`
- **Wire**: `POST /admin.emoji.addAlias`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `AdminEmoji.AdminEmojiAddAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminEmoji.AdminEmojiAddAliasRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `aliasFor` | `form` | `alias_for` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiList

- **Signature**: `adminEmojiList(request: AdminEmoji.AdminEmojiListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiListError>`
- **Wire**: `GET /admin.emoji.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `AdminEmoji.AdminEmojiListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminEmoji.AdminEmojiListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiRemove

- **Signature**: `adminEmojiRemove(request: AdminEmoji.AdminEmojiRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiRemoveError>`
- **Wire**: `POST /admin.emoji.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `AdminEmoji.AdminEmojiRemoveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminEmoji.AdminEmojiRemoveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### adminEmojiRename

- **Signature**: `adminEmojiRename(request: AdminEmoji.AdminEmojiRenameRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminEmoji.AdminEmojiRenameError>`
- **Wire**: `POST /admin.emoji.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `AdminEmoji.AdminEmojiRenameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdminEmoji.AdminEmojiRenameRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `form` | — | `string` | yes |
| `name` | `form` | — | `string` | yes |
| `newName` | `form` | `new_name` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

