<!-- Generated file — do not edit; regenerated with the SDK. -->

# Conversations — operations

Accessor: `client.conversations` · Source: `src/resources/conversations.ts` · 18 operations · Request and error types: namespace `Conversations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `slack-web-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### conversationsArchive

- **Signature**: `conversationsArchive(request: Conversations.ConversationsArchiveRequest, options?: RequestOptions): ApiPromise<ConversationsArchivesuccessschema, Conversations.ConversationsArchiveError>`
- **Wire**: `POST /conversations.archive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsArchivesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsArchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsArchiveerrorschema1"` [default — any status no arm above covers] `ConversationsArchiveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsArchiveerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsArchiveerrorschema1` | `conversationsArchiveerrorschema1Schema` | `src/models/conversations-archiveerrorschema1.ts` |

### conversationsClose

- **Signature**: `conversationsClose(request: Conversations.ConversationsCloseRequest, options?: RequestOptions): ApiPromise<ConversationsClosesuccessschema, Conversations.ConversationsCloseError>`
- **Wire**: `POST /conversations.close`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsClosesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsCloseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsCloseerrorschema1"` [default — any status no arm above covers] `ConversationsCloseerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsCloseerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsCloseerrorschema1` | `conversationsCloseerrorschema1Schema` | `src/models/conversations-closeerrorschema1.ts` |

### conversationsCreate

- **Signature**: `conversationsCreate(request: Conversations.ConversationsCreateRequest, options?: RequestOptions): ApiPromise<ConversationsCreatesuccessschema, Conversations.ConversationsCreateError>`
- **Wire**: `POST /conversations.create`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsCreatesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsCreateerrorschema1"` [default — any status no arm above covers] `ConversationsCreateerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsCreateerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsCreateerrorschema1` | `conversationsCreateerrorschema1Schema` | `src/models/conversations-createerrorschema1.ts` |

### conversationsHistory

- **Signature**: `conversationsHistory(request: Conversations.ConversationsHistoryRequest, options?: RequestOptions): ApiPromise<ConversationsHistorysuccessschema, Conversations.ConversationsHistoryError>`
- **Wire**: `GET /conversations.history`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsHistorysuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsHistoryerrorschema1"` [default — any status no arm above covers] `ConversationsHistoryerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsHistoryerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsHistoryerrorschema1` | `conversationsHistoryerrorschema1Schema` | `src/models/conversations-historyerrorschema1.ts` |

### conversationsInfo

- **Signature**: `conversationsInfo(request: Conversations.ConversationsInfoRequest, options?: RequestOptions): ApiPromise<ConversationsInfosuccessschema, Conversations.ConversationsInfoError>`
- **Wire**: `GET /conversations.info`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsInfosuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsInfoError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsInfoerrorschema1"` [default — any status no arm above covers] `ConversationsInfoerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsInfoerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsInfoerrorschema1` | `conversationsInfoerrorschema1Schema` | `src/models/conversations-infoerrorschema1.ts` |

### conversationsInvite

- **Signature**: `conversationsInvite(request: Conversations.ConversationsInviteRequest, options?: RequestOptions): ApiPromise<ConversationsInviteerrorschema, Conversations.ConversationsInviteError>`
- **Wire**: `POST /conversations.invite`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsInviteerrorschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsInviteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsInviteerrorschema11"` [default — any status no arm above covers] `ConversationsInviteerrorschema11` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsInviteerrorschema11`] `rawBody: ArrayBuffer`

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
| `ConversationsInviteerrorschema11` | `conversationsInviteerrorschema11Schema` | `src/models/conversations-inviteerrorschema11.ts` |

### conversationsJoin

- **Signature**: `conversationsJoin(request: Conversations.ConversationsJoinRequest, options?: RequestOptions): ApiPromise<ConversationsJoinsuccessschema, Conversations.ConversationsJoinError>`
- **Wire**: `POST /conversations.join`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsJoinsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsJoinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsJoinerrorschema1"` [default — any status no arm above covers] `ConversationsJoinerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsJoinerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsJoinerrorschema1` | `conversationsJoinerrorschema1Schema` | `src/models/conversations-joinerrorschema1.ts` |

### conversationsKick

- **Signature**: `conversationsKick(request: Conversations.ConversationsKickRequest, options?: RequestOptions): ApiPromise<ConversationsKicksuccessschema, Conversations.ConversationsKickError>`
- **Wire**: `POST /conversations.kick`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsKicksuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsKickError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsKickerrorschema1"` [default — any status no arm above covers] `ConversationsKickerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsKickerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsKickerrorschema1` | `conversationsKickerrorschema1Schema` | `src/models/conversations-kickerrorschema1.ts` |

### conversationsLeave

- **Signature**: `conversationsLeave(request: Conversations.ConversationsLeaveRequest, options?: RequestOptions): ApiPromise<ConversationsLeavesuccessschema, Conversations.ConversationsLeaveError>`
- **Wire**: `POST /conversations.leave`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsLeavesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsLeaveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsLeaveerrorschema1"` [default — any status no arm above covers] `ConversationsLeaveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsLeaveerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsLeaveerrorschema1` | `conversationsLeaveerrorschema1Schema` | `src/models/conversations-leaveerrorschema1.ts` |

### conversationsList

