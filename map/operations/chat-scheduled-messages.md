<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChatScheduledMessages — operations

Accessor: `client.chatScheduledMessages` · Source: `src/resources/chat-scheduled-messages.ts` · 1 operation · Request types: namespace `ChatScheduledMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chatScheduledMessagesList

- **Signature**: `chatScheduledMessagesList(request: ChatScheduledMessages.ChatScheduledMessagesListRequest, options?: RequestOptions): ApiPromise<ChatScheduledMessagesListschema, ApiError>`
- **Wire**: `GET /chat.scheduledMessages.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatScheduledMessagesListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ChatScheduledMessages.ChatScheduledMessagesListRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channel` | `query` | — | `string` | no |
| `latest` | `query` | — | `number` | no |
| `oldest` | `query` | — | `number` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatScheduledMessagesListschema` | `chatScheduledMessagesListschemaSchema` | `src/models/chat-scheduled-messages-listschema.ts` |

