<!-- Generated file — do not edit; regenerated with the SDK. -->

# OauthV2 — operations

Accessor: `client.oauthV2` · Source: `src/resources/oauth-v2.ts` · 1 operation · Request and error types: namespace `OauthV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### oauthV2Access

- **Signature**: `oauthV2Access(request: OauthV2.OauthV2AccessRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, OauthV2.OauthV2AccessError>`
- **Wire**: `GET /oauth.v2.access`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `OauthV2.OauthV2AccessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `OauthV2.OauthV2AccessRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `code` | `query` | — | `string` | yes |
| `clientId` | `query` | `client_id` | `string` | no |
| `clientSecret` | `query` | `client_secret` | `string` | no |
| `redirectUri` | `query` | `redirect_uri` | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

