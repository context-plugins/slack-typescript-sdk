<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chat — operations

Accessor: `client.chat` · Source: `src/resources/chat.ts` · 10 operations · Request types: namespace `Chat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chatDelete

- **Signature**: `chatDelete(request: Chat.ChatDeleteRequest, options?: RequestOptions): ApiPromise<ChatDeletesuccessschema, ApiError>`
- **Wire**: `POST /chat.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatDeletesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatDeleteRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `ts` | `form` | — | `number` | no |
| `channel` | `form` | — | `string` | no |
| `asUser` | `form` | `as_user` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatDeletesuccessschema` | `chatDeletesuccessschemaSchema` | `src/models/chat-deletesuccessschema.ts` |

### chatDeleteScheduledMessage

- **Signature**: `chatDeleteScheduledMessage(request: Chat.ChatDeleteScheduledMessageRequest, options?: RequestOptions): ApiPromise<ChatDeleteScheduledMessageschema, ApiError>`
- **Wire**: `POST /chat.deleteScheduledMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatDeleteScheduledMessageschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatDeleteScheduledMessageRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `scheduledMessageId` | `form` | `scheduled_message_id` | `string` | yes |
| `asUser` | `form` | `as_user` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatDeleteScheduledMessageschema` | `chatDeleteScheduledMessageschemaSchema` | `src/models/chat-delete-scheduled-messageschema.ts` |

### chatGetPermalink

- **Signature**: `chatGetPermalink(request: Chat.ChatGetPermalinkRequest, options?: RequestOptions): ApiPromise<ChatGetPermalinksuccessschema, ApiError>`
- **Wire**: `GET /chat.getPermalink`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatGetPermalinksuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatGetPermalinkRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | yes |
| `channel` | `query` | — | `string` | yes |
| `messageTs` | `query` | `message_ts` | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatGetPermalinksuccessschema` | `chatGetPermalinksuccessschemaSchema` | `src/models/chat-get-permalinksuccessschema.ts` |

### chatMeMessage

- **Signature**: `chatMeMessage(request: Chat.ChatMeMessageRequest, options?: RequestOptions): ApiPromise<ChatMeMessageschema, ApiError>`
- **Wire**: `POST /chat.meMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatMeMessageschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatMeMessageRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `text` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatMeMessageschema` | `chatMeMessageschemaSchema` | `src/models/chat-me-messageschema.ts` |

### chatPostEphemeral

