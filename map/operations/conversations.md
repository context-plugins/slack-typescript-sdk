<!-- Generated file — do not edit; regenerated with the SDK. -->

# Conversations — operations

Accessor: `client.conversations` · Source: `src/resources/conversations.ts` · 18 operations · Request types: namespace `Conversations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### conversationsArchive

- **Signature**: `conversationsArchive(request: Conversations.ConversationsArchiveRequest, options?: RequestOptions): ApiPromise<ConversationsArchivesuccessschema, ApiError>`
- **Wire**: `POST /conversations.archive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsArchivesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsArchiveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsArchivesuccessschema` | `conversationsArchivesuccessschemaSchema` | `src/models/conversations-archivesuccessschema.ts` |

### conversationsClose

- **Signature**: `conversationsClose(request: Conversations.ConversationsCloseRequest, options?: RequestOptions): ApiPromise<ConversationsClosesuccessschema, ApiError>`
- **Wire**: `POST /conversations.close`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsClosesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsCloseRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsClosesuccessschema` | `conversationsClosesuccessschemaSchema` | `src/models/conversations-closesuccessschema.ts` |

### conversationsCreate

- **Signature**: `conversationsCreate(request: Conversations.ConversationsCreateRequest, options?: RequestOptions): ApiPromise<ConversationsCreatesuccessschema, ApiError>`
- **Wire**: `POST /conversations.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsCreatesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsCreateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `name` | `form` | — | `string` | no |
| `isPrivate` | `form` | `is_private` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsCreatesuccessschema` | `conversationsCreatesuccessschemaSchema` | `src/models/conversations-createsuccessschema.ts` |

### conversationsHistory

- **Signature**: `conversationsHistory(request: Conversations.ConversationsHistoryRequest, options?: RequestOptions): ApiPromise<ConversationsHistorysuccessschema, ApiError>`
- **Wire**: `GET /conversations.history`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsHistorysuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsHistoryRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `channel` | `query` | — | `string` | no |
| `latest` | `query` | — | `number` | no |
| `oldest` | `query` | — | `number` | no |
| `inclusive` | `query` | — | `boolean` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsHistorysuccessschema` | `conversationsHistorysuccessschemaSchema` | `src/models/conversations-historysuccessschema.ts` |

### conversationsInfo

- **Signature**: `conversationsInfo(request: Conversations.ConversationsInfoRequest, options?: RequestOptions): ApiPromise<ConversationsInfosuccessschema, ApiError>`
- **Wire**: `GET /conversations.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsInfosuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsInfoRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `channel` | `query` | — | `string` | no |
| `includeLocale` | `query` | `include_locale` | `boolean` | no |
| `includeNumMembers` | `query` | `include_num_members` | `boolean` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsInfosuccessschema` | `conversationsInfosuccessschemaSchema` | `src/models/conversations-infosuccessschema.ts` |

### conversationsInvite

- **Signature**: `conversationsInvite(request: Conversations.ConversationsInviteRequest, options?: RequestOptions): ApiPromise<ConversationsInviteerrorschema, ApiError>`
- **Wire**: `POST /conversations.invite`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsInviteerrorschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsInviteRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `users` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsInviteerrorschema` | `conversationsInviteerrorschemaSchema` | `src/models/conversations-inviteerrorschema.ts` |

### conversationsJoin

- **Signature**: `conversationsJoin(request: Conversations.ConversationsJoinRequest, options?: RequestOptions): ApiPromise<ConversationsJoinsuccessschema, ApiError>`
- **Wire**: `POST /conversations.join`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsJoinsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsJoinRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsJoinsuccessschema` | `conversationsJoinsuccessschemaSchema` | `src/models/conversations-joinsuccessschema.ts` |

### conversationsKick

- **Signature**: `conversationsKick(request: Conversations.ConversationsKickRequest, options?: RequestOptions): ApiPromise<ConversationsKicksuccessschema, ApiError>`
- **Wire**: `POST /conversations.kick`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsKicksuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsKickRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `user` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsKicksuccessschema` | `conversationsKicksuccessschemaSchema` | `src/models/conversations-kicksuccessschema.ts` |

### conversationsLeave

