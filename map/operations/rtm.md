<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rtm — operations

Accessor: `client.rtm` · Source: `src/resources/rtm.ts` · 1 operation · Request and error types: namespace `Rtm`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### rtmConnect

- **Signature**: `rtmConnect(request: Rtm.RtmConnectRequest, options?: RequestOptions): ApiPromise<RtmConnectschema, Rtm.RtmConnectError>`
- **Wire**: `GET /rtm.connect`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RtmConnectschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Rtm.RtmConnectError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"rtmConnecterrorschema1"` [default — any status no arm above covers] `RtmConnecterrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `RtmConnecterrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Rtm.RtmConnectRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `batchPresenceAware` | `query` | `batch_presence_aware` | `boolean` | no |
| `presenceSub` | `query` | `presence_sub` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `RtmConnectschema` | `rtmConnectschemaSchema` | `src/models/rtm-connectschema.ts` |
| `RtmConnecterrorschema1` | `rtmConnecterrorschema1Schema` | `src/models/rtm-connecterrorschema1.ts` |

