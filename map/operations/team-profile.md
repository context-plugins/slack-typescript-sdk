<!-- Generated file — do not edit; regenerated with the SDK. -->

# TeamProfile — operations

Accessor: `client.teamProfile` · Source: `src/resources/team-profile.ts` · 1 operation · Request and error types: namespace `TeamProfile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### teamProfileGet

- **Signature**: `teamProfileGet(request: TeamProfile.TeamProfileGetRequest, options?: RequestOptions): ApiPromise<TeamProfileGetsuccessschema, TeamProfile.TeamProfileGetError>`
- **Wire**: `GET /team.profile.get`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamProfileGetsuccessschema`
- **Error**: `TeamProfile.TeamProfileGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"teamProfileGeterrorschema1"` [400–599] `TeamProfileGeterrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `TeamProfileGeterrorschema1` | `teamProfileGeterrorschema1Schema` | `src/models/team-profile-geterrorschema1.ts` |

