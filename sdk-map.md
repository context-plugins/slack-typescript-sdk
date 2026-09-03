<!-- Generated file — do not edit; regenerated with the SDK. -->

# SDK map — Slack Web API (TypeScript)

> A generated table of contents for this SDK. Consult this map and its sub-pages to learn signatures, request-field placement, error types and server wiring **by lookup**. Model shapes are *not* duplicated here — the map names the file declaring each type and the schema value exported beside it; read the shape there. The compiler is the backstop: a wrong name fails to build.

|  |  |
| --- | --- |
| SDK display name | Slack Web API |
| Package | `slack-web-api` |
| Package version | `1.7.0` |
| API spec version | `1.7.0` |
| Import specifier | `slack-web-api` — the package root is the **only** entry. Deep imports (`slack-web-api/models/...`) do not resolve; the `exports` map exposes `.` and `./package.json` and nothing else |
| Module format | dual ESM + CommonJS, as folder dialects (`dist/esm`, `dist/commonjs`), each with its own `package.json` marker. No `.mjs`, `.cjs`, `.d.mts` or `.d.cts` files exist |
| Node floor | `>=20` (`engines.node`) |
| TypeScript floor | a resolver that reads `exports` (4.7+), plus whatever the pinned `zod` requires — `zod@4` needs 5.5 or later. The public `.d.ts` chain reaches `zod/v4-mini`, so this is a real constraint rather than a build-tool version |
| Runtime dependency | `zod` (`^3.25.0 \|\| ^4.0.0`), imported as `zod/v4-mini`. The only runtime dependency |
| Generator | APIMatic |

Staleness check: the API spec version above changes when the SDK is regenerated from a new spec. If a lookup here fails to compile, trust the compiler and re-read the source file named in the row.

All `Source` paths on this map and its sub-pages are relative to the **SDK root** — the directory holding this file and `package.json` — never to the page that carries them: a page two directories deep writes exactly what a page at the root would. The package ships its `src/` tree, so the same paths resolve inside `node_modules/slack-web-api/` too. An import specifier ending `.js` inside that source is the NodeNext spelling of the sibling `.ts` file.

---

## Getting a client

```ts
import { PkceMethod, ServerEnvironment, SlackWebApiClient } from "slack-web-api";

const client = new SlackWebApiClient({
  serverEnvironment: ServerEnvironment.Production,
  slackAuth: {
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "YOUR_REDIRECT_URI",
    pkce: PkceMethod.S256,
    promptForAuthorizationCode: (authorizationUrl, signal) => Promise.resolve("YOUR_AUTHORIZATION_CODE"),
  },
});
```

The only constructor is `new SlackWebApiClient(clientOptions: Partial<ClientOptions> = {})`, so `new SlackWebApiClient()` is valid. Resources are memoized lazy getters on the client — `client.adminApps`, `client.admin`, `client.adminAppsApproved`, `client.adminAppsRequests`, `client.adminAppsRestricted`, `client.adminConversations`, `client.adminConversationsEkm`, `client.adminConversationsRestrictAccess`, `client.adminEmoji`, `client.adminInviteRequests`, `client.adminInviteRequestsApproved`, `client.adminInviteRequestsDenied`, `client.adminTeamsAdmins`, `client.adminTeams`, `client.adminTeamsOwners`, `client.adminTeamsSettings`, `client.adminUsergroups`, `client.adminUsers`, `client.adminUsersSession`, `client.api`, `client.appsEventAuthorizations`, `client.apps`, `client.appsPermissions`, `client.appsPermissionsResources`, `client.appsPermissionsScopes`, `client.appsPermissionsUsers`, `client.auth2`, `client.bots`, `client.calls`, `client.callsParticipants`, `client.chat`, `client.chatScheduledMessages`, `client.conversations`, `client.dialog`, `client.dnd`, `client.emoji`, `client.filesComments`, `client.files`, `client.filesRemote`, `client.migration`, `client.oauth`, `client.oauthV2`, `client.pins`, `client.reactions`, `client.reminders`, `client.rtm`, `client.search`, `client.stars`, `client.teamApi`, `client.teamProfile`, `client.usergroups`, `client.usergroupsUsers`, `client.users`, `client.usersProfile`, `client.views`, `client.workflows` — and their classes are exported only for their merged namespaces and for `instanceof`; their constructors take engine internals that are not exported, so reach a resource only through its getter.

All `ClientOptions` fields (source: `src/client-options.ts`; every field is `readonly`):

| Field | Type | Default |
| --- | --- | --- |
| `serverEnvironment` | `ServerEnvironment` | `ServerEnvironment.Production` |
| `serverOptions` | `ServerOptions` | `{}` — each resolver merges its own per-environment defaults in |
| `timeout` | `number` (ms) | `60_000` |
| `fetch` | `FetchLike \| undefined` | the global `fetch`, resolved by the transport |
| `slackAuth` | `OAuth2AuthorizationCodeCredentials \| undefined` | unset |
| `slackAuthStrategy` | `OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials> \| undefined` | the built-in grant |

The 2 auth fields are all optional, and an unset one is not an error — the operation that wanted it simply sends no credential. What each one puts on the wire, and which operations require it, are under Servers & auth.

Two engine behaviours the table cannot show. A non-finite or non-positive `timeout` is **not** "no timeout" — the transport (`src/core/raw-client.ts`) falls back to its own ceiling and clamps anything above it. And when no `fetch` is reachable the **constructor** throws `SdkError`, not the first call.

**`ClientOptions.fetch` is the one extension point** — there are no hooks, no middleware and no interceptors, so a proxy, a custom agent, extra headers, retries or request logging all go here. A replacement **must forward `init.signal`** to whatever actually performs the request; spreading `...init` does it. Drop it and both the per-call signal and `timeout` go inert — the call neither aborts nor times out.

**Cancellation.** The `signal` on `RequestOptions` is the whole per-request surface. An already-aborted signal rejects immediately, `err.cause` is whatever was passed to `abort()`, and the client-level `timeout` surfaces through the same branch with `err.kind === "timeout"`. There is no per-request timeout.

The entire per-request surface is the optional second argument of every operation:

| Type | Members | Source |
| --- | --- | --- |
| `RequestOptions` | `signal?: AbortSignal` | `src/core/api-request.ts` |

**Not on this SDK.** These are absent by design, not undocumented. This table ships with `src/core/` and is versioned with it.

| You might reach for | Reality |
| --- | --- |
| `maxRetries`, backoff, `Retry-After` handling | no retries. A failed call rejects once |
| a logger, `logLevel`, request/response logging | none. `src/core/` contains no `console` call |
| hooks, middleware, interceptors, `onRequest`/`onResponse` | none. `fetch` is the one extension point |
| pagination, `for await`, auto-paging helpers | no operation is paginated and nothing is async-iterable |
| SSE, `text/event-stream`, `ReadableStream` | no streaming. Every decoder reads the body to completion |
| `FormData`, `Blob`, `File`, multipart, binary bodies | none. The only body kinds are empty, JSON, form-urlencoded and text |
| per-request `headers`, `timeout`, `baseUrl`, idempotency key | none. `RequestOptions` is `{ signal }` |
| the raw `fetch` `Response` | deliberately unreachable. `status` and `headers` are on `asApiResult()` and on a thrown `ResponseError` |

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**, and failures fall into **two disjoint families**. Neither is `instanceof` the other, so the two branches can never overlap and a complete `catch` needs both. `instanceof` is reliable **within one dialect**: a process that loads both — `import` in one file, `require` in another — gets two independent copies of every error class, and `instanceof` across that boundary is `false`. Narrow on `err.kind` or on `err.payload.kind` there, or on `err.name`, which is stable across copies.

- **Family A — the API answered with an error status.** The call rejects with `ResponseError`, or with a subclass of it where the spec declared error bodies for that operation. `err.payload` is a discriminated union whose `kind` names the **response schema the spec declared**, *not* the status code — so two statuses sharing one schema share one arm, and `"undeclared"` is an always-present arm carrying the raw bytes.
- **Family B — no usable response was produced.** The call rejects with a member of the `SlackWebApiError` set. `SlackWebApiError` is **abstract**: use it for `instanceof`, never construct it.

Core types (public members with their declared types; all are `readonly`):

| Type | Public members | Source |
| --- | --- | --- |
| `ResponseError<P>` | `status: number` · `headers: Headers` · `payload: ErrorPayload<P>`, and a `message` of the form `<status> <statusText>` | `src/core/response-error.ts` |
| `Declared<K, B>` | `kind: K` · `body: B` | `src/core/response-error.ts` |
| `ErrorPayload<P>` | `P` or `{ kind: "undeclared"; rawBody: ArrayBuffer }` | `src/core/response-error.ts` |
| `SlackWebApiError` (abstract; declared as `CoreError`) | `kind: ErrorKind` · `message` · `cause` | `src/core/errors.ts` |
| `SchemaError` | `kind: "schema"` · `rawBody: unknown` | `src/core/validation/schema-error.ts` |
| `AuthError` | `kind: "auth"` · `failures: readonly unknown[]` | `src/core/errors.ts` |
| `ApiResult<T, E>` | on success `{ ok: true; status; headers; value: T }`, on failure `{ ok: false; status; headers; errorMessage: string; error }` — `error` carries the **payload**, not the error object | `src/core/api-promise.ts` |

`ErrorKind` is one value per Family B class: `connection` (the `fetch` call rejected, or the body read failed mid-stream), `timeout` (the client-level timeout elapsed), `abort` (the per-call signal aborted, including one that was already aborted), `sdk` (a defect on the SDK side), `schema` (a value failed its schema in **either** direction — inbound the response body was malformed, outbound nothing was sent at all), and `auth` (a credential could not be **obtained**).

**`AuthError` is about obtaining a credential, never about being refused one.** A 401 *from the API* is a Family A `ResponseError` like any other status, so the two are disjoint and one `catch` arm cannot absorb the other. A 401 does have one auth consequence: it invalidates whatever that operation's scheme had cached, so the **next** call re-acquires. The current request is not retried — see Servers & auth.

