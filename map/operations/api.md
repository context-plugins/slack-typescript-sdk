<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api — operations

Accessor: `client.api` · Source: `src/resources/api.ts` · 1 operation · Request types: namespace `Api`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### apiTest

- **Signature**: `apiTest(request: Api.ApiTestRequest, options?: RequestOptions): ApiPromise<ApiTestsuccessschema, ApiError>`
- **Wire**: `GET /api.test`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiTestsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

