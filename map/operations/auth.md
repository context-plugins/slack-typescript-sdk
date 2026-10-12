<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.auth2` · Source: `src/resources/auth.ts` · 2 operations · Request and error types: namespace `Auth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authRevoke

- **Signature**: `authRevoke(request: Auth.AuthRevokeRequest, options?: RequestOptions): ApiPromise<AuthRevokeschema, Auth.AuthRevokeError>`
- **Wire**: `GET /auth.revoke`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthRevokeschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Auth.AuthRevokeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authRevokeerrorschema1"` [default — any status no arm above covers] `AuthRevokeerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AuthRevokeerrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Auth.AuthRevokeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `test` | `query` | — | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AuthRevokeschema` | `authRevokeschemaSchema` | `src/models/auth-revokeschema.ts` |
| `AuthRevokeerrorschema1` | `authRevokeerrorschema1Schema` | `src/models/auth-revokeerrorschema1.ts` |

### authTest

- **Signature**: `authTest(request: Auth.AuthTestRequest, options?: RequestOptions): ApiPromise<AuthTestsuccessschema, Auth.AuthTestError>`
- **Wire**: `GET /auth.test`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthTestsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Auth.AuthTestError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authTesterrorschema1"` [default — any status no arm above covers] `AuthTesterrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `AuthTesterrorschema1`] `rawBody: ArrayBuffer`

**Fields** — `Auth.AuthTestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AuthTestsuccessschema` | `authTestsuccessschemaSchema` | `src/models/auth-testsuccessschema.ts` |
| `AuthTesterrorschema1` | `authTesterrorschema1Schema` | `src/models/auth-testerrorschema1.ts` |

