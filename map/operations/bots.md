<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bots — operations

Accessor: `client.bots` · Source: `src/resources/bots.ts` · 1 operation · Request types: namespace `Bots`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### botsInfo

- **Signature**: `botsInfo(request: Bots.BotsInfoRequest, options?: RequestOptions): ApiPromise<BotsInfoschema, ApiError>`
- **Wire**: `GET /bots.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BotsInfoschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bots.BotsInfoRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `bot` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `BotsInfoschema` | `botsInfoschemaSchema` | `src/models/bots-infoschema.ts` |