```ts
try {
  const response = await client.adminApps.adminAppsApprove({ token, contentType });
} catch (err) {
  if (err instanceof ResponseError) {
    // TODO: the API answered with an error status — read err.status and err.payload
  }
  if (err instanceof SlackWebApiError) {
    // TODO: no usable response was produced — err.kind says which
  }
}
```

A typed subclass narrows further, on `err.payload.kind`. Which arms an operation declares, with the status each covers, is the **Error arms** bullet on its page below.

**Matcher precedence** for a subclass with several arms: an exact numeric status is looked up across the whole table **first**; only then does the first covering wildcard or range win.

**The non-throwing form exists on every operation.** `.asApiResult()` returns `ApiResult<T, E>` and does **not** reject for an HTTP error status — it still rejects for Family B. It must be called on the value the operation returned: `ApiPromise` overrides `Symbol.species`, so `.then()`, `.catch()` and `.finally()` hand back a plain `Promise` and the method is gone.

Of **253 operations**, **253** declare typed error bodies and **0** reject with the base `ResponseError`, whose payload is always the `"undeclared"` arm.

---

## Operations — by resource (56 groups, 253 operations)

Each page below carries one block per operation, with bullets in the fixed order **Server**, **Signature**, **Wire**, **Auth**, **Request body**, **SDK-sent**, **Returns**, **Error**, **Error arms**, then a **Fields** table mapping every request field to the channel it travels on, and a **Type sources** table naming the declaring file and schema value of every type the operation mentions. With `api-reference.md` documenting operations only, that table is the route from an operation to the file declaring what it takes.

**Each block states what is specific to its operation. Everything in the table below holds for EVERY operation unless that operation says otherwise, so a block silent on one of these points is telling you the default here applies — take it and move on rather than opening the source to confirm it.**

| Applies to every operation | Stated where | A block departs from it only by |
| --- | --- | --- |
| **Call shape `op(request, options?)`** — one flat request object first, the per-call options second. There is no positional overload, and no per-call base URL, header, timeout, retry or auth override | here, Getting a client | never — it always holds |
| **The request object is flat and channel-blind.** A field named `body` *is* the whole request body; every other field is fanned out to path, query, header or form by the SDK. Nothing in the object is nested by channel | here | never — the **Fields** table `Channel` column always resolves it |
| **Throw-based, returning `ApiPromise<T, E>`.** `await` it for `T`; call `.asApiResult()` on the returned value for the non-throwing `ApiResult<T, E>`. No operation is result-only | here, Error-handling model | never |
| **`E` is the base `ResponseError`** and the payload is always the `"undeclared"` arm | Error-handling model | the spec declared error bodies — the **Error** bullet names a subclass and an **Error arms** bullet gives each arm's tag, status and body |
| **The request body and its media type are stated on every block**, by a **Request body** bullet that is never omitted. `none` means no body **and no `Content-Type` header** | here | never — the bullet is always present |
| **Resolves once, to one whole value.** No pagination, no streaming, no SSE, no async iterables, no partial results, no multipart and no binary anywhere | here, Not on this SDK | never at this SDK version |
| **Server group `default`** | here, Servers & auth | the operation is on another group — its block carries a **Server** bullet |
| **Every operation states its auth requirement**, by an **Auth** bullet that is never omitted — one scheme, a composition over schemes, or `none` for a public operation | here, Servers & auth | never — the bullet is always present |
| **Every value is schema-encoded before the request is built** — a wrong type or format rejects and nothing is sent. **An omitted field that has a default is still sent, with that default**, filled by the SDK rather than by the server | here, Models | the field has a default — it appears in the **Fields** table `Default` column |
| **Field names are TypeScript camelCase and the wire name is the same** | here | some field differs — the **Fields** table gains a `Wire` column, where an em dash means "same as the field name" |
| **Arrays repeat their key and objects bracket-expand** | the serialization block below | never — this SDK declares no per-field serialization style, so every array takes this one |

**Wire serialization, once, for every channel** (source: `src/core/param-value.ts`, `src/core/url.ts`, `src/core/headers.ts`, `src/core/params.ts`). This block ships with `src/core/` and is versioned with it:

- **`path`** takes no style. An array is comma-joined with each element percent-encoded **separately**; an object becomes one percent-encoded JSON document inside the segment. A field whose encoded value is `undefined` throws `SdkError` naming the unfilled placeholder; `null` collapses the segment.
- **`header`** takes no style. An array is comma-joined un-encoded (OpenAPI `simple`). `undefined` says nothing, while `null` and an empty array are tombstones that remove the header. Later layers win by **lowercased** name, in the order body content type, then client defaults, then operation.
- **`query`** and **`form`** repeat an array's key and bracket-expand an object at any depth (`filter[status]=open`, `ranges[amount][min]=10`). An array of *objects* bracket-expands per element with **no index**, so element boundaries collapse.
- Nullish **fields** are dropped from every channel except `path`, where `null` collapses the segment. A nullish array **element** is dropped, so an all-nullish array emits no key at all.
- `form` bodies use RFC 1866 encoding (space becomes `+`); `query` uses `%20`. On the wire both key and value go through `encodeURIComponent`, plus a further escape of `!`, `'`, `(`, `)` and `*`.

**The verb and route are on the pages below**, where a map for a language whose method names are derived from the route can leave them to the source. A TypeScript method name carries none of it, and a `path` field row is unreadable without the route template it fills.

**Endpoint prose is not on this map.** Where the *semantics* of an operation decide what you must pass — a field whose value changes server-side behaviour, an ordering or exclusivity rule between fields — read `api-reference.md`, whose entries are keyed by the same signature these pages print. Blocks here give you the contract: names, channels, types, defaults, errors.

| Resource (`client.X`) | Ops | Page |
| --- | --- | --- |
| `adminApps` | 2 | [map/operations/admin-apps.md](map/operations/admin-apps.md) |
| `admin` | 56 | [map/operations/admin.md](map/operations/admin.md) |
| `adminAppsApproved` | 1 | [map/operations/admin-apps-approved.md](map/operations/admin-apps-approved.md) |
| `adminAppsRequests` | 1 | [map/operations/admin-apps-requests.md](map/operations/admin-apps-requests.md) |
| `adminAppsRestricted` | 1 | [map/operations/admin-apps-restricted.md](map/operations/admin-apps-restricted.md) |
| `adminConversations` | 13 | [map/operations/admin-conversations.md](map/operations/admin-conversations.md) |
| `adminConversationsEkm` | 1 | [map/operations/admin-conversations-ekm.md](map/operations/admin-conversations-ekm.md) |
| `adminConversationsRestrictAccess` | 3 | [map/operations/admin-conversations-restrict-access.md](map/operations/admin-conversations-restrict-access.md) |
| `adminEmoji` | 5 | [map/operations/admin-emoji.md](map/operations/admin-emoji.md) |
| `adminInviteRequests` | 3 | [map/operations/admin-invite-requests.md](map/operations/admin-invite-requests.md) |
| `adminInviteRequestsApproved` | 1 | [map/operations/admin-invite-requests-approved.md](map/operations/admin-invite-requests-approved.md) |
| `adminInviteRequestsDenied` | 1 | [map/operations/admin-invite-requests-denied.md](map/operations/admin-invite-requests-denied.md) |
| `adminTeamsAdmins` | 1 | [map/operations/admin-teams-admins.md](map/operations/admin-teams-admins.md) |
| `adminTeams` | 2 | [map/operations/admin-teams.md](map/operations/admin-teams.md) |
| `adminTeamsOwners` | 1 | [map/operations/admin-teams-owners.md](map/operations/admin-teams-owners.md) |
| `adminTeamsSettings` | 6 | [map/operations/admin-teams-settings.md](map/operations/admin-teams-settings.md) |
| `adminUsergroups` | 4 | [map/operations/admin-usergroups.md](map/operations/admin-usergroups.md) |
| `adminUsers` | 8 | [map/operations/admin-users.md](map/operations/admin-users.md) |
| `adminUsersSession` | 2 | [map/operations/admin-users-session.md](map/operations/admin-users-session.md) |
| `api` | 1 | [map/operations/api.md](map/operations/api.md) |
| `appsEventAuthorizations` | 1 | [map/operations/apps-event-authorizations.md](map/operations/apps-event-authorizations.md) |
| `apps` | 8 | [map/operations/apps.md](map/operations/apps.md) |
| `appsPermissions` | 2 | [map/operations/apps-permissions.md](map/operations/apps-permissions.md) |
| `appsPermissionsResources` | 1 | [map/operations/apps-permissions-resources.md](map/operations/apps-permissions-resources.md) |
| `appsPermissionsScopes` | 1 | [map/operations/apps-permissions-scopes.md](map/operations/apps-permissions-scopes.md) |
| `appsPermissionsUsers` | 2 | [map/operations/apps-permissions-users.md](map/operations/apps-permissions-users.md) |
| `auth2` | 2 | [map/operations/auth.md](map/operations/auth.md) |
| `bots` | 1 | [map/operations/bots.md](map/operations/bots.md) |
| `calls` | 6 | [map/operations/calls.md](map/operations/calls.md) |
| `callsParticipants` | 2 | [map/operations/calls-participants.md](map/operations/calls-participants.md) |
| `chat` | 10 | [map/operations/chat.md](map/operations/chat.md) |
| `chatScheduledMessages` | 1 | [map/operations/chat-scheduled-messages.md](map/operations/chat-scheduled-messages.md) |
| `conversations` | 18 | [map/operations/conversations.md](map/operations/conversations.md) |
| `dialog` | 1 | [map/operations/dialog.md](map/operations/dialog.md) |
| `dnd` | 5 | [map/operations/dnd.md](map/operations/dnd.md) |
| `emoji` | 1 | [map/operations/emoji.md](map/operations/emoji.md) |
| `filesComments` | 1 | [map/operations/files-comments.md](map/operations/files-comments.md) |
| `files` | 13 | [map/operations/files.md](map/operations/files.md) |
| `filesRemote` | 6 | [map/operations/files-remote.md](map/operations/files-remote.md) |
| `migration` | 1 | [map/operations/migration.md](map/operations/migration.md) |
| `oauth` | 3 | [map/operations/oauth.md](map/operations/oauth.md) |
| `oauthV2` | 1 | [map/operations/oauth-v2.md](map/operations/oauth-v2.md) |
| `pins` | 3 | [map/operations/pins.md](map/operations/pins.md) |
| `reactions` | 4 | [map/operations/reactions.md](map/operations/reactions.md) |
| `reminders` | 5 | [map/operations/reminders.md](map/operations/reminders.md) |
| `rtm` | 1 | [map/operations/rtm.md](map/operations/rtm.md) |
| `search` | 1 | [map/operations/search.md](map/operations/search.md) |
| `stars` | 3 | [map/operations/stars.md](map/operations/stars.md) |
| `teamApi` | 5 | [map/operations/team-api.md](map/operations/team-api.md) |
| `teamProfile` | 1 | [map/operations/team-profile.md](map/operations/team-profile.md) |
| `usergroups` | 7 | [map/operations/usergroups.md](map/operations/usergroups.md) |
| `usergroupsUsers` | 2 | [map/operations/usergroups-users.md](map/operations/usergroups-users.md) |
| `users` | 12 | [map/operations/users.md](map/operations/users.md) |
| `usersProfile` | 2 | [map/operations/users-profile.md](map/operations/users-profile.md) |
| `views` | 4 | [map/operations/views.md](map/operations/views.md) |
| `workflows` | 3 | [map/operations/workflows.md](map/operations/workflows.md) |

