<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamProfile — operations

Accessor: `client.teamProfile` · Source: `src/resources/team-profile.ts` · 1 operation · Request types: namespace `TeamProfile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### teamProfileGet

- **Signature**: `teamProfileGet(request: TeamProfile.TeamProfileGetRequest, options?: RequestOptions): ApiPromise<TeamProfileGetsuccessschema, ApiError>`
- **Wire**: `GET /team.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamProfileGetsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TeamProfile.TeamProfileGetRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `visibility` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `TeamProfileGetsuccessschema` | `teamProfileGetsuccessschemaSchema` | `src/models/team-profile-getsuccessschema.ts` |

