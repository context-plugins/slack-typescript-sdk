<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdminConversationsEkm — operations

Accessor: `client.adminConversationsEkm` · Source: `src/resources/admin-conversations-ekm.ts` · 1 operation · Request and error types: namespace `AdminConversationsEkm`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adminConversationsEkmListOriginalConnectedChannelInfo

- **Signature**: `adminConversationsEkmListOriginalConnectedChannelInfo(request: AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoRequest, options?: RequestOptions): ApiPromise<Defaultsuccesstemplate, AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError>`
- **Wire**: `GET /admin.conversations.ekm.listOriginalConnectedChannelInfo`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"defaulterrortemplate1"` [default — any status no arm above covers] `Defaulterrortemplate1` · `"undeclared"` [a `default`-matched body that did not fit `Defaulterrortemplate1`] `rawBody: ArrayBuffer`

**Fields** — `AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `channelIds` | `query` | `channel_ids` | `string` | no |
| `teamIds` | `query` | `team_ids` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `Defaultsuccesstemplate` | `defaultsuccesstemplateSchema` | `src/models/defaultsuccesstemplate.ts` |
| `Defaulterrortemplate1` | `defaulterrortemplate1Schema` | `src/models/defaulterrortemplate1.ts` |

