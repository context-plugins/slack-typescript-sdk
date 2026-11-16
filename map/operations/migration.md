<!-- Generated file — do not edit; regenerated with the SDK. -->

# Migration — operations

Accessor: `client.migration` · Source: `src/resources/migration.ts` · 1 operation · Request types: namespace `Migration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### migrationExchange

- **Signature**: `migrationExchange(request: Migration.MigrationExchangeRequest, options?: RequestOptions): ApiPromise<MigrationExchangesuccessschema, ApiError>`
- **Wire**: `GET /migration.exchange`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MigrationExchangesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Migration.MigrationExchangeRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `users` | `query` | — | `string` | yes |
| `teamId` | `query` | `team_id` | `string` | no |
| `toOld` | `query` | `to_old` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `MigrationExchangesuccessschema` | `migrationExchangesuccessschemaSchema` | `src/models/migration-exchangesuccessschema.ts` |

