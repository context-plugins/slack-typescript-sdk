<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api — operations

Accessor: `client.api` · Source: `src/resources/api.ts` · 1 operation · Request and error types: namespace `Api`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apiTest

- **Signature**: `apiTest(request: Api.ApiTestRequest, options?: RequestOptions): ApiPromise<ApiTestsuccessschema, Api.ApiTestError>`
- **Wire**: `GET /api.test`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiTestsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Api.ApiTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiTesterrorschema1"` [default — any status no arm above covers] `ApiTesterrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ApiTesterrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Api.ApiTestRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `error` | `query` | — | `string` | no |
| `foo` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ApiTestsuccessschema` | `apiTestsuccessschemaSchema` | `src/models/api-testsuccessschema.ts` |
| `ApiTesterrorschema1` | `apiTesterrorschema1Schema` | `src/models/api-testerrorschema1.ts` |

