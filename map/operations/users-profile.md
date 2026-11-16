<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersProfile — operations

Accessor: `client.usersProfile` · Source: `src/resources/users-profile.ts` · 2 operations · Request types: namespace `UsersProfile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### usersProfileGet

- **Signature**: `usersProfileGet(request: UsersProfile.UsersProfileGetRequest, options?: RequestOptions): ApiPromise<UsersProfileGetschema, ApiError>`
- **Wire**: `GET /users.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsersProfileGetschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersProfile.UsersProfileGetRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `includeLabels` | `query` | `include_labels` | `boolean` | no |
| `user` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersProfileGetschema` | `usersProfileGetschemaSchema` | `src/models/users-profile-getschema.ts` |

### usersProfileSet

- **Signature**: `usersProfileSet(request: UsersProfile.UsersProfileSetRequest, options?: RequestOptions): ApiPromise<UsersProfileSetschema, ApiError>`
- **Wire**: `POST /users.profile.set`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsersProfileSetschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `UsersProfile.UsersProfileSetRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `name` | `form` | — | `string` | no |
| `profile` | `form` | — | `string` | no |
| `user` | `form` | — | `string` | no |
| `value` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `UsersProfileSetschema` | `usersProfileSetschemaSchema` | `src/models/users-profile-setschema.ts` |

