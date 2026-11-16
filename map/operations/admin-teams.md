<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminTeams — operations

Accessor: `client.adminTeams` · Source: `src/resources/admin-teams.ts` · 2 operations · Request types: namespace `AdminTeams`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminTeamsCreate

- **Signature**: `adminTeamsCreate(request: AdminTeams.AdminTeamsCreateRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `POST /admin.teams.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdminTeams.AdminTeamsCreateRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `teamDomain` | `form` | `team_domain` | `string` | yes |
| `teamName` | `form` | `team_name` | `string` | yes |
| `teamDescription` | `form` | `team_description` | `string` | no |
| `teamDiscoverability` | `form` | `team_discoverability` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

### adminTeamsList

- **Signature**: `adminTeamsList(request: AdminTeams.AdminTeamsListRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, ApiError>`
- **Wire**: `GET /admin.teams.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `AdminTeams.AdminTeamsListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |

