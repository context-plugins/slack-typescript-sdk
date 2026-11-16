<!-- Generated file — do not edit; regenerated with the SDK. -->

# Auth — operations

Accessor: `client.auth2` · Source: `src/resources/auth.ts` · 2 operations · Request types: namespace `Auth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### authRevoke

- **Signature**: `authRevoke(request: Auth.AuthRevokeRequest, options?: RequestOptions): ApiPromise<AuthRevokeschema, ApiError>`
- **Wire**: `GET /auth.revoke`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthRevokeschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

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

### authTest

- **Signature**: `authTest(request: Auth.AuthTestRequest, options?: RequestOptions): ApiPromise<AuthTestsuccessschema, ApiError>`
- **Wire**: `GET /auth.test`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AuthTestsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Auth.AuthTestRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `AuthTestsuccessschema` | `authTestsuccessschemaSchema` | `src/models/auth-testsuccessschema.ts` |

