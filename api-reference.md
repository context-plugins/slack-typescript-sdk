# Reference

> Source: [SlackWebApiClient](src/client.ts)

## AdminApps

> Source: [AdminApps](src/resources/admin-apps.ts)

<details>
<summary><code>adminAppsApprove(request: AdminApps.AdminAppsApproveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminApps.AdminAppsApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve an app for installation on a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminApps.adminAppsApprove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminApps.AdminAppsApproveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminApps.adminAppsApprove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>appId?</code> | <code>string</code> | The id of the app to approve. |
| <code>requestId?</code> | <code>string</code> | The id of the request to approve. |
| <code>teamId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminApps.adminAppsApprove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminApps.AdminAppsApproveError](src/resources/admin-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminApps.adminAppsApprove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminApps.AdminAppsApproveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminAppsRestrict(request: AdminApps.AdminAppsRestrictRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminApps.AdminAppsRestrictError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restrict an app for installation on a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminApps.adminAppsRestrict({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminApps.AdminAppsRestrictError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminApps.adminAppsRestrict({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>appId?</code> | <code>string</code> | The id of the app to restrict. |
| <code>requestId?</code> | <code>string</code> | The id of the request to restrict. |
| <code>teamId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminApps.adminAppsRestrict(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminApps.AdminAppsRestrictError](src/resources/admin-apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminApps.adminAppsRestrict(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminApps.AdminAppsRestrictError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Admin

> Source: [Admin](src/resources/admin.ts)

<details>
<summary><code>adminAppsApprove(request: Admin.AdminAppsApproveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminAppsApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve an app for installation on a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsApprove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminAppsApproveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminAppsApprove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>appId?</code> | <code>string</code> | The id of the app to approve. |
| <code>requestId?</code> | <code>string</code> | The id of the request to approve. |
| <code>teamId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminAppsApprove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminAppsApproveError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminAppsApprove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminAppsApproveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminAppsApprovedList(request: Admin.AdminAppsApprovedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminAppsApprovedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List approved apps for an org or workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsApprovedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminAppsApprovedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminAppsApprovedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>teamId?</code> | <code>string</code> | - |
| <code>enterpriseId?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminAppsApprovedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminAppsApprovedListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminAppsApprovedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminAppsApprovedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminAppsRequestsList(request: Admin.AdminAppsRequestsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminAppsRequestsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List app requests for a team/workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsRequestsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminAppsRequestsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminAppsRequestsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>teamId?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminAppsRequestsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminAppsRequestsListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminAppsRequestsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminAppsRequestsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminAppsRestrict(request: Admin.AdminAppsRestrictRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminAppsRestrictError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restrict an app for installation on a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsRestrict({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminAppsRestrictError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminAppsRestrict({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>appId?</code> | <code>string</code> | The id of the app to restrict. |
| <code>requestId?</code> | <code>string</code> | The id of the request to restrict. |
| <code>teamId?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminAppsRestrict(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminAppsRestrictError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminAppsRestrict(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminAppsRestrictError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminAppsRestrictedList(request: Admin.AdminAppsRestrictedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminAppsRestrictedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List restricted apps for an org or workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsRestrictedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminAppsRestrictedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminAppsRestrictedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>teamId?</code> | <code>string</code> | - |
| <code>enterpriseId?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminAppsRestrictedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminAppsRestrictedListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminAppsRestrictedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminAppsRestrictedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsArchive(request: Admin.AdminConversationsArchiveRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsArchiveschema, Admin.AdminConversationsArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsArchive({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsArchiveschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsArchive({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsArchiveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to archive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsArchive(request)`

- **OnSuccess**: <code>[AdminConversationsArchiveschema](src/models/admin-conversations-archiveschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsArchiveError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsArchiveschema, Admin.AdminConversationsArchiveError&gt;</code>, with `result.value` of type <code>[AdminConversationsArchiveschema](src/models/admin-conversations-archiveschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsConvertToPrivate(request: Admin.AdminConversationsConvertToPrivateRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsConvertToPrivateschema, Admin.AdminConversationsConvertToPrivateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a public channel to a private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsConvertToPrivate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsConvertToPrivateschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsConvertToPrivateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsConvertToPrivate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsConvertToPrivateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to convert to private. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsConvertToPrivate(request)`

- **OnSuccess**: <code>[AdminConversationsConvertToPrivateschema](src/models/admin-conversations-convert-to-privateschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsConvertToPrivateError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsConvertToPrivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsConvertToPrivateschema, Admin.AdminConversationsConvertToPrivateError&gt;</code>, with `result.value` of type <code>[AdminConversationsConvertToPrivateschema](src/models/admin-conversations-convert-to-privateschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsCreate(request: Admin.AdminConversationsCreateRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsCreateschema, Admin.AdminConversationsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a public or private channel-based conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsCreate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    name: "some example string",
    isPrivate: true,
  });
  // TODO: Handle 'response' of type AdminConversationsCreateschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsCreate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  name: "some example string",
  isPrivate: true,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsCreateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>name</code> | <code>string</code> | Name of the public or private channel to create. |
| <code>isPrivate</code> | <code>boolean</code> | When `true`, creates a private channel instead of a public channel |
| <code>description?</code> | <code>string</code> | Description of the public or private channel to create. |
| <code>orgWide?</code> | <code>boolean</code> | When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel |
| <code>teamId?</code> | <code>string</code> | The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsCreate(request)`

- **OnSuccess**: <code>[AdminConversationsCreateschema](src/models/admin-conversations-createschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsCreateError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsCreateschema, Admin.AdminConversationsCreateError&gt;</code>, with `result.value` of type <code>[AdminConversationsCreateschema](src/models/admin-conversations-createschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsDelete(request: Admin.AdminConversationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsDeleteschema, Admin.AdminConversationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsDelete({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsDeleteschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsDelete({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsDeleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsDelete(request)`

- **OnSuccess**: <code>[AdminConversationsDeleteschema](src/models/admin-conversations-deleteschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsDeleteError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsDeleteschema, Admin.AdminConversationsDeleteError&gt;</code>, with `result.value` of type <code>[AdminConversationsDeleteschema](src/models/admin-conversations-deleteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsDisconnectShared(request: Admin.AdminConversationsDisconnectSharedRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsRenameschema, Admin.AdminConversationsDisconnectSharedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnect a connected channel from one or more workspaces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsDisconnectShared({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsRenameschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsDisconnectSharedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsDisconnectShared({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsRenameschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to be disconnected from some workspaces. |
| <code>leavingTeamIds?</code> | <code>string</code> | The team to be removed from the channel. Currently only a single team id can be specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsDisconnectShared(request)`

- **OnSuccess**: <code>[AdminConversationsRenameschema](src/models/admin-conversations-renameschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsDisconnectSharedError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsDisconnectShared(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsRenameschema, Admin.AdminConversationsDisconnectSharedError&gt;</code>, with `result.value` of type <code>[AdminConversationsRenameschema](src/models/admin-conversations-renameschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsEkmListOriginalConnectedChannelInfo(request: Admin.AdminConversationsEkmListOriginalConnectedChannelInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsEkmListOriginalConnectedChannelInfo({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsEkmListOriginalConnectedChannelInfo({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>channelIds?</code> | <code>string</code> | A comma-separated list of channels to filter to. |
| <code>teamIds?</code> | <code>string</code> | A comma-separated list of the workspaces to which the channels you would like returned belong. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsEkmListOriginalConnectedChannelInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsEkmListOriginalConnectedChannelInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsGetConversationPrefs(request: Admin.AdminConversationsGetConversationPrefsRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsGetConversationPrefsschema, Admin.AdminConversationsGetConversationPrefsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get conversation preferences for a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsGetConversationPrefs({
    channelId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AdminConversationsGetConversationPrefsschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsGetConversationPrefsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsGetConversationPrefs({
  channelId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsGetConversationPrefsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>string</code> | The channel to get preferences for. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsGetConversationPrefs(request)`

- **OnSuccess**: <code>[AdminConversationsGetConversationPrefsschema](src/models/admin-conversations-get-conversation-prefsschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsGetConversationPrefsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsGetConversationPrefs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsGetConversationPrefsschema, Admin.AdminConversationsGetConversationPrefsError&gt;</code>, with `result.value` of type <code>[AdminConversationsGetConversationPrefsschema](src/models/admin-conversations-get-conversation-prefsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsGetTeams(request: Admin.AdminConversationsGetTeamsRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsGetTeamsschema, Admin.AdminConversationsGetTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all the workspaces a given public or private channel is connected to within this Enterprise org.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsGetTeams({
    channelId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AdminConversationsGetTeamsschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsGetTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsGetTeams({
  channelId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsGetTeamsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>string</code> | The channel to determine connected workspaces within the organization for. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsGetTeams(request)`

- **OnSuccess**: <code>[AdminConversationsGetTeamsschema](src/models/admin-conversations-get-teamsschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsGetTeamsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsGetTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsGetTeamsschema, Admin.AdminConversationsGetTeamsError&gt;</code>, with `result.value` of type <code>[AdminConversationsGetTeamsschema](src/models/admin-conversations-get-teamsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsInvite(request: Admin.AdminConversationsInviteRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsInviteschema, Admin.AdminConversationsInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite a user to a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsInvite({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    userIds: "some example string",
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsInviteschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsInvite({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  userIds: "some example string",
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsInviteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>userIds</code> | <code>string</code> | The users to invite. |
| <code>channelId</code> | <code>string</code> | The channel that the users will be invited to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsInvite(request)`

- **OnSuccess**: <code>[AdminConversationsInviteschema](src/models/admin-conversations-inviteschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsInviteError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsInviteschema, Admin.AdminConversationsInviteError&gt;</code>, with `result.value` of type <code>[AdminConversationsInviteschema](src/models/admin-conversations-inviteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRename(request: Admin.AdminConversationsRenameRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsRenameschema1, Admin.AdminConversationsRenameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRename({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsRenameschema1
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsRenameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsRename({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsRenameschema1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to rename. |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsRename(request)`

- **OnSuccess**: <code>[AdminConversationsRenameschema1](src/models/admin-conversations-renameschema1.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsRenameError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsRename(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsRenameschema1, Admin.AdminConversationsRenameError&gt;</code>, with `result.value` of type <code>[AdminConversationsRenameschema1](src/models/admin-conversations-renameschema1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRestrictAccessAddGroup(request: Admin.AdminConversationsRestrictAccessAddGroupRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessAddGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an allowlist of IDP groups for accessing a channel

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRestrictAccessAddGroup({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    groupId: "some example string",
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsRestrictAccessAddGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsRestrictAccessAddGroup({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  groupId: "some example string",
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>groupId</code> | <code>string</code> | The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel. |
| <code>channelId</code> | <code>string</code> | The channel to link this group to. |
| <code>teamId?</code> | <code>string</code> | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsRestrictAccessAddGroup(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsRestrictAccessAddGroupError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsRestrictAccessAddGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessAddGroupError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRestrictAccessListGroups(request: Admin.AdminConversationsRestrictAccessListGroupsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessListGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all IDP Groups linked to a channel

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRestrictAccessListGroups({
    token: "some example string",
    channelId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsRestrictAccessListGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsRestrictAccessListGroups({
  token: "some example string",
  channelId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>channelId</code> | <code>string</code> | - |
| <code>teamId?</code> | <code>string</code> | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsRestrictAccessListGroups(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsRestrictAccessListGroupsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsRestrictAccessListGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessListGroupsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRestrictAccessRemoveGroup(request: Admin.AdminConversationsRestrictAccessRemoveGroupRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessRemoveGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a linked IDP group linked from a private channel

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRestrictAccessRemoveGroup({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    teamId: "some example string",
    groupId: "some example string",
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsRestrictAccessRemoveGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsRestrictAccessRemoveGroup({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  teamId: "some example string",
  groupId: "some example string",
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>teamId</code> | <code>string</code> | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. |
| <code>groupId</code> | <code>string</code> | The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel. |
| <code>channelId</code> | <code>string</code> | The channel to remove the linked group from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsRestrictAccessRemoveGroup(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsRestrictAccessRemoveGroupError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsRestrictAccessRemoveGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminConversationsRestrictAccessRemoveGroupError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsSearch(request: Admin.AdminConversationsSearchRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsSearchschema, Admin.AdminConversationsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for public or private channels in an Enterprise organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsSearch({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AdminConversationsSearchschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsSearch({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsSearchschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamIds?</code> | <code>string</code> | Comma separated string of team IDs, signifying the workspaces to search through. |
| <code>query?</code> | <code>string</code> | Name of the the channel to query by. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>searchChannelTypes?</code> | <code>string</code> | The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types). |
| <code>sort?</code> | <code>string</code> | Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted |
| <code>sortDir?</code> | <code>string</code> | Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a) |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsSearch(request)`

- **OnSuccess**: <code>[AdminConversationsSearchschema](src/models/admin-conversations-searchschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsSearchError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsSearchschema, Admin.AdminConversationsSearchError&gt;</code>, with `result.value` of type <code>[AdminConversationsSearchschema](src/models/admin-conversations-searchschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsSetConversationPrefs(request: Admin.AdminConversationsSetConversationPrefsRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsSetConversationPrefsschema, Admin.AdminConversationsSetConversationPrefsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the posting permissions for a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsSetConversationPrefs({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
    prefs: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsSetConversationPrefsschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsSetConversationPrefsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsSetConversationPrefs({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
  prefs: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsSetConversationPrefsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to set the prefs for |
| <code>prefs</code> | <code>string</code> | The prefs for this channel in a stringified JSON format. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsSetConversationPrefs(request)`

- **OnSuccess**: <code>[AdminConversationsSetConversationPrefsschema](src/models/admin-conversations-set-conversation-prefsschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsSetConversationPrefsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsSetConversationPrefs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsSetConversationPrefsschema, Admin.AdminConversationsSetConversationPrefsError&gt;</code>, with `result.value` of type <code>[AdminConversationsSetConversationPrefsschema](src/models/admin-conversations-set-conversation-prefsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsSetTeams(request: Admin.AdminConversationsSetTeamsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminConversationsSetTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the workspaces in an Enterprise grid org that connect to a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsSetTeams({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsSetTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsSetTeams({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The encoded `channel_id` to add or remove to workspaces. |
| <code>teamId?</code> | <code>string</code> | The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel. |
| <code>targetTeamIds?</code> | <code>string</code> | A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide. |
| <code>orgChannel?</code> | <code>boolean</code> | True if channel has to be converted to an org channel |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsSetTeams(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsSetTeamsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsSetTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminConversationsSetTeamsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsUnarchive(request: Admin.AdminConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsUnarchiveschema, Admin.AdminConversationsUnarchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unarchive a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsUnarchive({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsUnarchiveschema
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminConversationsUnarchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminConversationsUnarchive({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsUnarchiveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to unarchive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminConversationsUnarchive(request)`

- **OnSuccess**: <code>[AdminConversationsUnarchiveschema](src/models/admin-conversations-unarchiveschema.ts)</code>
- **OnError**: throws <code>[Admin.AdminConversationsUnarchiveError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminConversationsUnarchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsUnarchiveschema, Admin.AdminConversationsUnarchiveError&gt;</code>, with `result.value` of type <code>[AdminConversationsUnarchiveschema](src/models/admin-conversations-unarchiveschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiAdd(request: Admin.AdminEmojiAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminEmojiAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an emoji.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiAdd({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
    url: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminEmojiAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminEmojiAdd({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
  url: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. |
| <code>url</code> | <code>string</code> | The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminEmojiAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminEmojiAddError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminEmojiAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminEmojiAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiAddAlias(request: Admin.AdminEmojiAddAliasRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminEmojiAddAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an emoji alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiAddAlias({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
    aliasFor: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminEmojiAddAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminEmojiAddAlias({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
  aliasFor: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included. |
| <code>aliasFor</code> | <code>string</code> | The alias of the emoji. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminEmojiAddAlias(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminEmojiAddAliasError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminEmojiAddAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminEmojiAddAliasError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiList(request: Admin.AdminEmojiListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminEmojiListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List emoji for an Enterprise Grid organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminEmojiListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminEmojiList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminEmojiList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminEmojiListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminEmojiList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminEmojiListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiRemove(request: Admin.AdminEmojiRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminEmojiRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an emoji across an Enterprise Grid organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiRemove({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminEmojiRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminEmojiRemove({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminEmojiRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminEmojiRemoveError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminEmojiRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminEmojiRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiRename(request: Admin.AdminEmojiRenameRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminEmojiRenameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename an emoji.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiRename({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
    newName: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminEmojiRenameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminEmojiRename({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
  newName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included. |
| <code>newName</code> | <code>string</code> | The new name of the emoji. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminEmojiRename(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminEmojiRenameError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminEmojiRename(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminEmojiRenameError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsApprove(request: Admin.AdminInviteRequestsApproveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve a workspace invite request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsApprove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    inviteRequestId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminInviteRequestsApproveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminInviteRequestsApprove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  inviteRequestId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>inviteRequestId</code> | <code>string</code> | ID of the request to invite. |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite request was made. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminInviteRequestsApprove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminInviteRequestsApproveError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminInviteRequestsApprove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsApproveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsApprovedList(request: Admin.AdminInviteRequestsApprovedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsApprovedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all approved workspace invite requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsApprovedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminInviteRequestsApprovedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminInviteRequestsApprovedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite requests were made. |
| <code>cursor?</code> | <code>string</code> | Value of the `next_cursor` field sent as part of the previous API response |
| <code>limit?</code> | <code>number</code> | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminInviteRequestsApprovedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminInviteRequestsApprovedListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminInviteRequestsApprovedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsApprovedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsDeniedList(request: Admin.AdminInviteRequestsDeniedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsDeniedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all denied workspace invite requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsDeniedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminInviteRequestsDeniedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminInviteRequestsDeniedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite requests were made. |
| <code>cursor?</code> | <code>string</code> | Value of the `next_cursor` field sent as part of the previous api response |
| <code>limit?</code> | <code>number</code> | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminInviteRequestsDeniedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminInviteRequestsDeniedListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminInviteRequestsDeniedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsDeniedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsDeny(request: Admin.AdminInviteRequestsDenyRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsDenyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deny a workspace invite request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsDeny({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    inviteRequestId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminInviteRequestsDenyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminInviteRequestsDeny({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  inviteRequestId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>inviteRequestId</code> | <code>string</code> | ID of the request to invite. |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite request was made. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminInviteRequestsDeny(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminInviteRequestsDenyError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminInviteRequestsDeny(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsDenyError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsList(request: Admin.AdminInviteRequestsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all pending workspace invite requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminInviteRequestsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminInviteRequestsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite requests were made. |
| <code>cursor?</code> | <code>string</code> | Value of the `next_cursor` field sent as part of the previous API response |
| <code>limit?</code> | <code>number</code> | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminInviteRequestsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminInviteRequestsListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminInviteRequestsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminInviteRequestsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsAdminsList(request: Admin.AdminTeamsAdminsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsAdminsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the admins on a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsAdminsList({
    token: "some example string",
    teamId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsAdminsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsAdminsList({
  token: "some example string",
  teamId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>teamId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsAdminsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsAdminsListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsAdminsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsAdminsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsCreate(request: Admin.AdminTeamsCreateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an Enterprise team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsCreate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamDomain: "some example string",
    teamName: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsCreate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamDomain: "some example string",
  teamName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamDomain</code> | <code>string</code> | Team domain (for example, slacksoftballteam). |
| <code>teamName</code> | <code>string</code> | Team name (for example, Slack Softball Team). |
| <code>teamDescription?</code> | <code>string</code> | Description for the team. |
| <code>teamDiscoverability?</code> | <code>string</code> | Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsCreate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsCreateError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsCreateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsList(request: Admin.AdminTeamsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all teams on an Enterprise organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 100 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsOwnersList(request: Admin.AdminTeamsOwnersListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsOwnersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the owners on a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsOwnersList({
    token: "some example string",
    teamId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsOwnersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsOwnersList({
  token: "some example string",
  teamId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>teamId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsOwnersList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsOwnersListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsOwnersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsOwnersListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsInfo(request: Admin.AdminTeamsSettingsInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch information about settings in a workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsInfo({
    teamId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsSettingsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsSettingsInfo({
  teamId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId</code> | <code>string</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsSettingsInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsSettingsInfoError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsSettingsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetDefaultChannels(request: Admin.AdminTeamsSettingsSetDefaultChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDefaultChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the default channels of a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetDefaultChannels({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    teamId: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsSettingsSetDefaultChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsSettingsSetDefaultChannels({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  teamId: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the default channel for. |
| <code>channelIds</code> | <code>string</code> | An array of channel IDs. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsSettingsSetDefaultChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsSettingsSetDefaultChannelsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsSettingsSetDefaultChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDefaultChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetDescription(request: Admin.AdminTeamsSettingsSetDescriptionRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDescriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the description of a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetDescription({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    description: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsSettingsSetDescriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsSettingsSetDescription({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  description: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the description for. |
| <code>description</code> | <code>string</code> | The new description for the workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsSettingsSetDescription(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsSettingsSetDescriptionError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsSettingsSetDescription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDescriptionError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetDiscoverability(request: Admin.AdminTeamsSettingsSetDiscoverabilityRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDiscoverabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An API method that allows admins to set the discoverability of a given workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetDiscoverability({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    discoverability: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsSettingsSetDiscoverabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsSettingsSetDiscoverability({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  discoverability: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID of the workspace to set discoverability on. |
| <code>discoverability</code> | <code>string</code> | This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsSettingsSetDiscoverability(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsSettingsSetDiscoverabilityError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsSettingsSetDiscoverability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetDiscoverabilityError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetIcon(request: Admin.AdminTeamsSettingsSetIconRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetIconError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the icon of a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetIcon({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    imageUrl: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsSettingsSetIconError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsSettingsSetIcon({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  imageUrl: "some example string",
  teamId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>imageUrl</code> | <code>string</code> | Image URL for the icon |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the icon for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsSettingsSetIcon(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsSettingsSetIconError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsSettingsSetIcon(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetIconError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetName(request: Admin.AdminTeamsSettingsSetNameRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the name of a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetName({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminTeamsSettingsSetNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminTeamsSettingsSetName({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the name for. |
| <code>name</code> | <code>string</code> | The new name of the workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminTeamsSettingsSetName(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminTeamsSettingsSetNameError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminTeamsSettingsSetName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminTeamsSettingsSetNameError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsAddChannels(request: Admin.AdminUsergroupsAddChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsAddChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more default channels to an IDP group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsAddChannels({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroupId: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsergroupsAddChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsergroupsAddChannels({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroupId: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroupId</code> | <code>string</code> | ID of the IDP group to add default channels for. |
| <code>channelIds</code> | <code>string</code> | Comma separated string of channel IDs. |
| <code>teamId?</code> | <code>string</code> | The workspace to add default channels in. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsergroupsAddChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsergroupsAddChannelsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsergroupsAddChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsAddChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsAddTeams(request: Admin.AdminUsergroupsAddTeamsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsAddTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associate one or more default workspaces with an organization-wide IDP group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsAddTeams({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroupId: "some example string",
    teamIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsergroupsAddTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsergroupsAddTeams({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroupId: "some example string",
  teamIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroupId</code> | <code>string</code> | An encoded usergroup (IDP Group) ID. |
| <code>teamIds</code> | <code>string</code> | A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token. |
| <code>autoProvision?</code> | <code>boolean</code> | When `true`, this method automatically creates new workspace accounts for the IDP group members. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsergroupsAddTeams(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsergroupsAddTeamsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsergroupsAddTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsAddTeamsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsListChannels(request: Admin.AdminUsergroupsListChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsListChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the channels linked to an org-level IDP group (user group).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsListChannels({
    usergroupId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsergroupsListChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsergroupsListChannels({
  usergroupId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>usergroupId</code> | <code>string</code> | ID of the IDP group to list default channels for. |
| <code>teamId?</code> | <code>string</code> | ID of the the workspace. |
| <code>includeNumMembers?</code> | <code>boolean</code> | Flag to include or exclude the count of members per channel. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.usergroups:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsergroupsListChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsergroupsListChannelsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsergroupsListChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsListChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsRemoveChannels(request: Admin.AdminUsergroupsRemoveChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsRemoveChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more default channels from an org-level IDP group (user group).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsRemoveChannels({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroupId: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsergroupsRemoveChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsergroupsRemoveChannels({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroupId: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroupId</code> | <code>string</code> | ID of the IDP Group |
| <code>channelIds</code> | <code>string</code> | Comma-separated string of channel IDs |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsergroupsRemoveChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsergroupsRemoveChannelsError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsergroupsRemoveChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsergroupsRemoveChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersAssign(request: Admin.AdminUsersAssignRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersAssignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an Enterprise user to a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersAssign({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersAssignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersAssign({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to add to the workspace. |
| <code>isRestricted?</code> | <code>boolean</code> | True if user should be added to the workspace as a guest. |
| <code>isUltraRestricted?</code> | <code>boolean</code> | True if user should be added to the workspace as a single-channel guest. |
| <code>channelIds?</code> | <code>string</code> | Comma separated values of channel IDs to add user in the new workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersAssign(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersAssignError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersAssign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersAssignError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersInvite(request: Admin.AdminUsersInviteRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite a user to a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersInvite({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    email: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersInvite({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  email: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>email</code> | <code>string</code> | The email address of the person to invite. |
| <code>channelIds</code> | <code>string</code> | A comma-separated list of `channel_id`s for this user to join. At least one channel is required. |
| <code>customMessage?</code> | <code>string</code> | An optional message to send to the user in the invite email. |
| <code>realName?</code> | <code>string</code> | Full name of the user. |
| <code>resend?</code> | <code>boolean</code> | Allow this invite to be resent in the future if a user has not signed up yet. (default: false) |
| <code>isRestricted?</code> | <code>boolean</code> | Is this user a multi-channel guest user? (default: false) |
| <code>isUltraRestricted?</code> | <code>boolean</code> | Is this user a single channel guest user? (default: false) |
| <code>guestExpirationTs?</code> | <code>string</code> | Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersInvite(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersInviteError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersInviteError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersList(request: Admin.AdminUsersListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List users on a workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersList({
    teamId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersList({
  teamId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>limit?</code> | <code>number</code> | Limit for how many users to be retrieved per page |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersListError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersRemove(request: Admin.AdminUsersRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a user from a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to remove. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersRemoveError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSessionInvalidate(request: Admin.AdminUsersSessionInvalidateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersSessionInvalidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invalidate a single session for a user by session_id

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSessionInvalidate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    sessionId: 1,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersSessionInvalidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersSessionInvalidate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  sessionId: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | ID of the team that the session belongs to |
| <code>sessionId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersSessionInvalidate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersSessionInvalidateError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersSessionInvalidate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersSessionInvalidateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSessionReset(request: Admin.AdminUsersSessionResetRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersSessionResetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Wipes all valid sessions on all devices for a given user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSessionReset({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersSessionResetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersSessionReset({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>userId</code> | <code>string</code> | The ID of the user to wipe sessions for |
| <code>mobileOnly?</code> | <code>boolean</code> | Only expire mobile sessions (default: false) |
| <code>webOnly?</code> | <code>boolean</code> | Only expire web sessions (default: false) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersSessionReset(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersSessionResetError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersSessionReset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersSessionResetError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetAdmin(request: Admin.AdminUsersSetAdminRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersSetAdminError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an existing guest, regular user, or owner to be an admin user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetAdmin({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersSetAdminError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersSetAdmin({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to designate as an admin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersSetAdmin(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersSetAdminError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersSetAdmin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersSetAdminError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetExpiration(request: Admin.AdminUsersSetExpirationRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersSetExpirationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an expiration for a guest user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetExpiration({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
    expirationTs: 1,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersSetExpirationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersSetExpiration({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
  expirationTs: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to set an expiration for. |
| <code>expirationTs</code> | <code>number</code> | Timestamp when guest account should be disabled. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersSetExpiration(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersSetExpirationError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersSetExpiration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersSetExpirationError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetOwner(request: Admin.AdminUsersSetOwnerRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersSetOwnerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an existing guest, regular user, or admin user to be a workspace owner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetOwner({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersSetOwnerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersSetOwner({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | Id of the user to promote to owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersSetOwner(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersSetOwnerError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersSetOwner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersSetOwnerError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetRegular(request: Admin.AdminUsersSetRegularRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Admin.AdminUsersSetRegularError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an existing guest user, admin user, or owner to be a regular user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetRegular({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Admin.AdminUsersSetRegularError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.admin.adminUsersSetRegular({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to designate as a regular user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.admin.adminUsersSetRegular(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Admin.AdminUsersSetRegularError](src/resources/admin.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.admin.adminUsersSetRegular(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Admin.AdminUsersSetRegularError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminAppsApproved

> Source: [AdminAppsApproved](src/resources/admin-apps-approved.ts)

<details>
<summary><code>adminAppsApprovedList(request: AdminAppsApproved.AdminAppsApprovedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminAppsApproved.AdminAppsApprovedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List approved apps for an org or workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAppsApproved.adminAppsApprovedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminAppsApproved.AdminAppsApprovedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminAppsApproved.adminAppsApprovedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>teamId?</code> | <code>string</code> | - |
| <code>enterpriseId?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminAppsApproved.adminAppsApprovedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminAppsApproved.AdminAppsApprovedListError](src/resources/admin-apps-approved.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminAppsApproved.adminAppsApprovedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminAppsApproved.AdminAppsApprovedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminAppsRequests

> Source: [AdminAppsRequests](src/resources/admin-apps-requests.ts)

<details>
<summary><code>adminAppsRequestsList(request: AdminAppsRequests.AdminAppsRequestsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminAppsRequests.AdminAppsRequestsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List app requests for a team/workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAppsRequests.adminAppsRequestsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminAppsRequests.AdminAppsRequestsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminAppsRequests.adminAppsRequestsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>teamId?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminAppsRequests.adminAppsRequestsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminAppsRequests.AdminAppsRequestsListError](src/resources/admin-apps-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminAppsRequests.adminAppsRequestsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminAppsRequests.AdminAppsRequestsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminAppsRestricted

> Source: [AdminAppsRestricted](src/resources/admin-apps-restricted.ts)

<details>
<summary><code>adminAppsRestrictedList(request: AdminAppsRestricted.AdminAppsRestrictedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminAppsRestricted.AdminAppsRestrictedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List restricted apps for an org or workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAppsRestricted.adminAppsRestrictedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminAppsRestricted.AdminAppsRestrictedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminAppsRestricted.adminAppsRestrictedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.apps:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>teamId?</code> | <code>string</code> | - |
| <code>enterpriseId?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminAppsRestricted.adminAppsRestrictedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminAppsRestricted.AdminAppsRestrictedListError](src/resources/admin-apps-restricted.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminAppsRestricted.adminAppsRestrictedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminAppsRestricted.AdminAppsRestrictedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminConversations

> Source: [AdminConversations](src/resources/admin-conversations.ts)

<details>
<summary><code>adminConversationsArchive(request: AdminConversations.AdminConversationsArchiveRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsArchiveschema, AdminConversations.AdminConversationsArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsArchive({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsArchiveschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsArchive({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsArchiveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to archive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsArchive(request)`

- **OnSuccess**: <code>[AdminConversationsArchiveschema](src/models/admin-conversations-archiveschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsArchiveError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsArchiveschema, AdminConversations.AdminConversationsArchiveError&gt;</code>, with `result.value` of type <code>[AdminConversationsArchiveschema](src/models/admin-conversations-archiveschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsConvertToPrivate(request: AdminConversations.AdminConversationsConvertToPrivateRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsConvertToPrivateschema, AdminConversations.AdminConversationsConvertToPrivateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert a public channel to a private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsConvertToPrivate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsConvertToPrivateschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsConvertToPrivateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsConvertToPrivate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsConvertToPrivateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to convert to private. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsConvertToPrivate(request)`

- **OnSuccess**: <code>[AdminConversationsConvertToPrivateschema](src/models/admin-conversations-convert-to-privateschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsConvertToPrivateError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsConvertToPrivate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsConvertToPrivateschema, AdminConversations.AdminConversationsConvertToPrivateError&gt;</code>, with `result.value` of type <code>[AdminConversationsConvertToPrivateschema](src/models/admin-conversations-convert-to-privateschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsCreate(request: AdminConversations.AdminConversationsCreateRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsCreateschema, AdminConversations.AdminConversationsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a public or private channel-based conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsCreate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    name: "some example string",
    isPrivate: true,
  });
  // TODO: Handle 'response' of type AdminConversationsCreateschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsCreate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  name: "some example string",
  isPrivate: true,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsCreateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>name</code> | <code>string</code> | Name of the public or private channel to create. |
| <code>isPrivate</code> | <code>boolean</code> | When `true`, creates a private channel instead of a public channel |
| <code>description?</code> | <code>string</code> | Description of the public or private channel to create. |
| <code>orgWide?</code> | <code>boolean</code> | When `true`, the channel will be available org-wide. Note: if the channel is not `org_wide=true`, you must specify a `team_id` for this channel |
| <code>teamId?</code> | <code>string</code> | The workspace to create the channel in. Note: this argument is required unless you set `org_wide=true`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsCreate(request)`

- **OnSuccess**: <code>[AdminConversationsCreateschema](src/models/admin-conversations-createschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsCreateError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsCreateschema, AdminConversations.AdminConversationsCreateError&gt;</code>, with `result.value` of type <code>[AdminConversationsCreateschema](src/models/admin-conversations-createschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsDelete(request: AdminConversations.AdminConversationsDeleteRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsDeleteschema, AdminConversations.AdminConversationsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsDelete({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsDeleteschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsDelete({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsDeleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsDelete(request)`

- **OnSuccess**: <code>[AdminConversationsDeleteschema](src/models/admin-conversations-deleteschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsDeleteError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsDeleteschema, AdminConversations.AdminConversationsDeleteError&gt;</code>, with `result.value` of type <code>[AdminConversationsDeleteschema](src/models/admin-conversations-deleteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsDisconnectShared(request: AdminConversations.AdminConversationsDisconnectSharedRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsRenameschema, AdminConversations.AdminConversationsDisconnectSharedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnect a connected channel from one or more workspaces.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsDisconnectShared({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsRenameschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsDisconnectSharedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsDisconnectShared({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsRenameschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to be disconnected from some workspaces. |
| <code>leavingTeamIds?</code> | <code>string</code> | The team to be removed from the channel. Currently only a single team id can be specified. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsDisconnectShared(request)`

- **OnSuccess**: <code>[AdminConversationsRenameschema](src/models/admin-conversations-renameschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsDisconnectSharedError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsDisconnectShared(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsRenameschema, AdminConversations.AdminConversationsDisconnectSharedError&gt;</code>, with `result.value` of type <code>[AdminConversationsRenameschema](src/models/admin-conversations-renameschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsGetConversationPrefs(request: AdminConversations.AdminConversationsGetConversationPrefsRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsGetConversationPrefsschema, AdminConversations.AdminConversationsGetConversationPrefsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get conversation preferences for a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsGetConversationPrefs({
    channelId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AdminConversationsGetConversationPrefsschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsGetConversationPrefsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsGetConversationPrefs({
  channelId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsGetConversationPrefsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>string</code> | The channel to get preferences for. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsGetConversationPrefs(request)`

- **OnSuccess**: <code>[AdminConversationsGetConversationPrefsschema](src/models/admin-conversations-get-conversation-prefsschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsGetConversationPrefsError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsGetConversationPrefs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsGetConversationPrefsschema, AdminConversations.AdminConversationsGetConversationPrefsError&gt;</code>, with `result.value` of type <code>[AdminConversationsGetConversationPrefsschema](src/models/admin-conversations-get-conversation-prefsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsGetTeams(request: AdminConversations.AdminConversationsGetTeamsRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsGetTeamsschema, AdminConversations.AdminConversationsGetTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all the workspaces a given public or private channel is connected to within this Enterprise org.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsGetTeams({
    channelId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AdminConversationsGetTeamsschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsGetTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsGetTeams({
  channelId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsGetTeamsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>string</code> | The channel to determine connected workspaces within the organization for. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsGetTeams(request)`

- **OnSuccess**: <code>[AdminConversationsGetTeamsschema](src/models/admin-conversations-get-teamsschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsGetTeamsError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsGetTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsGetTeamsschema, AdminConversations.AdminConversationsGetTeamsError&gt;</code>, with `result.value` of type <code>[AdminConversationsGetTeamsschema](src/models/admin-conversations-get-teamsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsInvite(request: AdminConversations.AdminConversationsInviteRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsInviteschema, AdminConversations.AdminConversationsInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite a user to a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsInvite({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    userIds: "some example string",
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsInviteschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsInvite({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  userIds: "some example string",
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsInviteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>userIds</code> | <code>string</code> | The users to invite. |
| <code>channelId</code> | <code>string</code> | The channel that the users will be invited to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsInvite(request)`

- **OnSuccess**: <code>[AdminConversationsInviteschema](src/models/admin-conversations-inviteschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsInviteError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsInviteschema, AdminConversations.AdminConversationsInviteError&gt;</code>, with `result.value` of type <code>[AdminConversationsInviteschema](src/models/admin-conversations-inviteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRename(request: AdminConversations.AdminConversationsRenameRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsRenameschema1, AdminConversations.AdminConversationsRenameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsRename({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsRenameschema1
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsRenameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsRename({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsRenameschema1
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to rename. |
| <code>name</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsRename(request)`

- **OnSuccess**: <code>[AdminConversationsRenameschema1](src/models/admin-conversations-renameschema1.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsRenameError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsRename(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsRenameschema1, AdminConversations.AdminConversationsRenameError&gt;</code>, with `result.value` of type <code>[AdminConversationsRenameschema1](src/models/admin-conversations-renameschema1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsSearch(request: AdminConversations.AdminConversationsSearchRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsSearchschema, AdminConversations.AdminConversationsSearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for public or private channels in an Enterprise organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsSearch({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AdminConversationsSearchschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsSearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsSearch({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsSearchschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamIds?</code> | <code>string</code> | Comma separated string of team IDs, signifying the workspaces to search through. |
| <code>query?</code> | <code>string</code> | Name of the the channel to query by. |
| <code>limit?</code> | <code>number</code> | Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>searchChannelTypes?</code> | <code>string</code> | The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](#types). |
| <code>sort?</code> | <code>string</code> | Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted |
| <code>sortDir?</code> | <code>string</code> | Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a) |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsSearch(request)`

- **OnSuccess**: <code>[AdminConversationsSearchschema](src/models/admin-conversations-searchschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsSearchError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsSearch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsSearchschema, AdminConversations.AdminConversationsSearchError&gt;</code>, with `result.value` of type <code>[AdminConversationsSearchschema](src/models/admin-conversations-searchschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsSetConversationPrefs(request: AdminConversations.AdminConversationsSetConversationPrefsRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsSetConversationPrefsschema, AdminConversations.AdminConversationsSetConversationPrefsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the posting permissions for a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsSetConversationPrefs({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
    prefs: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsSetConversationPrefsschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsSetConversationPrefsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsSetConversationPrefs({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
  prefs: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsSetConversationPrefsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to set the prefs for |
| <code>prefs</code> | <code>string</code> | The prefs for this channel in a stringified JSON format. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsSetConversationPrefs(request)`

- **OnSuccess**: <code>[AdminConversationsSetConversationPrefsschema](src/models/admin-conversations-set-conversation-prefsschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsSetConversationPrefsError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsSetConversationPrefs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsSetConversationPrefsschema, AdminConversations.AdminConversationsSetConversationPrefsError&gt;</code>, with `result.value` of type <code>[AdminConversationsSetConversationPrefsschema](src/models/admin-conversations-set-conversation-prefsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsSetTeams(request: AdminConversations.AdminConversationsSetTeamsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminConversations.AdminConversationsSetTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the workspaces in an Enterprise grid org that connect to a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsSetTeams({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsSetTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsSetTeams({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The encoded `channel_id` to add or remove to workspaces. |
| <code>teamId?</code> | <code>string</code> | The workspace to which the channel belongs. Omit this argument if the channel is a cross-workspace shared channel. |
| <code>targetTeamIds?</code> | <code>string</code> | A comma-separated list of workspaces to which the channel should be shared. Not required if the channel is being shared org-wide. |
| <code>orgChannel?</code> | <code>boolean</code> | True if channel has to be converted to an org channel |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsSetTeams(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsSetTeamsError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsSetTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminConversations.AdminConversationsSetTeamsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsUnarchive(request: AdminConversations.AdminConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise&lt;AdminConversationsUnarchiveschema, AdminConversations.AdminConversationsUnarchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unarchive a public or private channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsUnarchive({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type AdminConversationsUnarchiveschema
} catch (err) {
  // TODO: Handle 'err' of type AdminConversations.AdminConversationsUnarchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversations.adminConversationsUnarchive({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdminConversationsUnarchiveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channelId</code> | <code>string</code> | The channel to unarchive. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversations.adminConversationsUnarchive(request)`

- **OnSuccess**: <code>[AdminConversationsUnarchiveschema](src/models/admin-conversations-unarchiveschema.ts)</code>
- **OnError**: throws <code>[AdminConversations.AdminConversationsUnarchiveError](src/resources/admin-conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversations.adminConversationsUnarchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdminConversationsUnarchiveschema, AdminConversations.AdminConversationsUnarchiveError&gt;</code>, with `result.value` of type <code>[AdminConversationsUnarchiveschema](src/models/admin-conversations-unarchiveschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminConversationsEkm

> Source: [AdminConversationsEkm](src/resources/admin-conversations-ekm.ts)

<details>
<summary><code>adminConversationsEkmListOriginalConnectedChannelInfo(request: AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsEkm.adminConversationsEkmListOriginalConnectedChannelInfo({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversationsEkm.adminConversationsEkmListOriginalConnectedChannelInfo({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>channelIds?</code> | <code>string</code> | A comma-separated list of channels to filter to. |
| <code>teamIds?</code> | <code>string</code> | A comma-separated list of the workspaces to which the channels you would like returned belong. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversationsEkm.adminConversationsEkmListOriginalConnectedChannelInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError](src/resources/admin-conversations-ekm.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversationsEkm.adminConversationsEkmListOriginalConnectedChannelInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminConversationsRestrictAccess

> Source: [AdminConversationsRestrictAccess](src/resources/admin-conversations-restrict-access.ts)

<details>
<summary><code>adminConversationsRestrictAccessAddGroup(request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an allowlist of IDP groups for accessing a channel

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessAddGroup({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    groupId: "some example string",
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessAddGroup({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  groupId: "some example string",
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>groupId</code> | <code>string</code> | The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to be an allowlist for the private channel. |
| <code>channelId</code> | <code>string</code> | The channel to link this group to. |
| <code>teamId?</code> | <code>string</code> | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessAddGroup(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError](src/resources/admin-conversations-restrict-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessAddGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRestrictAccessListGroups(request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all IDP Groups linked to a channel

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessListGroups({
    token: "some example string",
    channelId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessListGroups({
  token: "some example string",
  channelId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:read` |
| <code>channelId</code> | <code>string</code> | - |
| <code>teamId?</code> | <code>string</code> | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessListGroups(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError](src/resources/admin-conversations-restrict-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessListGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminConversationsRestrictAccessRemoveGroup(request: AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a linked IDP group linked from a private channel

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessRemoveGroup({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    teamId: "some example string",
    groupId: "some example string",
    channelId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessRemoveGroup({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  teamId: "some example string",
  groupId: "some example string",
  channelId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.conversations:write` |
| <code>teamId</code> | <code>string</code> | The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization. |
| <code>groupId</code> | <code>string</code> | The [IDP Group](https://slack.com/help/articles/115001435788-Connect-identity-provider-groups-to-your-Enterprise-Grid-org) ID to remove from the private channel. |
| <code>channelId</code> | <code>string</code> | The channel to remove the linked group from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessRemoveGroup(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError](src/resources/admin-conversations-restrict-access.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessRemoveGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminEmoji

> Source: [AdminEmoji](src/resources/admin-emoji.ts)

<details>
<summary><code>adminEmojiAdd(request: AdminEmoji.AdminEmojiAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an emoji.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiAdd({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
    url: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminEmoji.AdminEmojiAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminEmoji.adminEmojiAdd({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
  url: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. |
| <code>url</code> | <code>string</code> | The URL of a file to use as an image for the emoji. Square images under 128KB and with transparent backgrounds work best. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminEmoji.adminEmojiAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminEmoji.AdminEmojiAddError](src/resources/admin-emoji.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminEmoji.adminEmojiAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiAddAlias(request: AdminEmoji.AdminEmojiAddAliasRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddAliasError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an emoji alias.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiAddAlias({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
    aliasFor: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminEmoji.AdminEmojiAddAliasError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminEmoji.adminEmojiAddAlias({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
  aliasFor: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be aliased. Colons (`:myemoji:`) around the value are not required, although they may be included. |
| <code>aliasFor</code> | <code>string</code> | The alias of the emoji. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminEmoji.adminEmojiAddAlias(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminEmoji.AdminEmojiAddAliasError](src/resources/admin-emoji.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminEmoji.adminEmojiAddAlias(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiAddAliasError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiList(request: AdminEmoji.AdminEmojiListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List emoji for an Enterprise Grid organization.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminEmoji.AdminEmojiListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminEmoji.adminEmojiList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminEmoji.adminEmojiList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminEmoji.AdminEmojiListError](src/resources/admin-emoji.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminEmoji.adminEmojiList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiRemove(request: AdminEmoji.AdminEmojiRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove an emoji across an Enterprise Grid organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiRemove({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminEmoji.AdminEmojiRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminEmoji.adminEmojiRemove({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be removed. Colons (`:myemoji:`) around the value are not required, although they may be included. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminEmoji.adminEmojiRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminEmoji.AdminEmojiRemoveError](src/resources/admin-emoji.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminEmoji.adminEmojiRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminEmojiRename(request: AdminEmoji.AdminEmojiRenameRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiRenameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename an emoji.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiRename({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    name: "some example string",
    newName: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminEmoji.AdminEmojiRenameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminEmoji.adminEmojiRename({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  name: "some example string",
  newName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>name</code> | <code>string</code> | The name of the emoji to be renamed. Colons (`:myemoji:`) around the value are not required, although they may be included. |
| <code>newName</code> | <code>string</code> | The new name of the emoji. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminEmoji.adminEmojiRename(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminEmoji.AdminEmojiRenameError](src/resources/admin-emoji.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminEmoji.adminEmojiRename(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminEmoji.AdminEmojiRenameError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminInviteRequests

> Source: [AdminInviteRequests](src/resources/admin-invite-requests.ts)

<details>
<summary><code>adminInviteRequestsApprove(request: AdminInviteRequests.AdminInviteRequestsApproveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsApproveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approve a workspace invite request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequests.adminInviteRequestsApprove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    inviteRequestId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminInviteRequests.AdminInviteRequestsApproveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminInviteRequests.adminInviteRequestsApprove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  inviteRequestId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>inviteRequestId</code> | <code>string</code> | ID of the request to invite. |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite request was made. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminInviteRequests.adminInviteRequestsApprove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminInviteRequests.AdminInviteRequestsApproveError](src/resources/admin-invite-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminInviteRequests.adminInviteRequestsApprove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsApproveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsDeny(request: AdminInviteRequests.AdminInviteRequestsDenyRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsDenyError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deny a workspace invite request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequests.adminInviteRequestsDeny({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    inviteRequestId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminInviteRequests.AdminInviteRequestsDenyError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminInviteRequests.adminInviteRequestsDeny({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  inviteRequestId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>inviteRequestId</code> | <code>string</code> | ID of the request to invite. |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite request was made. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminInviteRequests.adminInviteRequestsDeny(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminInviteRequests.AdminInviteRequestsDenyError](src/resources/admin-invite-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminInviteRequests.adminInviteRequestsDeny(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsDenyError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminInviteRequestsList(request: AdminInviteRequests.AdminInviteRequestsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all pending workspace invite requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequests.adminInviteRequestsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminInviteRequests.AdminInviteRequestsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminInviteRequests.adminInviteRequestsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite requests were made. |
| <code>cursor?</code> | <code>string</code> | Value of the `next_cursor` field sent as part of the previous API response |
| <code>limit?</code> | <code>number</code> | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminInviteRequests.adminInviteRequestsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminInviteRequests.AdminInviteRequestsListError](src/resources/admin-invite-requests.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminInviteRequests.adminInviteRequestsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminInviteRequests.AdminInviteRequestsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminInviteRequestsApproved

> Source: [AdminInviteRequestsApproved](src/resources/admin-invite-requests-approved.ts)

<details>
<summary><code>adminInviteRequestsApprovedList(request: AdminInviteRequestsApproved.AdminInviteRequestsApprovedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all approved workspace invite requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequestsApproved.adminInviteRequestsApprovedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminInviteRequestsApproved.adminInviteRequestsApprovedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite requests were made. |
| <code>cursor?</code> | <code>string</code> | Value of the `next_cursor` field sent as part of the previous API response |
| <code>limit?</code> | <code>number</code> | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminInviteRequestsApproved.adminInviteRequestsApprovedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError](src/resources/admin-invite-requests-approved.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminInviteRequestsApproved.adminInviteRequestsApprovedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminInviteRequestsDenied

> Source: [AdminInviteRequestsDenied](src/resources/admin-invite-requests-denied.ts)

<details>
<summary><code>adminInviteRequestsDeniedList(request: AdminInviteRequestsDenied.AdminInviteRequestsDeniedListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all denied workspace invite requests.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequestsDenied.adminInviteRequestsDeniedList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminInviteRequestsDenied.adminInviteRequestsDeniedList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId?</code> | <code>string</code> | ID for the workspace where the invite requests were made. |
| <code>cursor?</code> | <code>string</code> | Value of the `next_cursor` field sent as part of the previous api response |
| <code>limit?</code> | <code>number</code> | The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.invites:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminInviteRequestsDenied.adminInviteRequestsDeniedList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError](src/resources/admin-invite-requests-denied.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminInviteRequestsDenied.adminInviteRequestsDeniedList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminTeamsAdmins

> Source: [AdminTeamsAdmins](src/resources/admin-teams-admins.ts)

<details>
<summary><code>adminTeamsAdminsList(request: AdminTeamsAdmins.AdminTeamsAdminsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsAdmins.AdminTeamsAdminsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the admins on a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsAdmins.adminTeamsAdminsList({
    token: "some example string",
    teamId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsAdmins.AdminTeamsAdminsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsAdmins.adminTeamsAdminsList({
  token: "some example string",
  teamId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>teamId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsAdmins.adminTeamsAdminsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsAdmins.AdminTeamsAdminsListError](src/resources/admin-teams-admins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsAdmins.adminTeamsAdminsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsAdmins.AdminTeamsAdminsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminTeams

> Source: [AdminTeams](src/resources/admin-teams.ts)

<details>
<summary><code>adminTeamsCreate(request: AdminTeams.AdminTeamsCreateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeams.AdminTeamsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an Enterprise team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeams.adminTeamsCreate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamDomain: "some example string",
    teamName: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeams.AdminTeamsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeams.adminTeamsCreate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamDomain: "some example string",
  teamName: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamDomain</code> | <code>string</code> | Team domain (for example, slacksoftballteam). |
| <code>teamName</code> | <code>string</code> | Team name (for example, Slack Softball Team). |
| <code>teamDescription?</code> | <code>string</code> | Description for the team. |
| <code>teamDiscoverability?</code> | <code>string</code> | Who can join the team. A team's discoverability can be `open`, `closed`, `invite_only`, or `unlisted`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeams.adminTeamsCreate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeams.AdminTeamsCreateError](src/resources/admin-teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeams.adminTeamsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeams.AdminTeamsCreateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsList(request: AdminTeams.AdminTeamsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeams.AdminTeamsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all teams on an Enterprise organization

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeams.adminTeamsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeams.AdminTeamsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeams.adminTeamsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 100 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeams.adminTeamsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeams.AdminTeamsListError](src/resources/admin-teams.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeams.adminTeamsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeams.AdminTeamsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminTeamsOwners

> Source: [AdminTeamsOwners](src/resources/admin-teams-owners.ts)

<details>
<summary><code>adminTeamsOwnersList(request: AdminTeamsOwners.AdminTeamsOwnersListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsOwners.AdminTeamsOwnersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all of the owners on a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsOwners.adminTeamsOwnersList({
    token: "some example string",
    teamId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsOwners.AdminTeamsOwnersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsOwners.adminTeamsOwnersList({
  token: "some example string",
  teamId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>teamId</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Must be between 1 - 1000 both inclusive. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsOwners.adminTeamsOwnersList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsOwners.AdminTeamsOwnersListError](src/resources/admin-teams-owners.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsOwners.adminTeamsOwnersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsOwners.AdminTeamsOwnersListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminTeamsSettings

> Source: [AdminTeamsSettings](src/resources/admin-teams-settings.ts)

<details>
<summary><code>adminTeamsSettingsInfo(request: AdminTeamsSettings.AdminTeamsSettingsInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch information about settings in a workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsInfo({
    teamId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsSettings.AdminTeamsSettingsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsSettings.adminTeamsSettingsInfo({
  teamId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId</code> | <code>string</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsSettings.adminTeamsSettingsInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsSettings.AdminTeamsSettingsInfoError](src/resources/admin-teams-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsSettings.adminTeamsSettingsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetDefaultChannels(request: AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the default channels of a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetDefaultChannels({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    teamId: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsSettings.adminTeamsSettingsSetDefaultChannels({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  teamId: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the default channel for. |
| <code>channelIds</code> | <code>string</code> | An array of channel IDs. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsSettings.adminTeamsSettingsSetDefaultChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError](src/resources/admin-teams-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsSettings.adminTeamsSettingsSetDefaultChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetDescription(request: AdminTeamsSettings.AdminTeamsSettingsSetDescriptionRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the description of a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetDescription({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    description: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsSettings.adminTeamsSettingsSetDescription({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  description: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the description for. |
| <code>description</code> | <code>string</code> | The new description for the workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsSettings.adminTeamsSettingsSetDescription(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError](src/resources/admin-teams-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsSettings.adminTeamsSettingsSetDescription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetDiscoverability(request: AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

An API method that allows admins to set the discoverability of a given workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetDiscoverability({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    discoverability: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsSettings.adminTeamsSettingsSetDiscoverability({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  discoverability: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID of the workspace to set discoverability on. |
| <code>discoverability</code> | <code>string</code> | This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsSettings.adminTeamsSettingsSetDiscoverability(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError](src/resources/admin-teams-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsSettings.adminTeamsSettingsSetDiscoverability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetIcon(request: AdminTeamsSettings.AdminTeamsSettingsSetIconRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetIconError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the icon of a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetIcon({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    imageUrl: "some example string",
    teamId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsSettings.AdminTeamsSettingsSetIconError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsSettings.adminTeamsSettingsSetIcon({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  imageUrl: "some example string",
  teamId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>imageUrl</code> | <code>string</code> | Image URL for the icon |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the icon for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsSettings.adminTeamsSettingsSetIcon(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsSettings.AdminTeamsSettingsSetIconError](src/resources/admin-teams-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsSettings.adminTeamsSettingsSetIcon(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetIconError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminTeamsSettingsSetName(request: AdminTeamsSettings.AdminTeamsSettingsSetNameRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetNameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the name of a given workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetName({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    name: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminTeamsSettings.AdminTeamsSettingsSetNameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminTeamsSettings.adminTeamsSettingsSetName({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | ID for the workspace to set the name for. |
| <code>name</code> | <code>string</code> | The new name of the workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminTeamsSettings.adminTeamsSettingsSetName(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminTeamsSettings.AdminTeamsSettingsSetNameError](src/resources/admin-teams-settings.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminTeamsSettings.adminTeamsSettingsSetName(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminTeamsSettings.AdminTeamsSettingsSetNameError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminUsergroups

> Source: [AdminUsergroups](src/resources/admin-usergroups.ts)

<details>
<summary><code>adminUsergroupsAddChannels(request: AdminUsergroups.AdminUsergroupsAddChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add one or more default channels to an IDP group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsAddChannels({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroupId: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsergroups.AdminUsergroupsAddChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsergroups.adminUsergroupsAddChannels({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroupId: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroupId</code> | <code>string</code> | ID of the IDP group to add default channels for. |
| <code>channelIds</code> | <code>string</code> | Comma separated string of channel IDs. |
| <code>teamId?</code> | <code>string</code> | The workspace to add default channels in. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsergroups.adminUsergroupsAddChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsergroups.AdminUsergroupsAddChannelsError](src/resources/admin-usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsergroups.adminUsergroupsAddChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsAddTeams(request: AdminUsergroups.AdminUsergroupsAddTeamsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddTeamsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Associate one or more default workspaces with an organization-wide IDP group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsAddTeams({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroupId: "some example string",
    teamIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsergroups.AdminUsergroupsAddTeamsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsergroups.adminUsergroupsAddTeams({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroupId: "some example string",
  teamIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.teams:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroupId</code> | <code>string</code> | An encoded usergroup (IDP Group) ID. |
| <code>teamIds</code> | <code>string</code> | A comma separated list of encoded team (workspace) IDs. Each workspace *MUST* belong to the organization associated with the token. |
| <code>autoProvision?</code> | <code>boolean</code> | When `true`, this method automatically creates new workspace accounts for the IDP group members. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsergroups.adminUsergroupsAddTeams(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsergroups.AdminUsergroupsAddTeamsError](src/resources/admin-usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsergroups.adminUsergroupsAddTeams(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsAddTeamsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsListChannels(request: AdminUsergroups.AdminUsergroupsListChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsListChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the channels linked to an org-level IDP group (user group).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsListChannels({
    usergroupId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsergroups.AdminUsergroupsListChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsergroups.adminUsergroupsListChannels({
  usergroupId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>usergroupId</code> | <code>string</code> | ID of the IDP group to list default channels for. |
| <code>teamId?</code> | <code>string</code> | ID of the the workspace. |
| <code>includeNumMembers?</code> | <code>boolean</code> | Flag to include or exclude the count of members per channel. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.usergroups:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsergroups.adminUsergroupsListChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsergroups.AdminUsergroupsListChannelsError](src/resources/admin-usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsergroups.adminUsergroupsListChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsListChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsergroupsRemoveChannels(request: AdminUsergroups.AdminUsergroupsRemoveChannelsRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsRemoveChannelsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove one or more default channels from an org-level IDP group (user group).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsRemoveChannels({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroupId: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsergroups.AdminUsergroupsRemoveChannelsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsergroups.adminUsergroupsRemoveChannels({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroupId: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroupId</code> | <code>string</code> | ID of the IDP Group |
| <code>channelIds</code> | <code>string</code> | Comma-separated string of channel IDs |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsergroups.adminUsergroupsRemoveChannels(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsergroups.AdminUsergroupsRemoveChannelsError](src/resources/admin-usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsergroups.adminUsergroupsRemoveChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsergroups.AdminUsergroupsRemoveChannelsError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminUsers

> Source: [AdminUsers](src/resources/admin-users.ts)

<details>
<summary><code>adminUsersAssign(request: AdminUsers.AdminUsersAssignRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersAssignError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add an Enterprise user to a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersAssign({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersAssignError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersAssign({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to add to the workspace. |
| <code>isRestricted?</code> | <code>boolean</code> | True if user should be added to the workspace as a guest. |
| <code>isUltraRestricted?</code> | <code>boolean</code> | True if user should be added to the workspace as a single-channel guest. |
| <code>channelIds?</code> | <code>string</code> | Comma separated values of channel IDs to add user in the new workspace. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersAssign(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersAssignError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersAssign(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersAssignError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersInvite(request: AdminUsers.AdminUsersInviteRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite a user to a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersInvite({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    email: "some example string",
    channelIds: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersInvite({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  email: "some example string",
  channelIds: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>email</code> | <code>string</code> | The email address of the person to invite. |
| <code>channelIds</code> | <code>string</code> | A comma-separated list of `channel_id`s for this user to join. At least one channel is required. |
| <code>customMessage?</code> | <code>string</code> | An optional message to send to the user in the invite email. |
| <code>realName?</code> | <code>string</code> | Full name of the user. |
| <code>resend?</code> | <code>boolean</code> | Allow this invite to be resent in the future if a user has not signed up yet. (default: false) |
| <code>isRestricted?</code> | <code>boolean</code> | Is this user a multi-channel guest user? (default: false) |
| <code>isUltraRestricted?</code> | <code>boolean</code> | Is this user a single channel guest user? (default: false) |
| <code>guestExpirationTs?</code> | <code>string</code> | Timestamp when guest account should be disabled. Only include this timestamp if you are inviting a guest user and you want their account to expire on a certain date. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersInvite(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersInviteError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersInviteError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersList(request: AdminUsers.AdminUsersListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List users on a workspace

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersList({
    teamId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersList({
  teamId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>cursor?</code> | <code>string</code> | Set `cursor` to `next_cursor` returned by the previous call to list items in the next page. |
| <code>limit?</code> | <code>number</code> | Limit for how many users to be retrieved per page |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersListError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersRemove(request: AdminUsers.AdminUsersRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a user from a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to remove. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersRemoveError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetAdmin(request: AdminUsers.AdminUsersSetAdminRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetAdminError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an existing guest, regular user, or owner to be an admin user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetAdmin({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersSetAdminError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersSetAdmin({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to designate as an admin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersSetAdmin(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersSetAdminError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersSetAdmin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetAdminError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetExpiration(request: AdminUsers.AdminUsersSetExpirationRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetExpirationError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an expiration for a guest user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetExpiration({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
    expirationTs: 1,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersSetExpirationError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersSetExpiration({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
  expirationTs: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to set an expiration for. |
| <code>expirationTs</code> | <code>number</code> | Timestamp when guest account should be disabled. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersSetExpiration(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersSetExpirationError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersSetExpiration(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetExpirationError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetOwner(request: AdminUsers.AdminUsersSetOwnerRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetOwnerError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an existing guest, regular user, or admin user to be a workspace owner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetOwner({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersSetOwnerError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersSetOwner({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | Id of the user to promote to owner. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersSetOwner(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersSetOwnerError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersSetOwner(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetOwnerError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSetRegular(request: AdminUsers.AdminUsersSetRegularRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetRegularError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set an existing guest user, admin user, or owner to be a regular user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetRegular({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsers.AdminUsersSetRegularError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsers.adminUsersSetRegular({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | The ID (`T1234`) of the workspace. |
| <code>userId</code> | <code>string</code> | The ID of the user to designate as a regular user. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsers.adminUsersSetRegular(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsers.AdminUsersSetRegularError](src/resources/admin-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsers.adminUsersSetRegular(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsers.AdminUsersSetRegularError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AdminUsersSession

> Source: [AdminUsersSession](src/resources/admin-users-session.ts)

<details>
<summary><code>adminUsersSessionInvalidate(request: AdminUsersSession.AdminUsersSessionInvalidateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionInvalidateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invalidate a single session for a user by session_id

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsersSession.adminUsersSessionInvalidate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    teamId: "some example string",
    sessionId: 1,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsersSession.AdminUsersSessionInvalidateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsersSession.adminUsersSessionInvalidate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  teamId: "some example string",
  sessionId: 1,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>teamId</code> | <code>string</code> | ID of the team that the session belongs to |
| <code>sessionId</code> | <code>number</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsersSession.adminUsersSessionInvalidate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsersSession.AdminUsersSessionInvalidateError](src/resources/admin-users-session.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsersSession.adminUsersSessionInvalidate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionInvalidateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adminUsersSessionReset(request: AdminUsersSession.AdminUsersSessionResetRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionResetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Wipes all valid sessions on all devices for a given user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsersSession.adminUsersSessionReset({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    userId: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AdminUsersSession.AdminUsersSessionResetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.adminUsersSession.adminUsersSessionReset({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  userId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin.users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>userId</code> | <code>string</code> | The ID of the user to wipe sessions for |
| <code>mobileOnly?</code> | <code>boolean</code> | Only expire mobile sessions (default: false) |
| <code>webOnly?</code> | <code>boolean</code> | Only expire web sessions (default: false) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.adminUsersSession.adminUsersSessionReset(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AdminUsersSession.AdminUsersSessionResetError](src/resources/admin-users-session.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.adminUsersSession.adminUsersSessionReset(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AdminUsersSession.AdminUsersSessionResetError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Api

> Source: [Api](src/resources/api.ts)

<details>
<summary><code>apiTest(request: Api.ApiTestRequest, options?: RequestOptions): ApiPromise&lt;ApiTestsuccessschema, Api.ApiTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks API calling code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.api.apiTest({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type ApiTestsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Api.ApiTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.api.apiTest({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiTestsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>error?</code> | <code>string</code> | Error response to return |
| <code>foo?</code> | <code>string</code> | example property to return |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.api.apiTest(request)`

- **OnSuccess**: <code>[ApiTestsuccessschema](src/models/api-testsuccessschema.ts)</code>
- **OnError**: throws <code>[Api.ApiTestError](src/resources/api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.api.apiTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiTestsuccessschema, Api.ApiTestError&gt;</code>, with `result.value` of type <code>[ApiTestsuccessschema](src/models/api-testsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppsEventAuthorizations

> Source: [AppsEventAuthorizations](src/resources/apps-event-authorizations.ts)

<details>
<summary><code>appsEventAuthorizationsList(request: AppsEventAuthorizations.AppsEventAuthorizationsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AppsEventAuthorizations.AppsEventAuthorizationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsEventAuthorizations.appsEventAuthorizationsList({
    eventContext: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AppsEventAuthorizations.AppsEventAuthorizationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsEventAuthorizations.appsEventAuthorizationsList({
  eventContext: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>eventContext</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `authorizations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsEventAuthorizations.appsEventAuthorizationsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AppsEventAuthorizations.AppsEventAuthorizationsListError](src/resources/apps-event-authorizations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsEventAuthorizations.appsEventAuthorizationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AppsEventAuthorizations.AppsEventAuthorizationsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Apps

> Source: [Apps](src/resources/apps.ts)

<details>
<summary><code>appsEventAuthorizationsList(request: Apps.AppsEventAuthorizationsListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Apps.AppsEventAuthorizationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsEventAuthorizationsList({
    eventContext: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsEventAuthorizationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsEventAuthorizationsList({
  eventContext: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>eventContext</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `authorizations:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsEventAuthorizationsList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Apps.AppsEventAuthorizationsListError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsEventAuthorizationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Apps.AppsEventAuthorizationsListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsInfo(request: Apps.AppsPermissionsInfoRequest, options?: RequestOptions): ApiPromise&lt;AppsPermissionsInfoschema, Apps.AppsPermissionsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of permissions this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsInfo({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsPermissionsInfoschema
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsPermissionsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsPermissionsInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsPermissionsInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsPermissionsInfo(request)`

- **OnSuccess**: <code>[AppsPermissionsInfoschema](src/models/apps-permissions-infoschema.ts)</code>
- **OnError**: throws <code>[Apps.AppsPermissionsInfoError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsPermissionsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsPermissionsInfoschema, Apps.AppsPermissionsInfoError&gt;</code>, with `result.value` of type <code>[AppsPermissionsInfoschema](src/models/apps-permissions-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsRequest(request: Apps.AppsPermissionsRequestRequest, options?: RequestOptions): ApiPromise&lt;AppsPermissionsRequestschema, Apps.AppsPermissionsRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows an app to request additional scopes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsRequest({
    token: "some example string",
    scopes: "some example string",
    triggerId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsPermissionsRequestschema
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsPermissionsRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsPermissionsRequest({
  token: "some example string",
  scopes: "some example string",
  triggerId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsPermissionsRequestschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>scopes</code> | <code>string</code> | A comma separated list of scopes to request for |
| <code>triggerId</code> | <code>string</code> | Token used to trigger the permissions API |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsPermissionsRequest(request)`

- **OnSuccess**: <code>[AppsPermissionsRequestschema](src/models/apps-permissions-requestschema.ts)</code>
- **OnError**: throws <code>[Apps.AppsPermissionsRequestError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsPermissionsRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsPermissionsRequestschema, Apps.AppsPermissionsRequestError&gt;</code>, with `result.value` of type <code>[AppsPermissionsRequestschema](src/models/apps-permissions-requestschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsResourcesList(request: Apps.AppsPermissionsResourcesListRequest, options?: RequestOptions): ApiPromise&lt;AppsPermissionsResourcesListsuccessschema, Apps.AppsPermissionsResourcesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of resource grants this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsResourcesList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsPermissionsResourcesListsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsPermissionsResourcesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsPermissionsResourcesList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsPermissionsResourcesListsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsPermissionsResourcesList(request)`

- **OnSuccess**: <code>[AppsPermissionsResourcesListsuccessschema](src/models/apps-permissions-resources-listsuccessschema.ts)</code>
- **OnError**: throws <code>[Apps.AppsPermissionsResourcesListError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsPermissionsResourcesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsPermissionsResourcesListsuccessschema, Apps.AppsPermissionsResourcesListError&gt;</code>, with `result.value` of type <code>[AppsPermissionsResourcesListsuccessschema](src/models/apps-permissions-resources-listsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsScopesList(request: Apps.AppsPermissionsScopesListRequest, options?: RequestOptions): ApiPromise&lt;ApiPermissionsScopesListsuccessschema, Apps.AppsPermissionsScopesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of scopes this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsScopesList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ApiPermissionsScopesListsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsPermissionsScopesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsPermissionsScopesList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiPermissionsScopesListsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsPermissionsScopesList(request)`

- **OnSuccess**: <code>[ApiPermissionsScopesListsuccessschema](src/models/api-permissions-scopes-listsuccessschema.ts)</code>
- **OnError**: throws <code>[Apps.AppsPermissionsScopesListError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsPermissionsScopesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiPermissionsScopesListsuccessschema, Apps.AppsPermissionsScopesListError&gt;</code>, with `result.value` of type <code>[ApiPermissionsScopesListsuccessschema](src/models/api-permissions-scopes-listsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsUsersList(request: Apps.AppsPermissionsUsersListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Apps.AppsPermissionsUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of user grants and corresponding scopes this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsUsersList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsPermissionsUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsPermissionsUsersList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsPermissionsUsersList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Apps.AppsPermissionsUsersListError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsPermissionsUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Apps.AppsPermissionsUsersListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsUsersRequest(request: Apps.AppsPermissionsUsersRequestRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Apps.AppsPermissionsUsersRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables an app to trigger a permissions modal to grant an app access to a user access scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsUsersRequest({
    token: "some example string",
    scopes: "some example string",
    triggerId: "some example string",
    user: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsPermissionsUsersRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsPermissionsUsersRequest({
  token: "some example string",
  scopes: "some example string",
  triggerId: "some example string",
  user: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>scopes</code> | <code>string</code> | A comma separated list of user scopes to request for |
| <code>triggerId</code> | <code>string</code> | Token used to trigger the request |
| <code>user</code> | <code>string</code> | The user this scope is being requested for |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsPermissionsUsersRequest(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Apps.AppsPermissionsUsersRequestError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsPermissionsUsersRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Apps.AppsPermissionsUsersRequestError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsUninstall(request: Apps.AppsUninstallRequest, options?: RequestOptions): ApiPromise&lt;AppsUninstallschema, Apps.AppsUninstallError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uninstalls your app from a workspace.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsUninstall({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsUninstallschema
} catch (err) {
  // TODO: Handle 'err' of type Apps.AppsUninstallError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.apps.appsUninstall({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsUninstallschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>clientId?</code> | <code>string</code> | Issued when you created your application. |
| <code>clientSecret?</code> | <code>string</code> | Issued when you created your application. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.apps.appsUninstall(request)`

- **OnSuccess**: <code>[AppsUninstallschema](src/models/apps-uninstallschema.ts)</code>
- **OnError**: throws <code>[Apps.AppsUninstallError](src/resources/apps.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.apps.appsUninstall(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsUninstallschema, Apps.AppsUninstallError&gt;</code>, with `result.value` of type <code>[AppsUninstallschema](src/models/apps-uninstallschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppsPermissions

> Source: [AppsPermissions](src/resources/apps-permissions.ts)

<details>
<summary><code>appsPermissionsInfo(request: AppsPermissions.AppsPermissionsInfoRequest, options?: RequestOptions): ApiPromise&lt;AppsPermissionsInfoschema, AppsPermissions.AppsPermissionsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of permissions this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissions.appsPermissionsInfo({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsPermissionsInfoschema
} catch (err) {
  // TODO: Handle 'err' of type AppsPermissions.AppsPermissionsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsPermissions.appsPermissionsInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsPermissionsInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsPermissions.appsPermissionsInfo(request)`

- **OnSuccess**: <code>[AppsPermissionsInfoschema](src/models/apps-permissions-infoschema.ts)</code>
- **OnError**: throws <code>[AppsPermissions.AppsPermissionsInfoError](src/resources/apps-permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsPermissions.appsPermissionsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsPermissionsInfoschema, AppsPermissions.AppsPermissionsInfoError&gt;</code>, with `result.value` of type <code>[AppsPermissionsInfoschema](src/models/apps-permissions-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsRequest(request: AppsPermissions.AppsPermissionsRequestRequest, options?: RequestOptions): ApiPromise&lt;AppsPermissionsRequestschema, AppsPermissions.AppsPermissionsRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Allows an app to request additional scopes

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissions.appsPermissionsRequest({
    token: "some example string",
    scopes: "some example string",
    triggerId: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsPermissionsRequestschema
} catch (err) {
  // TODO: Handle 'err' of type AppsPermissions.AppsPermissionsRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsPermissions.appsPermissionsRequest({
  token: "some example string",
  scopes: "some example string",
  triggerId: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsPermissionsRequestschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>scopes</code> | <code>string</code> | A comma separated list of scopes to request for |
| <code>triggerId</code> | <code>string</code> | Token used to trigger the permissions API |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsPermissions.appsPermissionsRequest(request)`

- **OnSuccess**: <code>[AppsPermissionsRequestschema](src/models/apps-permissions-requestschema.ts)</code>
- **OnError**: throws <code>[AppsPermissions.AppsPermissionsRequestError](src/resources/apps-permissions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsPermissions.appsPermissionsRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsPermissionsRequestschema, AppsPermissions.AppsPermissionsRequestError&gt;</code>, with `result.value` of type <code>[AppsPermissionsRequestschema](src/models/apps-permissions-requestschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppsPermissionsResources

> Source: [AppsPermissionsResources](src/resources/apps-permissions-resources.ts)

<details>
<summary><code>appsPermissionsResourcesList(request: AppsPermissionsResources.AppsPermissionsResourcesListRequest, options?: RequestOptions): ApiPromise&lt;AppsPermissionsResourcesListsuccessschema, AppsPermissionsResources.AppsPermissionsResourcesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of resource grants this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsResources.appsPermissionsResourcesList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AppsPermissionsResourcesListsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type AppsPermissionsResources.AppsPermissionsResourcesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsPermissionsResources.appsPermissionsResourcesList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AppsPermissionsResourcesListsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsPermissionsResources.appsPermissionsResourcesList(request)`

- **OnSuccess**: <code>[AppsPermissionsResourcesListsuccessschema](src/models/apps-permissions-resources-listsuccessschema.ts)</code>
- **OnError**: throws <code>[AppsPermissionsResources.AppsPermissionsResourcesListError](src/resources/apps-permissions-resources.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsPermissionsResources.appsPermissionsResourcesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AppsPermissionsResourcesListsuccessschema, AppsPermissionsResources.AppsPermissionsResourcesListError&gt;</code>, with `result.value` of type <code>[AppsPermissionsResourcesListsuccessschema](src/models/apps-permissions-resources-listsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppsPermissionsScopes

> Source: [AppsPermissionsScopes](src/resources/apps-permissions-scopes.ts)

<details>
<summary><code>appsPermissionsScopesList(request: AppsPermissionsScopes.AppsPermissionsScopesListRequest, options?: RequestOptions): ApiPromise&lt;ApiPermissionsScopesListsuccessschema, AppsPermissionsScopes.AppsPermissionsScopesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of scopes this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsScopes.appsPermissionsScopesList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ApiPermissionsScopesListsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type AppsPermissionsScopes.AppsPermissionsScopesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsPermissionsScopes.appsPermissionsScopesList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApiPermissionsScopesListsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsPermissionsScopes.appsPermissionsScopesList(request)`

- **OnSuccess**: <code>[ApiPermissionsScopesListsuccessschema](src/models/api-permissions-scopes-listsuccessschema.ts)</code>
- **OnError**: throws <code>[AppsPermissionsScopes.AppsPermissionsScopesListError](src/resources/apps-permissions-scopes.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsPermissionsScopes.appsPermissionsScopesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApiPermissionsScopesListsuccessschema, AppsPermissionsScopes.AppsPermissionsScopesListError&gt;</code>, with `result.value` of type <code>[ApiPermissionsScopesListsuccessschema](src/models/api-permissions-scopes-listsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## AppsPermissionsUsers

> Source: [AppsPermissionsUsers](src/resources/apps-permissions-users.ts)

<details>
<summary><code>appsPermissionsUsersList(request: AppsPermissionsUsers.AppsPermissionsUsersListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns list of user grants and corresponding scopes this app has on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsUsers.appsPermissionsUsersList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AppsPermissionsUsers.AppsPermissionsUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsPermissionsUsers.appsPermissionsUsersList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsPermissionsUsers.appsPermissionsUsersList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AppsPermissionsUsers.AppsPermissionsUsersListError](src/resources/apps-permissions-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsPermissionsUsers.appsPermissionsUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>appsPermissionsUsersRequest(request: AppsPermissionsUsers.AppsPermissionsUsersRequestRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersRequestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables an app to trigger a permissions modal to grant an app access to a user access scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsUsers.appsPermissionsUsersRequest({
    token: "some example string",
    scopes: "some example string",
    triggerId: "some example string",
    user: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type AppsPermissionsUsers.AppsPermissionsUsersRequestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.appsPermissionsUsers.appsPermissionsUsersRequest({
  token: "some example string",
  scopes: "some example string",
  triggerId: "some example string",
  user: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>scopes</code> | <code>string</code> | A comma separated list of user scopes to request for |
| <code>triggerId</code> | <code>string</code> | Token used to trigger the request |
| <code>user</code> | <code>string</code> | The user this scope is being requested for |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.appsPermissionsUsers.appsPermissionsUsersRequest(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[AppsPermissionsUsers.AppsPermissionsUsersRequestError](src/resources/apps-permissions-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.appsPermissionsUsers.appsPermissionsUsersRequest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, AppsPermissionsUsers.AppsPermissionsUsersRequestError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Auth

> Source: [Auth](src/resources/auth.ts)

<details>
<summary><code>authRevoke(request: Auth.AuthRevokeRequest, options?: RequestOptions): ApiPromise&lt;AuthRevokeschema, Auth.AuthRevokeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes a token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.authRevoke({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AuthRevokeschema
} catch (err) {
  // TODO: Handle 'err' of type Auth.AuthRevokeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auth2.authRevoke({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthRevokeschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>test?</code> | <code>boolean</code> | Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auth2.authRevoke(request)`

- **OnSuccess**: <code>[AuthRevokeschema](src/models/auth-revokeschema.ts)</code>
- **OnError**: throws <code>[Auth.AuthRevokeError](src/resources/auth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auth2.authRevoke(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthRevokeschema, Auth.AuthRevokeError&gt;</code>, with `result.value` of type <code>[AuthRevokeschema](src/models/auth-revokeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>authTest(request: Auth.AuthTestRequest, options?: RequestOptions): ApiPromise&lt;AuthTestsuccessschema, Auth.AuthTestError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Checks authentication & identity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.authTest({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type AuthTestsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Auth.AuthTestError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.auth2.authTest({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AuthTestsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.auth2.authTest(request)`

- **OnSuccess**: <code>[AuthTestsuccessschema](src/models/auth-testsuccessschema.ts)</code>
- **OnError**: throws <code>[Auth.AuthTestError](src/resources/auth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.auth2.authTest(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AuthTestsuccessschema, Auth.AuthTestError&gt;</code>, with `result.value` of type <code>[AuthTestsuccessschema](src/models/auth-testsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Bots

> Source: [Bots](src/resources/bots.ts)

<details>
<summary><code>botsInfo(request: Bots.BotsInfoRequest, options?: RequestOptions): ApiPromise&lt;BotsInfoschema, Bots.BotsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a bot user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.botsInfo({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type BotsInfoschema
} catch (err) {
  // TODO: Handle 'err' of type Bots.BotsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bots.botsInfo({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BotsInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users:read` |
| <code>bot?</code> | <code>string</code> | Bot user to get info on |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bots.botsInfo(request)`

- **OnSuccess**: <code>[BotsInfoschema](src/models/bots-infoschema.ts)</code>
- **OnError**: throws <code>[Bots.BotsInfoError](src/resources/bots.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.bots.botsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BotsInfoschema, Bots.BotsInfoError&gt;</code>, with `result.value` of type <code>[BotsInfoschema](src/models/bots-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Calls

> Source: [Calls](src/resources/calls.ts)

<details>
<summary><code>callsAdd(request: Calls.CallsAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Calls.CallsAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers a new Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    externalUniqueId: "some example string",
    joinUrl: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  externalUniqueId: "some example string",
  joinUrl: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>externalUniqueId</code> | <code>string</code> | An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service. |
| <code>joinUrl</code> | <code>string</code> | The URL required for a client to join the Call. |
| <code>externalDisplayId?</code> | <code>string</code> | An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object. |
| <code>desktopAppJoinUrl?</code> | <code>string</code> | When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. |
| <code>dateStart?</code> | <code>number</code> | Call start time in UTC UNIX timestamp format |
| <code>title?</code> | <code>string</code> | The name of the Call. |
| <code>createdBy?</code> | <code>string</code> | The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required. |
| <code>users?</code> | <code>string</code> | The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Calls.CallsAddError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Calls.CallsAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsEnd(request: Calls.CallsEndRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Calls.CallsEndError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ends a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsEnd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    id: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsEndError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsEnd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>id</code> | <code>string</code> | `id` returned when registering the call using the [`calls.add`](/methods/calls.add) method. |
| <code>duration?</code> | <code>number</code> | Call duration in seconds |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsEnd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Calls.CallsEndError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsEnd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Calls.CallsEndError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsInfo(request: Calls.CallsInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Calls.CallsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsInfo({
    id: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsInfo({
  id: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | `id` of the Call returned by the [`calls.add`](/methods/calls.add) method. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Calls.CallsInfoError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Calls.CallsInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsParticipantsAdd(request: Calls.CallsParticipantsAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Calls.CallsParticipantsAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers new participants added to a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsParticipantsAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    id: "some example string",
    users: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsParticipantsAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsParticipantsAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  id: "some example string",
  users: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>id</code> | <code>string</code> | `id` returned by the [`calls.add`](/methods/calls.add) method. |
| <code>users</code> | <code>string</code> | The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsParticipantsAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Calls.CallsParticipantsAddError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsParticipantsAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Calls.CallsParticipantsAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsParticipantsRemove(request: Calls.CallsParticipantsRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Calls.CallsParticipantsRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers participants removed from a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsParticipantsRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    id: "some example string",
    users: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsParticipantsRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsParticipantsRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  id: "some example string",
  users: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>id</code> | <code>string</code> | `id` returned by the [`calls.add`](/methods/calls.add) method. |
| <code>users</code> | <code>string</code> | The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsParticipantsRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Calls.CallsParticipantsRemoveError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsParticipantsRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Calls.CallsParticipantsRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsUpdate(request: Calls.CallsUpdateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Calls.CallsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates information about a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsUpdate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    id: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Calls.CallsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.calls.callsUpdate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  id: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>id</code> | <code>string</code> | `id` returned by the [`calls.add`](/methods/calls.add) method. |
| <code>title?</code> | <code>string</code> | The name of the Call. |
| <code>joinUrl?</code> | <code>string</code> | The URL required for a client to join the Call. |
| <code>desktopAppJoinUrl?</code> | <code>string</code> | When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.calls.callsUpdate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Calls.CallsUpdateError](src/resources/calls.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.calls.callsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Calls.CallsUpdateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CallsParticipants

> Source: [CallsParticipants](src/resources/calls-participants.ts)

<details>
<summary><code>callsParticipantsAdd(request: CallsParticipants.CallsParticipantsAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, CallsParticipants.CallsParticipantsAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers new participants added to a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.callsParticipants.callsParticipantsAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    id: "some example string",
    users: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type CallsParticipants.CallsParticipantsAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callsParticipants.callsParticipantsAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  id: "some example string",
  users: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>id</code> | <code>string</code> | `id` returned by the [`calls.add`](/methods/calls.add) method. |
| <code>users</code> | <code>string</code> | The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callsParticipants.callsParticipantsAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[CallsParticipants.CallsParticipantsAddError](src/resources/calls-participants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callsParticipants.callsParticipantsAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, CallsParticipants.CallsParticipantsAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>callsParticipantsRemove(request: CallsParticipants.CallsParticipantsRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, CallsParticipants.CallsParticipantsRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Registers participants removed from a Call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.callsParticipants.callsParticipantsRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    id: "some example string",
    users: "some example string",
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type CallsParticipants.CallsParticipantsRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.callsParticipants.callsParticipantsRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  id: "some example string",
  users: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `calls:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>id</code> | <code>string</code> | `id` returned by the [`calls.add`](/methods/calls.add) method. |
| <code>users</code> | <code>string</code> | The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.callsParticipants.callsParticipantsRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[CallsParticipants.CallsParticipantsRemoveError](src/resources/calls-participants.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.callsParticipants.callsParticipantsRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, CallsParticipants.CallsParticipantsRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Chat

> Source: [Chat](src/resources/chat.ts)

<details>
<summary><code>chatDelete(request: Chat.ChatDeleteRequest, options?: RequestOptions): ApiPromise&lt;ChatDeletesuccessschema, Chat.ChatDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatDelete({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type ChatDeletesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatDelete({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatDeletesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>ts?</code> | <code>number</code> | Timestamp of the message to be deleted. |
| <code>channel?</code> | <code>string</code> | Channel containing the message to be deleted. |
| <code>asUser?</code> | <code>boolean</code> | Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatDelete(request)`

- **OnSuccess**: <code>[ChatDeletesuccessschema](src/models/chat-deletesuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatDeleteError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatDeletesuccessschema, Chat.ChatDeleteError&gt;</code>, with `result.value` of type <code>[ChatDeletesuccessschema](src/models/chat-deletesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatDeleteScheduledMessage(request: Chat.ChatDeleteScheduledMessageRequest, options?: RequestOptions): ApiPromise&lt;ChatDeleteScheduledMessageschema, Chat.ChatDeleteScheduledMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a pending scheduled message from the queue.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatDeleteScheduledMessage({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
    scheduledMessageId: "some example string",
  });
  // TODO: Handle 'response' of type ChatDeleteScheduledMessageschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatDeleteScheduledMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatDeleteScheduledMessage({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
  scheduledMessageId: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatDeleteScheduledMessageschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | The channel the scheduled_message is posting to |
| <code>scheduledMessageId</code> | <code>string</code> | `scheduled_message_id` returned from call to chat.scheduleMessage |
| <code>asUser?</code> | <code>boolean</code> | Pass true to delete the message as the authed user with `chat:write:user` scope. [Bot users](/bot-users) in this context are considered authed users. If unused or false, the message will be deleted with `chat:write:bot` scope. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatDeleteScheduledMessage(request)`

- **OnSuccess**: <code>[ChatDeleteScheduledMessageschema](src/models/chat-delete-scheduled-messageschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatDeleteScheduledMessageError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatDeleteScheduledMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatDeleteScheduledMessageschema, Chat.ChatDeleteScheduledMessageError&gt;</code>, with `result.value` of type <code>[ChatDeleteScheduledMessageschema](src/models/chat-delete-scheduled-messageschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatGetPermalink(request: Chat.ChatGetPermalinkRequest, options?: RequestOptions): ApiPromise&lt;ChatGetPermalinksuccessschema, Chat.ChatGetPermalinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a permalink URL for a specific extant message

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatGetPermalink({
    token: "some example string",
    channel: "some example string",
    messageTs: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ChatGetPermalinksuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatGetPermalinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatGetPermalink({
  token: "some example string",
  channel: "some example string",
  messageTs: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatGetPermalinksuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>channel</code> | <code>string</code> | The ID of the conversation or channel containing the message |
| <code>messageTs</code> | <code>string</code> | A message's `ts` value, uniquely identifying it within a channel |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatGetPermalink(request)`

- **OnSuccess**: <code>[ChatGetPermalinksuccessschema](src/models/chat-get-permalinksuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatGetPermalinkError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatGetPermalink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatGetPermalinksuccessschema, Chat.ChatGetPermalinkError&gt;</code>, with `result.value` of type <code>[ChatGetPermalinksuccessschema](src/models/chat-get-permalinksuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatMeMessage(request: Chat.ChatMeMessageRequest, options?: RequestOptions): ApiPromise&lt;ChatMeMessageschema, Chat.ChatMeMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Share a me message into a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatMeMessage({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ChatMeMessageschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatMeMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatMeMessage({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatMeMessageschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>channel?</code> | <code>string</code> | Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name. |
| <code>text?</code> | <code>string</code> | Text of the message to send. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatMeMessage(request)`

- **OnSuccess**: <code>[ChatMeMessageschema](src/models/chat-me-messageschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatMeMessageError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatMeMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatMeMessageschema, Chat.ChatMeMessageError&gt;</code>, with `result.value` of type <code>[ChatMeMessageschema](src/models/chat-me-messageschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatPostEphemeral(request: Chat.ChatPostEphemeralRequest, options?: RequestOptions): ApiPromise&lt;ChatPostEphemeralsuccessschema, Chat.ChatPostEphemeralError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends an ephemeral message to a user in a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatPostEphemeral({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
    user: "some example string",
  });
  // TODO: Handle 'response' of type ChatPostEphemeralsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatPostEphemeralError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatPostEphemeral({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
  user: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatPostEphemeralsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. |
| <code>user</code> | <code>string</code> | `id` of the user who will receive the ephemeral message. The user should be in the channel specified by the `channel` argument. |
| <code>asUser?</code> | <code>boolean</code> | Pass true to post the message as the authed user. Defaults to true if the chat:write:bot scope is not included. Otherwise, defaults to false. |
| <code>attachments?</code> | <code>string</code> | A JSON-based array of structured attachments, presented as a URL-encoded string. |
| <code>blocks?</code> | <code>string</code> | A JSON-based array of structured blocks, presented as a URL-encoded string. |
| <code>iconEmoji?</code> | <code>string</code> | Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. |
| <code>iconUrl?</code> | <code>string</code> | URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. |
| <code>linkNames?</code> | <code>boolean</code> | Find and link channel names and usernames. |
| <code>parse?</code> | <code>string</code> | Change how messages are treated. Defaults to `none`. See [below](#formatting). |
| <code>text?</code> | <code>string</code> | How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. |
| <code>threadTs?</code> | <code>string</code> | Provide another message's `ts` value to post this message in a thread. Avoid using a reply's `ts` value; use its parent's value instead. Ephemeral messages in threads are only shown if there is already an active thread. |
| <code>username?</code> | <code>string</code> | Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatPostEphemeral(request)`

- **OnSuccess**: <code>[ChatPostEphemeralsuccessschema](src/models/chat-post-ephemeralsuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatPostEphemeralError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatPostEphemeral(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatPostEphemeralsuccessschema, Chat.ChatPostEphemeralError&gt;</code>, with `result.value` of type <code>[ChatPostEphemeralsuccessschema](src/models/chat-post-ephemeralsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatPostMessage(request: Chat.ChatPostMessageRequest, options?: RequestOptions): ApiPromise&lt;ChatPostMessagesuccessschema, Chat.ChatPostMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sends a message to a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatPostMessage({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
  });
  // TODO: Handle 'response' of type ChatPostMessagesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatPostMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatPostMessage({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatPostMessagesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. |
| <code>asUser?</code> | <code>string</code> | Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [authorship](#authorship) below. |
| <code>attachments?</code> | <code>string</code> | A JSON-based array of structured attachments, presented as a URL-encoded string. |
| <code>blocks?</code> | <code>string</code> | A JSON-based array of structured blocks, presented as a URL-encoded string. |
| <code>iconEmoji?</code> | <code>string</code> | Emoji to use as the icon for this message. Overrides `icon_url`. Must be used in conjunction with `as_user` set to `false`, otherwise ignored. See [authorship](#authorship) below. |
| <code>iconUrl?</code> | <code>string</code> | URL to an image to use as the icon for this message. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. |
| <code>linkNames?</code> | <code>boolean</code> | Find and link channel names and usernames. |
| <code>mrkdwn?</code> | <code>boolean</code> | Disable Slack markup parsing by setting to `false`. Enabled by default. |
| <code>parse?</code> | <code>string</code> | Change how messages are treated. Defaults to `none`. See [below](#formatting). |
| <code>replyBroadcast?</code> | <code>boolean</code> | Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. |
| <code>text?</code> | <code>string</code> | How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. |
| <code>threadTs?</code> | <code>string</code> | Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. |
| <code>unfurlLinks?</code> | <code>boolean</code> | Pass true to enable unfurling of primarily text-based content. |
| <code>unfurlMedia?</code> | <code>boolean</code> | Pass false to disable unfurling of media content. |
| <code>username?</code> | <code>string</code> | Set your bot's user name. Must be used in conjunction with `as_user` set to false, otherwise ignored. See [authorship](#authorship) below. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatPostMessage(request)`

- **OnSuccess**: <code>[ChatPostMessagesuccessschema](src/models/chat-post-messagesuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatPostMessageError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatPostMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatPostMessagesuccessschema, Chat.ChatPostMessageError&gt;</code>, with `result.value` of type <code>[ChatPostMessagesuccessschema](src/models/chat-post-messagesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatScheduleMessage(request: Chat.ChatScheduleMessageRequest, options?: RequestOptions): ApiPromise&lt;ChatScheduleMessagesuccessschema, Chat.ChatScheduleMessageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a message to be sent to a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatScheduleMessage({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ChatScheduleMessagesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatScheduleMessageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatScheduleMessage({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatScheduleMessagesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>channel?</code> | <code>string</code> | Channel, private group, or DM channel to send message to. Can be an encoded ID, or a name. See [below](#channels) for more details. |
| <code>text?</code> | <code>string</code> | How this field works and whether it is required depends on other fields you use in your API call. [See below](#text_usage) for more detail. |
| <code>postAt?</code> | <code>string</code> | Unix EPOCH timestamp of time in future to send the message. |
| <code>parse?</code> | <code>string</code> | Change how messages are treated. Defaults to `none`. See [chat.postMessage](chat.postMessage#formatting). |
| <code>asUser?</code> | <code>boolean</code> | Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See [chat.postMessage](chat.postMessage#authorship). |
| <code>linkNames?</code> | <code>boolean</code> | Find and link channel names and usernames. |
| <code>attachments?</code> | <code>string</code> | A JSON-based array of structured attachments, presented as a URL-encoded string. |
| <code>blocks?</code> | <code>string</code> | A JSON-based array of structured blocks, presented as a URL-encoded string. |
| <code>unfurlLinks?</code> | <code>boolean</code> | Pass true to enable unfurling of primarily text-based content. |
| <code>unfurlMedia?</code> | <code>boolean</code> | Pass false to disable unfurling of media content. |
| <code>threadTs?</code> | <code>number</code> | Provide another message's `ts` value to make this message a reply. Avoid using a reply's `ts` value; use its parent instead. |
| <code>replyBroadcast?</code> | <code>boolean</code> | Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to `false`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatScheduleMessage(request)`

- **OnSuccess**: <code>[ChatScheduleMessagesuccessschema](src/models/chat-schedule-messagesuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatScheduleMessageError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatScheduleMessage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatScheduleMessagesuccessschema, Chat.ChatScheduleMessageError&gt;</code>, with `result.value` of type <code>[ChatScheduleMessagesuccessschema](src/models/chat-schedule-messagesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatScheduledMessagesList(request: Chat.ChatScheduledMessagesListRequest, options?: RequestOptions): ApiPromise&lt;ChatScheduledMessagesListschema, Chat.ChatScheduledMessagesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled messages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatScheduledMessagesList({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ChatScheduledMessagesListschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatScheduledMessagesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatScheduledMessagesList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatScheduledMessagesListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channel?</code> | <code>string</code> | The channel of the scheduled messages |
| <code>latest?</code> | <code>number</code> | A UNIX timestamp of the latest value in the time range |
| <code>oldest?</code> | <code>number</code> | A UNIX timestamp of the oldest value in the time range |
| <code>limit?</code> | <code>number</code> | Maximum number of original entries to return. |
| <code>cursor?</code> | <code>string</code> | For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `none` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatScheduledMessagesList(request)`

- **OnSuccess**: <code>[ChatScheduledMessagesListschema](src/models/chat-scheduled-messages-listschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatScheduledMessagesListError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatScheduledMessagesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatScheduledMessagesListschema, Chat.ChatScheduledMessagesListError&gt;</code>, with `result.value` of type <code>[ChatScheduledMessagesListschema](src/models/chat-scheduled-messages-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatUnfurl(request: Chat.ChatUnfurlRequest, options?: RequestOptions): ApiPromise&lt;ChatUnfurlsuccessschema, Chat.ChatUnfurlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provide custom unfurl behavior for user-posted URLs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatUnfurl({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
    ts: "some example string",
  });
  // TODO: Handle 'response' of type ChatUnfurlsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatUnfurlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatUnfurl({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
  ts: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatUnfurlsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `links:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel ID of the message |
| <code>ts</code> | <code>string</code> | Timestamp of the message to add unfurl behavior to. |
| <code>unfurls?</code> | <code>string</code> | URL-encoded JSON map with keys set to URLs featured in the the message, pointing to their unfurl blocks or message attachments. |
| <code>userAuthMessage?</code> | <code>string</code> | Provide a simply-formatted string to send as an ephemeral message to the user as invitation to authenticate further and enable full unfurling behavior |
| <code>userAuthRequired?</code> | <code>boolean</code> | Set to `true` or `1` to indicate the user must install your Slack app to trigger unfurls for this domain |
| <code>userAuthUrl?</code> | <code>string</code> | Send users to this custom URL where they will complete authentication in your app to fully trigger unfurling. Value should be properly URL-encoded. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatUnfurl(request)`

- **OnSuccess**: <code>[ChatUnfurlsuccessschema](src/models/chat-unfurlsuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatUnfurlError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatUnfurl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatUnfurlsuccessschema, Chat.ChatUnfurlError&gt;</code>, with `result.value` of type <code>[ChatUnfurlsuccessschema](src/models/chat-unfurlsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chatUpdate(request: Chat.ChatUpdateRequest, options?: RequestOptions): ApiPromise&lt;ChatUpdatesuccessschema, Chat.ChatUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatUpdate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
    ts: "some example string",
  });
  // TODO: Handle 'response' of type ChatUpdatesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Chat.ChatUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chat.chatUpdate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
  ts: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatUpdatesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `chat:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel containing the message to be updated. |
| <code>ts</code> | <code>string</code> | Timestamp of the message to be updated. |
| <code>asUser?</code> | <code>string</code> | Pass true to update the message as the authed user. [Bot users](/bot-users) in this context are considered authed users. |
| <code>attachments?</code> | <code>string</code> | A JSON-based array of structured attachments, presented as a URL-encoded string. This field is required when not presenting `text`. If you don't include this field, the message's previous `attachments` will be retained. To remove previous `attachments`, include an empty array for this field. |
| <code>blocks?</code> | <code>string</code> | A JSON-based array of [structured blocks](/block-kit/building), presented as a URL-encoded string. If you don't include this field, the message's previous `blocks` will be retained. To remove previous `blocks`, include an empty array for this field. |
| <code>linkNames?</code> | <code>string</code> | Find and link channel names and usernames. Defaults to `none`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `none`. |
| <code>parse?</code> | <code>string</code> | Change how messages are treated. Defaults to `client`, unlike `chat.postMessage`. Accepts either `none` or `full`. If you do not specify a value for this field, the original value set for the message will be overwritten with the default, `client`. |
| <code>text?</code> | <code>string</code> | New text for the message, using the [default formatting rules](/reference/surfaces/formatting). It's not required when presenting `blocks` or `attachments`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chat.chatUpdate(request)`

- **OnSuccess**: <code>[ChatUpdatesuccessschema](src/models/chat-updatesuccessschema.ts)</code>
- **OnError**: throws <code>[Chat.ChatUpdateError](src/resources/chat.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chat.chatUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatUpdatesuccessschema, Chat.ChatUpdateError&gt;</code>, with `result.value` of type <code>[ChatUpdatesuccessschema](src/models/chat-updatesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## ChatScheduledMessages

> Source: [ChatScheduledMessages](src/resources/chat-scheduled-messages.ts)

<details>
<summary><code>chatScheduledMessagesList(request: ChatScheduledMessages.ChatScheduledMessagesListRequest, options?: RequestOptions): ApiPromise&lt;ChatScheduledMessagesListschema, ChatScheduledMessages.ChatScheduledMessagesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled messages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatScheduledMessages.chatScheduledMessagesList({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ChatScheduledMessagesListschema
} catch (err) {
  // TODO: Handle 'err' of type ChatScheduledMessages.ChatScheduledMessagesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.chatScheduledMessages.chatScheduledMessagesList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChatScheduledMessagesListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channel?</code> | <code>string</code> | The channel of the scheduled messages |
| <code>latest?</code> | <code>number</code> | A UNIX timestamp of the latest value in the time range |
| <code>oldest?</code> | <code>number</code> | A UNIX timestamp of the oldest value in the time range |
| <code>limit?</code> | <code>number</code> | Maximum number of original entries to return. |
| <code>cursor?</code> | <code>string</code> | For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `none` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.chatScheduledMessages.chatScheduledMessagesList(request)`

- **OnSuccess**: <code>[ChatScheduledMessagesListschema](src/models/chat-scheduled-messages-listschema.ts)</code>
- **OnError**: throws <code>[ChatScheduledMessages.ChatScheduledMessagesListError](src/resources/chat-scheduled-messages.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.chatScheduledMessages.chatScheduledMessagesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChatScheduledMessagesListschema, ChatScheduledMessages.ChatScheduledMessagesListError&gt;</code>, with `result.value` of type <code>[ChatScheduledMessagesListschema](src/models/chat-scheduled-messages-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Conversations

> Source: [Conversations](src/resources/conversations.ts)

<details>
<summary><code>conversationsArchive(request: Conversations.ConversationsArchiveRequest, options?: RequestOptions): ApiPromise&lt;ConversationsArchivesuccessschema, Conversations.ConversationsArchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archives a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsArchive({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsArchivesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsArchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsArchive({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsArchivesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | ID of conversation to archive |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsArchive(request)`

- **OnSuccess**: <code>[ConversationsArchivesuccessschema](src/models/conversations-archivesuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsArchiveError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsArchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsArchivesuccessschema, Conversations.ConversationsArchiveError&gt;</code>, with `result.value` of type <code>[ConversationsArchivesuccessschema](src/models/conversations-archivesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsClose(request: Conversations.ConversationsCloseRequest, options?: RequestOptions): ApiPromise&lt;ConversationsClosesuccessschema, Conversations.ConversationsCloseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Closes a direct message or multi-person direct message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsClose({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsClosesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsCloseError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsClose({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsClosesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | Conversation to close. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsClose(request)`

- **OnSuccess**: <code>[ConversationsClosesuccessschema](src/models/conversations-closesuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsCloseError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsClose(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsClosesuccessschema, Conversations.ConversationsCloseError&gt;</code>, with `result.value` of type <code>[ConversationsClosesuccessschema](src/models/conversations-closesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsCreate(request: Conversations.ConversationsCreateRequest, options?: RequestOptions): ApiPromise&lt;ConversationsCreatesuccessschema, Conversations.ConversationsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Initiates a public or private channel-based conversation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsCreate({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsCreatesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsCreate({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsCreatesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>name?</code> | <code>string</code> | Name of the public or private channel to create |
| <code>isPrivate?</code> | <code>boolean</code> | Create a private channel instead of a public one |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsCreate(request)`

- **OnSuccess**: <code>[ConversationsCreatesuccessschema](src/models/conversations-createsuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsCreateError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsCreatesuccessschema, Conversations.ConversationsCreateError&gt;</code>, with `result.value` of type <code>[ConversationsCreatesuccessschema](src/models/conversations-createsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsHistory(request: Conversations.ConversationsHistoryRequest, options?: RequestOptions): ApiPromise&lt;ConversationsHistorysuccessschema, Conversations.ConversationsHistoryError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a conversation's history of messages and events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsHistory({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsHistorysuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsHistoryError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsHistory({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsHistorysuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:history` |
| <code>channel?</code> | <code>string</code> | Conversation ID to fetch history for. |
| <code>latest?</code> | <code>number</code> | End of time range of messages to include in results. |
| <code>oldest?</code> | <code>number</code> | Start of time range of messages to include in results. |
| <code>inclusive?</code> | <code>boolean</code> | Include messages with latest or oldest timestamp in results only when either timestamp is specified. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsHistory(request)`

- **OnSuccess**: <code>[ConversationsHistorysuccessschema](src/models/conversations-historysuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsHistoryError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsHistory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsHistorysuccessschema, Conversations.ConversationsHistoryError&gt;</code>, with `result.value` of type <code>[ConversationsHistorysuccessschema](src/models/conversations-historysuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsInfo(request: Conversations.ConversationsInfoRequest, options?: RequestOptions): ApiPromise&lt;ConversationsInfosuccessschema, Conversations.ConversationsInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsInfo({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsInfosuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsInfosuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:read` |
| <code>channel?</code> | <code>string</code> | Conversation ID to learn more about |
| <code>includeLocale?</code> | <code>boolean</code> | Set this to `true` to receive the locale for this conversation. Defaults to `false` |
| <code>includeNumMembers?</code> | <code>boolean</code> | Set to `true` to include the member count for the specified conversation. Defaults to `false` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsInfo(request)`

- **OnSuccess**: <code>[ConversationsInfosuccessschema](src/models/conversations-infosuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsInfoError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsInfosuccessschema, Conversations.ConversationsInfoError&gt;</code>, with `result.value` of type <code>[ConversationsInfosuccessschema](src/models/conversations-infosuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsInvite(request: Conversations.ConversationsInviteRequest, options?: RequestOptions): ApiPromise&lt;ConversationsInviteerrorschema, Conversations.ConversationsInviteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invites users to a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsInvite({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsInviteerrorschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsInviteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsInvite({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsInviteerrorschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | The ID of the public or private channel to invite user(s) to. |
| <code>users?</code> | <code>string</code> | A comma separated list of user IDs. Up to 1000 users may be listed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsInvite(request)`

- **OnSuccess**: <code>[ConversationsInviteerrorschema](src/models/conversations-inviteerrorschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsInviteError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsInvite(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsInviteerrorschema, Conversations.ConversationsInviteError&gt;</code>, with `result.value` of type <code>[ConversationsInviteerrorschema](src/models/conversations-inviteerrorschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsJoin(request: Conversations.ConversationsJoinRequest, options?: RequestOptions): ApiPromise&lt;ConversationsJoinsuccessschema, Conversations.ConversationsJoinError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Joins an existing conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsJoin({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsJoinsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsJoinError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsJoin({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsJoinsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `channels:write` |
| <code>channel?</code> | <code>string</code> | ID of conversation to join |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsJoin(request)`

- **OnSuccess**: <code>[ConversationsJoinsuccessschema](src/models/conversations-joinsuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsJoinError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsJoin(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsJoinsuccessschema, Conversations.ConversationsJoinError&gt;</code>, with `result.value` of type <code>[ConversationsJoinsuccessschema](src/models/conversations-joinsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsKick(request: Conversations.ConversationsKickRequest, options?: RequestOptions): ApiPromise&lt;ConversationsKicksuccessschema, Conversations.ConversationsKickError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a user from a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsKick({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsKicksuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsKickError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsKick({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsKicksuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | ID of conversation to remove user from. |
| <code>user?</code> | <code>string</code> | User ID to be removed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsKick(request)`

- **OnSuccess**: <code>[ConversationsKicksuccessschema](src/models/conversations-kicksuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsKickError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsKick(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsKicksuccessschema, Conversations.ConversationsKickError&gt;</code>, with `result.value` of type <code>[ConversationsKicksuccessschema](src/models/conversations-kicksuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsLeave(request: Conversations.ConversationsLeaveRequest, options?: RequestOptions): ApiPromise&lt;ConversationsLeavesuccessschema, Conversations.ConversationsLeaveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Leaves a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsLeave({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsLeavesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsLeaveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsLeave({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsLeavesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | Conversation to leave |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsLeave(request)`

- **OnSuccess**: <code>[ConversationsLeavesuccessschema](src/models/conversations-leavesuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsLeaveError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsLeave(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsLeavesuccessschema, Conversations.ConversationsLeaveError&gt;</code>, with `result.value` of type <code>[ConversationsLeavesuccessschema](src/models/conversations-leavesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsList(request: Conversations.ConversationsListRequest, options?: RequestOptions): ApiPromise&lt;ConversationsListsuccessschema, Conversations.ConversationsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all channels in a Slack team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsList({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsListsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsListsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:read` |
| <code>excludeArchived?</code> | <code>boolean</code> | Set to `true` to exclude archived channels from the list |
| <code>types?</code> | <code>string</code> | Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsList(request)`

- **OnSuccess**: <code>[ConversationsListsuccessschema](src/models/conversations-listsuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsListError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsListsuccessschema, Conversations.ConversationsListError&gt;</code>, with `result.value` of type <code>[ConversationsListsuccessschema](src/models/conversations-listsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsMark(request: Conversations.ConversationsMarkRequest, options?: RequestOptions): ApiPromise&lt;ConversationsMarksuccessschema, Conversations.ConversationsMarkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the read cursor in a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsMark({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsMarksuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsMarkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsMark({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsMarksuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | Channel or conversation to set the read cursor for. |
| <code>ts?</code> | <code>number</code> | Unique identifier of message you want marked as most recently seen in this conversation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsMark(request)`

- **OnSuccess**: <code>[ConversationsMarksuccessschema](src/models/conversations-marksuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsMarkError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsMark(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsMarksuccessschema, Conversations.ConversationsMarkError&gt;</code>, with `result.value` of type <code>[ConversationsMarksuccessschema](src/models/conversations-marksuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsMembers(request: Conversations.ConversationsMembersRequest, options?: RequestOptions): ApiPromise&lt;ConversationsMemberssuccessschema, Conversations.ConversationsMembersError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve members of a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsMembers({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsMemberssuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsMembersError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsMembers({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsMemberssuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:read` |
| <code>channel?</code> | <code>string</code> | ID of the conversation to retrieve members for |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsMembers(request)`

- **OnSuccess**: <code>[ConversationsMemberssuccessschema](src/models/conversations-memberssuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsMembersError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsMemberssuccessschema, Conversations.ConversationsMembersError&gt;</code>, with `result.value` of type <code>[ConversationsMemberssuccessschema](src/models/conversations-memberssuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsOpen(request: Conversations.ConversationsOpenRequest, options?: RequestOptions): ApiPromise&lt;ConversationsOpensuccessschema, Conversations.ConversationsOpenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Opens or resumes a direct message or multi-person direct message.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsOpen({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsOpensuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsOpenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsOpen({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsOpensuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | Resume a conversation by supplying an `im` or `mpim`'s ID. Or provide the `users` field instead. |
| <code>users?</code> | <code>string</code> | Comma separated lists of users. If only one user is included, this creates a 1:1 DM.  The ordering of the users is preserved whenever a multi-person direct message is returned. Supply a `channel` when not supplying `users`. |
| <code>returnIm?</code> | <code>boolean</code> | Boolean, indicates you want the full IM channel definition in the response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsOpen(request)`

- **OnSuccess**: <code>[ConversationsOpensuccessschema](src/models/conversations-opensuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsOpenError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsOpen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsOpensuccessschema, Conversations.ConversationsOpenError&gt;</code>, with `result.value` of type <code>[ConversationsOpensuccessschema](src/models/conversations-opensuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsRename(request: Conversations.ConversationsRenameRequest, options?: RequestOptions): ApiPromise&lt;ConversationsRenamesuccessschema, Conversations.ConversationsRenameError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Renames a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsRename({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsRenamesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsRenameError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsRename({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsRenamesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | ID of conversation to rename |
| <code>name?</code> | <code>string</code> | New name for conversation. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsRename(request)`

- **OnSuccess**: <code>[ConversationsRenamesuccessschema](src/models/conversations-renamesuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsRenameError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsRename(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsRenamesuccessschema, Conversations.ConversationsRenameError&gt;</code>, with `result.value` of type <code>[ConversationsRenamesuccessschema](src/models/conversations-renamesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsReplies(request: Conversations.ConversationsRepliesRequest, options?: RequestOptions): ApiPromise&lt;ConversationsRepliessuccessschema, Conversations.ConversationsRepliesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a thread of messages posted to a conversation

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsReplies({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsRepliessuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsRepliesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsReplies({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsRepliessuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:history` |
| <code>channel?</code> | <code>string</code> | Conversation ID to fetch thread from. |
| <code>ts?</code> | <code>number</code> | Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message. |
| <code>latest?</code> | <code>number</code> | End of time range of messages to include in results. |
| <code>oldest?</code> | <code>number</code> | Start of time range of messages to include in results. |
| <code>inclusive?</code> | <code>boolean</code> | Include messages with latest or oldest timestamp in results only when either timestamp is specified. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsReplies(request)`

- **OnSuccess**: <code>[ConversationsRepliessuccessschema](src/models/conversations-repliessuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsRepliesError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsReplies(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsRepliessuccessschema, Conversations.ConversationsRepliesError&gt;</code>, with `result.value` of type <code>[ConversationsRepliessuccessschema](src/models/conversations-repliessuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsSetPurpose(request: Conversations.ConversationsSetPurposeRequest, options?: RequestOptions): ApiPromise&lt;ConversationsSetPurposesuccessschema, Conversations.ConversationsSetPurposeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the purpose for a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsSetPurpose({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsSetPurposesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsSetPurposeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsSetPurpose({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsSetPurposesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | Conversation to set the purpose of |
| <code>purpose?</code> | <code>string</code> | A new, specialer purpose |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsSetPurpose(request)`

- **OnSuccess**: <code>[ConversationsSetPurposesuccessschema](src/models/conversations-set-purposesuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsSetPurposeError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsSetPurpose(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsSetPurposesuccessschema, Conversations.ConversationsSetPurposeError&gt;</code>, with `result.value` of type <code>[ConversationsSetPurposesuccessschema](src/models/conversations-set-purposesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsSetTopic(request: Conversations.ConversationsSetTopicRequest, options?: RequestOptions): ApiPromise&lt;ConversationsSetTopicsuccessschema, Conversations.ConversationsSetTopicError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Sets the topic for a conversation.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsSetTopic({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsSetTopicsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsSetTopicError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsSetTopic({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsSetTopicsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | Conversation to set the topic of |
| <code>topic?</code> | <code>string</code> | The new topic string. Does not support formatting or linkification. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsSetTopic(request)`

- **OnSuccess**: <code>[ConversationsSetTopicsuccessschema](src/models/conversations-set-topicsuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsSetTopicError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsSetTopic(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsSetTopicsuccessschema, Conversations.ConversationsSetTopicError&gt;</code>, with `result.value` of type <code>[ConversationsSetTopicsuccessschema](src/models/conversations-set-topicsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>conversationsUnarchive(request: Conversations.ConversationsUnarchiveRequest, options?: RequestOptions): ApiPromise&lt;ConversationsUnarchivesuccessschema, Conversations.ConversationsUnarchiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reverses conversation archival.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsUnarchive({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ConversationsUnarchivesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Conversations.ConversationsUnarchiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.conversations.conversationsUnarchive({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ConversationsUnarchivesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:write` |
| <code>channel?</code> | <code>string</code> | ID of conversation to unarchive |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.conversations.conversationsUnarchive(request)`

- **OnSuccess**: <code>[ConversationsUnarchivesuccessschema](src/models/conversations-unarchivesuccessschema.ts)</code>
- **OnError**: throws <code>[Conversations.ConversationsUnarchiveError](src/resources/conversations.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.conversations.conversationsUnarchive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ConversationsUnarchivesuccessschema, Conversations.ConversationsUnarchiveError&gt;</code>, with `result.value` of type <code>[ConversationsUnarchivesuccessschema](src/models/conversations-unarchivesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dialog

> Source: [Dialog](src/resources/dialog.ts)

<details>
<summary><code>dialogOpen(request: Dialog.DialogOpenRequest, options?: RequestOptions): ApiPromise&lt;DialogOpenschema, Dialog.DialogOpenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Open a dialog with a user

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dialog.dialogOpen({
    dialog: "some example string",
    triggerId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type DialogOpenschema
} catch (err) {
  // TODO: Handle 'err' of type Dialog.DialogOpenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dialog.dialogOpen({
  dialog: "some example string",
  triggerId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DialogOpenschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>dialog</code> | <code>string</code> | The dialog definition. This must be a JSON-encoded string. |
| <code>triggerId</code> | <code>string</code> | Exchange a trigger to post to the user. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dialog.dialogOpen(request)`

- **OnSuccess**: <code>[DialogOpenschema](src/models/dialog-openschema.ts)</code>
- **OnError**: throws <code>[Dialog.DialogOpenError](src/resources/dialog.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dialog.dialogOpen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DialogOpenschema, Dialog.DialogOpenError&gt;</code>, with `result.value` of type <code>[DialogOpenschema](src/models/dialog-openschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Dnd

> Source: [Dnd](src/resources/dnd.ts)

<details>
<summary><code>dndEndDnd(request: Dnd.DndEndDndRequest, options?: RequestOptions): ApiPromise&lt;DndEndDndschema, Dnd.DndEndDndError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ends the current user's Do Not Disturb session immediately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndEndDnd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type DndEndDndschema
} catch (err) {
  // TODO: Handle 'err' of type Dnd.DndEndDndError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dnd.dndEndDnd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DndEndDndschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `dnd:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dnd.dndEndDnd(request)`

- **OnSuccess**: <code>[DndEndDndschema](src/models/dnd-end-dndschema.ts)</code>
- **OnError**: throws <code>[Dnd.DndEndDndError](src/resources/dnd.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dnd.dndEndDnd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DndEndDndschema, Dnd.DndEndDndError&gt;</code>, with `result.value` of type <code>[DndEndDndschema](src/models/dnd-end-dndschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dndEndSnooze(request: Dnd.DndEndSnoozeRequest, options?: RequestOptions): ApiPromise&lt;DndEndSnoozeschema, Dnd.DndEndSnoozeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Ends the current user's snooze mode immediately.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndEndSnooze({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type DndEndSnoozeschema
} catch (err) {
  // TODO: Handle 'err' of type Dnd.DndEndSnoozeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dnd.dndEndSnooze({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DndEndSnoozeschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `dnd:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dnd.dndEndSnooze(request)`

- **OnSuccess**: <code>[DndEndSnoozeschema](src/models/dnd-end-snoozeschema.ts)</code>
- **OnError**: throws <code>[Dnd.DndEndSnoozeError](src/resources/dnd.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dnd.dndEndSnooze(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DndEndSnoozeschema, Dnd.DndEndSnoozeError&gt;</code>, with `result.value` of type <code>[DndEndSnoozeschema](src/models/dnd-end-snoozeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dndInfo(request: Dnd.DndInfoRequest, options?: RequestOptions): ApiPromise&lt;DndInfoschema, Dnd.DndInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a user's current Do Not Disturb status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndInfo({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type DndInfoschema
} catch (err) {
  // TODO: Handle 'err' of type Dnd.DndInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dnd.dndInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DndInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `dnd:read` |
| <code>user?</code> | <code>string</code> | User to fetch status for (defaults to current user) |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dnd.dndInfo(request)`

- **OnSuccess**: <code>[DndInfoschema](src/models/dnd-infoschema.ts)</code>
- **OnError**: throws <code>[Dnd.DndInfoError](src/resources/dnd.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dnd.dndInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DndInfoschema, Dnd.DndInfoError&gt;</code>, with `result.value` of type <code>[DndInfoschema](src/models/dnd-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dndSetSnooze(request: Dnd.DndSetSnoozeRequest, options?: RequestOptions): ApiPromise&lt;DndSetSnoozeschema, Dnd.DndSetSnoozeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Turns on Do Not Disturb mode for the current user, or changes its duration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndSetSnooze({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
    numMinutes: "some example string",
  });
  // TODO: Handle 'response' of type DndSetSnoozeschema
} catch (err) {
  // TODO: Handle 'err' of type Dnd.DndSetSnoozeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dnd.dndSetSnooze({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
  numMinutes: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DndSetSnoozeschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `dnd:write` |
| <code>numMinutes</code> | <code>string</code> | Number of minutes, from now, to snooze until. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dnd.dndSetSnooze(request)`

- **OnSuccess**: <code>[DndSetSnoozeschema](src/models/dnd-set-snoozeschema.ts)</code>
- **OnError**: throws <code>[Dnd.DndSetSnoozeError](src/resources/dnd.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dnd.dndSetSnooze(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DndSetSnoozeschema, Dnd.DndSetSnoozeError&gt;</code>, with `result.value` of type <code>[DndSetSnoozeschema](src/models/dnd-set-snoozeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dndTeamInfo(request: Dnd.DndTeamInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Dnd.DndTeamInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the Do Not Disturb status for up to 50 users on a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndTeamInfo({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Dnd.DndTeamInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.dnd.dndTeamInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `dnd:read` |
| <code>users?</code> | <code>string</code> | Comma-separated list of users to fetch Do Not Disturb status for |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.dnd.dndTeamInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Dnd.DndTeamInfoError](src/resources/dnd.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.dnd.dndTeamInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Dnd.DndTeamInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Emoji

> Source: [Emoji](src/resources/emoji.ts)

<details>
<summary><code>emojiList(request: Emoji.EmojiListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Emoji.EmojiListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists custom emoji for a team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.emoji.emojiList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Emoji.EmojiListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.emoji.emojiList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `emoji:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.emoji.emojiList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Emoji.EmojiListError](src/resources/emoji.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.emoji.emojiList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Emoji.EmojiListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FilesComments

> Source: [FilesComments](src/resources/files-comments.ts)

<details>
<summary><code>filesCommentsDelete(request: FilesComments.FilesCommentsDeleteRequest, options?: RequestOptions): ApiPromise&lt;FilesCommentsDeleteschema, FilesComments.FilesCommentsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing comment on a file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesComments.filesCommentsDelete({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type FilesCommentsDeleteschema
} catch (err) {
  // TODO: Handle 'err' of type FilesComments.FilesCommentsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesComments.filesCommentsDelete({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesCommentsDeleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:write:user` |
| <code>file?</code> | <code>string</code> | File to delete a comment from. |
| <code>id?</code> | <code>string</code> | The comment to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesComments.filesCommentsDelete(request)`

- **OnSuccess**: <code>[FilesCommentsDeleteschema](src/models/files-comments-deleteschema.ts)</code>
- **OnError**: throws <code>[FilesComments.FilesCommentsDeleteError](src/resources/files-comments.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesComments.filesCommentsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesCommentsDeleteschema, FilesComments.FilesCommentsDeleteError&gt;</code>, with `result.value` of type <code>[FilesCommentsDeleteschema](src/models/files-comments-deleteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Files

> Source: [Files](src/resources/files.ts)

<details>
<summary><code>filesCommentsDelete(request: Files.FilesCommentsDeleteRequest, options?: RequestOptions): ApiPromise&lt;FilesCommentsDeleteschema, Files.FilesCommentsDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing comment on a file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesCommentsDelete({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type FilesCommentsDeleteschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesCommentsDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesCommentsDelete({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesCommentsDeleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:write:user` |
| <code>file?</code> | <code>string</code> | File to delete a comment from. |
| <code>id?</code> | <code>string</code> | The comment to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesCommentsDelete(request)`

- **OnSuccess**: <code>[FilesCommentsDeleteschema](src/models/files-comments-deleteschema.ts)</code>
- **OnError**: throws <code>[Files.FilesCommentsDeleteError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesCommentsDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesCommentsDeleteschema, Files.FilesCommentsDeleteError&gt;</code>, with `result.value` of type <code>[FilesCommentsDeleteschema](src/models/files-comments-deleteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesDelete(request: Files.FilesDeleteRequest, options?: RequestOptions): ApiPromise&lt;FilesDeleteschema, Files.FilesDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesDelete({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type FilesDeleteschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesDelete({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesDeleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:write:user` |
| <code>file?</code> | <code>string</code> | ID of file to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesDelete(request)`

- **OnSuccess**: <code>[FilesDeleteschema](src/models/files-deleteschema.ts)</code>
- **OnError**: throws <code>[Files.FilesDeleteError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesDeleteschema, Files.FilesDeleteError&gt;</code>, with `result.value` of type <code>[FilesDeleteschema](src/models/files-deleteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesInfo(request: Files.FilesInfoRequest, options?: RequestOptions): ApiPromise&lt;FilesInfoschema, Files.FilesInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesInfo({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type FilesInfoschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:read` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>count?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. |
| <code>cursor?</code> | <code>string</code> | Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection of comments. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesInfo(request)`

- **OnSuccess**: <code>[FilesInfoschema](src/models/files-infoschema.ts)</code>
- **OnError**: throws <code>[Files.FilesInfoError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesInfoschema, Files.FilesInfoError&gt;</code>, with `result.value` of type <code>[FilesInfoschema](src/models/files-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesList(request: Files.FilesListRequest, options?: RequestOptions): ApiPromise&lt;FilesListschema, Files.FilesListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List for a team, in a channel, or from a user with applied filters.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesList({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type FilesListschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:read` |
| <code>user?</code> | <code>string</code> | Filter files created by a single user. |
| <code>channel?</code> | <code>string</code> | Filter files appearing in a specific channel, indicated by its ID. |
| <code>tsFrom?</code> | <code>number</code> | Filter files created after this timestamp (inclusive). |
| <code>tsTo?</code> | <code>number</code> | Filter files created before this timestamp (inclusive). |
| <code>types?</code> | <code>string</code> | Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list. |
| <code>count?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>showFilesHiddenByLimit?</code> | <code>boolean</code> | Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesList(request)`

- **OnSuccess**: <code>[FilesListschema](src/models/files-listschema.ts)</code>
- **OnError**: throws <code>[Files.FilesListError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesListschema, Files.FilesListError&gt;</code>, with `result.value` of type <code>[FilesListschema](src/models/files-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteAdd(request: Files.FilesRemoteAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Files.FilesRemoteAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a file from a remote service

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteAdd({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRemoteAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRemoteAdd({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:write` |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |
| <code>title?</code> | <code>string</code> | Title of the file being shared. |
| <code>filetype?</code> | <code>string</code> | type of file |
| <code>externalUrl?</code> | <code>string</code> | URL of the remote file. |
| <code>previewImage?</code> | <code>string</code> | Preview of the document via `multipart/form-data`. |
| <code>indexableFileContents?</code> | <code>string</code> | A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRemoteAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Files.FilesRemoteAddError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRemoteAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Files.FilesRemoteAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteInfo(request: Files.FilesRemoteInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Files.FilesRemoteInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a remote file added to Slack

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteInfo({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRemoteInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRemoteInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:read` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRemoteInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Files.FilesRemoteInfoError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRemoteInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Files.FilesRemoteInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteList(request: Files.FilesRemoteListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Files.FilesRemoteListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a remote file added to Slack

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteList({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRemoteListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRemoteList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:read` |
| <code>channel?</code> | <code>string</code> | Filter files appearing in a specific channel, indicated by its ID. |
| <code>tsFrom?</code> | <code>number</code> | Filter files created after this timestamp (inclusive). |
| <code>tsTo?</code> | <code>number</code> | Filter files created before this timestamp (inclusive). |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRemoteList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Files.FilesRemoteListError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRemoteList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Files.FilesRemoteListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteRemove(request: Files.FilesRemoteRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Files.FilesRemoteRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a remote file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteRemove({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRemoteRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRemoteRemove({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:write` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRemoteRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Files.FilesRemoteRemoveError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRemoteRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Files.FilesRemoteRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteShare(request: Files.FilesRemoteShareRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Files.FilesRemoteShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Share a remote file into a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteShare({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRemoteShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRemoteShare({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:share` |
| <code>file?</code> | <code>string</code> | Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required. |
| <code>externalId?</code> | <code>string</code> | The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required. |
| <code>channels?</code> | <code>string</code> | Comma-separated list of channel IDs where the file will be shared. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRemoteShare(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Files.FilesRemoteShareError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRemoteShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Files.FilesRemoteShareError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteUpdate(request: Files.FilesRemoteUpdateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Files.FilesRemoteUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing remote file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteUpdate({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRemoteUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRemoteUpdate({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:write` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |
| <code>title?</code> | <code>string</code> | Title of the file being shared. |
| <code>filetype?</code> | <code>string</code> | type of file |
| <code>externalUrl?</code> | <code>string</code> | URL of the remote file. |
| <code>previewImage?</code> | <code>string</code> | Preview of the document via `multipart/form-data`. |
| <code>indexableFileContents?</code> | <code>string</code> | File containing contents that can be used to improve searchability for the remote file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRemoteUpdate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Files.FilesRemoteUpdateError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRemoteUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Files.FilesRemoteUpdateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRevokePublicUrl(request: Files.FilesRevokePublicUrlRequest, options?: RequestOptions): ApiPromise&lt;FilesRevokePublicUrLschema, Files.FilesRevokePublicUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes public/external sharing access for a file

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRevokePublicUrl({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type FilesRevokePublicUrLschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesRevokePublicUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesRevokePublicUrl({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesRevokePublicUrLschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:write:user` |
| <code>file?</code> | <code>string</code> | File to revoke |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesRevokePublicUrl(request)`

- **OnSuccess**: <code>[FilesRevokePublicUrLschema](src/models/files-revoke-public-ur-lschema.ts)</code>
- **OnError**: throws <code>[Files.FilesRevokePublicUrlError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesRevokePublicUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesRevokePublicUrLschema, Files.FilesRevokePublicUrlError&gt;</code>, with `result.value` of type <code>[FilesRevokePublicUrLschema](src/models/files-revoke-public-ur-lschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesSharedPublicUrl(request: Files.FilesSharedPublicUrlRequest, options?: RequestOptions): ApiPromise&lt;FilesSharedPublicUrLschema, Files.FilesSharedPublicUrlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables a file for public/external sharing.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesSharedPublicUrl({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type FilesSharedPublicUrLschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesSharedPublicUrlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesSharedPublicUrl({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesSharedPublicUrLschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:write:user` |
| <code>file?</code> | <code>string</code> | File to share |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesSharedPublicUrl(request)`

- **OnSuccess**: <code>[FilesSharedPublicUrLschema](src/models/files-shared-public-ur-lschema.ts)</code>
- **OnError**: throws <code>[Files.FilesSharedPublicUrlError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesSharedPublicUrl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesSharedPublicUrLschema, Files.FilesSharedPublicUrlError&gt;</code>, with `result.value` of type <code>[FilesSharedPublicUrLschema](src/models/files-shared-public-ur-lschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesUpload(request: Files.FilesUploadRequest, options?: RequestOptions): ApiPromise&lt;FilesUploadschema, Files.FilesUploadError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads or creates a file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesUpload({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type FilesUploadschema
} catch (err) {
  // TODO: Handle 'err' of type Files.FilesUploadError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.files.filesUpload({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FilesUploadschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `files:write:user` |
| <code>file?</code> | <code>string</code> | File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`. |
| <code>content?</code> | <code>string</code> | File contents via a POST variable. If omitting this parameter, you must provide a `file`. |
| <code>filetype?</code> | <code>string</code> | A [file type](/types/file#file_types) identifier. |
| <code>filename?</code> | <code>string</code> | Filename of file. |
| <code>title?</code> | <code>string</code> | Title of file. |
| <code>initialComment?</code> | <code>string</code> | The message text introducing the file in specified `channels`. |
| <code>channels?</code> | <code>string</code> | Comma-separated list of channel names or IDs where the file will be shared. |
| <code>threadTs?</code> | <code>number</code> | Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.files.filesUpload(request)`

- **OnSuccess**: <code>[FilesUploadschema](src/models/files-uploadschema.ts)</code>
- **OnError**: throws <code>[Files.FilesUploadError](src/resources/files.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.files.filesUpload(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FilesUploadschema, Files.FilesUploadError&gt;</code>, with `result.value` of type <code>[FilesUploadschema](src/models/files-uploadschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## FilesRemote

> Source: [FilesRemote](src/resources/files-remote.ts)

<details>
<summary><code>filesRemoteAdd(request: FilesRemote.FilesRemoteAddRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a file from a remote service

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteAdd({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type FilesRemote.FilesRemoteAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesRemote.filesRemoteAdd({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:write` |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |
| <code>title?</code> | <code>string</code> | Title of the file being shared. |
| <code>filetype?</code> | <code>string</code> | type of file |
| <code>externalUrl?</code> | <code>string</code> | URL of the remote file. |
| <code>previewImage?</code> | <code>string</code> | Preview of the document via `multipart/form-data`. |
| <code>indexableFileContents?</code> | <code>string</code> | A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesRemote.filesRemoteAdd(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[FilesRemote.FilesRemoteAddError](src/resources/files-remote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesRemote.filesRemoteAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteAddError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteInfo(request: FilesRemote.FilesRemoteInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a remote file added to Slack

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteInfo({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type FilesRemote.FilesRemoteInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesRemote.filesRemoteInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:read` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesRemote.filesRemoteInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[FilesRemote.FilesRemoteInfoError](src/resources/files-remote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesRemote.filesRemoteInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteList(request: FilesRemote.FilesRemoteListRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve information about a remote file added to Slack

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteList({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type FilesRemote.FilesRemoteListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesRemote.filesRemoteList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:read` |
| <code>channel?</code> | <code>string</code> | Filter files appearing in a specific channel, indicated by its ID. |
| <code>tsFrom?</code> | <code>number</code> | Filter files created after this timestamp (inclusive). |
| <code>tsTo?</code> | <code>number</code> | Filter files created before this timestamp (inclusive). |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesRemote.filesRemoteList(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[FilesRemote.FilesRemoteListError](src/resources/files-remote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesRemote.filesRemoteList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteListError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteRemove(request: FilesRemote.FilesRemoteRemoveRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a remote file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteRemove({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type FilesRemote.FilesRemoteRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesRemote.filesRemoteRemove({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:write` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesRemote.filesRemoteRemove(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[FilesRemote.FilesRemoteRemoveError](src/resources/files-remote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesRemote.filesRemoteRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteRemoveError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteShare(request: FilesRemote.FilesRemoteShareRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteShareError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Share a remote file into a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteShare({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type FilesRemote.FilesRemoteShareError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesRemote.filesRemoteShare({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:share` |
| <code>file?</code> | <code>string</code> | Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required. |
| <code>externalId?</code> | <code>string</code> | The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required. |
| <code>channels?</code> | <code>string</code> | Comma-separated list of channel IDs where the file will be shared. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesRemote.filesRemoteShare(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[FilesRemote.FilesRemoteShareError](src/resources/files-remote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesRemote.filesRemoteShare(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteShareError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>filesRemoteUpdate(request: FilesRemote.FilesRemoteUpdateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing remote file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteUpdate({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type FilesRemote.FilesRemoteUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.filesRemote.filesRemoteUpdate({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `remote_files:write` |
| <code>file?</code> | <code>string</code> | Specify a file by providing its ID. |
| <code>externalId?</code> | <code>string</code> | Creator defined GUID for the file. |
| <code>title?</code> | <code>string</code> | Title of the file being shared. |
| <code>filetype?</code> | <code>string</code> | type of file |
| <code>externalUrl?</code> | <code>string</code> | URL of the remote file. |
| <code>previewImage?</code> | <code>string</code> | Preview of the document via `multipart/form-data`. |
| <code>indexableFileContents?</code> | <code>string</code> | File containing contents that can be used to improve searchability for the remote file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.filesRemote.filesRemoteUpdate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[FilesRemote.FilesRemoteUpdateError](src/resources/files-remote.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.filesRemote.filesRemoteUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, FilesRemote.FilesRemoteUpdateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Migration

> Source: [Migration](src/resources/migration.ts)

<details>
<summary><code>migrationExchange(request: Migration.MigrationExchangeRequest, options?: RequestOptions): ApiPromise&lt;MigrationExchangesuccessschema, Migration.MigrationExchangeError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For Enterprise Grid workspaces, map local user IDs to global user IDs

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.migration.migrationExchange({
    token: "some example string",
    users: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type MigrationExchangesuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Migration.MigrationExchangeError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.migration.migrationExchange({
  token: "some example string",
  users: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type MigrationExchangesuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `tokens.basic` |
| <code>users</code> | <code>string</code> | A comma-separated list of user ids, up to 400 per request |
| <code>teamId?</code> | <code>string</code> | Specify team_id starts with `T` in case of Org Token |
| <code>toOld?</code> | <code>boolean</code> | Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.migration.migrationExchange(request)`

- **OnSuccess**: <code>[MigrationExchangesuccessschema](src/models/migration-exchangesuccessschema.ts)</code>
- **OnError**: throws <code>[Migration.MigrationExchangeError](src/resources/migration.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.migration.migrationExchange(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;MigrationExchangesuccessschema, Migration.MigrationExchangeError&gt;</code>, with `result.value` of type <code>[MigrationExchangesuccessschema](src/models/migration-exchangesuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Oauth

> Source: [Oauth](src/resources/oauth.ts)

<details>
<summary><code>oauthAccess(request: Oauth.OauthAccessRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Oauth.OauthAccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a temporary OAuth verifier code for an access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauth.oauthAccess({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Oauth.OauthAccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauth.oauthAccess({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId?</code> | <code>string</code> | Issued when you created your application. |
| <code>clientSecret?</code> | <code>string</code> | Issued when you created your application. |
| <code>code?</code> | <code>string</code> | The `code` param returned via the OAuth callback. |
| <code>redirectUri?</code> | <code>string</code> | This must match the originally submitted URI (if one was sent). |
| <code>singleChannel?</code> | <code>boolean</code> | Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps). |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauth.oauthAccess(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Oauth.OauthAccessError](src/resources/oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauth.oauthAccess(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Oauth.OauthAccessError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthToken(request: Oauth.OauthTokenRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Oauth.OauthTokenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a temporary OAuth verifier code for a workspace token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauth.oauthToken({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Oauth.OauthTokenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauth.oauthToken({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>clientId?</code> | <code>string</code> | Issued when you created your application. |
| <code>clientSecret?</code> | <code>string</code> | Issued when you created your application. |
| <code>code?</code> | <code>string</code> | The `code` param returned via the OAuth callback. |
| <code>redirectUri?</code> | <code>string</code> | This must match the originally submitted URI (if one was sent). |
| <code>singleChannel?</code> | <code>boolean</code> | Request the user to add your app only to a single channel. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauth.oauthToken(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Oauth.OauthTokenError](src/resources/oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauth.oauthToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Oauth.OauthTokenError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>oauthV2Access(request: Oauth.OauthV2AccessRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Oauth.OauthV2AccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a temporary OAuth verifier code for an access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauth.oauthV2Access({
    code: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Oauth.OauthV2AccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauth.oauthV2Access({
  code: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The `code` param returned via the OAuth callback. |
| <code>clientId?</code> | <code>string</code> | Issued when you created your application. |
| <code>clientSecret?</code> | <code>string</code> | Issued when you created your application. |
| <code>redirectUri?</code> | <code>string</code> | This must match the originally submitted URI (if one was sent). |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauth.oauthV2Access(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Oauth.OauthV2AccessError](src/resources/oauth.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauth.oauthV2Access(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Oauth.OauthV2AccessError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## OauthV2

> Source: [OauthV2](src/resources/oauth-v2.ts)

<details>
<summary><code>oauthV2Access(request: OauthV2.OauthV2AccessRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, OauthV2.OauthV2AccessError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Exchanges a temporary OAuth verifier code for an access token.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauthV2.oauthV2Access({
    code: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type OauthV2.OauthV2AccessError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oauthV2.oauthV2Access({
  code: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>code</code> | <code>string</code> | The `code` param returned via the OAuth callback. |
| <code>clientId?</code> | <code>string</code> | Issued when you created your application. |
| <code>clientSecret?</code> | <code>string</code> | Issued when you created your application. |
| <code>redirectUri?</code> | <code>string</code> | This must match the originally submitted URI (if one was sent). |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oauthV2.oauthV2Access(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[OauthV2.OauthV2AccessError](src/resources/oauth-v2.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.oauthV2.oauthV2Access(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, OauthV2.OauthV2AccessError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Pins

> Source: [Pins](src/resources/pins.ts)

<details>
<summary><code>pinsAdd(request: Pins.PinsAddRequest, options?: RequestOptions): ApiPromise&lt;PinsAddschema, Pins.PinsAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pins an item to a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pinsAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
  });
  // TODO: Handle 'response' of type PinsAddschema
} catch (err) {
  // TODO: Handle 'err' of type Pins.PinsAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.pinsAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PinsAddschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `pins:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel to pin the item in. |
| <code>timestamp?</code> | <code>string</code> | Timestamp of the message to pin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.pinsAdd(request)`

- **OnSuccess**: <code>[PinsAddschema](src/models/pins-addschema.ts)</code>
- **OnError**: throws <code>[Pins.PinsAddError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.pinsAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PinsAddschema, Pins.PinsAddError&gt;</code>, with `result.value` of type <code>[PinsAddschema](src/models/pins-addschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pinsList(request: Pins.PinsListRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Pins.PinsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists items pinned to a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pinsList({
    token: "some example string",
    channel: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Pins.PinsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.pinsList({
  token: "some example string",
  channel: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `pins:read` |
| <code>channel</code> | <code>string</code> | Channel to get pinned items for. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.pinsList(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Pins.PinsListError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.pinsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Pins.PinsListError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pinsRemove(request: Pins.PinsRemoveRequest, options?: RequestOptions): ApiPromise&lt;PinsRemoveschema, Pins.PinsRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Un-pins an item from a channel.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pinsRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
  });
  // TODO: Handle 'response' of type PinsRemoveschema
} catch (err) {
  // TODO: Handle 'err' of type Pins.PinsRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.pins.pinsRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PinsRemoveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `pins:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel where the item is pinned to. |
| <code>timestamp?</code> | <code>string</code> | Timestamp of the message to un-pin. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.pins.pinsRemove(request)`

- **OnSuccess**: <code>[PinsRemoveschema](src/models/pins-removeschema.ts)</code>
- **OnError**: throws <code>[Pins.PinsRemoveError](src/resources/pins.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.pins.pinsRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PinsRemoveschema, Pins.PinsRemoveError&gt;</code>, with `result.value` of type <code>[PinsRemoveschema](src/models/pins-removeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reactions

> Source: [Reactions](src/resources/reactions.ts)

<details>
<summary><code>reactionsAdd(request: Reactions.ReactionsAddRequest, options?: RequestOptions): ApiPromise&lt;ReactionsAddschema, Reactions.ReactionsAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a reaction to an item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    channel: "some example string",
    name: "some example string",
    timestamp: "some example string",
  });
  // TODO: Handle 'response' of type ReactionsAddschema
} catch (err) {
  // TODO: Handle 'err' of type Reactions.ReactionsAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reactions.reactionsAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  channel: "some example string",
  name: "some example string",
  timestamp: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReactionsAddschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `reactions:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel</code> | <code>string</code> | Channel where the message to add reaction to was posted. |
| <code>name</code> | <code>string</code> | Reaction (emoji) name. |
| <code>timestamp</code> | <code>string</code> | Timestamp of the message to add reaction to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reactions.reactionsAdd(request)`

- **OnSuccess**: <code>[ReactionsAddschema](src/models/reactions-addschema.ts)</code>
- **OnError**: throws <code>[Reactions.ReactionsAddError](src/resources/reactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reactions.reactionsAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReactionsAddschema, Reactions.ReactionsAddError&gt;</code>, with `result.value` of type <code>[ReactionsAddschema](src/models/reactions-addschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reactionsGet(request: Reactions.ReactionsGetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Reactions.ReactionsGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets reactions for an item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsGet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Reactions.ReactionsGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reactions.reactionsGet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `reactions:read` |
| <code>channel?</code> | <code>string</code> | Channel where the message to get reactions for was posted. |
| <code>file?</code> | <code>string</code> | File to get reactions for. |
| <code>fileComment?</code> | <code>string</code> | File comment to get reactions for. |
| <code>full?</code> | <code>boolean</code> | If true always return the complete reaction list. |
| <code>timestamp?</code> | <code>string</code> | Timestamp of the message to get reactions for. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reactions.reactionsGet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Reactions.ReactionsGetError](src/resources/reactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reactions.reactionsGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Reactions.ReactionsGetError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reactionsList(request: Reactions.ReactionsListRequest, options?: RequestOptions): ApiPromise&lt;ReactionsListschema, Reactions.ReactionsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists reactions made by a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ReactionsListschema
} catch (err) {
  // TODO: Handle 'err' of type Reactions.ReactionsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reactions.reactionsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReactionsListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `reactions:read` |
| <code>user?</code> | <code>string</code> | Show reactions made by this user. Defaults to the authed user. |
| <code>full?</code> | <code>boolean</code> | If true always return the complete reaction list. |
| <code>count?</code> | <code>number</code> | - |
| <code>page?</code> | <code>number</code> | - |
| <code>cursor?</code> | <code>string</code> | Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reactions.reactionsList(request)`

- **OnSuccess**: <code>[ReactionsListschema](src/models/reactions-listschema.ts)</code>
- **OnError**: throws <code>[Reactions.ReactionsListError](src/resources/reactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reactions.reactionsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReactionsListschema, Reactions.ReactionsListError&gt;</code>, with `result.value` of type <code>[ReactionsListschema](src/models/reactions-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>reactionsRemove(request: Reactions.ReactionsRemoveRequest, options?: RequestOptions): ApiPromise&lt;ReactionsRemoveschema, Reactions.ReactionsRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a reaction from an item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    name: "some example string",
  });
  // TODO: Handle 'response' of type ReactionsRemoveschema
} catch (err) {
  // TODO: Handle 'err' of type Reactions.ReactionsRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reactions.reactionsRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReactionsRemoveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `reactions:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>name</code> | <code>string</code> | Reaction (emoji) name. |
| <code>file?</code> | <code>string</code> | File to remove reaction from. |
| <code>fileComment?</code> | <code>string</code> | File comment to remove reaction from. |
| <code>channel?</code> | <code>string</code> | Channel where the message to remove reaction from was posted. |
| <code>timestamp?</code> | <code>string</code> | Timestamp of the message to remove reaction from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reactions.reactionsRemove(request)`

- **OnSuccess**: <code>[ReactionsRemoveschema](src/models/reactions-removeschema.ts)</code>
- **OnError**: throws <code>[Reactions.ReactionsRemoveError](src/resources/reactions.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reactions.reactionsRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReactionsRemoveschema, Reactions.ReactionsRemoveError&gt;</code>, with `result.value` of type <code>[ReactionsRemoveschema](src/models/reactions-removeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Reminders

> Source: [Reminders](src/resources/reminders.ts)

<details>
<summary><code>remindersAdd(request: Reminders.RemindersAddRequest, options?: RequestOptions): ApiPromise&lt;RemindersAddschema, Reminders.RemindersAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a reminder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    text: "some example string",
    time: "some example string",
  });
  // TODO: Handle 'response' of type RemindersAddschema
} catch (err) {
  // TODO: Handle 'err' of type Reminders.RemindersAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders.remindersAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  text: "some example string",
  time: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemindersAddschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `reminders:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>text</code> | <code>string</code> | The content of the reminder |
| <code>time</code> | <code>string</code> | When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday") |
| <code>user?</code> | <code>string</code> | The user who will receive the reminder. If no user is specified, the reminder will go to user who created it. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.remindersAdd(request)`

- **OnSuccess**: <code>[RemindersAddschema](src/models/reminders-addschema.ts)</code>
- **OnError**: throws <code>[Reminders.RemindersAddError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.remindersAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemindersAddschema, Reminders.RemindersAddError&gt;</code>, with `result.value` of type <code>[RemindersAddschema](src/models/reminders-addschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>remindersComplete(request: Reminders.RemindersCompleteRequest, options?: RequestOptions): ApiPromise&lt;RemindersCompleteschema, Reminders.RemindersCompleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marks a reminder as complete.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersComplete({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type RemindersCompleteschema
} catch (err) {
  // TODO: Handle 'err' of type Reminders.RemindersCompleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders.remindersComplete({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemindersCompleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `reminders:write` |
| <code>reminder?</code> | <code>string</code> | The ID of the reminder to be marked as complete |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.remindersComplete(request)`

- **OnSuccess**: <code>[RemindersCompleteschema](src/models/reminders-completeschema.ts)</code>
- **OnError**: throws <code>[Reminders.RemindersCompleteError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.remindersComplete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemindersCompleteschema, Reminders.RemindersCompleteError&gt;</code>, with `result.value` of type <code>[RemindersCompleteschema](src/models/reminders-completeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>remindersDelete(request: Reminders.RemindersDeleteRequest, options?: RequestOptions): ApiPromise&lt;RemindersDeleteschema, Reminders.RemindersDeleteError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a reminder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersDelete({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type RemindersDeleteschema
} catch (err) {
  // TODO: Handle 'err' of type Reminders.RemindersDeleteError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders.remindersDelete({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemindersDeleteschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `reminders:write` |
| <code>reminder?</code> | <code>string</code> | The ID of the reminder |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.remindersDelete(request)`

- **OnSuccess**: <code>[RemindersDeleteschema](src/models/reminders-deleteschema.ts)</code>
- **OnError**: throws <code>[Reminders.RemindersDeleteError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.remindersDelete(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemindersDeleteschema, Reminders.RemindersDeleteError&gt;</code>, with `result.value` of type <code>[RemindersDeleteschema](src/models/reminders-deleteschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>remindersInfo(request: Reminders.RemindersInfoRequest, options?: RequestOptions): ApiPromise&lt;RemindersInfoschema, Reminders.RemindersInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a reminder.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersInfo({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type RemindersInfoschema
} catch (err) {
  // TODO: Handle 'err' of type Reminders.RemindersInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders.remindersInfo({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemindersInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `reminders:read` |
| <code>reminder?</code> | <code>string</code> | The ID of the reminder |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.remindersInfo(request)`

- **OnSuccess**: <code>[RemindersInfoschema](src/models/reminders-infoschema.ts)</code>
- **OnError**: throws <code>[Reminders.RemindersInfoError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.remindersInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemindersInfoschema, Reminders.RemindersInfoError&gt;</code>, with `result.value` of type <code>[RemindersInfoschema](src/models/reminders-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>remindersList(request: Reminders.RemindersListRequest, options?: RequestOptions): ApiPromise&lt;RemindersListschema, Reminders.RemindersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all reminders created by or for a given user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersList({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type RemindersListschema
} catch (err) {
  // TODO: Handle 'err' of type Reminders.RemindersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.reminders.remindersList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemindersListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `reminders:read` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.reminders.remindersList(request)`

- **OnSuccess**: <code>[RemindersListschema](src/models/reminders-listschema.ts)</code>
- **OnError**: throws <code>[Reminders.RemindersListError](src/resources/reminders.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.reminders.remindersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemindersListschema, Reminders.RemindersListError&gt;</code>, with `result.value` of type <code>[RemindersListschema](src/models/reminders-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Rtm

> Source: [Rtm](src/resources/rtm.ts)

<details>
<summary><code>rtmConnect(request: Rtm.RtmConnectRequest, options?: RequestOptions): ApiPromise&lt;RtmConnectschema, Rtm.RtmConnectError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a Real Time Messaging session.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.rtm.rtmConnect({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type RtmConnectschema
} catch (err) {
  // TODO: Handle 'err' of type Rtm.RtmConnectError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.rtm.rtmConnect({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RtmConnectschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `rtm:stream` |
| <code>batchPresenceAware?</code> | <code>boolean</code> | Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. |
| <code>presenceSub?</code> | <code>boolean</code> | Only deliver presence events when requested by subscription |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.rtm.rtmConnect(request)`

- **OnSuccess**: <code>[RtmConnectschema](src/models/rtm-connectschema.ts)</code>
- **OnError**: throws <code>[Rtm.RtmConnectError](src/resources/rtm.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.rtm.rtmConnect(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RtmConnectschema, Rtm.RtmConnectError&gt;</code>, with `result.value` of type <code>[RtmConnectschema](src/models/rtm-connectschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchMessages(request: Search.SearchMessagesRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Search.SearchMessagesError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for messages matching a query.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchMessages({
    token: "some example string",
    query: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchMessagesError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchMessages({
  token: "some example string",
  query: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `search:read` |
| <code>query</code> | <code>string</code> | Search query. |
| <code>count?</code> | <code>number</code> | Pass the number of results you want per "page". Maximum of `100`. |
| <code>highlight?</code> | <code>boolean</code> | Pass a value of `true` to enable query highlight markers (see below). |
| <code>page?</code> | <code>number</code> | - |
| <code>sort?</code> | <code>string</code> | Return matches sorted by either `score` or `timestamp`. |
| <code>sortDir?</code> | <code>string</code> | Change sort direction to ascending (`asc`) or descending (`desc`). |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchMessages(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Search.SearchMessagesError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.searchMessages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Search.SearchMessagesError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Stars

> Source: [Stars](src/resources/stars.ts)

<details>
<summary><code>starsAdd(request: Stars.StarsAddRequest, options?: RequestOptions): ApiPromise&lt;StarsAddschema, Stars.StarsAddError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a star to an item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stars.starsAdd({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type StarsAddschema
} catch (err) {
  // TODO: Handle 'err' of type Stars.StarsAddError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stars.starsAdd({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StarsAddschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `stars:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel?</code> | <code>string</code> | Channel to add star to, or channel where the message to add star to was posted (used with `timestamp`). |
| <code>file?</code> | <code>string</code> | File to add star to. |
| <code>fileComment?</code> | <code>string</code> | File comment to add star to. |
| <code>timestamp?</code> | <code>string</code> | Timestamp of the message to add star to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stars.starsAdd(request)`

- **OnSuccess**: <code>[StarsAddschema](src/models/stars-addschema.ts)</code>
- **OnError**: throws <code>[Stars.StarsAddError](src/resources/stars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stars.starsAdd(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StarsAddschema, Stars.StarsAddError&gt;</code>, with `result.value` of type <code>[StarsAddschema](src/models/stars-addschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>starsList(request: Stars.StarsListRequest, options?: RequestOptions): ApiPromise&lt;StarsListschema, Stars.StarsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists stars for a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stars.starsList({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type StarsListschema
} catch (err) {
  // TODO: Handle 'err' of type Stars.StarsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stars.starsList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StarsListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `stars:read` |
| <code>count?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>cursor?</code> | <code>string</code> | Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first "page" of the collection. |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stars.starsList(request)`

- **OnSuccess**: <code>[StarsListschema](src/models/stars-listschema.ts)</code>
- **OnError**: throws <code>[Stars.StarsListError](src/resources/stars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stars.starsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StarsListschema, Stars.StarsListError&gt;</code>, with `result.value` of type <code>[StarsListschema](src/models/stars-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>starsRemove(request: Stars.StarsRemoveRequest, options?: RequestOptions): ApiPromise&lt;StarsRemoveschema, Stars.StarsRemoveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a star from an item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stars.starsRemove({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type StarsRemoveschema
} catch (err) {
  // TODO: Handle 'err' of type Stars.StarsRemoveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stars.starsRemove({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StarsRemoveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `stars:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>channel?</code> | <code>string</code> | Channel to remove star from, or channel where the message to remove star from was posted (used with `timestamp`). |
| <code>file?</code> | <code>string</code> | File to remove star from. |
| <code>fileComment?</code> | <code>string</code> | File comment to remove star from. |
| <code>timestamp?</code> | <code>string</code> | Timestamp of the message to remove star from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stars.starsRemove(request)`

- **OnSuccess**: <code>[StarsRemoveschema](src/models/stars-removeschema.ts)</code>
- **OnError**: throws <code>[Stars.StarsRemoveError](src/resources/stars.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.stars.starsRemove(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StarsRemoveschema, Stars.StarsRemoveError&gt;</code>, with `result.value` of type <code>[StarsRemoveschema](src/models/stars-removeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TeamApi

> Source: [TeamApi](src/resources/team-api.ts)

<details>
<summary><code>teamAccessLogs(request: TeamApi.TeamAccessLogsRequest, options?: RequestOptions): ApiPromise&lt;TeamAccessLogsschema, TeamApi.TeamAccessLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the access logs for the current team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamAccessLogs({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type TeamAccessLogsschema
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamAccessLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamAccessLogs({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamAccessLogsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin` |
| <code>before?</code> | <code>string</code> | End of time range of logs to include in results (inclusive). |
| <code>count?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamAccessLogs(request)`

- **OnSuccess**: <code>[TeamAccessLogsschema](src/models/team-access-logsschema.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamAccessLogsError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamAccessLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamAccessLogsschema, TeamApi.TeamAccessLogsError&gt;</code>, with `result.value` of type <code>[TeamAccessLogsschema](src/models/team-access-logsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamBillableInfo(request: TeamApi.TeamBillableInfoRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, TeamApi.TeamBillableInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets billable users information for the current team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamBillableInfo({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamBillableInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamBillableInfo({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin` |
| <code>user?</code> | <code>string</code> | A user to retrieve the billable information for. Defaults to all users. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamBillableInfo(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamBillableInfoError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamBillableInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, TeamApi.TeamBillableInfoError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamInfo(request: TeamApi.TeamInfoRequest, options?: RequestOptions): ApiPromise&lt;TeamInfoschema, TeamApi.TeamInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the current team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamInfo({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type TeamInfoschema
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamInfo({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamInfoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `team:read` |
| <code>team?</code> | <code>string</code> | Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamInfo(request)`

- **OnSuccess**: <code>[TeamInfoschema](src/models/team-infoschema.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamInfoError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamInfoschema, TeamApi.TeamInfoError&gt;</code>, with `result.value` of type <code>[TeamInfoschema](src/models/team-infoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamIntegrationLogs(request: TeamApi.TeamIntegrationLogsRequest, options?: RequestOptions): ApiPromise&lt;TeamIntegrationLogsschema, TeamApi.TeamIntegrationLogsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets the integration logs for the current team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamIntegrationLogs({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type TeamIntegrationLogsschema
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamIntegrationLogsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamIntegrationLogs({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamIntegrationLogsschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `admin` |
| <code>appId?</code> | <code>string</code> | Filter logs to this Slack app. Defaults to all logs. |
| <code>changeType?</code> | <code>string</code> | Filter logs with this change type. Defaults to all logs. |
| <code>count?</code> | <code>string</code> | - |
| <code>page?</code> | <code>string</code> | - |
| <code>serviceId?</code> | <code>string</code> | Filter logs to this service. Defaults to all logs. |
| <code>user?</code> | <code>string</code> | Filter logs generated by this user’s actions. Defaults to all logs. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamIntegrationLogs(request)`

- **OnSuccess**: <code>[TeamIntegrationLogsschema](src/models/team-integration-logsschema.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamIntegrationLogsError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamIntegrationLogs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamIntegrationLogsschema, TeamApi.TeamIntegrationLogsError&gt;</code>, with `result.value` of type <code>[TeamIntegrationLogsschema](src/models/team-integration-logsschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>teamProfileGet(request: TeamApi.TeamProfileGetRequest, options?: RequestOptions): ApiPromise&lt;TeamProfileGetsuccessschema, TeamApi.TeamProfileGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a team's profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamProfileGet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type TeamProfileGetsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type TeamApi.TeamProfileGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamApi.teamProfileGet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamProfileGetsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:read` |
| <code>visibility?</code> | <code>string</code> | Filter by visibility. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamApi.teamProfileGet(request)`

- **OnSuccess**: <code>[TeamProfileGetsuccessschema](src/models/team-profile-getsuccessschema.ts)</code>
- **OnError**: throws <code>[TeamApi.TeamProfileGetError](src/resources/team-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamApi.teamProfileGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamProfileGetsuccessschema, TeamApi.TeamProfileGetError&gt;</code>, with `result.value` of type <code>[TeamProfileGetsuccessschema](src/models/team-profile-getsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## TeamProfile

> Source: [TeamProfile](src/resources/team-profile.ts)

<details>
<summary><code>teamProfileGet(request: TeamProfile.TeamProfileGetRequest, options?: RequestOptions): ApiPromise&lt;TeamProfileGetsuccessschema, TeamProfile.TeamProfileGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a team's profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamProfile.teamProfileGet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type TeamProfileGetsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type TeamProfile.TeamProfileGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.teamProfile.teamProfileGet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TeamProfileGetsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:read` |
| <code>visibility?</code> | <code>string</code> | Filter by visibility. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.teamProfile.teamProfileGet(request)`

- **OnSuccess**: <code>[TeamProfileGetsuccessschema](src/models/team-profile-getsuccessschema.ts)</code>
- **OnError**: throws <code>[TeamProfile.TeamProfileGetError](src/resources/team-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.teamProfile.teamProfileGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TeamProfileGetsuccessschema, TeamProfile.TeamProfileGetError&gt;</code>, with `result.value` of type <code>[TeamProfileGetsuccessschema](src/models/team-profile-getsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Usergroups

> Source: [Usergroups](src/resources/usergroups.ts)

<details>
<summary><code>usergroupsCreate(request: Usergroups.UsergroupsCreateRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsCreateschema, Usergroups.UsergroupsCreateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsCreate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    name: "some example string",
  });
  // TODO: Handle 'response' of type UsergroupsCreateschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsCreateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsCreate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  name: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsCreateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>name</code> | <code>string</code> | A name for the User Group. Must be unique among User Groups. |
| <code>channels?</code> | <code>string</code> | A comma separated string of encoded channel IDs for which the User Group uses as a default. |
| <code>description?</code> | <code>string</code> | A short description of the User Group. |
| <code>handle?</code> | <code>string</code> | A mention handle. Must be unique among channels, users and User Groups. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in each User Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsCreate(request)`

- **OnSuccess**: <code>[UsergroupsCreateschema](src/models/usergroups-createschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsCreateError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsCreate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsCreateschema, Usergroups.UsergroupsCreateError&gt;</code>, with `result.value` of type <code>[UsergroupsCreateschema](src/models/usergroups-createschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsDisable(request: Usergroups.UsergroupsDisableRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsDisableschema, Usergroups.UsergroupsDisableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable an existing User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsDisable({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroup: "some example string",
  });
  // TODO: Handle 'response' of type UsergroupsDisableschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsDisableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsDisable({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroup: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsDisableschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to disable. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in the User Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsDisable(request)`

- **OnSuccess**: <code>[UsergroupsDisableschema](src/models/usergroups-disableschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsDisableError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsDisable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsDisableschema, Usergroups.UsergroupsDisableError&gt;</code>, with `result.value` of type <code>[UsergroupsDisableschema](src/models/usergroups-disableschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsEnable(request: Usergroups.UsergroupsEnableRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsEnableschema, Usergroups.UsergroupsEnableError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable a User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsEnable({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroup: "some example string",
  });
  // TODO: Handle 'response' of type UsergroupsEnableschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsEnableError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsEnable({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroup: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsEnableschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to enable. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in the User Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsEnable(request)`

- **OnSuccess**: <code>[UsergroupsEnableschema](src/models/usergroups-enableschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsEnableError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsEnable(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsEnableschema, Usergroups.UsergroupsEnableError&gt;</code>, with `result.value` of type <code>[UsergroupsEnableschema](src/models/usergroups-enableschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsList(request: Usergroups.UsergroupsListRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsListschema, Usergroups.UsergroupsListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all User Groups for a team

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsList({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsergroupsListschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsList({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:read` |
| <code>includeUsers?</code> | <code>boolean</code> | Include the list of users for each User Group. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in each User Group. |
| <code>includeDisabled?</code> | <code>boolean</code> | Include disabled User Groups. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsList(request)`

- **OnSuccess**: <code>[UsergroupsListschema](src/models/usergroups-listschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsListError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsListschema, Usergroups.UsergroupsListError&gt;</code>, with `result.value` of type <code>[UsergroupsListschema](src/models/usergroups-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsUpdate(request: Usergroups.UsergroupsUpdateRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsUpdateschema, Usergroups.UsergroupsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsUpdate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroup: "some example string",
  });
  // TODO: Handle 'response' of type UsergroupsUpdateschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsUpdate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroup: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsUpdateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to update. |
| <code>handle?</code> | <code>string</code> | A mention handle. Must be unique among channels, users and User Groups. |
| <code>description?</code> | <code>string</code> | A short description of the User Group. |
| <code>channels?</code> | <code>string</code> | A comma separated string of encoded channel IDs for which the User Group uses as a default. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in the User Group. |
| <code>name?</code> | <code>string</code> | A name for the User Group. Must be unique among User Groups. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsUpdate(request)`

- **OnSuccess**: <code>[UsergroupsUpdateschema](src/models/usergroups-updateschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsUpdateError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsUpdateschema, Usergroups.UsergroupsUpdateError&gt;</code>, with `result.value` of type <code>[UsergroupsUpdateschema](src/models/usergroups-updateschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsUsersList(request: Usergroups.UsergroupsUsersListRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsUsersListschema, Usergroups.UsergroupsUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all users in a User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsUsersList({
    token: "some example string",
    usergroup: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsergroupsUsersListschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsUsersList({
  token: "some example string",
  usergroup: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsUsersListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:read` |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to update. |
| <code>includeDisabled?</code> | <code>boolean</code> | Allow results that involve disabled User Groups. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsUsersList(request)`

- **OnSuccess**: <code>[UsergroupsUsersListschema](src/models/usergroups-users-listschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsUsersListError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsUsersListschema, Usergroups.UsergroupsUsersListError&gt;</code>, with `result.value` of type <code>[UsergroupsUsersListschema](src/models/usergroups-users-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsUsersUpdate(request: Usergroups.UsergroupsUsersUpdateRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsUsersUpdateschema, Usergroups.UsergroupsUsersUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the list of users for a User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsUsersUpdate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroup: "some example string",
    users: "some example string",
  });
  // TODO: Handle 'response' of type UsergroupsUsersUpdateschema
} catch (err) {
  // TODO: Handle 'err' of type Usergroups.UsergroupsUsersUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroups.usergroupsUsersUpdate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroup: "some example string",
  users: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsUsersUpdateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to update. |
| <code>users</code> | <code>string</code> | A comma separated string of encoded user IDs that represent the entire list of users for the User Group. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in the User Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroups.usergroupsUsersUpdate(request)`

- **OnSuccess**: <code>[UsergroupsUsersUpdateschema](src/models/usergroups-users-updateschema.ts)</code>
- **OnError**: throws <code>[Usergroups.UsergroupsUsersUpdateError](src/resources/usergroups.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroups.usergroupsUsersUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsUsersUpdateschema, Usergroups.UsergroupsUsersUpdateError&gt;</code>, with `result.value` of type <code>[UsergroupsUsersUpdateschema](src/models/usergroups-users-updateschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UsergroupsUsers

> Source: [UsergroupsUsers](src/resources/usergroups-users.ts)

<details>
<summary><code>usergroupsUsersList(request: UsergroupsUsers.UsergroupsUsersListRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsUsersListschema, UsergroupsUsers.UsergroupsUsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List all users in a User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroupsUsers.usergroupsUsersList({
    token: "some example string",
    usergroup: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsergroupsUsersListschema
} catch (err) {
  // TODO: Handle 'err' of type UsergroupsUsers.UsergroupsUsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroupsUsers.usergroupsUsersList({
  token: "some example string",
  usergroup: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsUsersListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:read` |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to update. |
| <code>includeDisabled?</code> | <code>boolean</code> | Allow results that involve disabled User Groups. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroupsUsers.usergroupsUsersList(request)`

- **OnSuccess**: <code>[UsergroupsUsersListschema](src/models/usergroups-users-listschema.ts)</code>
- **OnError**: throws <code>[UsergroupsUsers.UsergroupsUsersListError](src/resources/usergroups-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroupsUsers.usergroupsUsersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsUsersListschema, UsergroupsUsers.UsergroupsUsersListError&gt;</code>, with `result.value` of type <code>[UsergroupsUsersListschema](src/models/usergroups-users-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usergroupsUsersUpdate(request: UsergroupsUsers.UsergroupsUsersUpdateRequest, options?: RequestOptions): ApiPromise&lt;UsergroupsUsersUpdateschema, UsergroupsUsers.UsergroupsUsersUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the list of users for a User Group

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroupsUsers.usergroupsUsersUpdate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    usergroup: "some example string",
    users: "some example string",
  });
  // TODO: Handle 'response' of type UsergroupsUsersUpdateschema
} catch (err) {
  // TODO: Handle 'err' of type UsergroupsUsers.UsergroupsUsersUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usergroupsUsers.usergroupsUsersUpdate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  usergroup: "some example string",
  users: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsergroupsUsersUpdateschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `usergroups:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>usergroup</code> | <code>string</code> | The encoded ID of the User Group to update. |
| <code>users</code> | <code>string</code> | A comma separated string of encoded user IDs that represent the entire list of users for the User Group. |
| <code>includeCount?</code> | <code>boolean</code> | Include the number of users in the User Group. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usergroupsUsers.usergroupsUsersUpdate(request)`

- **OnSuccess**: <code>[UsergroupsUsersUpdateschema](src/models/usergroups-users-updateschema.ts)</code>
- **OnError**: throws <code>[UsergroupsUsers.UsergroupsUsersUpdateError](src/resources/usergroups-users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usergroupsUsers.usergroupsUsersUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsergroupsUsersUpdateschema, UsergroupsUsers.UsergroupsUsersUpdateError&gt;</code>, with `result.value` of type <code>[UsergroupsUsersUpdateschema](src/models/usergroups-users-updateschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Users

> Source: [Users](src/resources/users.ts)

<details>
<summary><code>usersConversations(request: Users.UsersConversationsRequest, options?: RequestOptions): ApiPromise&lt;UsersConversationssuccessschema, Users.UsersConversationsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List conversations the calling user may access.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersConversations({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersConversationssuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersConversationsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersConversations({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersConversationssuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `conversations:read` |
| <code>user?</code> | <code>string</code> | Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership. |
| <code>types?</code> | <code>string</code> | Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im` |
| <code>excludeArchived?</code> | <code>boolean</code> | Set to `true` to exclude archived channels from the list |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersConversations(request)`

- **OnSuccess**: <code>[UsersConversationssuccessschema](src/models/users-conversationssuccessschema.ts)</code>
- **OnError**: throws <code>[Users.UsersConversationsError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersConversations(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersConversationssuccessschema, Users.UsersConversationsError&gt;</code>, with `result.value` of type <code>[UsersConversationssuccessschema](src/models/users-conversationssuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersDeletePhoto(request: Users.UsersDeletePhotoRequest, options?: RequestOptions): ApiPromise&lt;UsersDeletePhotoschema, Users.UsersDeletePhotoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete the user profile photo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersDeletePhoto({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
  });
  // TODO: Handle 'response' of type UsersDeletePhotoschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersDeletePhotoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersDeletePhoto({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersDeletePhotoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:write` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersDeletePhoto(request)`

- **OnSuccess**: <code>[UsersDeletePhotoschema](src/models/users-delete-photoschema.ts)</code>
- **OnError**: throws <code>[Users.UsersDeletePhotoError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersDeletePhoto(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersDeletePhotoschema, Users.UsersDeletePhotoError&gt;</code>, with `result.value` of type <code>[UsersDeletePhotoschema](src/models/users-delete-photoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersGetPresence(request: Users.UsersGetPresenceRequest, options?: RequestOptions): ApiPromise&lt;ApImethodusersGetPresence, Users.UsersGetPresenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets user presence information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersGetPresence({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type ApImethodusersGetPresence
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersGetPresenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersGetPresence({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ApImethodusersGetPresence
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users:read` |
| <code>user?</code> | <code>string</code> | User to get presence info on. Defaults to the authed user. |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersGetPresence(request)`

- **OnSuccess**: <code>[ApImethodusersGetPresence](src/models/ap-imethodusers-get-presence.ts)</code>
- **OnError**: throws <code>[Users.UsersGetPresenceError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersGetPresence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ApImethodusersGetPresence, Users.UsersGetPresenceError&gt;</code>, with `result.value` of type <code>[ApImethodusersGetPresence](src/models/ap-imethodusers-get-presence.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersIdentity(request: Users.UsersIdentityRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, Users.UsersIdentityError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a user's identity.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersIdentity({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersIdentityError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersIdentity({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `identity.basic` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersIdentity(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;</code>
- **OnError**: throws <code>[Users.UsersIdentityError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersIdentity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;, Users.UsersIdentityError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersInfo(request: Users.UsersInfoRequest, options?: RequestOptions): ApiPromise&lt;UsersInfosuccessschema, Users.UsersInfoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersInfo({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersInfosuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersInfoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersInfo({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersInfosuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users:read` |
| <code>includeLocale?</code> | <code>boolean</code> | Set this to `true` to receive the locale for this user. Defaults to `false` |
| <code>user?</code> | <code>string</code> | User to get info on |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersInfo(request)`

- **OnSuccess**: <code>[UsersInfosuccessschema](src/models/users-infosuccessschema.ts)</code>
- **OnError**: throws <code>[Users.UsersInfoError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersInfo(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersInfosuccessschema, Users.UsersInfoError&gt;</code>, with `result.value` of type <code>[UsersInfosuccessschema](src/models/users-infosuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersList(request: Users.UsersListRequest, options?: RequestOptions): ApiPromise&lt;UsersListschema, Users.UsersListError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all users in a Slack team.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersList({ contentType: ContentType.ApplicationXWwwFormUrlencoded });
  // TODO: Handle 'response' of type UsersListschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersListError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersList({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersListschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token?</code> | <code>string</code> | Authentication token. Requires scope: `users:read` |
| <code>limit?</code> | <code>number</code> | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors. |
| <code>cursor?</code> | <code>string</code> | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first "page" of the collection. |
| <code>includeLocale?</code> | <code>boolean</code> | Set this to `true` to receive the locale for users. Defaults to `false` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersList(request)`

- **OnSuccess**: <code>[UsersListschema](src/models/users-listschema.ts)</code>
- **OnError**: throws <code>[Users.UsersListError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersList(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersListschema, Users.UsersListError&gt;</code>, with `result.value` of type <code>[UsersListschema](src/models/users-listschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersLookupByEmail(request: Users.UsersLookupByEmailRequest, options?: RequestOptions): ApiPromise&lt;UsersLookupByEmailsuccessschema, Users.UsersLookupByEmailError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find a user with an email address.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersLookupByEmail({
    token: "some example string",
    email: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersLookupByEmailsuccessschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersLookupByEmailError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersLookupByEmail({
  token: "some example string",
  email: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersLookupByEmailsuccessschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users:read.email` |
| <code>email</code> | <code>string</code> | An email address belonging to a user in the workspace |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersLookupByEmail(request)`

- **OnSuccess**: <code>[UsersLookupByEmailsuccessschema](src/models/users-lookup-by-emailsuccessschema.ts)</code>
- **OnError**: throws <code>[Users.UsersLookupByEmailError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersLookupByEmail(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersLookupByEmailsuccessschema, Users.UsersLookupByEmailError&gt;</code>, with `result.value` of type <code>[UsersLookupByEmailsuccessschema](src/models/users-lookup-by-emailsuccessschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersProfileGet(request: Users.UsersProfileGetRequest, options?: RequestOptions): ApiPromise&lt;UsersProfileGetschema, Users.UsersProfileGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a user's profile information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersProfileGet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersProfileGetschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersProfileGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersProfileGet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersProfileGetschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:read` |
| <code>includeLabels?</code> | <code>boolean</code> | Include labels for each ID in custom profile fields |
| <code>user?</code> | <code>string</code> | User to retrieve profile info for |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersProfileGet(request)`

- **OnSuccess**: <code>[UsersProfileGetschema](src/models/users-profile-getschema.ts)</code>
- **OnError**: throws <code>[Users.UsersProfileGetError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersProfileGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersProfileGetschema, Users.UsersProfileGetError&gt;</code>, with `result.value` of type <code>[UsersProfileGetschema](src/models/users-profile-getschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersProfileSet(request: Users.UsersProfileSetRequest, options?: RequestOptions): ApiPromise&lt;UsersProfileSetschema, Users.UsersProfileSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the profile information for a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersProfileSet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersProfileSetschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersProfileSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersProfileSet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersProfileSetschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>name?</code> | <code>string</code> | Name of a single key to set. Usable only if `profile` is not passed. |
| <code>profile?</code> | <code>string</code> | Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. |
| <code>user?</code> | <code>string</code> | ID of user to change. This argument may only be specified by team admins on paid teams. |
| <code>value?</code> | <code>string</code> | Value to set a single key to. Usable only if `profile` is not passed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersProfileSet(request)`

- **OnSuccess**: <code>[UsersProfileSetschema](src/models/users-profile-setschema.ts)</code>
- **OnError**: throws <code>[Users.UsersProfileSetError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersProfileSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersProfileSetschema, Users.UsersProfileSetError&gt;</code>, with `result.value` of type <code>[UsersProfileSetschema](src/models/users-profile-setschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersSetActive(request: Users.UsersSetActiveRequest, options?: RequestOptions): ApiPromise&lt;UsersSetActiveschema, Users.UsersSetActiveError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Marked a user as active. Deprecated and non-functional.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSetActive({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersSetActiveschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersSetActiveError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersSetActive({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersSetActiveschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersSetActive(request)`

- **OnSuccess**: <code>[UsersSetActiveschema](src/models/users-set-activeschema.ts)</code>
- **OnError**: throws <code>[Users.UsersSetActiveError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersSetActive(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersSetActiveschema, Users.UsersSetActiveError&gt;</code>, with `result.value` of type <code>[UsersSetActiveschema](src/models/users-set-activeschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersSetPhoto(request: Users.UsersSetPhotoRequest, options?: RequestOptions): ApiPromise&lt;UsersSetPhotoschema, Users.UsersSetPhotoError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the user profile photo

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSetPhoto({
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    token: "some example string",
  });
  // TODO: Handle 'response' of type UsersSetPhotoschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersSetPhotoError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersSetPhoto({
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  token: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersSetPhotoschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:write` |
| <code>cropW?</code> | <code>string</code> | Width/height of crop box (always square) |
| <code>cropX?</code> | <code>string</code> | X coordinate of top-left corner of crop box |
| <code>cropY?</code> | <code>string</code> | Y coordinate of top-left corner of crop box |
| <code>image?</code> | <code>string</code> | File contents via `multipart/form-data`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersSetPhoto(request)`

- **OnSuccess**: <code>[UsersSetPhotoschema](src/models/users-set-photoschema.ts)</code>
- **OnError**: throws <code>[Users.UsersSetPhotoError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersSetPhoto(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersSetPhotoschema, Users.UsersSetPhotoError&gt;</code>, with `result.value` of type <code>[UsersSetPhotoschema](src/models/users-set-photoschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersSetPresence(request: Users.UsersSetPresenceRequest, options?: RequestOptions): ApiPromise&lt;UsersSetPresenceschema, Users.UsersSetPresenceError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Manually sets user presence.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSetPresence({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
    presence: "some example string",
  });
  // TODO: Handle 'response' of type UsersSetPresenceschema
} catch (err) {
  // TODO: Handle 'err' of type Users.UsersSetPresenceError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.users.usersSetPresence({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
  presence: "some example string",
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersSetPresenceschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>presence</code> | <code>string</code> | Either `auto` or `away` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.users.usersSetPresence(request)`

- **OnSuccess**: <code>[UsersSetPresenceschema](src/models/users-set-presenceschema.ts)</code>
- **OnError**: throws <code>[Users.UsersSetPresenceError](src/resources/users.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.users.usersSetPresence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersSetPresenceschema, Users.UsersSetPresenceError&gt;</code>, with `result.value` of type <code>[UsersSetPresenceschema](src/models/users-set-presenceschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## UsersProfile

> Source: [UsersProfile](src/resources/users-profile.ts)

<details>
<summary><code>usersProfileGet(request: UsersProfile.UsersProfileGetRequest, options?: RequestOptions): ApiPromise&lt;UsersProfileGetschema, UsersProfile.UsersProfileGetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a user's profile information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersProfile.usersProfileGet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersProfileGetschema
} catch (err) {
  // TODO: Handle 'err' of type UsersProfile.UsersProfileGetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersProfile.usersProfileGet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersProfileGetschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:read` |
| <code>includeLabels?</code> | <code>boolean</code> | Include labels for each ID in custom profile fields |
| <code>user?</code> | <code>string</code> | User to retrieve profile info for |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersProfile.usersProfileGet(request)`

- **OnSuccess**: <code>[UsersProfileGetschema](src/models/users-profile-getschema.ts)</code>
- **OnError**: throws <code>[UsersProfile.UsersProfileGetError](src/resources/users-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersProfile.usersProfileGet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersProfileGetschema, UsersProfile.UsersProfileGetError&gt;</code>, with `result.value` of type <code>[UsersProfileGetschema](src/models/users-profile-getschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>usersProfileSet(request: UsersProfile.UsersProfileSetRequest, options?: RequestOptions): ApiPromise&lt;UsersProfileSetschema, UsersProfile.UsersProfileSetError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the profile information for a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersProfile.usersProfileSet({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type UsersProfileSetschema
} catch (err) {
  // TODO: Handle 'err' of type UsersProfile.UsersProfileSetError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.usersProfile.usersProfileSet({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsersProfileSetschema
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `users.profile:write` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |
| <code>name?</code> | <code>string</code> | Name of a single key to set. Usable only if `profile` is not passed. |
| <code>profile?</code> | <code>string</code> | Collection of key:value pairs presented as a URL-encoded JSON hash. At most 50 fields may be set. Each field name is limited to 255 characters. |
| <code>user?</code> | <code>string</code> | ID of user to change. This argument may only be specified by team admins on paid teams. |
| <code>value?</code> | <code>string</code> | Value to set a single key to. Usable only if `profile` is not passed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.usersProfile.usersProfileSet(request)`

- **OnSuccess**: <code>[UsersProfileSetschema](src/models/users-profile-setschema.ts)</code>
- **OnError**: throws <code>[UsersProfile.UsersProfileSetError](src/resources/users-profile.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.usersProfile.usersProfileSet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsersProfileSetschema, UsersProfile.UsersProfileSetError&gt;</code>, with `result.value` of type <code>[UsersProfileSetschema](src/models/users-profile-setschema.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Views

> Source: [Views](src/resources/views.ts)

<details>
<summary><code>viewsOpen(request: Views.ViewsOpenRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Views.ViewsOpenError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Open a view for a user.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsOpen({
    triggerId: "some example string",
    view: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Views.ViewsOpenError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.views.viewsOpen({
  triggerId: "some example string",
  view: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | Exchange a trigger to post to the user. |
| <code>view</code> | <code>string</code> | A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.views.viewsOpen(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Views.ViewsOpenError](src/resources/views.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.views.viewsOpen(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Views.ViewsOpenError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>viewsPublish(request: Views.ViewsPublishRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Views.ViewsPublishError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish a static view for a User.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsPublish({
    userId: "some example string",
    view: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Views.ViewsPublishError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.views.viewsPublish({
  userId: "some example string",
  view: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>userId</code> | <code>string</code> | `id` of the user you want publish a view to. |
| <code>view</code> | <code>string</code> | A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. |
| <code>hash?</code> | <code>string</code> | A string that represents view state to protect against possible race conditions. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.views.viewsPublish(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Views.ViewsPublishError](src/resources/views.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.views.viewsPublish(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Views.ViewsPublishError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>viewsPush(request: Views.ViewsPushRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Views.ViewsPushError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Push a view onto the stack of a root view.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsPush({
    triggerId: "some example string",
    view: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Views.ViewsPushError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.views.viewsPush({
  triggerId: "some example string",
  view: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>triggerId</code> | <code>string</code> | Exchange a trigger to post to the user. |
| <code>view</code> | <code>string</code> | A [view payload](/reference/surfaces/views). This must be a JSON-encoded string. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.views.viewsPush(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Views.ViewsPushError](src/resources/views.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.views.viewsPush(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Views.ViewsPushError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>viewsUpdate(request: Views.ViewsUpdateRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Views.ViewsUpdateError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an existing view.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsUpdate({
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Views.ViewsUpdateError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.views.viewsUpdate({
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>viewId?</code> | <code>string</code> | A unique identifier of the view to be updated. Either `view_id` or `external_id` is required. |
| <code>externalId?</code> | <code>string</code> | A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required. |
| <code>view?</code> | <code>string</code> | A [view object](/reference/surfaces/views). This must be a JSON-encoded string. |
| <code>hash?</code> | <code>string</code> | A string that represents view state to protect against possible race conditions. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `none` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.views.viewsUpdate(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Views.ViewsUpdateError](src/resources/views.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.views.viewsUpdate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Views.ViewsUpdateError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Workflows

> Source: [Workflows](src/resources/workflows.ts)

<details>
<summary><code>workflowsStepCompleted(request: Workflows.WorkflowsStepCompletedRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Workflows.WorkflowsStepCompletedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Indicate that an app's step in a workflow completed execution.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.workflowsStepCompleted({
    workflowStepExecuteId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Workflows.WorkflowsStepCompletedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflows.workflowsStepCompleted({
  workflowStepExecuteId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workflowStepExecuteId</code> | <code>string</code> | Context identifier that maps to the correct workflow step execution. |
| <code>outputs?</code> | <code>string</code> | Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `workflow.steps:execute` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflows.workflowsStepCompleted(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Workflows.WorkflowsStepCompletedError](src/resources/workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflows.workflowsStepCompleted(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Workflows.WorkflowsStepCompletedError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>workflowsStepFailed(request: Workflows.WorkflowsStepFailedRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Workflows.WorkflowsStepFailedError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Indicate that an app's step in a workflow failed to execute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.workflowsStepFailed({
    workflowStepExecuteId: "some example string",
    error: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Workflows.WorkflowsStepFailedError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflows.workflowsStepFailed({
  workflowStepExecuteId: "some example string",
  error: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workflowStepExecuteId</code> | <code>string</code> | Context identifier that maps to the correct workflow step execution. |
| <code>error</code> | <code>string</code> | A JSON-based object with a `message` property that should contain a human readable error message. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `workflow.steps:execute` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflows.workflowsStepFailed(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Workflows.WorkflowsStepFailedError](src/resources/workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflows.workflowsStepFailed(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Workflows.WorkflowsStepFailedError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>workflowsUpdateStep(request: Workflows.WorkflowsUpdateStepRequest, options?: RequestOptions): ApiPromise&lt;Defaultsuccesstemplate, Workflows.WorkflowsUpdateStepError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the configuration for a workflow extension step.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.workflowsUpdateStep({
    workflowStepEditId: "some example string",
    token: "some example string",
    contentType: ContentType.ApplicationXWwwFormUrlencoded,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  // TODO: Handle 'err' of type Workflows.WorkflowsUpdateStepError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.workflows.workflowsUpdateStep({
  workflowStepEditId: "some example string",
  token: "some example string",
  contentType: ContentType.ApplicationXWwwFormUrlencoded,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Defaultsuccesstemplate
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workflowStepEditId</code> | <code>string</code> | A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`. |
| <code>inputs?</code> | <code>string</code> | A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables). |
| <code>outputs?</code> | <code>string</code> | An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed. |
| <code>stepName?</code> | <code>string</code> | An optional field that can be used to override the step name that is shown in the Workflow Builder. |
| <code>stepImageUrl?</code> | <code>string</code> | An optional field that can be used to override app image that is shown in the Workflow Builder. |
| <code>token</code> | <code>string</code> | Authentication token. Requires scope: `workflow.steps:execute` |
| <code>contentType</code> | <code>[ContentType](src/models/content-type.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.workflows.workflowsUpdateStep(request)`

- **OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: throws <code>[Workflows.WorkflowsUpdateStepError](src/resources/workflows.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.workflows.workflowsUpdateStep(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Defaultsuccesstemplate, Workflows.WorkflowsUpdateStepError&gt;</code>, with `result.value` of type <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[SlackWebApiError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

