<!-- Generated file — do not edit; regenerated with the SDK. -->

# Migration — operations

Accessor: `client.migration` · Source: `src/resources/migration.ts` · 1 operation · Request and error types: namespace `Migration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### migrationExchange

- **Signature**: `migrationExchange(request: Migration.MigrationExchangeRequest, options?: RequestOptions): ApiPromise<MigrationExchangesuccessschema, Migration.MigrationExchangeError>`
- **Wire**: `GET /migration.exchange`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MigrationExchangesuccessschema`
- **Error**: `Migration.MigrationExchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"migrationExchangeerrorschema1"` [400–599] `MigrationExchangeerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `MigrationExchangeerrorschema1` | `migrationExchangeerrorschema1Schema` | `src/models/migration-exchangeerrorschema1.ts` |

