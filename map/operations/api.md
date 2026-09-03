<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api — operations

Accessor: `client.api` · Source: `src/resources/api.ts` · 1 operation · Request and error types: namespace `Api`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### apiTest

- **Signature**: `apiTest(request: Api.ApiTestRequest, options?: RequestOptions): ApiPromise<ApiTestsuccessschema, Api.ApiTestError>`
- **Wire**: `GET /api.test`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiTestsuccessschema`
- **Error**: `Api.ApiTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiTesterrorschema1"` [400–599] `ApiTesterrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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

