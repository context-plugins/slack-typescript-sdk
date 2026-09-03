<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dialog — operations

Accessor: `client.dialog` · Source: `src/resources/dialog.ts` · 1 operation · Request and error types: namespace `Dialog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### dialogOpen

- **Signature**: `dialogOpen(request: Dialog.DialogOpenRequest, options?: RequestOptions): ApiPromise<DialogOpenschema, Dialog.DialogOpenError>`
- **Wire**: `GET /dialog.open`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DialogOpenschema`
- **Error**: `Dialog.DialogOpenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"dialogOpenerrorschema1"` [400–599] `DialogOpenerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Dialog.DialogOpenRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dialog` | `query` | — | `string` | yes |
| `triggerId` | `query` | `trigger_id` | `string` | yes |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `DialogOpenschema` | `dialogOpenschemaSchema` | `src/models/dialog-openschema.ts` |
| `DialogOpenerrorschema1` | `dialogOpenerrorschema1Schema` | `src/models/dialog-openerrorschema1.ts` |

