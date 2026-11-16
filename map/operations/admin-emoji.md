<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminEmoji — operations

Accessor: `client.adminEmoji` · Source: `src/resources/admin-emoji.ts` · 5 operations · Request types: namespace `AdminEmoji`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminEmojiAdd

- **Signature**: `adminEmojiAdd(request: AdminEmoji.AdminEmojiAddRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /admin.emoji.add`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminEmojiAddAlias

- **Signature**: `adminEmojiAddAlias(request: AdminEmoji.AdminEmojiAddAliasRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /admin.emoji.addAlias`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminEmojiList

- **Signature**: `adminEmojiList(request: AdminEmoji.AdminEmojiListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /admin.emoji.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminEmojiRemove

- **Signature**: `adminEmojiRemove(request: AdminEmoji.AdminEmojiRemoveRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /admin.emoji.remove`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### adminEmojiRename

- **Signature**: `adminEmojiRename(request: AdminEmoji.AdminEmojiRenameRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /admin.emoji.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

