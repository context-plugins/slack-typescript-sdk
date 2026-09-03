<!-- Generated file — do not edit; regenerated with the SDK. -->

# ChatScheduledMessages — operations

Accessor: `client.chatScheduledMessages` · Source: `src/resources/chat-scheduled-messages.ts` · 1 operation · Request and error types: namespace `ChatScheduledMessages`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### chatScheduledMessagesList

- **Signature**: `chatScheduledMessagesList(request: ChatScheduledMessages.ChatScheduledMessagesListRequest, options?: RequestOptions): ApiPromise<ChatScheduledMessagesListschema, ChatScheduledMessages.ChatScheduledMessagesListError>`
- **Wire**: `GET /chat.scheduledMessages.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatScheduledMessagesListschema`
- **Error**: `ChatScheduledMessages.ChatScheduledMessagesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatScheduledMessagesListerrorschema1"` [400–599] `ChatScheduledMessagesListerrorschema1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

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
| `ChatScheduledMessagesListerrorschema1` | `chatScheduledMessagesListerrorschema1Schema` | `src/models/chat-scheduled-messages-listerrorschema1.ts` |