- **Signature**: `conversationsLeave(request: Conversations.ConversationsLeaveRequest, options?: RequestOptions): ApiPromise<ConversationsLeavesuccessschema, ApiError>`
- **Wire**: `POST /conversations.leave`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsLeavesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsLeaveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsLeavesuccessschema` | `conversationsLeavesuccessschemaSchema` | `src/models/conversations-leavesuccessschema.ts` |

### conversationsList

- **Signature**: `conversationsList(request: Conversations.ConversationsListRequest, options?: RequestOptions): ApiPromise<ConversationsListsuccessschema, ApiError>`
- **Wire**: `GET /conversations.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsListRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `excludeArchived` | `query` | `exclude_archived` | `boolean` | no |
| `types` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsListsuccessschema` | `conversationsListsuccessschemaSchema` | `src/models/conversations-listsuccessschema.ts` |

### conversationsMark

- **Signature**: `conversationsMark(request: Conversations.ConversationsMarkRequest, options?: RequestOptions): ApiPromise<ConversationsMarksuccessschema, ApiError>`
- **Wire**: `POST /conversations.mark`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsMarksuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsMarkRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `ts` | `form` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsMarksuccessschema` | `conversationsMarksuccessschemaSchema` | `src/models/conversations-marksuccessschema.ts` |

### conversationsMembers

- **Signature**: `conversationsMembers(request: Conversations.ConversationsMembersRequest, options?: RequestOptions): ApiPromise<ConversationsMemberssuccessschema, ApiError>`
- **Wire**: `GET /conversations.members`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsMemberssuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsMembersRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `channel` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsMemberssuccessschema` | `conversationsMemberssuccessschemaSchema` | `src/models/conversations-memberssuccessschema.ts` |

### conversationsOpen

- **Signature**: `conversationsOpen(request: Conversations.ConversationsOpenRequest, options?: RequestOptions): ApiPromise<ConversationsOpensuccessschema, ApiError>`
- **Wire**: `POST /conversations.open`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsOpensuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsOpenRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `users` | `form` | — | `string` | no |
| `returnIm` | `form` | `return_im` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsOpensuccessschema` | `conversationsOpensuccessschemaSchema` | `src/models/conversations-opensuccessschema.ts` |

### conversationsRename

- **Signature**: `conversationsRename(request: Conversations.ConversationsRenameRequest, options?: RequestOptions): ApiPromise<ConversationsRenamesuccessschema, ApiError>`
- **Wire**: `POST /conversations.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsRenamesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsRenameRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `name` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsRenamesuccessschema` | `conversationsRenamesuccessschemaSchema` | `src/models/conversations-renamesuccessschema.ts` |

### conversationsReplies

- **Signature**: `conversationsReplies(request: Conversations.ConversationsRepliesRequest, options?: RequestOptions): ApiPromise<ConversationsRepliessuccessschema, ApiError>`
- **Wire**: `GET /conversations.replies`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsRepliessuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsRepliesRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `query` | — | `string` | no |
| `channel` | `query` | — | `string` | no |
| `ts` | `query` | — | `number` | no |
| `latest` | `query` | — | `number` | no |
| `oldest` | `query` | — | `number` | no |
| `inclusive` | `query` | — | `boolean` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsRepliessuccessschema` | `conversationsRepliessuccessschemaSchema` | `src/models/conversations-repliessuccessschema.ts` |

### conversationsSetPurpose

- **Signature**: `conversationsSetPurpose(request: Conversations.ConversationsSetPurposeRequest, options?: RequestOptions): ApiPromise<ConversationsSetPurposesuccessschema, ApiError>`
- **Wire**: `POST /conversations.setPurpose`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsSetPurposesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsSetPurposeRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `purpose` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsSetPurposesuccessschema` | `conversationsSetPurposesuccessschemaSchema` | `src/models/conversations-set-purposesuccessschema.ts` |

### conversationsSetTopic

- **Signature**: `conversationsSetTopic(request: Conversations.ConversationsSetTopicRequest, options?: RequestOptions): ApiPromise<ConversationsSetTopicsuccessschema, ApiError>`
- **Wire**: `POST /conversations.setTopic`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsSetTopicsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsSetTopicRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |
| `topic` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsSetTopicsuccessschema` | `conversationsSetTopicsuccessschemaSchema` | `src/models/conversations-set-topicsuccessschema.ts` |

### conversationsUnarchive

- **Signature**: `conversationsUnarchive(request: Conversations.ConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise<ConversationsUnarchivesuccessschema, ApiError>`
- **Wire**: `POST /conversations.unarchive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsUnarchivesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Conversations.ConversationsUnarchiveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `contentType` | `header` | `Content-Type` | `ContentType` | yes |
| `token` | `header` | — | `string` | no |
| `channel` | `form` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ContentType` | `contentTypeSchema` | `src/models/content-type.ts` |
| `ConversationsUnarchivesuccessschema` | `conversationsUnarchivesuccessschemaSchema` | `src/models/conversations-unarchivesuccessschema.ts` |