- **Signature**: `conversationsList(request: Conversations.ConversationsListRequest, options?: RequestOptions): ApiPromise<ConversationsListsuccessschema, Conversations.ConversationsListError>`
- **Wire**: `GET /conversations.list`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsListsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsListerrorschema1"` [default — any status no arm above covers] `ConversationsListerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsListerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsListerrorschema1` | `conversationsListerrorschema1Schema` | `src/models/conversations-listerrorschema1.ts` |

### conversationsMark

- **Signature**: `conversationsMark(request: Conversations.ConversationsMarkRequest, options?: RequestOptions): ApiPromise<ConversationsMarksuccessschema, Conversations.ConversationsMarkError>`
- **Wire**: `POST /conversations.mark`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsMarksuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsMarkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsMarkerrorschema1"` [default — any status no arm above covers] `ConversationsMarkerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsMarkerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsMarkerrorschema1` | `conversationsMarkerrorschema1Schema` | `src/models/conversations-markerrorschema1.ts` |

### conversationsMembers

- **Signature**: `conversationsMembers(request: Conversations.ConversationsMembersRequest, options?: RequestOptions): ApiPromise<ConversationsMemberssuccessschema, Conversations.ConversationsMembersError>`
- **Wire**: `GET /conversations.members`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsMemberssuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsMembersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsMemberserrorschema1"` [default — any status no arm above covers] `ConversationsMemberserrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsMemberserrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsMemberserrorschema1` | `conversationsMemberserrorschema1Schema` | `src/models/conversations-memberserrorschema1.ts` |

### conversationsOpen

- **Signature**: `conversationsOpen(request: Conversations.ConversationsOpenRequest, options?: RequestOptions): ApiPromise<ConversationsOpensuccessschema, Conversations.ConversationsOpenError>`
- **Wire**: `POST /conversations.open`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsOpensuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsOpenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsOpenerrorschema1"` [default — any status no arm above covers] `ConversationsOpenerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsOpenerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsOpenerrorschema1` | `conversationsOpenerrorschema1Schema` | `src/models/conversations-openerrorschema1.ts` |

### conversationsRename

- **Signature**: `conversationsRename(request: Conversations.ConversationsRenameRequest, options?: RequestOptions): ApiPromise<ConversationsRenamesuccessschema, Conversations.ConversationsRenameError>`
- **Wire**: `POST /conversations.rename`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsRenamesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsRenameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsRenameerrorschema1"` [default — any status no arm above covers] `ConversationsRenameerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsRenameerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsRenameerrorschema1` | `conversationsRenameerrorschema1Schema` | `src/models/conversations-renameerrorschema1.ts` |

### conversationsReplies

- **Signature**: `conversationsReplies(request: Conversations.ConversationsRepliesRequest, options?: RequestOptions): ApiPromise<ConversationsRepliessuccessschema, Conversations.ConversationsRepliesError>`
- **Wire**: `GET /conversations.replies`
- **Auth**: `slackAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsRepliessuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsRepliesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsReplieserrorschema1"` [default — any status no arm above covers] `ConversationsReplieserrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsReplieserrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsReplieserrorschema1` | `conversationsReplieserrorschema1Schema` | `src/models/conversations-replieserrorschema1.ts` |

### conversationsSetPurpose

- **Signature**: `conversationsSetPurpose(request: Conversations.ConversationsSetPurposeRequest, options?: RequestOptions): ApiPromise<ConversationsSetPurposesuccessschema, Conversations.ConversationsSetPurposeError>`
- **Wire**: `POST /conversations.setPurpose`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsSetPurposesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsSetPurposeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsSetPurposeerrorschema1"` [default — any status no arm above covers] `ConversationsSetPurposeerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsSetPurposeerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsSetPurposeerrorschema1` | `conversationsSetPurposeerrorschema1Schema` | `src/models/conversations-set-purposeerrorschema1.ts` |

### conversationsSetTopic

- **Signature**: `conversationsSetTopic(request: Conversations.ConversationsSetTopicRequest, options?: RequestOptions): ApiPromise<ConversationsSetTopicsuccessschema, Conversations.ConversationsSetTopicError>`
- **Wire**: `POST /conversations.setTopic`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsSetTopicsuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsSetTopicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsSetTopicerrorschema1"` [default — any status no arm above covers] `ConversationsSetTopicerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsSetTopicerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsSetTopicerrorschema1` | `conversationsSetTopicerrorschema1Schema` | `src/models/conversations-set-topicerrorschema1.ts` |

### conversationsUnarchive

- **Signature**: `conversationsUnarchive(request: Conversations.ConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise<ConversationsUnarchivesuccessschema, Conversations.ConversationsUnarchiveError>`
- **Wire**: `POST /conversations.unarchive`
- **Auth**: `slackAuth`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsUnarchivesuccessschema`
- **Error**: `SlackWebApiError` with `kind: "api"`, an instance of `Conversations.ConversationsUnarchiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"conversationsUnarchiveerrorschema1"` [default — any status no arm above covers] `ConversationsUnarchiveerrorschema1` · `"undeclared"` [a `default`-matched body that did not fit `ConversationsUnarchiveerrorschema1`] `rawBody: ArrayBuffer`

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
| `ConversationsUnarchiveerrorschema1` | `conversationsUnarchiveerrorschema1Schema` | `src/models/conversations-unarchiveerrorschema1.ts` |