---

## Models — where they live, how to build them

**Shapes live only in the source.** Every module under `src/models/` declares exactly one model type and the schema value beside it, and both are re-exported from the package root. So there are two facts per type, and the map gives both: the **names you import** and the **file you read**.

```ts
import { type ApImethodusersGetPresence, apImethodusersGetPresenceSchema } from "slack-web-api";
```

Take the pair from an operation's **Type sources** table. **Do not derive the path from the type name** — the transform is not reversible in general, and the table is the authority. There is no default export.

| Group | Count | Directory |
| --- | --- | --- |
| Objects | 357 | `src/models/` |
| Enums (open; const companion plus schema) | 89 | `src/models/` |

**Conventions.** Every model is a plain `type`, not a class — build one with an object literal; there is no constructor and no builder. `f: T` is required, `f?: T` is optional (omit the key), and `f: T | null` is a **required, nullable** field where `null` is a value distinct from an omitted key. Optional properties are declared `f?: T`, not `f?: T | undefined`, so under `exactOptionalPropertyTypes` you must **omit or spread** an absent field rather than assign `undefined` to it.

**Schema companions.** `Schema<T, W = Encoded<T>>` is `{ decode(v: unknown): T; encode(v: unknown): W }`, so a schema value is directly usable both ways. `Encoded<T>` is the wire projection — a `Date` becomes `string | number`, a `Uint8Array` becomes a base64 `string`, recursing through arrays and objects. `EnumSchema<T>` adds `readonly values: readonly T[]`, so an enum's known set is testable at run time.

**Enums are open, and are not TypeScript `enum`s.** Each is a `const` companion object plus a union that includes `(string & {})` or `(number & {})`, so **any** value of the right base type is assignable and the schema validates the base type only, never membership. That is deliberate: an unrecognized server value round-trips instead of throwing. Use `.values` to test membership yourself.

