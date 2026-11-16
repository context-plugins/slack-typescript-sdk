<!-- Generated file — do not edit; regenerated with the SDK. -->

# Dialog — operations

Accessor: `client.dialog` · Source: `src/resources/dialog.ts` · 1 operation · Request types: namespace `Dialog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### dialogOpen

- **Signature**: `dialogOpen(request: Dialog.DialogOpenRequest, options?: RequestOptions): ApiPromise<DialogOpenschema, ApiError>`
- **Wire**: `GET /dialog.open`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DialogOpenschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

