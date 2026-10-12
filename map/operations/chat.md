<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chat — operations

Accessor: `client.chat` · Source: `src/resources/chat.ts` · 10 operations · Request and error types: namespace `Chat`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chatDelete

- **Signature**: `chatDelete(request: Chat.ChatDeleteRequest, options?: RequestOptions): ApiPromise<ChatDeletesuccessschema, Chat.ChatDeleteError>`
- **Wire**: `POST /chat.delete`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatDeletesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatDeleteerrorschema1"` [default — any status no arm above covers] `ChatDeleteerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatDeleteerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatDeleteerrorschema1` | `chatDeleteerrorschema1Schema` | `src/models/chat-deleteerrorschema1.ts` |

### chatDeleteScheduledMessage

- **Signature**: `chatDeleteScheduledMessage(request: Chat.ChatDeleteScheduledMessageRequest, options?: RequestOptions): ApiPromise<ChatDeleteScheduledMessageschema, Chat.ChatDeleteScheduledMessageError>`
- **Wire**: `POST /chat.deleteScheduledMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatDeleteScheduledMessageschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatDeleteScheduledMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatDeleteScheduledMessageerrorschema1"` [default — any status no arm above covers] `ChatDeleteScheduledMessageerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatDeleteScheduledMessageerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatDeleteScheduledMessageerrorschema1` | `chatDeleteScheduledMessageerrorschema1Schema` | `src/models/chat-delete-scheduled-messageerrorschema1.ts` |

### chatGetPermalink

- **Signature**: `chatGetPermalink(request: Chat.ChatGetPermalinkRequest, options?: RequestOptions): ApiPromise<ChatGetPermalinksuccessschema, Chat.ChatGetPermalinkError>`
- **Wire**: `GET /chat.getPermalink`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatGetPermalinksuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatGetPermalinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatGetPermalinkerrorschema1"` [default — any status no arm above covers] `ChatGetPermalinkerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatGetPermalinkerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatGetPermalinkerrorschema1` | `chatGetPermalinkerrorschema1Schema` | `src/models/chat-get-permalinkerrorschema1.ts` |

### chatMeMessage

- **Signature**: `chatMeMessage(request: Chat.ChatMeMessageRequest, options?: RequestOptions): ApiPromise<ChatMeMessageschema, Chat.ChatMeMessageError>`
- **Wire**: `POST /chat.meMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatMeMessageschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatMeMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatMeMessageerrorschema1"` [default — any status no arm above covers] `ChatMeMessageerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatMeMessageerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatMeMessageerrorschema1` | `chatMeMessageerrorschema1Schema` | `src/models/chat-me-messageerrorschema1.ts` |

### chatPostEphemeral

- **Signature**: `chatPostEphemeral(request: Chat.ChatPostEphemeralRequest, options?: RequestOptions): ApiPromise<ChatPostEphemeralsuccessschema, Chat.ChatPostEphemeralError>`
- **Wire**: `POST /chat.postEphemeral`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatPostEphemeralsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatPostEphemeralError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatPostEphemeralerrorschema1"` [default — any status no arm above covers] `ChatPostEphemeralerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatPostEphemeralerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatPostEphemeralerrorschema1` | `chatPostEphemeralerrorschema1Schema` | `src/models/chat-post-ephemeralerrorschema1.ts` |

### chatPostMessage

- **Signature**: `chatPostMessage(request: Chat.ChatPostMessageRequest, options?: RequestOptions): ApiPromise<ChatPostMessagesuccessschema, Chat.ChatPostMessageError>`
- **Wire**: `POST /chat.postMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatPostMessagesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatPostMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatPostMessageerrorschema1"` [default — any status no arm above covers] `ChatPostMessageerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatPostMessageerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatPostMessageerrorschema1` | `chatPostMessageerrorschema1Schema` | `src/models/chat-post-messageerrorschema1.ts` |

### chatScheduleMessage

- **Signature**: `chatScheduleMessage(request: Chat.ChatScheduleMessageRequest, options?: RequestOptions): ApiPromise<ChatScheduleMessagesuccessschema, Chat.ChatScheduleMessageError>`
- **Wire**: `POST /chat.scheduleMessage`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatScheduleMessagesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatScheduleMessageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatScheduleMessageerrorschema1"` [default — any status no arm above covers] `ChatScheduleMessageerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatScheduleMessageerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatScheduleMessageerrorschema1` | `chatScheduleMessageerrorschema1Schema` | `src/models/chat-schedule-messageerrorschema1.ts` |

### chatScheduledMessagesList

- **Signature**: `chatScheduledMessagesList(request: Chat.ChatScheduledMessagesListRequest, options?: RequestOptions): ApiPromise<ChatScheduledMessagesListschema, Chat.ChatScheduledMessagesListError>`
- **Wire**: `GET /chat.scheduledMessages.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChatScheduledMessagesListschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatScheduledMessagesListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatScheduledMessagesListerrorschema1"` [default — any status no arm above covers] `ChatScheduledMessagesListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatScheduledMessagesListerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatScheduledMessagesListerrorschema1` | `chatScheduledMessagesListerrorschema1Schema` | `src/models/chat-scheduled-messages-listerrorschema1.ts` |

### chatUnfurl

- **Signature**: `chatUnfurl(request: Chat.ChatUnfurlRequest, options?: RequestOptions): ApiPromise<ChatUnfurlsuccessschema, Chat.ChatUnfurlError>`
- **Wire**: `POST /chat.unfurl`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatUnfurlsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatUnfurlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatUnfurlerrorschema1"` [default — any status no arm above covers] `ChatUnfurlerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatUnfurlerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatUnfurlerrorschema1` | `chatUnfurlerrorschema1Schema` | `src/models/chat-unfurlerrorschema1.ts` |

### chatUpdate

- **Signature**: `chatUpdate(request: Chat.ChatUpdateRequest, options?: RequestOptions): ApiPromise<ChatUpdatesuccessschema, Chat.ChatUpdateError>`
- **Wire**: `POST /chat.update`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChatUpdatesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Chat.ChatUpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"chatUpdateerrorschema1"` [default — any status no arm above covers] `ChatUpdateerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ChatUpdateerrorschema1`] `rawBody: ArrayBuffer`

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
| `ChatUpdateerrorschema1` | `chatUpdateerrorschema1Schema` | `src/models/chat-updateerrorschema1.ts` |

