<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bots — operations

Accessor: `client.bots` · Source: `src/resources/bots.ts` · 1 operation · Request and error types: namespace `Bots`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### botsInfo

- **Signature**: `botsInfo(request: Bots.BotsInfoRequest, options?: RequestOptions): ApiPromise<BotsInfoschema, Bots.BotsInfoError>`
- **Wire**: `GET /bots.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BotsInfoschema`
- **Error**: `Bots.BotsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"botsInfoerrorschema1"` [400–599] `BotsInfoerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `BotsInfoerrorschema1` | `botsInfoerrorschema1Schema` | `src/models/bots-infoerrorschema1.ts` |

