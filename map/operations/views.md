<!-- Generated file — do not edit; regenerated with the SDK. -->

# Views — operations

Accessor: `client.views` · Source: `src/resources/views.ts` · 4 operations · Request and error types: namespace `Views`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### viewsOpen

- **Signature**: `viewsOpen(request: Views.ViewsOpenRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Views.ViewsOpenError>`
- **Wire**: `GET /views.open`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Views.ViewsOpenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Views.ViewsOpenRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `triggerId` | `query` | `trigger_id` | `string` | yes |
| `view` | `query` | — | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### viewsPublish

- **Signature**: `viewsPublish(request: Views.ViewsPublishRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Views.ViewsPublishError>`
- **Wire**: `GET /views.publish`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Views.ViewsPublishError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Views.ViewsPublishRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userId` | `query` | `user_id` | `string` | yes |
| `view` | `query` | — | `string` | yes |
| `hash` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### viewsPush

- **Signature**: `viewsPush(request: Views.ViewsPushRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Views.ViewsPushError>`
- **Wire**: `GET /views.push`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Views.ViewsPushError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Views.ViewsPushRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `triggerId` | `query` | `trigger_id` | `string` | yes |
| `view` | `query` | — | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

### viewsUpdate

- **Signature**: `viewsUpdate(request: Views.ViewsUpdateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, Views.ViewsUpdateError>`
- **Wire**: `GET /views.update`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `Views.ViewsUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [400–599] `Defaulterrortemplate1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Views.ViewsUpdateRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `viewId` | `query` | `view_id` | `string` | no |
| `externalId` | `query` | `external_id` | `string` | no |
| `view` | `query` | — | `string` | no |
| `hash` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