| Enum | Members (member to wire value) | Schema value |
| --- | --- | --- |
| `AdminConversationsArchiveErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` · `AlreadyArchived` to `"already_archived"` · `CantArchiveGeneral` to `"cant_archive_general"` · `RestrictedAction` to `"restricted_action"` · `CouldNotArchiveChannel` to `"could_not_archive_channel"` | `adminConversationsArchiveErrorEnumSchema` |
| `AdminConversationsConvertToPrivateErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `RestrictedAction` to `"restricted_action"` · `NameTaken` to `"name_taken"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` · `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `CouldNotConvertChannel` to `"could_not_convert_channel"` · `ExternalChannelMigrating` to `"external_channel_migrating"` | `adminConversationsConvertToPrivateErrorEnumSchema` |
| `AdminConversationsCreateErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `NameTaken` to `"name_taken"` · `RestrictedAction` to `"restricted_action"` · `TeamNotFound` to `"team_not_found"` · `InvalidTeam` to `"invalid_team"` · `InvalidName` to `"invalid_name"` · `CouldNotCreateChannel` to `"could_not_create_channel"` · `TeamIdOrOrgRequired` to `"team_id_or_org_required"` | `adminConversationsCreateErrorEnumSchema` |
| `AdminConversationsDeleteErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `NotAnAdmin` to `"not_an_admin"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` · `RestrictedAction` to `"restricted_action"` · `CouldNotDeleteChannel` to `"could_not_delete_channel"` · `MissingScope` to `"missing_scope"` | `adminConversationsDeleteErrorEnumSchema` |
| `AdminConversationsDisconnectSharedErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `NotAnAdmin` to `"not_an_admin"` · `NotAnEnterprise` to `"not_an_enterprise"` · `ChannelNotFound` to `"channel_not_found"` · `NotSupported` to `"not_supported"` · `TeamNotFound` to `"team_not_found"` · `RestrictedAction` to `"restricted_action"` · `MissingScope` to `"missing_scope"` · `LeavingTeamNotInChannel` to `"leaving_team_not_in_channel"` · `NoTeamsToDisconnect` to `"no_teams_to_disconnect"` · `LeavingTeamRequired` to `"leaving_team_required"` · `CannotKickTeam` to `"cannot_kick_team"` · `CannotKickHomeTeam` to `"cannot_kick_home_team"` | `adminConversationsDisconnectSharedErrorEnumSchema` |
| `AdminConversationsGetConversationPrefsErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `NotAnAdmin` to `"not_an_admin"` · `NotAnEnterprise` to `"not_an_enterprise"` · `RestrictedAction` to `"restricted_action"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `CouldNotGetConversationPrefs` to `"could_not_get_conversation_prefs"` | `adminConversationsGetConversationPrefsErrorEnumSchema` |
| `AdminConversationsGetTeamsErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `UnsupportedTeamType` to `"unsupported_team_type"` · `RestrictedAction` to `"restricted_action"` · `CouldNotGetTeams` to `"could_not_get_teams"` · `InvalidCursor` to `"invalid_cursor"` · `InvalidLimit` to `"invalid_limit"` | `adminConversationsGetTeamsErrorEnumSchema` |
| `AdminConversationsInviteErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` · `RestrictedAction` to `"restricted_action"` · `UserMustBeAdmin` to `"user_must_be_admin"` · `FailedForSomeUsers` to `"failed_for_some_users"` | `adminConversationsInviteErrorEnumSchema` |
| `AdminConversationsRenameErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `RestrictedAction` to `"restricted_action"` · `CouldNotRenameChannel` to `"could_not_rename_channel"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` · `NameTaken` to `"name_taken"` | `adminConversationsRenameErrorEnumSchema` |
| `AdminConversationsSearchErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `NotAnAdmin` to `"not_an_admin"` · `NotAnEnterprise` to `"not_an_enterprise"` · `TeamNotFound` to `"team_not_found"` · `NotAllowed` to `"not_allowed"` · `InvalidAuth` to `"invalid_auth"` · `InvalidCursor` to `"invalid_cursor"` · `InvalidSearchChannelType` to `"invalid_search_channel_type"` · `InvalidSort` to `"invalid_sort"` · `InvalidSortDir` to `"invalid_sort_dir"` | `adminConversationsSearchErrorEnumSchema` |
| `AdminConversationsSetConversationPrefsErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `NotAnAdmin` to `"not_an_admin"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `RestrictedAction` to `"restricted_action"` · `MissingScope` to `"missing_scope"` · `CouldNotSetChannelPref` to `"could_not_set_channel_pref"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` | `adminConversationsSetConversationPrefsErrorEnumSchema` |
| `AdminConversationsUnarchiveErrorEnum` | `FeatureNotEnabled` to `"feature_not_enabled"` · `ChannelNotFound` to `"channel_not_found"` · `ChannelNotArchived` to `"channel_not_archived"` · `ChannelTypeNotSupported` to `"channel_type_not_supported"` · `RestrictedAction` to `"restricted_action"` · `CouldNotUnarchiveChannel` to `"could_not_unarchive_channel"` · `DefaultOrgWideChannel` to `"default_org_wide_channel"` · `MissingScope` to `"missing_scope"` | `adminConversationsUnarchiveErrorEnumSchema` |
| `AppsPermissionsInfoErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `appsPermissionsInfoErrorEnumSchema` |
| `AppsPermissionsRequestErrorEnum` | `InvalidTrigger` to `"invalid_trigger"` · `TriggerExchanged` to `"trigger_exchanged"` · `InvalidScope` to `"invalid_scope"` · `InvalidUser` to `"invalid_user"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `appsPermissionsRequestErrorEnumSchema` |
| `AppsPermissionsResourcesListErrorEnum` | `InvalidCursor` to `"invalid_cursor"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `appsPermissionsResourcesListErrorEnumSchema` |
| `AppsUninstallErrorEnum` | `InvalidClientId` to `"invalid_client_id"` · `BadClientSecret` to `"bad_client_secret"` · `ClientIdTokenMismatch` to `"client_id_token_mismatch"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `appsUninstallErrorEnumSchema` |
| `AuthRevokeErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `authRevokeErrorEnumSchema` |
| `AuthTestErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `TokenRevoked` to `"token_revoked"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `authTestErrorEnumSchema` |
| `BotsInfoErrorEnum` | `BotNotFound` to `"bot_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `botsInfoErrorEnumSchema` |
| `ChatDeleteErrorEnum` | `MessageNotFound` to `"message_not_found"` · `ChannelNotFound` to `"channel_not_found"` · `CantDeleteMessage` to `"cant_delete_message"` · `ComplianceExportsPreventDeletion` to `"compliance_exports_prevent_deletion"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatDeleteErrorEnumSchema` |
| `ChatDeleteScheduledMessageErrorEnum` | `InvalidScheduledMessageId` to `"invalid_scheduled_message_id"` · `ChannelNotFound` to `"channel_not_found"` · `BadToken` to `"bad_token"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `EkmAccessDenied` to `"ekm_access_denied"` · `MissingScope` to `"missing_scope"` · `InvalidArguments` to `"invalid_arguments"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatDeleteScheduledMessageErrorEnumSchema` |
| `ChatGetPermalinkErrorEnum` | `ChannelNotFound` to `"channel_not_found"` · `MessageNotFound` to `"message_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatGetPermalinkErrorEnumSchema` |
| `ChatMeMessageErrorEnum` | `ChannelNotFound` to `"channel_not_found"` · `NotInChannel` to `"not_in_channel"` · `IsArchived` to `"is_archived"` · `MsgTooLong` to `"msg_too_long"` · `NoText` to `"no_text"` · `RateLimited` to `"rate_limited"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatMeMessageErrorEnumSchema` |
| `ChatPostEphemeralErrorEnum` | `ChannelNotFound` to `"channel_not_found"` · `IsArchived` to `"is_archived"` · `MsgTooLong` to `"msg_too_long"` · `NoText` to `"no_text"` · `RestrictedAction` to `"restricted_action"` · `TooManyAttachments` to `"too_many_attachments"` · `UserNotInChannel` to `"user_not_in_channel"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatPostEphemeralErrorEnumSchema` |
| `ChatPostMessageErrorEnum` | `ChannelNotFound` to `"channel_not_found"` · `NotInChannel` to `"not_in_channel"` · `IsArchived` to `"is_archived"` · `MsgTooLong` to `"msg_too_long"` · `NoText` to `"no_text"` · `TooManyAttachments` to `"too_many_attachments"` · `RateLimited` to `"rate_limited"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` | `chatPostMessageErrorEnumSchema` |
| `ChatScheduleMessageErrorEnum` | `InvalidTime` to `"invalid_time"` · `TimeInPast` to `"time_in_past"` · `TimeTooFar` to `"time_too_far"` · `ChannelNotFound` to `"channel_not_found"` · `NotInChannel` to `"not_in_channel"` · `IsArchived` to `"is_archived"` · `MsgTooLong` to `"msg_too_long"` · `NoText` to `"no_text"` · `RestrictedAction` to `"restricted_action"` · `RestrictedActionReadOnlyChannel` to `"restricted_action_read_only_channel"` · `RestrictedActionThreadOnlyChannel` to `"restricted_action_thread_only_channel"` · `RestrictedActionNonThreadableChannel` to `"restricted_action_non_threadable_channel"` · `TooManyAttachments` to `"too_many_attachments"` · `RateLimited` to `"rate_limited"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `EkmAccessDenied` to `"ekm_access_denied"` · `MissingScope` to `"missing_scope"` · `InvalidArguments` to `"invalid_arguments"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatScheduleMessageErrorEnumSchema` |
| `ChatScheduledMessagesListErrorEnum` | `InvalidChannel` to `"invalid_channel"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `EkmAccessDenied` to `"ekm_access_denied"` · `MissingScope` to `"missing_scope"` · `InvalidArguments` to `"invalid_arguments"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatScheduledMessagesListErrorEnumSchema` |
| `ChatUnfurlErrorEnum` | `CannotUnfurlUrl` to `"cannot_unfurl_url"` · `CannotFindService` to `"cannot_find_service"` · `MissingUnfurls` to `"missing_unfurls"` · `CannotPrompt` to `"cannot_prompt"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `chatUnfurlErrorEnumSchema` |
| `ChatUpdateErrorEnum` | `MessageNotFound` to `"message_not_found"` · `CantUpdateMessage` to `"cant_update_message"` · `ChannelNotFound` to `"channel_not_found"` · `EditWindowClosed` to `"edit_window_closed"` · `MsgTooLong` to `"msg_too_long"` · `TooManyAttachments` to `"too_many_attachments"` · `RateLimited` to `"rate_limited"` · `NoText` to `"no_text"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `RequestTimeout` to `"request_timeout"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` · `IsInactive` to `"is_inactive"` | `chatUpdateErrorEnumSchema` |
| `ContentType` | `ApplicationXWwwFormUrlencoded` to `"application/x-www-form-urlencoded"` | `contentTypeSchema` |
| `ConversationsArchiveErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `NotSupported` to `"not_supported"` · `ChannelNotFound` to `"channel_not_found"` · `AlreadyArchived` to `"already_archived"` · `CantArchiveGeneral` to `"cant_archive_general"` · `RestrictedAction` to `"restricted_action"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `UserIsUltraRestricted` to `"user_is_ultra_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `TeamAddedToOrg` to `"team_added_to_org"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `conversationsArchiveErrorEnumSchema` |
| `ConversationsCloseErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `ChannelNotFound` to `"channel_not_found"` · `UserDoesNotOwnChannel` to `"user_does_not_own_channel"` · `MissingScope` to `"missing_scope"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsCloseErrorEnumSchema` |
| `ConversationsCreateErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `NameTaken` to `"name_taken"` · `RestrictedAction` to `"restricted_action"` · `NoChannel` to `"no_channel"` · `InvalidNameRequired` to `"invalid_name_required"` · `InvalidNamePunctuation` to `"invalid_name_punctuation"` · `InvalidNameMaxlength` to `"invalid_name_maxlength"` · `InvalidNameSpecials` to `"invalid_name_specials"` · `InvalidName` to `"invalid_name"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsCreateErrorEnumSchema` |
| `ConversationsHistoryErrorEnum` | `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `InvalidTsLatest` to `"invalid_ts_latest"` · `InvalidTsOldest` to `"invalid_ts_oldest"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsHistoryErrorEnumSchema` |
| `ConversationsInfoErrorEnum` | `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `TeamAddedToOrg` to `"team_added_to_org"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsInfoErrorEnumSchema` |
| `ConversationsInviteErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `UserNotFound` to `"user_not_found"` · `NoUser` to `"no_user"` · `CantInviteSelf` to `"cant_invite_self"` · `NotInChannel` to `"not_in_channel"` · `AlreadyInChannel` to `"already_in_channel"` · `IsArchived` to `"is_archived"` · `CantInvite` to `"cant_invite"` · `TooManyUsers` to `"too_many_users"` · `UraMaxChannels` to `"ura_max_channels"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `UserIsUltraRestricted` to `"user_is_ultra_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `TeamAddedToOrg` to `"team_added_to_org"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `conversationsInviteErrorEnumSchema` |
| `ConversationsJoinErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `IsArchived` to `"is_archived"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `UserIsUltraRestricted` to `"user_is_ultra_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `TeamAddedToOrg` to `"team_added_to_org"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `conversationsJoinErrorEnumSchema` |
| `ConversationsKickErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `UserNotFound` to `"user_not_found"` · `CantKickSelf` to `"cant_kick_self"` · `NotInChannel` to `"not_in_channel"` · `CantKickFromGeneral` to `"cant_kick_from_general"` · `RestrictedAction` to `"restricted_action"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsKickErrorEnumSchema` |
| `ConversationsLeaveErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `LastMember` to `"last_member"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `IsArchived` to `"is_archived"` · `CantLeaveGeneral` to `"cant_leave_general"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `UserIsUltraRestricted` to `"user_is_ultra_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `TeamAddedToOrg` to `"team_added_to_org"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `conversationsLeaveErrorEnumSchema` |
| `ConversationsListErrorEnum` | `MissingScope` to `"missing_scope"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsListErrorEnumSchema` |
| `ConversationsMarkErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `InvalidTimestamp` to `"invalid_timestamp"` · `NotInChannel` to `"not_in_channel"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `NotAllowedTokenType` to `"not_allowed_token_type"` | `conversationsMarkErrorEnumSchema` |
| `ConversationsMembersErrorEnum` | `ChannelNotFound` to `"channel_not_found"` · `InvalidLimit` to `"invalid_limit"` · `InvalidCursor` to `"invalid_cursor"` · `FetchMembersFailed` to `"fetch_members_failed"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsMembersErrorEnumSchema` |
| `ConversationsOpenErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `UserNotFound` to `"user_not_found"` · `UserNotVisible` to `"user_not_visible"` · `UserDisabled` to `"user_disabled"` · `UsersListNotSupplied` to `"users_list_not_supplied"` · `NotEnoughUsers` to `"not_enough_users"` · `TooManyUsers` to `"too_many_users"` · `InvalidUserCombination` to `"invalid_user_combination"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `ChannelNotFound` to `"channel_not_found"` | `conversationsOpenErrorEnumSchema` |
| `ConversationsRenameErrorEnum` | `UserIsRestricted` to `"user_is_restricted"` · `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `NotInChannel` to `"not_in_channel"` · `NotAuthorized` to `"not_authorized"` · `InvalidName` to `"invalid_name"` · `NameTaken` to `"name_taken"` · `InvalidNameRequired` to `"invalid_name_required"` · `InvalidNamePunctuation` to `"invalid_name_punctuation"` · `InvalidNameMaxlength` to `"invalid_name_maxlength"` · `InvalidNameSpecials` to `"invalid_name_specials"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsRenameErrorEnumSchema` |
| `ConversationsRepliesErrorEnum` | `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `ThreadNotFound` to `"thread_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsRepliesErrorEnumSchema` |
| `ConversationsSetPurposeErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `NotInChannel` to `"not_in_channel"` · `IsArchived` to `"is_archived"` · `TooLong` to `"too_long"` · `UserIsRestricted` to `"user_is_restricted"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `conversationsSetPurposeErrorEnumSchema` |
| `ConversationsUnarchiveErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `ChannelNotFound` to `"channel_not_found"` · `NotArchived` to `"not_archived"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `UserIsUltraRestricted` to `"user_is_ultra_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `TeamAddedToOrg` to `"team_added_to_org"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `conversationsUnarchiveErrorEnumSchema` |
| `DialogOpenErrorEnum` | `ValidationErrors` to `"validation_errors"` · `MissingTrigger` to `"missing_trigger"` · `MissingDialog` to `"missing_dialog"` · `TriggerExchanged` to `"trigger_exchanged"` · `TriggerExpired` to `"trigger_expired"` · `InvalidTrigger` to `"invalid_trigger"` · `AppMissingActionUrl` to `"app_missing_action_url"` · `CannotCreateDialog` to `"cannot_create_dialog"` · `FailedSendingDialog` to `"failed_sending_dialog"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `dialogOpenErrorEnumSchema` |
| `DndEndDndErrorEnum` | `UnknownError` to `"unknown_error"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `dndEndDndErrorEnumSchema` |
| `DndEndSnoozeErrorEnum` | `SnoozeNotActive` to `"snooze_not_active"` · `SnoozeEndFailed` to `"snooze_end_failed"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `dndEndSnoozeErrorEnumSchema` |
| `DndInfoErrorEnum` | `UserNotFound` to `"user_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `dndInfoErrorEnumSchema` |
| `DndSetSnoozeErrorEnum` | `MissingDuration` to `"missing_duration"` · `SnoozeFailed` to `"snooze_failed"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `TooLong` to `"too_long"` · `FatalError` to `"fatal_error"` | `dndSetSnoozeErrorEnumSchema` |
| `FilesCommentsDeleteErrorEnum` | `CantDelete` to `"cant_delete"` · `CommentNotFound` to `"comment_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `filesCommentsDeleteErrorEnumSchema` |
| `FilesDeleteErrorEnum` | `FileNotFound` to `"file_not_found"` · `FileDeleted` to `"file_deleted"` · `CantDeleteFile` to `"cant_delete_file"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `filesDeleteErrorEnumSchema` |
| `FilesInfoErrorEnum` | `FileNotFound` to `"file_not_found"` · `FileDeleted` to `"file_deleted"` · `TimezoneCountFailed` to `"timezone_count_failed"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `filesInfoErrorEnumSchema` |
| `FilesListErrorEnum` | `UserNotFound` to `"user_not_found"` · `UnknownType` to `"unknown_type"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `filesListErrorEnumSchema` |
| `FilesRevokePublicUrlErrorEnum` | `FileNotFound` to `"file_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `filesRevokePublicUrlErrorEnumSchema` |
| `FilesSharedPublicUrlErrorEnum` | `FileNotFound` to `"file_not_found"` · `NotAllowed` to `"not_allowed"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `filesSharedPublicUrlErrorEnumSchema` |
| `FilesUploadErrorEnum` | `PostingToGeneralChannelDenied` to `"posting_to_general_channel_denied"` · `InvalidChannel` to `"invalid_channel"` · `FileUploadsDisabled` to `"file_uploads_disabled"` · `FileUploadsExceptImagesDisabled` to `"file_uploads_except_images_disabled"` · `StorageLimitReached` to `"storage_limit_reached"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `filesUploadErrorEnumSchema` |
| `MigrationExchangeErrorEnum` | `NotEnterpriseTeam` to `"not_enterprise_team"` · `TooManyUsers` to `"too_many_users"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `migrationExchangeErrorEnumSchema` |
| `PinsAddErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `MessageNotFound` to `"message_not_found"` · `ChannelNotFound` to `"channel_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `AlreadyPinned` to `"already_pinned"` · `PermissionDenied` to `"permission_denied"` · `FileNotShared` to `"file_not_shared"` · `NotPinnable` to `"not_pinnable"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `pinsAddErrorEnumSchema` |
| `PinsListErrorEnum` | `ChannelNotFound` to `"channel_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `pinsListErrorEnumSchema` |
| `PinsRemoveErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `FileNotFound` to `"file_not_found"` · `FileCommentNotFound` to `"file_comment_not_found"` · `MessageNotFound` to `"message_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `NotPinned` to `"not_pinned"` · `PermissionDenied` to `"permission_denied"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostTyp` to `"invalid_post_typ"` · `MissingPostTyp` to `"missing_post_typ"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeou` to `"request_timeou"` · `UpgradeRequired` to `"upgrade_required"` | `pinsRemoveErrorEnumSchema` |
| `Plan` | `Std` to `"std"` · `Plus` to `"plus"` · `Compliance` to `"compliance"` · `Enterprise` to `"enterprise"` | `planSchema` |
| `ReactionsAddErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `MessageNotFound` to `"message_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `InvalidName` to `"invalid_name"` · `AlreadyReacted` to `"already_reacted"` · `TooManyEmoji` to `"too_many_emoji"` · `TooManyReactions` to `"too_many_reactions"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `reactionsAddErrorEnumSchema` |
| `ReactionsGetErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `FileNotFound` to `"file_not_found"` · `FileCommentNotFound` to `"file_comment_not_found"` · `MessageNotFound` to `"message_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `reactionsGetErrorEnumSchema` |
| `ReactionsListErrorEnum` | `UserNotFound` to `"user_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactiv` to `"account_inactiv"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `reactionsListErrorEnumSchema` |
| `ReactionsRemoveErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `FileNotFound` to `"file_not_found"` · `FileCommentNotFound` to `"file_comment_not_found"` · `MessageNotFound` to `"message_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `InvalidName` to `"invalid_name"` · `NoReaction` to `"no_reaction"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `reactionsRemoveErrorEnumSchema` |
| `RemindersAddErrorEnum` | `CannotParse` to `"cannot_parse"` · `UserNotFound` to `"user_not_found"` · `CannotAddBot` to `"cannot_add_bot"` · `CannotAddSlackbot` to `"cannot_add_slackbot"` · `CannotAddOthers` to `"cannot_add_others"` · `CannotAddOthersRecurring` to `"cannot_add_others_recurring"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `remindersAddErrorEnumSchema` |
| `RemindersCompleteErrorEnum` | `NotFound` to `"not_found"` · `CannotCompleteRecurring` to `"cannot_complete_recurring"` · `CannotCompleteOthers` to `"cannot_complete_others"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `remindersCompleteErrorEnumSchema` |
| `RemindersDeleteErrorEnum` | `NotFound` to `"not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `remindersDeleteErrorEnumSchema` |
| `RtmConnectErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `rtmConnectErrorEnumSchema` |
| `StarsAddErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `MessageNotFound` to `"message_not_found"` · `FileNotFound` to `"file_not_found"` · `FileCommentNotFound` to `"file_comment_not_found"` · `ChannelNotFound` to `"channel_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `AlreadyStarred` to `"already_starred"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `starsAddErrorEnumSchema` |
| `StarsRemoveErrorEnum` | `BadTimestamp` to `"bad_timestamp"` · `MessageNotFound` to `"message_not_found"` · `FileNotFound` to `"file_not_found"` · `FileCommentNotFound` to `"file_comment_not_found"` · `ChannelNotFound` to `"channel_not_found"` · `NoItemSpecified` to `"no_item_specified"` · `NotStarred` to `"not_starred"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `starsRemoveErrorEnumSchema` |
| `TeamAccessLogsErrorEnum` | `PaidOnly` to `"paid_only"` · `OverPaginationLimit` to `"over_pagination_limit"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `teamAccessLogsErrorEnumSchema` |
| `TeamProfileGetErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostTyp` to `"invalid_post_typ"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeou` to `"request_timeou"` · `UpgradeRequired` to `"upgrade_required"` | `teamProfileGetErrorEnumSchema` |
| `Type` | `Text` to `"text"` · `Date` to `"date"` · `Link` to `"link"` · `Mailto` to `"mailto"` · `OptionsList` to `"options_list"` · `User` to `"user"` | `typeSchema` |
| `UsergroupsCreateErrorEnum` | `PermissionDenied` to `"permission_denied"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usergroupsCreateErrorEnumSchema` |
| `UsergroupsEnableErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequire` to `"upgrade_require"` · `FatalError` to `"fatal_error"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `usergroupsEnableErrorEnumSchema` |
| `UsergroupsUpdateErrorEnum` | `PermissionDenied` to `"permission_denied"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `UserIsRestricted` to `"user_is_restricted"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequire` to `"upgrade_require"` · `FatalError` to `"fatal_error"` · `MissingCharset` to `"missing_charset"` · `SuperfluousCharset` to `"superfluous_charset"` | `usergroupsUpdateErrorEnumSchema` |
| `UsersConversationsErrorEnum` | `MethodNotSupportedForChannelType` to `"method_not_supported_for_channel_type"` · `MissingScope` to `"missing_scope"` · `InvalidTypes` to `"invalid_types"` · `InvalidCursor` to `"invalid_cursor"` · `InvalidLimit` to `"invalid_limit"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersConversationsErrorEnumSchema` |
| `UsersInfoErrorEnum` | `UserNotFound` to `"user_not_found"` · `UserNotVisible` to `"user_not_visible"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` | `usersInfoErrorEnumSchema` |
| `UsersListErrorEnum` | `LimitRequired` to `"limit_required"` · `InvalidCursor` to `"invalid_cursor"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersListErrorEnumSchema` |
| `UsersLookupByEmailErrorEnum` | `UsersNotFound` to `"users_not_found"` · `EnterpriseIsRestricted` to `"enterprise_is_restricted"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `NoPermission` to `"no_permission"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersLookupByEmailErrorEnumSchema` |
| `UsersProfileGetErrorEnum` | `UserNotFound` to `"user_not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersProfileGetErrorEnumSchema` |
| `UsersProfileSetErrorEnum` | `ReservedName` to `"reserved_name"` · `InvalidProfile` to `"invalid_profile"` · `ProfileSetFailed` to `"profile_set_failed"` · `NotAdmin` to `"not_admin"` · `NotAppAdmin` to `"not_app_admin"` · `CannotUpdateAdminUser` to `"cannot_update_admin_user"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersProfileSetErrorEnumSchema` |
| `UsersSetActiveErrorEnum` | `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `EkmAccessDenied` to `"ekm_access_denied"` · `MissingScope` to `"missing_scope"` · `InvalidArguments` to `"invalid_arguments"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `RequestTimeout` to `"request_timeout"` · `FatalError` to `"fatal_error"` · `InternalError` to `"internal_error"` | `usersSetActiveErrorEnumSchema` |
| `UsersSetPhotoErrorEnum` | `BadImage` to `"bad_image"` · `TooLarge` to `"too_large"` · `TooManyFrames` to `"too_many_frames"` · `NotFound` to `"not_found"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `UserIsBot` to `"user_is_bot"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersSetPhotoErrorEnumSchema` |
| `UsersSetPresenceErrorEnum` | `InvalidPresence` to `"invalid_presence"` · `NotAuthed` to `"not_authed"` · `InvalidAuth` to `"invalid_auth"` · `AccountInactive` to `"account_inactive"` · `TokenRevoked` to `"token_revoked"` · `NoPermission` to `"no_permission"` · `OrgLoginRequired` to `"org_login_required"` · `InvalidArgName` to `"invalid_arg_name"` · `InvalidArrayArg` to `"invalid_array_arg"` · `InvalidCharset` to `"invalid_charset"` · `InvalidFormData` to `"invalid_form_data"` · `InvalidPostType` to `"invalid_post_type"` · `MissingPostType` to `"missing_post_type"` · `TeamAddedToOrg` to `"team_added_to_org"` · `InvalidJson` to `"invalid_json"` · `JsonNotObject` to `"json_not_object"` · `RequestTimeout` to `"request_timeout"` · `UpgradeRequired` to `"upgrade_required"` · `FatalError` to `"fatal_error"` | `usersSetPresenceErrorEnumSchema` |

**Wire-name divergences.** Only these model properties are sent and received under a different name; every other property uses its TypeScript name verbatim.

| Type | Property | Wire key |
| --- | --- | --- |
| `ApImethodusersGetPresence` | `autoAway` | `auto_away` |
| `ApImethodusersGetPresence` | `connectionCount` | `connection_count` |
| `ApImethodusersGetPresence` | `lastActivity` | `last_activity` |
| `ApImethodusersGetPresence` | `manualAway` | `manual_away` |
| `Attachment` | `imageBytes` | `image_bytes` |
| `Attachment` | `imageHeight` | `image_height` |
| `Attachment` | `imageUrl` | `image_url` |
| `Attachment` | `imageWidth` | `image_width` |
| `Bot` | `appId` | `app_id` |
| `Bot` | `userId` | `user_id` |
| `BotProfileObject` | `appId` | `app_id` |
| `BotProfileObject` | `teamId` | `team_id` |
| `ChannelObject` | `acceptedUser` | `accepted_user` |
| `ChannelObject` | `isArchived` | `is_archived` |
| `ChannelObject` | `isChannel` | `is_channel` |
| `ChannelObject` | `isFrozen` | `is_frozen` |
| `ChannelObject` | `isGeneral` | `is_general` |
| `ChannelObject` | `isMember` | `is_member` |
| `ChannelObject` | `isMoved` | `is_moved` |
| `ChannelObject` | `isMpim` | `is_mpim` |
| `ChannelObject` | `isNonThreadable` | `is_non_threadable` |
| `ChannelObject` | `isOrgShared` | `is_org_shared` |
| `ChannelObject` | `isPendingExtShared` | `is_pending_ext_shared` |
| `ChannelObject` | `isPrivate` | `is_private` |
| `ChannelObject` | `isReadOnly` | `is_read_only` |
| `ChannelObject` | `isShared` | `is_shared` |
| `ChannelObject` | `isThreadOnly` | `is_thread_only` |
| `ChannelObject` | `lastRead` | `last_read` |
| `ChannelObject` | `nameNormalized` | `name_normalized` |
| `ChannelObject` | `numMembers` | `num_members` |
| `ChannelObject` | `pendingShared` | `pending_shared` |
| `ChannelObject` | `previousNames` | `previous_names` |
| `ChannelObject` | `unreadCount` | `unread_count` |
| `ChannelObject` | `unreadCountDisplay` | `unread_count_display` |
| `Current` | `dateStarted` | `date_started` |
| `Current` | `teamId` | `team_id` |
| `ExternalOrgMigrations` | `dateUpdated` | `date_updated` |
| `FileCommentObject` | `isIntro` | `is_intro` |
| `FileCommentObject` | `isStarred` | `is_starred` |
| `FileCommentObject` | `numStars` | `num_stars` |
| `FileCommentObject` | `pinnedInfo` | `pinned_info` |
| `FileCommentObject` | `pinnedTo` | `pinned_to` |
| `Icons` | `image36` | `image_36` |
| `Icons` | `image48` | `image_48` |
| `Icons` | `image72` | `image_72` |
| `Icons1` | `image64` | `image_64` |
| `Info` | `appHome` | `app_home` |
| `Log` | `adminAppId` | `admin_app_id` |
| `Log` | `appId` | `app_id` |
| `Log` | `appType` | `app_type` |
| `Log` | `changeType` | `change_type` |
| `Log` | `serviceId` | `service_id` |
| `Log` | `serviceType` | `service_type` |
| `Log` | `userId` | `user_id` |
| `Log` | `userName` | `user_name` |
| `Login` | `dateFirst` | `date_first` |
| `Login` | `dateLast` | `date_last` |
| `Login` | `userAgent` | `user_agent` |
| `Login` | `userId` | `user_id` |
| `Message` | `botId` | `bot_id` |
| `Message` | `botProfile` | `bot_profile` |
| `Messageobject` | `botId` | `bot_id` |
| `Messageobject` | `botProfile` | `bot_profile` |
| `Messageobject` | `clientMsgId` | `client_msg_id` |
| `Messageobject` | `displayAsBot` | `display_as_bot` |
| `Messageobject` | `isDelayedMessage` | `is_delayed_message` |
| `Messageobject` | `isIntro` | `is_intro` |
| `Messageobject` | `isStarred` | `is_starred` |
| `Messageobject` | `lastRead` | `last_read` |
| `Messageobject` | `latestReply` | `latest_reply` |
| `Messageobject` | `oldName` | `old_name` |
| `Messageobject` | `parentUserId` | `parent_user_id` |
| `Messageobject` | `pinnedTo` | `pinned_to` |
| `Messageobject` | `replyCount` | `reply_count` |
| `Messageobject` | `replyUsers` | `reply_users` |
| `Messageobject` | `replyUsersCount` | `reply_users_count` |
| `Messageobject` | `sourceTeam` | `source_team` |
| `Messageobject` | `threadTs` | `thread_ts` |
| `Messageobject` | `unreadCount` | `unread_count` |
| `Messageobject` | `userProfile` | `user_profile` |
| `Messageobject` | `userTeam` | `user_team` |
| `Prefs1` | `canThread` | `can_thread` |
| `Prefs1` | `whoCanPost` | `who_can_post` |
| `Profile1` | `avatarHash` | `avatar_hash` |
| `Profile1` | `image1024` | `image_1024` |
| `Profile1` | `image192` | `image_192` |
| `Profile1` | `image24` | `image_24` |
| `Profile1` | `image32` | `image_32` |
| `Profile1` | `image48` | `image_48` |
| `Profile1` | `image512` | `image_512` |
| `Profile1` | `image72` | `image_72` |
| `Profile1` | `imageOriginal` | `image_original` |
| `Purpose` | `lastSet` | `last_set` |
| `ResponseMetadata` | `nextCursor` | `next_cursor` |
| `ScheduledMessage` | `channelId` | `channel_id` |
| `ScheduledMessage` | `dateCreated` | `date_created` |
| `ScheduledMessage` | `postAt` | `post_at` |
| `Scopes` | `appHome` | `app_home` |
| `SubteamUsergroupObject` | `autoProvision` | `auto_provision` |
| `SubteamUsergroupObject` | `autoType` | `auto_type` |
| `SubteamUsergroupObject` | `channelCount` | `channel_count` |
| `SubteamUsergroupObject` | `createdBy` | `created_by` |
| `SubteamUsergroupObject` | `dateCreate` | `date_create` |
| `SubteamUsergroupObject` | `dateDelete` | `date_delete` |
| `SubteamUsergroupObject` | `dateUpdate` | `date_update` |
| `SubteamUsergroupObject` | `deletedBy` | `deleted_by` |
| `SubteamUsergroupObject` | `enterpriseSubteamId` | `enterprise_subteam_id` |
| `SubteamUsergroupObject` | `isExternal` | `is_external` |
| `SubteamUsergroupObject` | `isSubteam` | `is_subteam` |
| `SubteamUsergroupObject` | `isUsergroup` | `is_usergroup` |
| `SubteamUsergroupObject` | `teamId` | `team_id` |
| `SubteamUsergroupObject` | `updatedBy` | `updated_by` |
| `SubteamUsergroupObject` | `userCount` | `user_count` |
| `TeamObject` | `avatarBaseUrl` | `avatar_base_url` |
| `TeamObject` | `dateCreate` | `date_create` |
| `TeamObject` | `emailDomain` | `email_domain` |
| `TeamObject` | `enterpriseId` | `enterprise_id` |
| `TeamObject` | `enterpriseName` | `enterprise_name` |
| `TeamObject` | `externalOrgMigrations` | `external_org_migrations` |
| `TeamObject` | `hasComplianceExport` | `has_compliance_export` |
| `TeamObject` | `isAssigned` | `is_assigned` |
| `TeamObject` | `isEnterprise` | `is_enterprise` |
| `TeamObject` | `isOverStorageLimit` | `is_over_storage_limit` |
| `TeamObject` | `limitTs` | `limit_ts` |
| `TeamObject` | `messagesCount` | `messages_count` |
| `TeamObject` | `msgEditWindowMins` | `msg_edit_window_mins` |
| `TeamObject` | `overIntegrationsLimit` | `over_integrations_limit` |
| `TeamObject` | `overStorageLimit` | `over_storage_limit` |
| `TeamObject` | `payProdCur` | `pay_prod_cur` |
| `TeamObject` | `primaryOwner` | `primary_owner` |
| `TeamObject` | `ssoProvider` | `sso_provider` |
| `Topic` | `lastSet` | `last_set` |
| `Userprofileobject` | `alwaysActive` | `always_active` |
| `Userprofileobject` | `apiAppId` | `api_app_id` |
| `Userprofileobject` | `avatarHash` | `avatar_hash` |
| `Userprofileobject` | `botId` | `bot_id` |
| `Userprofileobject` | `displayName` | `display_name` |
| `Userprofileobject` | `displayNameNormalized` | `display_name_normalized` |
| `Userprofileobject` | `firstName` | `first_name` |
| `Userprofileobject` | `guestExpirationTs` | `guest_expiration_ts` |
| `Userprofileobject` | `guestInvitedBy` | `guest_invited_by` |
| `Userprofileobject` | `image1024` | `image_1024` |
| `Userprofileobject` | `image192` | `image_192` |
| `Userprofileobject` | `image24` | `image_24` |
| `Userprofileobject` | `image32` | `image_32` |
| `Userprofileobject` | `image48` | `image_48` |
| `Userprofileobject` | `image512` | `image_512` |
| `Userprofileobject` | `image72` | `image_72` |
| `Userprofileobject` | `imageOriginal` | `image_original` |
| `Userprofileobject` | `isAppUser` | `is_app_user` |
| `Userprofileobject` | `isCustomImage` | `is_custom_image` |
| `Userprofileobject` | `isRestricted` | `is_restricted` |
| `Userprofileobject` | `isUltraRestricted` | `is_ultra_restricted` |
| `Userprofileobject` | `lastAvatarImageHash` | `last_avatar_image_hash` |
| `Userprofileobject` | `lastName` | `last_name` |
| `Userprofileobject` | `membershipsCount` | `memberships_count` |
| `Userprofileobject` | `realName` | `real_name` |
| `Userprofileobject` | `realNameNormalized` | `real_name_normalized` |
| `Userprofileobject` | `statusDefaultEmoji` | `status_default_emoji` |
| `Userprofileobject` | `statusDefaultText` | `status_default_text` |
| `Userprofileobject` | `statusDefaultTextCanonical` | `status_default_text_canonical` |
| `Userprofileobject` | `statusEmoji` | `status_emoji` |
| `Userprofileobject` | `statusExpiration` | `status_expiration` |
| `Userprofileobject` | `statusText` | `status_text` |
| `Userprofileobject` | `statusTextCanonical` | `status_text_canonical` |
| `Userprofileobject` | `userId` | `user_id` |
| `AdminConversationsCreateschema` | `channelId` | `channel_id` |
| `AdminConversationsGetTeamsschema` | `responseMetadata` | `response_metadata` |
| `AdminConversationsGetTeamsschema` | `teamIds` | `team_ids` |
| `AdminConversationsSearchschema` | `nextCursor` | `next_cursor` |
| `AppsPermissionsResourcesListsuccessschema` | `responseMetadata` | `response_metadata` |
| `AuthTestsuccessschema` | `botId` | `bot_id` |
| `AuthTestsuccessschema` | `isEnterpriseInstall` | `is_enterprise_install` |
| `AuthTestsuccessschema` | `teamId` | `team_id` |
| `AuthTestsuccessschema` | `userId` | `user_id` |
| `ChatPostEphemeralsuccessschema` | `messageTs` | `message_ts` |
| `ChatScheduleMessagesuccessschema` | `postAt` | `post_at` |
| `ChatScheduleMessagesuccessschema` | `scheduledMessageId` | `scheduled_message_id` |
| `ChatScheduledMessagesListschema` | `responseMetadata` | `response_metadata` |
| `ChatScheduledMessagesListschema` | `scheduledMessages` | `scheduled_messages` |
| `ConversationsClosesuccessschema` | `alreadyClosed` | `already_closed` |
| `ConversationsClosesuccessschema` | `noOp` | `no_op` |
| `ConversationsHistorysuccessschema` | `channelActionsCount` | `channel_actions_count` |
| `ConversationsHistorysuccessschema` | `channelActionsTs` | `channel_actions_ts` |
| `ConversationsHistorysuccessschema` | `hasMore` | `has_more` |
| `ConversationsHistorysuccessschema` | `pinCount` | `pin_count` |
| `ConversationsJoinsuccessschema` | `responseMetadata` | `response_metadata` |
| `ConversationsLeavesuccessschema` | `notInChannel` | `not_in_channel` |
| `ConversationsListsuccessschema` | `responseMetadata` | `response_metadata` |
| `ConversationsMemberssuccessschema` | `responseMetadata` | `response_metadata` |
| `ConversationsOpensuccessschema` | `alreadyOpen` | `already_open` |
| `ConversationsOpensuccessschema` | `noOp` | `no_op` |
| `ConversationsRepliessuccessschema` | `hasMore` | `has_more` |
| `DndEndSnoozeschema` | `dndEnabled` | `dnd_enabled` |
| `DndEndSnoozeschema` | `nextDndEndTs` | `next_dnd_end_ts` |
| `DndEndSnoozeschema` | `nextDndStartTs` | `next_dnd_start_ts` |
| `DndEndSnoozeschema` | `snoozeEnabled` | `snooze_enabled` |
| `DndInfoschema` | `dndEnabled` | `dnd_enabled` |
| `DndInfoschema` | `nextDndEndTs` | `next_dnd_end_ts` |
| `DndInfoschema` | `nextDndStartTs` | `next_dnd_start_ts` |
| `DndInfoschema` | `snoozeEnabled` | `snooze_enabled` |
| `DndInfoschema` | `snoozeEndtime` | `snooze_endtime` |
| `DndInfoschema` | `snoozeRemaining` | `snooze_remaining` |
| `DndSetSnoozeschema` | `snoozeEnabled` | `snooze_enabled` |
| `DndSetSnoozeschema` | `snoozeEndtime` | `snooze_endtime` |
| `DndSetSnoozeschema` | `snoozeRemaining` | `snooze_remaining` |
| `Fileobject` | `commentsCount` | `comments_count` |
| `Fileobject` | `dateDelete` | `date_delete` |
| `Fileobject` | `displayAsBot` | `display_as_bot` |
| `Fileobject` | `externalId` | `external_id` |
| `Fileobject` | `externalType` | `external_type` |
| `Fileobject` | `externalUrl` | `external_url` |
| `Fileobject` | `hasRichPreview` | `has_rich_preview` |
| `Fileobject` | `imageExifRotation` | `image_exif_rotation` |
| `Fileobject` | `isExternal` | `is_external` |
| `Fileobject` | `isPublic` | `is_public` |
| `Fileobject` | `isStarred` | `is_starred` |
| `Fileobject` | `isTombstoned` | `is_tombstoned` |
| `Fileobject` | `lastEditor` | `last_editor` |
| `Fileobject` | `nonOwnerEditable` | `non_owner_editable` |
| `Fileobject` | `numStars` | `num_stars` |
| `Fileobject` | `originalH` | `original_h` |
| `Fileobject` | `originalW` | `original_w` |
| `Fileobject` | `permalinkPublic` | `permalink_public` |
| `Fileobject` | `pinnedInfo` | `pinned_info` |
| `Fileobject` | `pinnedTo` | `pinned_to` |
| `Fileobject` | `prettyType` | `pretty_type` |
| `Fileobject` | `publicUrlShared` | `public_url_shared` |
| `Fileobject` | `sourceTeam` | `source_team` |
| `Fileobject` | `thumb1024` | `thumb_1024` |
| `Fileobject` | `thumb1024H` | `thumb_1024_h` |
| `Fileobject` | `thumb1024W` | `thumb_1024_w` |
| `Fileobject` | `thumb160` | `thumb_160` |
| `Fileobject` | `thumb360` | `thumb_360` |
| `Fileobject` | `thumb360H` | `thumb_360_h` |
| `Fileobject` | `thumb360W` | `thumb_360_w` |
| `Fileobject` | `thumb480` | `thumb_480` |
| `Fileobject` | `thumb480H` | `thumb_480_h` |
| `Fileobject` | `thumb480W` | `thumb_480_w` |
| `Fileobject` | `thumb64` | `thumb_64` |
| `Fileobject` | `thumb720` | `thumb_720` |
| `Fileobject` | `thumb720H` | `thumb_720_h` |
| `Fileobject` | `thumb720W` | `thumb_720_w` |
| `Fileobject` | `thumb80` | `thumb_80` |
| `Fileobject` | `thumb800` | `thumb_800` |
| `Fileobject` | `thumb800H` | `thumb_800_h` |
| `Fileobject` | `thumb800W` | `thumb_800_w` |
| `Fileobject` | `thumb960` | `thumb_960` |
| `Fileobject` | `thumb960H` | `thumb_960_h` |
| `Fileobject` | `thumb960W` | `thumb_960_w` |
| `Fileobject` | `thumbTiny` | `thumb_tiny` |
| `Fileobject` | `urlPrivate` | `url_private` |
| `Fileobject` | `urlPrivateDownload` | `url_private_download` |
| `Fileobject` | `userTeam` | `user_team` |
| `FilesInfoschema` | `contentHtml` | `content_html` |
| `FilesInfoschema` | `responseMetadata` | `response_metadata` |
| `MigrationExchangesuccessschema` | `enterpriseId` | `enterprise_id` |
| `MigrationExchangesuccessschema` | `invalidUserIds` | `invalid_user_ids` |
| `MigrationExchangesuccessschema` | `teamId` | `team_id` |
| `MigrationExchangesuccessschema` | `userIdMap` | `user_id_map` |
| `ObjsEnterpriseUser` | `enterpriseId` | `enterprise_id` |
| `ObjsEnterpriseUser` | `enterpriseName` | `enterprise_name` |
| `ObjsEnterpriseUser` | `isAdmin` | `is_admin` |
| `ObjsEnterpriseUser` | `isOwner` | `is_owner` |
| `ObjsIcon` | `image102` | `image_102` |
| `ObjsIcon` | `image132` | `image_132` |
| `ObjsIcon` | `image230` | `image_230` |
| `ObjsIcon` | `image34` | `image_34` |
| `ObjsIcon` | `image44` | `image_44` |
| `ObjsIcon` | `image68` | `image_68` |
| `ObjsIcon` | `image88` | `image_88` |
| `ObjsIcon` | `imageDefault` | `image_default` |
| `ObjsReminder` | `completeTs` | `complete_ts` |
| `ObjsTeamProfileField` | `fieldName` | `field_name` |
| `ObjsTeamProfileField` | `isHidden` | `is_hidden` |
| `ObjsTeamProfileField` | `possibleValues` | `possible_values` |
| `ObjsTeamProfileFieldOption` | `isCustom` | `is_custom` |
| `ObjsTeamProfileFieldOption` | `isMultipleEntry` | `is_multiple_entry` |
| `ObjsTeamProfileFieldOption` | `isProtected` | `is_protected` |
| `ObjsTeamProfileFieldOption` | `isScim` | `is_scim` |
| `ObjsUserProfileShort` | `avatarHash` | `avatar_hash` |
| `ObjsUserProfileShort` | `displayName` | `display_name` |
| `ObjsUserProfileShort` | `displayNameNormalized` | `display_name_normalized` |
| `ObjsUserProfileShort` | `firstName` | `first_name` |
| `ObjsUserProfileShort` | `image72` | `image_72` |
| `ObjsUserProfileShort` | `isRestricted` | `is_restricted` |
| `ObjsUserProfileShort` | `isUltraRestricted` | `is_ultra_restricted` |
| `ObjsUserProfileShort` | `realName` | `real_name` |
| `ObjsUserProfileShort` | `realNameNormalized` | `real_name_normalized` |
| `Pagingobject` | `perPage` | `per_page` |
| `ReactionsListschema` | `responseMetadata` | `response_metadata` |
| `ResourcesininfofromappsPermissionsInfo` | `excludedIds` | `excluded_ids` |
| `UsersConversationssuccessschema` | `responseMetadata` | `response_metadata` |
| `UsersListschema` | `cacheTs` | `cache_ts` |
| `UsersListschema` | `responseMetadata` | `response_metadata` |
| `UsersProfileSetschema` | `emailPending` | `email_pending` |
| `UsersSetPhotoerrorschema1` | `debugStep` | `debug_step` |
| `UsersSetPhotoerrorschema1` | `timeIdent` | `time_ident` |
| `UsersSetPhotoerrorschema1Error` | `debugStep` | `debug_step` |
| `UsersSetPhotoerrorschema1Error` | `timeIdent` | `time_ident` |

---

## Servers & auth

**Authentication is per operation.** Every operation declares the requirement it enforces and the SDK sends exactly that: **253 of the 253 operations** require a credential and **0** are public. Each block on a page above carries an **Auth** bullet naming its requirement, `none` included. There is no client-global switch and no per-call override.

| Scheme (as an **Auth** bullet names it) | Configured with | What the SDK sends |
| --- | --- | --- |
| `slackAuth` | `slackAuth: { clientId, clientSecret?, redirectUri, scope?, state?, pkce?, promptForAuthorizationCode }` | `Authorization: Bearer <access token>` |

A scheme **contributes** headers, query parameters and cookies rather than mutating the request, so a credential is encoded by exactly the code that encodes an operation's own parameters. The auth layer goes on **last**, which means a scheme's `Authorization` wins over one the operation declared.

**Composition is emitted, not configured.** Where the spec puts two schemes in one requirement the SDK sends **both**; where it lists alternatives the SDK sends the **first configured** one, in the order the **Auth** bullet prints them. The combinators that express this (`allAuth`, `anyAuth`, `noneAuth`) live in the generated resource modules and are **not exported**.

**A credential may be a function.** Every field typed `TokenProvider` is re-read on **every** request with no caching, so a key can rotate without rebuilding the client. An empty string counts as absent, and a function is treated as present without being invoked.

**An unconfigured scheme does not throw.** The request goes out without that credential and the server decides. So a 401 on a call you believed was authenticated is usually an unset credential field rather than an SDK failure — check the operation's **Auth** bullet against what the client was given.

**OAuth2 fetches and caches its own token.** The token request goes through the same client as every other call — same timeout, same `fetch` — sends a form-urlencoded body, and **decodes** the response against a schema rather than casting it. An access token is cached until shortly before it expires; a response carrying no `expires_in` is treated as never expiring (RFC 6749 §5.1); concurrent callers share one in-flight fetch. A refused token endpoint rejects with `AuthError` wrapping the underlying `ResponseError` as `cause`, so it never looks like the business call failing.

| Flow | Token endpoint | Client credentials travel |
| --- | --- | --- |
| `slackAuth` | `default` + `/oauth.access` | as `Authorization: Basic` |

The authorization-code grant differs in three ways. It needs a human, so `promptForAuthorizationCode` is a **required** member of its credentials: the SDK builds the authorization URL from `default` + `/authorize` and hands it over, and never opens it itself. PKCE is on by default — `pkce` defaults to `PkceMethod.S256`, and `null` disables it, which then requires a client secret or the scheme throws `AuthError` before prompting. And it is the only grant that can refresh, so acquisition is a ladder: live cache, then a refresh attempt, then a full re-authorization.

**Replacing a grant.** Each OAuth2 scheme's token request is a strategy you can substitute — `slackAuthStrategy` on `ClientOptions`. A strategy is one method, `getToken(credentials, signal)`, plus `tryRefreshToken(...)` for the refreshable one. Supply it and the built-in token request is not used, while the caching, the expiry buffer and the single-flight behaviour above still apply.

**The auth types you can name.** Every row below is exported from the package root. `Source` is where to read the declaration, never what to import — the credential shapes themselves are already spelled in the scheme table above.

| Type | Source |
| --- | --- |
| `OAuthToken` | `src/core/auth/oauth2-strategies.ts` |
| `OAuth2CredentialPlacement` | `src/core/auth/oauth2-strategies.ts` |
| `OAuthTokenRefreshable` | `src/core/auth/oauth2-strategies.ts` |
| `AuthorizationCodePrompt` | `src/core/auth/credentials.ts` |
| `PkceMethod` | `src/core/auth/credentials.ts` |

**A 401 invalidates, it does not retry.** On a **401** — 401 only, not 403 — the SDK clears whatever that operation's scheme had cached, so the *next* call re-acquires. The current request still rejects with the operation's `ResponseError`. There is no retry loop on this SDK, and the credential fields are on `ClientOptions`.

**Environments.** `ClientOptions.serverEnvironment` selects one for the whole client (source: `src/servers.ts`). `ServerEnvironment` is a `const` object with a derived union type, not a TypeScript `enum` — and unlike the model enums it is **closed**, so only the values below are assignable.

| `ServerEnvironment` member | Value |
| --- | --- |
| `ServerEnvironment.Production` *(default)* | `production` |
| `ServerEnvironment.Environment2` | `environment2` |

**Server groups.** 1 logical server; each operation is bound to one at generation time, and a block carries a **Server** bullet only when its group is not `default`.

| Group | Options type |
| --- | --- |
| `default` | `DefaultServerOptions` |

**Base URLs and overrides.** One row per group-and-environment pair, so the table stays four columns wide however many environments a spec declares. Every cell is overridden at `serverOptions.<group>.<environment>.<name>`, where `<name>` is `baseUrl` for the whole template or the variable name for one substitution. An override merges with the built-in defaults **per pair, key by key**.

| Group | Environment | Base URL template | Template variables (default) |
| --- | --- | --- | --- |
| `default` | `production` | `https://slack.com/api` | — |
| `default` | `environment2` | `https://slack.com/oauth` | — |