- **Signature**: `chatPostEphemeral(request: Chat.ChatPostEphemeralRequest, options?: RequestOptions): ApiPromise<ChatPostEphemeralsuccessschema, ApiError>`
- **Wire**: `POST /chat.postEphemeral`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatPostEphemeralsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatPostEphemeralRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `user` | `form` | — | `string` | yes |
| `asUser` | `form` | `as_user` | `boolean` | no |
| `attachments` | `form` | — | `string` | no |
| `blocks` | `form` | — | `string` | no |
| `iconEmoji` | `form` | `icon_emoji` | `string` | no |
| `iconUrl` | `form` | `icon_url` | `string` | no |
| `linkNames` | `form` | `link_names` | `boolean` | no |
| `parse` | `form` | — | `string` | no |
| `text` | `form` | — | `string` | no |
| `threadTs` | `form` | `thread_ts` | `string` | no |
| `username` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatPostEphemeralsuccessschema` | `chatPostEphemeralsuccessschemaSchema` | `src/models/chat-post-ephemeralsuccessschema.ts` |

### chatPostMessage

- **Signature**: `chatPostMessage(request: Chat.ChatPostMessageRequest, options?: RequestOptions): ApiPromise<ChatPostMessagesuccessschema, ApiError>`
- **Wire**: `POST /chat.postMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatPostMessagesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatPostMessageRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `asUser` | `form` | `as_user` | `string` | no |
| `attachments` | `form` | — | `string` | no |
| `blocks` | `form` | — | `string` | no |
| `iconEmoji` | `form` | `icon_emoji` | `string` | no |
| `iconUrl` | `form` | `icon_url` | `string` | no |
| `linkNames` | `form` | `link_names` | `boolean` | no |
| `mrkdwn` | `form` | — | `boolean` | no |
| `parse` | `form` | — | `string` | no |
| `replyBroadcast` | `form` | `reply_broadcast` | `boolean` | no |
| `text` | `form` | — | `string` | no |
| `threadTs` | `form` | `thread_ts` | `string` | no |
| `unfurlLinks` | `form` | `unfurl_links` | `boolean` | no |
| `unfurlMedia` | `form` | `unfurl_media` | `boolean` | no |
| `username` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatPostMessagesuccessschema` | `chatPostMessagesuccessschemaSchema` | `src/models/chat-post-messagesuccessschema.ts` |

### chatScheduleMessage

- **Signature**: `chatScheduleMessage(request: Chat.ChatScheduleMessageRequest, options?: RequestOptions): ApiPromise<ChatScheduleMessagesuccessschema, ApiError>`
- **Wire**: `POST /chat.scheduleMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatScheduleMessagesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatScheduleMessageRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `text` | `form` | — | `string` | no |
| `postAt` | `form` | `post_at` | `string` | no |
| `parse` | `form` | — | `string` | no |
| `asUser` | `form` | `as_user` | `boolean` | no |
| `linkNames` | `form` | `link_names` | `boolean` | no |
| `attachments` | `form` | — | `string` | no |
| `blocks` | `form` | — | `string` | no |
| `unfurlLinks` | `form` | `unfurl_links` | `boolean` | no |
| `unfurlMedia` | `form` | `unfurl_media` | `boolean` | no |
| `threadTs` | `form` | `thread_ts` | `number` | no |
| `replyBroadcast` | `form` | `reply_broadcast` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatScheduleMessagesuccessschema` | `chatScheduleMessagesuccessschemaSchema` | `src/models/chat-schedule-messagesuccessschema.ts` |

### chatScheduledMessagesList

- **Signature**: `chatScheduledMessagesList(request: Chat.ChatScheduledMessagesListRequest, options?: RequestOptions): ApiPromise<ChatScheduledMessagesListschema, ApiError>`
- **Wire**: `GET /chat.scheduledMessages.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatScheduledMessagesListschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatScheduledMessagesListRequest` (7):

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

### chatUnfurl

- **Signature**: `chatUnfurl(request: Chat.ChatUnfurlRequest, options?: RequestOptions): ApiPromise<ChatUnfurlsuccessschema, ApiError>`
- **Wire**: `POST /chat.unfurl`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatUnfurlsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatUnfurlRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `ts` | `form` | — | `string` | yes |
| `unfurls` | `form` | — | `string` | no |
| `userAuthMessage` | `form` | `user_auth_message` | `string` | no |
| `userAuthRequired` | `form` | `user_auth_required` | `boolean` | no |
| `userAuthUrl` | `form` | `user_auth_url` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatUnfurlsuccessschema` | `chatUnfurlsuccessschemaSchema` | `src/models/chat-unfurlsuccessschema.ts` |

### chatUpdate

- **Signature**: `chatUpdate(request: Chat.ChatUpdateRequest, options?: RequestOptions): ApiPromise<ChatUpdatesuccessschema, ApiError>`
- **Wire**: `POST /chat.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatUpdatesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Chat.ChatUpdateRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | yes |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `channel` | `form` | — | `string` | yes |
| `ts` | `form` | — | `string` | yes |
| `asUser` | `form` | `as_user` | `string` | no |
| `attachments` | `form` | — | `string` | no |
| `blocks` | `form` | — | `string` | no |
| `linkNames` | `form` | `link_names` | `string` | no |
| `parse` | `form` | — | `string` | no |
| `text` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ChatUpdatesuccessschema` | `chatUpdatesuccessschemaSchema` | `src/models/chat-updatesuccessschema.ts` |