A `baseUrl` override replaces the template verbatim; variable values are percent-encoded into it, and templates are expanded per request rather than once at construction. An environment value the SDK does not know throws `SdkError` when a server is resolved — at the first call, not at construction. It is the one failure on this surface that throws **synchronously** out of the operation method, so a `try`/`await` catches it but `.asApiResult()` and `.catch()` never see it.

---

## Runtime & packaging

The facts that change what you type, and the floors that decide whether the package loads at all. This section is the home for all of them.

|  |  |
| --- | --- |
| One entry, two dialects | `import` resolves `dist/esm`, `require` resolves `dist/commonjs`, both through the single `.` export. In a TypeScript CommonJS file the typed spelling is `import sdk = require("slack-web-api")`; a plain `require` destructure works at run time but yields no types. `instanceof` is reliable **within** one dialect — if your app loads both, the two copies declare separate error classes |
| Consumer compiler settings | Under `exactOptionalPropertyTypes`, **omit or spread** an absent optional rather than assigning `undefined` to it. Under `verbatimModuleSyntax`, names that carry no runtime value (the options types, every model type) must be imported with `import type` |
| Required globals, and only these | Always: `fetch` (or a replacement passed as the `fetch` option), `AbortController`, `Headers`, `URL`, `setTimeout` and `clearTimeout`, `JSON`, `BigInt`. Auth adds more, each reached only once the credential needing it is configured. `TextEncoder` and `btoa` build every `Authorization: Basic` value, sent on every OAuth2 token request, whose client credentials travel as Basic by default. `crypto.getRandomValues` and `crypto.subtle.digest` belong to the authorization-code grant's PKCE alone. |
| Values that cross the boundary | `Date` for `date-time`, `string` for `date`, `ArrayBuffer` for an undeclared error body, `Headers` on a result and on a thrown `ResponseError`. The engine also carries a `bigint` int64 path and a base64 `bytes()` codec, reached only where a model uses them |
| Browser distribution | The package ships `dist/esm` and `dist/commonjs` and nothing else — **no bundle, no UMD file, no CDN artifact**. Use it through a bundler, which resolves `zod/v4-mini`, deduplicates it against your own copy and tree-shakes the rest |
| Other runtimes | Deno, Bun, Cloudflare Workers and Vercel Edge are all likely to work — the SDK needs only the globals above and imports no Node built-in — but **none of them is tested for this package**, so nothing here claims support for them |

The browser floor comes from the emitted output rather than the sources: `tshy` builds at `target: ES2022`, so native `#private` fields and methods survive into `dist/`.

| Browser | Minimum | Set by |
| --- | --- | --- |
| Chrome / Edge | **85** | `String.prototype.replaceAll`, logical assignment (`??=`) |
| Firefox | **90** | private class fields and methods |
| Safari / iOS Safari | **15** | private class **methods** |

That table is the **module-load** floor: below it the SDK fails while the module is evaluating, not at the first call. Two things degrade quietly above it. `{ cause }` on the `Error` constructor needs Chrome 93, Firefox 91 or Safari 15, so below that `err.cause` is `undefined`. More consequentially, **cancellation needs `AbortController.abort(reason)` and `AbortSignal.reason`**, which arrived in Chrome 98, Firefox 97 and Safari 15.4 — between the module-load floor and those versions the engine still aborts the request but produces no typed error at all.

One auth floor is not a version at all. `crypto.subtle` is `undefined` on an **insecure origin** in every browser, so the authorization-code grant's default `S256` PKCE fails on a page served over plain `http` — a LAN IP included, since only `localhost` is treated as secure. HTTPS is the fix; `PkceMethod.Plain` avoids `crypto.subtle` entirely.

