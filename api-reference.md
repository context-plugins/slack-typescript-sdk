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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminApps.adminAppsApprove({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminApps.AdminAppsApproveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminApps.AdminAppsApproveError](src/resources/admin-apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminApps.adminAppsRestrict({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminApps.AdminAppsRestrictError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminApps.AdminAppsRestrictError](src/resources/admin-apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsApprove({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminAppsApproveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminAppsApproveError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsApprovedList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminAppsApprovedListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminAppsApprovedListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsRequestsList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminAppsRequestsListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminAppsRequestsListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsRestrict({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminAppsRestrictError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminAppsRestrictError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminAppsRestrictedList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminAppsRestrictedListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminAppsRestrictedListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsArchive({ token, contentType, channelId });
  // TODO: Handle 'response' of type AdminConversationsArchiveschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsArchiveError &&
      err.payload.kind === "adminConversationsArchiveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsArchiveerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsArchiveschema](src/models/admin-conversations-archiveschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsArchiveError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsConvertToPrivate({ token, contentType, channelId });
  // TODO: Handle 'response' of type AdminConversationsConvertToPrivateschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsConvertToPrivateError &&
      err.payload.kind === "adminConversationsConvertToPrivateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsConvertToPrivateerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsConvertToPrivateschema](src/models/admin-conversations-convert-to-privateschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsConvertToPrivateError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsCreate({ token, contentType, name, isPrivate });
  // TODO: Handle 'response' of type AdminConversationsCreateschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsCreateError &&
      err.payload.kind === "adminConversationsCreateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsCreateerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsCreateschema](src/models/admin-conversations-createschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsCreateError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsDelete({ token, contentType, channelId });
  // TODO: Handle 'response' of type AdminConversationsDeleteschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsDeleteError &&
      err.payload.kind === "adminConversationsDeleteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsDeleteerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsDeleteschema](src/models/admin-conversations-deleteschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsDeleteError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsDisconnectShared({ token, contentType, channelId });
  // TODO: Handle 'response' of type AdminConversationsRenameschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsDisconnectSharedError &&
      err.payload.kind === "adminConversationsDisconnectSharederrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsDisconnectSharederrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsRenameschema](src/models/admin-conversations-renameschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsDisconnectSharedError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsEkmListOriginalConnectedChannelInfo({
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminConversationsEkmListOriginalConnectedChannelInfoError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsGetConversationPrefs({
    channelId,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type AdminConversationsGetConversationPrefsschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsGetConversationPrefsError &&
      err.payload.kind === "adminConversationsUnarchiveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsUnarchiveerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsGetConversationPrefsschema](src/models/admin-conversations-get-conversation-prefsschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsGetConversationPrefsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsGetTeams({ channelId, token, contentType });
  // TODO: Handle 'response' of type AdminConversationsGetTeamsschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsGetTeamsError &&
      err.payload.kind === "adminConversationsGetTeamserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsGetTeamserrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsGetTeamsschema](src/models/admin-conversations-get-teamsschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsGetTeamsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsInvite({ token, contentType, userIds, channelId });
  // TODO: Handle 'response' of type AdminConversationsInviteschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsInviteError &&
      err.payload.kind === "adminConversationsInviteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsInviteerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsInviteschema](src/models/admin-conversations-inviteschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsInviteError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRename({ token, contentType, channelId, name });
  // TODO: Handle 'response' of type AdminConversationsRenameschema1
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsRenameError &&
      err.payload.kind === "adminConversationsUnarchiveerrorschema21"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsUnarchiveerrorschema21
  }
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

**OnSuccess**: <code>[AdminConversationsRenameschema1](src/models/admin-conversations-renameschema1.ts)</code>

**OnError**: <code>[Admin.AdminConversationsRenameError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRestrictAccessAddGroup({
    contentType,
    token,
    groupId,
    channelId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsRestrictAccessAddGroupError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminConversationsRestrictAccessAddGroupError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRestrictAccessListGroups({
    token,
    channelId,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsRestrictAccessListGroupsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminConversationsRestrictAccessListGroupsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsRestrictAccessRemoveGroup({
    contentType,
    token,
    teamId,
    groupId,
    channelId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsRestrictAccessRemoveGroupError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminConversationsRestrictAccessRemoveGroupError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsSearch({ token, contentType });
  // TODO: Handle 'response' of type AdminConversationsSearchschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsSearchError &&
      err.payload.kind === "adminConversationsSearcherrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsSearcherrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsSearchschema](src/models/admin-conversations-searchschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsSearchError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsSetConversationPrefs({
    token,
    contentType,
    channelId,
    prefs,
  });
  // TODO: Handle 'response' of type AdminConversationsSetConversationPrefsschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsSetConversationPrefsError &&
      err.payload.kind === "adminConversationsSetConversationPrefserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsSetConversationPrefserrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsSetConversationPrefsschema](src/models/admin-conversations-set-conversation-prefsschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsSetConversationPrefsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsSetTeams({ token, contentType, channelId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminConversationsSetTeamsError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminConversationsSetTeamsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminConversationsUnarchive({ token, contentType, channelId });
  // TODO: Handle 'response' of type AdminConversationsUnarchiveschema
} catch (err) {
  if (
    err instanceof Admin.AdminConversationsUnarchiveError &&
      err.payload.kind === "adminConversationsUnarchiveerrorschema31"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsUnarchiveerrorschema31
  }
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

**OnSuccess**: <code>[AdminConversationsUnarchiveschema](src/models/admin-conversations-unarchiveschema.ts)</code>

**OnError**: <code>[Admin.AdminConversationsUnarchiveError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiAdd({ contentType, token, name, url });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminEmojiAddError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminEmojiAddError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiAddAlias({ contentType, token, name, aliasFor });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminEmojiAddAliasError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminEmojiAddAliasError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminEmojiListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminEmojiListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiRemove({ contentType, token, name });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminEmojiRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminEmojiRemoveError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminEmojiRename({ contentType, token, name, newName });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminEmojiRenameError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminEmojiRenameError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsApprove({ token, contentType, inviteRequestId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminInviteRequestsApproveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminInviteRequestsApproveError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsApprovedList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminInviteRequestsApprovedListError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminInviteRequestsApprovedListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsDeniedList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminInviteRequestsDeniedListError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminInviteRequestsDeniedListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsDeny({ token, contentType, inviteRequestId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminInviteRequestsDenyError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminInviteRequestsDenyError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminInviteRequestsList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminInviteRequestsListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminInviteRequestsListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsAdminsList({ token, teamId, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsAdminsListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsAdminsListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsCreate({ token, contentType, teamDomain, teamName });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsCreateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsCreateError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsOwnersList({ token, teamId, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsOwnersListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsOwnersListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsInfo({ teamId, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsSettingsInfoError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsSettingsInfoError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetDefaultChannels({
    contentType,
    token,
    teamId,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminTeamsSettingsSetDefaultChannelsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsSettingsSetDefaultChannelsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetDescription({
    token,
    contentType,
    teamId,
    description,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminTeamsSettingsSetDescriptionError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsSettingsSetDescriptionError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetDiscoverability({
    token,
    contentType,
    teamId,
    discoverability,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminTeamsSettingsSetDiscoverabilityError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsSettingsSetDiscoverabilityError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetIcon({ contentType, token, imageUrl, teamId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsSettingsSetIconError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsSettingsSetIconError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminTeamsSettingsSetName({ token, contentType, teamId, name });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminTeamsSettingsSetNameError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminTeamsSettingsSetNameError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsAddChannels({
    token,
    contentType,
    usergroupId,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsergroupsAddChannelsError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsergroupsAddChannelsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsAddTeams({ token, contentType, usergroupId, teamIds });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsergroupsAddTeamsError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsergroupsAddTeamsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsListChannels({ usergroupId, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsergroupsListChannelsError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsergroupsListChannelsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsergroupsRemoveChannels({
    token,
    contentType,
    usergroupId,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof Admin.AdminUsergroupsRemoveChannelsError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsergroupsRemoveChannelsError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersAssign({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersAssignError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersAssignError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersInvite({ token, contentType, teamId, email, channelIds });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersInviteError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersInviteError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersList({ teamId, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersListError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersRemove({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersRemoveError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSessionInvalidate({ token, contentType, teamId, sessionId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersSessionInvalidateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersSessionInvalidateError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSessionReset({ token, contentType, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersSessionResetError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersSessionResetError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetAdmin({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersSetAdminError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersSetAdminError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetExpiration({
    token,
    contentType,
    teamId,
    userId,
    expirationTs,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersSetExpirationError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersSetExpirationError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetOwner({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersSetOwnerError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersSetOwnerError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.admin.adminUsersSetRegular({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Admin.AdminUsersSetRegularError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Admin.AdminUsersSetRegularError](src/resources/admin.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAppsApproved.adminAppsApprovedList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminAppsApproved.AdminAppsApprovedListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminAppsApproved.AdminAppsApprovedListError](src/resources/admin-apps-approved.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAppsRequests.adminAppsRequestsList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminAppsRequests.AdminAppsRequestsListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminAppsRequests.AdminAppsRequestsListError](src/resources/admin-apps-requests.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminAppsRestricted.adminAppsRestrictedList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminAppsRestricted.AdminAppsRestrictedListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminAppsRestricted.AdminAppsRestrictedListError](src/resources/admin-apps-restricted.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsArchive({
    token,
    contentType,
    channelId,
  });
  // TODO: Handle 'response' of type AdminConversationsArchiveschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsArchiveError &&
      err.payload.kind === "adminConversationsArchiveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsArchiveerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsArchiveschema](src/models/admin-conversations-archiveschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsArchiveError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsConvertToPrivate({
    token,
    contentType,
    channelId,
  });
  // TODO: Handle 'response' of type AdminConversationsConvertToPrivateschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsConvertToPrivateError &&
      err.payload.kind === "adminConversationsConvertToPrivateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsConvertToPrivateerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsConvertToPrivateschema](src/models/admin-conversations-convert-to-privateschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsConvertToPrivateError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsCreate({
    token,
    contentType,
    name,
    isPrivate,
  });
  // TODO: Handle 'response' of type AdminConversationsCreateschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsCreateError &&
      err.payload.kind === "adminConversationsCreateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsCreateerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsCreateschema](src/models/admin-conversations-createschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsCreateError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsDelete({
    token,
    contentType,
    channelId,
  });
  // TODO: Handle 'response' of type AdminConversationsDeleteschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsDeleteError &&
      err.payload.kind === "adminConversationsDeleteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsDeleteerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsDeleteschema](src/models/admin-conversations-deleteschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsDeleteError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsDisconnectShared({
    token,
    contentType,
    channelId,
  });
  // TODO: Handle 'response' of type AdminConversationsRenameschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsDisconnectSharedError &&
      err.payload.kind === "adminConversationsDisconnectSharederrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsDisconnectSharederrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsRenameschema](src/models/admin-conversations-renameschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsDisconnectSharedError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsGetConversationPrefs({
    channelId,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type AdminConversationsGetConversationPrefsschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsGetConversationPrefsError &&
      err.payload.kind === "adminConversationsUnarchiveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsUnarchiveerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsGetConversationPrefsschema](src/models/admin-conversations-get-conversation-prefsschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsGetConversationPrefsError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsGetTeams({
    channelId,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type AdminConversationsGetTeamsschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsGetTeamsError &&
      err.payload.kind === "adminConversationsGetTeamserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsGetTeamserrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsGetTeamsschema](src/models/admin-conversations-get-teamsschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsGetTeamsError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsInvite({
    token,
    contentType,
    userIds,
    channelId,
  });
  // TODO: Handle 'response' of type AdminConversationsInviteschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsInviteError &&
      err.payload.kind === "adminConversationsInviteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsInviteerrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsInviteschema](src/models/admin-conversations-inviteschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsInviteError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsRename({
    token,
    contentType,
    channelId,
    name,
  });
  // TODO: Handle 'response' of type AdminConversationsRenameschema1
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsRenameError &&
      err.payload.kind === "adminConversationsUnarchiveerrorschema21"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsUnarchiveerrorschema21
  }
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

**OnSuccess**: <code>[AdminConversationsRenameschema1](src/models/admin-conversations-renameschema1.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsRenameError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsSearch({ token, contentType });
  // TODO: Handle 'response' of type AdminConversationsSearchschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsSearchError &&
      err.payload.kind === "adminConversationsSearcherrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsSearcherrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsSearchschema](src/models/admin-conversations-searchschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsSearchError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsSetConversationPrefs({
    token,
    contentType,
    channelId,
    prefs,
  });
  // TODO: Handle 'response' of type AdminConversationsSetConversationPrefsschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsSetConversationPrefsError &&
      err.payload.kind === "adminConversationsSetConversationPrefserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsSetConversationPrefserrorschema1
  }
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

**OnSuccess**: <code>[AdminConversationsSetConversationPrefsschema](src/models/admin-conversations-set-conversation-prefsschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsSetConversationPrefsError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsSetTeams({
    token,
    contentType,
    channelId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsSetTeamsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsSetTeamsError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversations.adminConversationsUnarchive({
    token,
    contentType,
    channelId,
  });
  // TODO: Handle 'response' of type AdminConversationsUnarchiveschema
} catch (err) {
  if (
    err instanceof AdminConversations.AdminConversationsUnarchiveError &&
      err.payload.kind === "adminConversationsUnarchiveerrorschema31"
  ) {
    // TODO: Handle 'err.payload.body' of type AdminConversationsUnarchiveerrorschema31
  }
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

**OnSuccess**: <code>[AdminConversationsUnarchiveschema](src/models/admin-conversations-unarchiveschema.ts)</code>

**OnError**: <code>[AdminConversations.AdminConversationsUnarchiveError](src/resources/admin-conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsEkm.adminConversationsEkmListOriginalConnectedChannelInfo({
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminConversationsEkm.AdminConversationsEkmListOriginalConnectedChannelInfoError](src/resources/admin-conversations-ekm.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessAddGroup({
    contentType,
    token,
    groupId,
    channelId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminConversationsRestrictAccess.AdminConversationsRestrictAccessAddGroupError](src/resources/admin-conversations-restrict-access.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessListGroups({
    token,
    channelId,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminConversationsRestrictAccess.AdminConversationsRestrictAccessListGroupsError](src/resources/admin-conversations-restrict-access.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminConversationsRestrictAccess.adminConversationsRestrictAccessRemoveGroup({
    contentType,
    token,
    teamId,
    groupId,
    channelId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminConversationsRestrictAccess.AdminConversationsRestrictAccessRemoveGroupError](src/resources/admin-conversations-restrict-access.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiAdd({ contentType, token, name, url });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminEmoji.AdminEmojiAddError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminEmoji.AdminEmojiAddError](src/resources/admin-emoji.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiAddAlias({ contentType, token, name, aliasFor });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminEmoji.AdminEmojiAddAliasError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminEmoji.AdminEmojiAddAliasError](src/resources/admin-emoji.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminEmoji.AdminEmojiListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminEmoji.AdminEmojiListError](src/resources/admin-emoji.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiRemove({ contentType, token, name });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminEmoji.AdminEmojiRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminEmoji.AdminEmojiRemoveError](src/resources/admin-emoji.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminEmoji.adminEmojiRename({ contentType, token, name, newName });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminEmoji.AdminEmojiRenameError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminEmoji.AdminEmojiRenameError](src/resources/admin-emoji.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequests.adminInviteRequestsApprove({
    token,
    contentType,
    inviteRequestId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminInviteRequests.AdminInviteRequestsApproveError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminInviteRequests.AdminInviteRequestsApproveError](src/resources/admin-invite-requests.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequests.adminInviteRequestsDeny({
    token,
    contentType,
    inviteRequestId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminInviteRequests.AdminInviteRequestsDenyError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminInviteRequests.AdminInviteRequestsDenyError](src/resources/admin-invite-requests.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequests.adminInviteRequestsList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminInviteRequests.AdminInviteRequestsListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminInviteRequests.AdminInviteRequestsListError](src/resources/admin-invite-requests.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequestsApproved.adminInviteRequestsApprovedList({
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminInviteRequestsApproved.AdminInviteRequestsApprovedListError](src/resources/admin-invite-requests-approved.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminInviteRequestsDenied.adminInviteRequestsDeniedList({
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminInviteRequestsDenied.AdminInviteRequestsDeniedListError](src/resources/admin-invite-requests-denied.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsAdmins.adminTeamsAdminsList({ token, teamId, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsAdmins.AdminTeamsAdminsListError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsAdmins.AdminTeamsAdminsListError](src/resources/admin-teams-admins.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeams.adminTeamsCreate({ token, contentType, teamDomain, teamName });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminTeams.AdminTeamsCreateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeams.AdminTeamsCreateError](src/resources/admin-teams.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeams.adminTeamsList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminTeams.AdminTeamsListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeams.AdminTeamsListError](src/resources/admin-teams.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsOwners.adminTeamsOwnersList({ token, teamId, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsOwners.AdminTeamsOwnersListError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsOwners.AdminTeamsOwnersListError](src/resources/admin-teams-owners.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsInfo({ teamId, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsSettings.AdminTeamsSettingsInfoError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsSettings.AdminTeamsSettingsInfoError](src/resources/admin-teams-settings.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetDefaultChannels({
    contentType,
    token,
    teamId,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsSettings.AdminTeamsSettingsSetDefaultChannelsError](src/resources/admin-teams-settings.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetDescription({
    token,
    contentType,
    teamId,
    description,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsSettings.AdminTeamsSettingsSetDescriptionError](src/resources/admin-teams-settings.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetDiscoverability({
    token,
    contentType,
    teamId,
    discoverability,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsSettings.AdminTeamsSettingsSetDiscoverabilityError](src/resources/admin-teams-settings.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetIcon({
    contentType,
    token,
    imageUrl,
    teamId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsSettings.AdminTeamsSettingsSetIconError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsSettings.AdminTeamsSettingsSetIconError](src/resources/admin-teams-settings.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminTeamsSettings.adminTeamsSettingsSetName({
    token,
    contentType,
    teamId,
    name,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminTeamsSettings.AdminTeamsSettingsSetNameError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminTeamsSettings.AdminTeamsSettingsSetNameError](src/resources/admin-teams-settings.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsAddChannels({
    token,
    contentType,
    usergroupId,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsergroups.AdminUsergroupsAddChannelsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsergroups.AdminUsergroupsAddChannelsError](src/resources/admin-usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsAddTeams({
    token,
    contentType,
    usergroupId,
    teamIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsergroups.AdminUsergroupsAddTeamsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsergroups.AdminUsergroupsAddTeamsError](src/resources/admin-usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsListChannels({
    usergroupId,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsergroups.AdminUsergroupsListChannelsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsergroups.AdminUsergroupsListChannelsError](src/resources/admin-usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsergroups.adminUsergroupsRemoveChannels({
    token,
    contentType,
    usergroupId,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsergroups.AdminUsergroupsRemoveChannelsError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsergroups.AdminUsergroupsRemoveChannelsError](src/resources/admin-usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersAssign({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersAssignError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersAssignError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersInvite({
    token,
    contentType,
    teamId,
    email,
    channelIds,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersInviteError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersInviteError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersList({ teamId, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersListError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersRemove({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersRemoveError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetAdmin({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersSetAdminError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersSetAdminError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetExpiration({
    token,
    contentType,
    teamId,
    userId,
    expirationTs,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsers.AdminUsersSetExpirationError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersSetExpirationError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetOwner({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersSetOwnerError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersSetOwnerError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsers.adminUsersSetRegular({ token, contentType, teamId, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof AdminUsers.AdminUsersSetRegularError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsers.AdminUsersSetRegularError](src/resources/admin-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsersSession.adminUsersSessionInvalidate({
    token,
    contentType,
    teamId,
    sessionId,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsersSession.AdminUsersSessionInvalidateError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsersSession.AdminUsersSessionInvalidateError](src/resources/admin-users-session.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.adminUsersSession.adminUsersSessionReset({ token, contentType, userId });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AdminUsersSession.AdminUsersSessionResetError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AdminUsersSession.AdminUsersSessionResetError](src/resources/admin-users-session.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.api.apiTest({ contentType });
  // TODO: Handle 'response' of type ApiTestsuccessschema
} catch (err) {
  if (err instanceof Api.ApiTestError && err.payload.kind === "apiTesterrorschema1") {
    // TODO: Handle 'err.payload.body' of type ApiTesterrorschema1
  }
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

**OnSuccess**: <code>[ApiTestsuccessschema](src/models/api-testsuccessschema.ts)</code>

**OnError**: <code>[Api.ApiTestError](src/resources/api.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsEventAuthorizations.appsEventAuthorizationsList({
    eventContext,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AppsEventAuthorizations.AppsEventAuthorizationsListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AppsEventAuthorizations.AppsEventAuthorizationsListError](src/resources/apps-event-authorizations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsEventAuthorizationsList({ eventContext, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Apps.AppsEventAuthorizationsListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Apps.AppsEventAuthorizationsListError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsInfo({ contentType });
  // TODO: Handle 'response' of type AppsPermissionsInfoschema
} catch (err) {
  if (
    err instanceof Apps.AppsPermissionsInfoError && err.payload.kind === "appsPermissionsInfoerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsInfoerrorschema1
  }
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

**OnSuccess**: <code>[AppsPermissionsInfoschema](src/models/apps-permissions-infoschema.ts)</code>

**OnError**: <code>[Apps.AppsPermissionsInfoError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsRequest({ token, scopes, triggerId, contentType });
  // TODO: Handle 'response' of type AppsPermissionsRequestschema
} catch (err) {
  if (
    err instanceof Apps.AppsPermissionsRequestError &&
      err.payload.kind === "appsPermissionsRequesterrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsRequesterrorschema1
  }
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

**OnSuccess**: <code>[AppsPermissionsRequestschema](src/models/apps-permissions-requestschema.ts)</code>

**OnError**: <code>[Apps.AppsPermissionsRequestError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsResourcesList({ token, contentType });
  // TODO: Handle 'response' of type AppsPermissionsResourcesListsuccessschema
} catch (err) {
  if (
    err instanceof Apps.AppsPermissionsResourcesListError &&
      err.payload.kind === "appsPermissionsResourcesListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsResourcesListerrorschema1
  }
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

**OnSuccess**: <code>[AppsPermissionsResourcesListsuccessschema](src/models/apps-permissions-resources-listsuccessschema.ts)</code>

**OnError**: <code>[Apps.AppsPermissionsResourcesListError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsScopesList({ token, contentType });
  // TODO: Handle 'response' of type ApiPermissionsScopesListsuccessschema
} catch (err) {
  if (
    err instanceof Apps.AppsPermissionsScopesListError &&
      err.payload.kind === "appsPermissionsScopesListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsScopesListerrorschema1
  }
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

**OnSuccess**: <code>[ApiPermissionsScopesListsuccessschema](src/models/api-permissions-scopes-listsuccessschema.ts)</code>

**OnError**: <code>[Apps.AppsPermissionsScopesListError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsUsersList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Apps.AppsPermissionsUsersListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Apps.AppsPermissionsUsersListError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsPermissionsUsersRequest({
    token,
    scopes,
    triggerId,
    user,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Apps.AppsPermissionsUsersRequestError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Apps.AppsPermissionsUsersRequestError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.apps.appsUninstall({ contentType });
  // TODO: Handle 'response' of type AppsUninstallschema
} catch (err) {
  if (err instanceof Apps.AppsUninstallError && err.payload.kind === "appsUninstallerrorschema1") {
    // TODO: Handle 'err.payload.body' of type AppsUninstallerrorschema1
  }
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

**OnSuccess**: <code>[AppsUninstallschema](src/models/apps-uninstallschema.ts)</code>

**OnError**: <code>[Apps.AppsUninstallError](src/resources/apps.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissions.appsPermissionsInfo({ contentType });
  // TODO: Handle 'response' of type AppsPermissionsInfoschema
} catch (err) {
  if (
    err instanceof AppsPermissions.AppsPermissionsInfoError &&
      err.payload.kind === "appsPermissionsInfoerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsInfoerrorschema1
  }
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

**OnSuccess**: <code>[AppsPermissionsInfoschema](src/models/apps-permissions-infoschema.ts)</code>

**OnError**: <code>[AppsPermissions.AppsPermissionsInfoError](src/resources/apps-permissions.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissions.appsPermissionsRequest({
    token,
    scopes,
    triggerId,
    contentType,
  });
  // TODO: Handle 'response' of type AppsPermissionsRequestschema
} catch (err) {
  if (
    err instanceof AppsPermissions.AppsPermissionsRequestError &&
      err.payload.kind === "appsPermissionsRequesterrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsRequesterrorschema1
  }
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

**OnSuccess**: <code>[AppsPermissionsRequestschema](src/models/apps-permissions-requestschema.ts)</code>

**OnError**: <code>[AppsPermissions.AppsPermissionsRequestError](src/resources/apps-permissions.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsResources.appsPermissionsResourcesList({ token, contentType });
  // TODO: Handle 'response' of type AppsPermissionsResourcesListsuccessschema
} catch (err) {
  if (
    err instanceof AppsPermissionsResources.AppsPermissionsResourcesListError &&
      err.payload.kind === "appsPermissionsResourcesListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsResourcesListerrorschema1
  }
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

**OnSuccess**: <code>[AppsPermissionsResourcesListsuccessschema](src/models/apps-permissions-resources-listsuccessschema.ts)</code>

**OnError**: <code>[AppsPermissionsResources.AppsPermissionsResourcesListError](src/resources/apps-permissions-resources.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsScopes.appsPermissionsScopesList({ token, contentType });
  // TODO: Handle 'response' of type ApiPermissionsScopesListsuccessschema
} catch (err) {
  if (
    err instanceof AppsPermissionsScopes.AppsPermissionsScopesListError &&
      err.payload.kind === "appsPermissionsScopesListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type AppsPermissionsScopesListerrorschema1
  }
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

**OnSuccess**: <code>[ApiPermissionsScopesListsuccessschema](src/models/api-permissions-scopes-listsuccessschema.ts)</code>

**OnError**: <code>[AppsPermissionsScopes.AppsPermissionsScopesListError](src/resources/apps-permissions-scopes.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsUsers.appsPermissionsUsersList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AppsPermissionsUsers.AppsPermissionsUsersListError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AppsPermissionsUsers.AppsPermissionsUsersListError](src/resources/apps-permissions-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.appsPermissionsUsers.appsPermissionsUsersRequest({
    token,
    scopes,
    triggerId,
    user,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof AppsPermissionsUsers.AppsPermissionsUsersRequestError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[AppsPermissionsUsers.AppsPermissionsUsersRequestError](src/resources/apps-permissions-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.authRevoke({ token, contentType });
  // TODO: Handle 'response' of type AuthRevokeschema
} catch (err) {
  if (err instanceof Auth.AuthRevokeError && err.payload.kind === "authRevokeerrorschema1") {
    // TODO: Handle 'err.payload.body' of type AuthRevokeerrorschema1
  }
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

**OnSuccess**: <code>[AuthRevokeschema](src/models/auth-revokeschema.ts)</code>

**OnError**: <code>[Auth.AuthRevokeError](src/resources/auth.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.auth2.authTest({ token, contentType });
  // TODO: Handle 'response' of type AuthTestsuccessschema
} catch (err) {
  if (err instanceof Auth.AuthTestError && err.payload.kind === "authTesterrorschema1") {
    // TODO: Handle 'err.payload.body' of type AuthTesterrorschema1
  }
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

**OnSuccess**: <code>[AuthTestsuccessschema](src/models/auth-testsuccessschema.ts)</code>

**OnError**: <code>[Auth.AuthTestError](src/resources/auth.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.bots.botsInfo({ token, contentType });
  // TODO: Handle 'response' of type BotsInfoschema
} catch (err) {
  if (err instanceof Bots.BotsInfoError && err.payload.kind === "botsInfoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type BotsInfoerrorschema1
  }
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

**OnSuccess**: <code>[BotsInfoschema](src/models/bots-infoschema.ts)</code>

**OnError**: <code>[Bots.BotsInfoError](src/resources/bots.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsAdd({ token, contentType, externalUniqueId, joinUrl });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Calls.CallsAddError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Calls.CallsAddError](src/resources/calls.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsEnd({ token, contentType, id });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Calls.CallsEndError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Calls.CallsEndError](src/resources/calls.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsInfo({ id, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Calls.CallsInfoError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Calls.CallsInfoError](src/resources/calls.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsParticipantsAdd({ token, contentType, id, users });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Calls.CallsParticipantsAddError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Calls.CallsParticipantsAddError](src/resources/calls.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsParticipantsRemove({ token, contentType, id, users });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Calls.CallsParticipantsRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Calls.CallsParticipantsRemoveError](src/resources/calls.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.calls.callsUpdate({ token, contentType, id });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Calls.CallsUpdateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Calls.CallsUpdateError](src/resources/calls.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.callsParticipants.callsParticipantsAdd({ token, contentType, id, users });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof CallsParticipants.CallsParticipantsAddError && err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[CallsParticipants.CallsParticipantsAddError](src/resources/calls-participants.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.callsParticipants.callsParticipantsRemove({ token, contentType, id, users });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (
    err instanceof CallsParticipants.CallsParticipantsRemoveError &&
      err.payload.kind === "defaulterrortemplate1"
  ) {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[CallsParticipants.CallsParticipantsRemoveError](src/resources/calls-participants.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatDelete({ contentType });
  // TODO: Handle 'response' of type ChatDeletesuccessschema
} catch (err) {
  if (err instanceof Chat.ChatDeleteError && err.payload.kind === "chatDeleteerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatDeleteerrorschema1
  }
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

**OnSuccess**: <code>[ChatDeletesuccessschema](src/models/chat-deletesuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatDeleteError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatDeleteScheduledMessage({
    token,
    contentType,
    channel,
    scheduledMessageId,
  });
  // TODO: Handle 'response' of type ChatDeleteScheduledMessageschema
} catch (err) {
  if (
    err instanceof Chat.ChatDeleteScheduledMessageError &&
      err.payload.kind === "chatDeleteScheduledMessageerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ChatDeleteScheduledMessageerrorschema1
  }
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

**OnSuccess**: <code>[ChatDeleteScheduledMessageschema](src/models/chat-delete-scheduled-messageschema.ts)</code>

**OnError**: <code>[Chat.ChatDeleteScheduledMessageError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatGetPermalink({ token, channel, messageTs, contentType });
  // TODO: Handle 'response' of type ChatGetPermalinksuccessschema
} catch (err) {
  if (err instanceof Chat.ChatGetPermalinkError && err.payload.kind === "chatGetPermalinkerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatGetPermalinkerrorschema1
  }
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

**OnSuccess**: <code>[ChatGetPermalinksuccessschema](src/models/chat-get-permalinksuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatGetPermalinkError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatMeMessage({ contentType });
  // TODO: Handle 'response' of type ChatMeMessageschema
} catch (err) {
  if (err instanceof Chat.ChatMeMessageError && err.payload.kind === "chatMeMessageerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatMeMessageerrorschema1
  }
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

**OnSuccess**: <code>[ChatMeMessageschema](src/models/chat-me-messageschema.ts)</code>

**OnError**: <code>[Chat.ChatMeMessageError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatPostEphemeral({ token, contentType, channel, user });
  // TODO: Handle 'response' of type ChatPostEphemeralsuccessschema
} catch (err) {
  if (err instanceof Chat.ChatPostEphemeralError && err.payload.kind === "chatPostEphemeralerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatPostEphemeralerrorschema1
  }
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

**OnSuccess**: <code>[ChatPostEphemeralsuccessschema](src/models/chat-post-ephemeralsuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatPostEphemeralError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatPostMessage({ token, contentType, channel });
  // TODO: Handle 'response' of type ChatPostMessagesuccessschema
} catch (err) {
  if (err instanceof Chat.ChatPostMessageError && err.payload.kind === "chatPostMessageerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatPostMessageerrorschema1
  }
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

**OnSuccess**: <code>[ChatPostMessagesuccessschema](src/models/chat-post-messagesuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatPostMessageError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatScheduleMessage({ contentType });
  // TODO: Handle 'response' of type ChatScheduleMessagesuccessschema
} catch (err) {
  if (
    err instanceof Chat.ChatScheduleMessageError && err.payload.kind === "chatScheduleMessageerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ChatScheduleMessageerrorschema1
  }
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

**OnSuccess**: <code>[ChatScheduleMessagesuccessschema](src/models/chat-schedule-messagesuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatScheduleMessageError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatScheduledMessagesList({ contentType });
  // TODO: Handle 'response' of type ChatScheduledMessagesListschema
} catch (err) {
  if (
    err instanceof Chat.ChatScheduledMessagesListError &&
      err.payload.kind === "chatScheduledMessagesListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ChatScheduledMessagesListerrorschema1
  }
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

**OnSuccess**: <code>[ChatScheduledMessagesListschema](src/models/chat-scheduled-messages-listschema.ts)</code>

**OnError**: <code>[Chat.ChatScheduledMessagesListError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatUnfurl({ token, contentType, channel, ts });
  // TODO: Handle 'response' of type ChatUnfurlsuccessschema
} catch (err) {
  if (err instanceof Chat.ChatUnfurlError && err.payload.kind === "chatUnfurlerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatUnfurlerrorschema1
  }
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

**OnSuccess**: <code>[ChatUnfurlsuccessschema](src/models/chat-unfurlsuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatUnfurlError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chat.chatUpdate({ token, contentType, channel, ts });
  // TODO: Handle 'response' of type ChatUpdatesuccessschema
} catch (err) {
  if (err instanceof Chat.ChatUpdateError && err.payload.kind === "chatUpdateerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ChatUpdateerrorschema1
  }
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

**OnSuccess**: <code>[ChatUpdatesuccessschema](src/models/chat-updatesuccessschema.ts)</code>

**OnError**: <code>[Chat.ChatUpdateError](src/resources/chat.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.chatScheduledMessages.chatScheduledMessagesList({ contentType });
  // TODO: Handle 'response' of type ChatScheduledMessagesListschema
} catch (err) {
  if (
    err instanceof ChatScheduledMessages.ChatScheduledMessagesListError &&
      err.payload.kind === "chatScheduledMessagesListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ChatScheduledMessagesListerrorschema1
  }
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

**OnSuccess**: <code>[ChatScheduledMessagesListschema](src/models/chat-scheduled-messages-listschema.ts)</code>

**OnError**: <code>[ChatScheduledMessages.ChatScheduledMessagesListError](src/resources/chat-scheduled-messages.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsArchive({ contentType });
  // TODO: Handle 'response' of type ConversationsArchivesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsArchiveError &&
      err.payload.kind === "conversationsArchiveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsArchiveerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsArchivesuccessschema](src/models/conversations-archivesuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsArchiveError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsClose({ contentType });
  // TODO: Handle 'response' of type ConversationsClosesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsCloseError &&
      err.payload.kind === "conversationsCloseerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsCloseerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsClosesuccessschema](src/models/conversations-closesuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsCloseError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsCreate({ contentType });
  // TODO: Handle 'response' of type ConversationsCreatesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsCreateError &&
      err.payload.kind === "conversationsCreateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsCreateerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsCreatesuccessschema](src/models/conversations-createsuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsCreateError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsHistory({ contentType });
  // TODO: Handle 'response' of type ConversationsHistorysuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsHistoryError &&
      err.payload.kind === "conversationsHistoryerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsHistoryerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsHistorysuccessschema](src/models/conversations-historysuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsHistoryError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsInfo({ contentType });
  // TODO: Handle 'response' of type ConversationsInfosuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsInfoError &&
      err.payload.kind === "conversationsInfoerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsInfoerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsInfosuccessschema](src/models/conversations-infosuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsInfoError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsInvite({ contentType });
  // TODO: Handle 'response' of type ConversationsInviteerrorschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsInviteError &&
      err.payload.kind === "conversationsInviteerrorschema11"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsInviteerrorschema11
  }
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

**OnSuccess**: <code>[ConversationsInviteerrorschema](src/models/conversations-inviteerrorschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsInviteError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsJoin({ contentType });
  // TODO: Handle 'response' of type ConversationsJoinsuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsJoinError &&
      err.payload.kind === "conversationsJoinerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsJoinerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsJoinsuccessschema](src/models/conversations-joinsuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsJoinError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsKick({ contentType });
  // TODO: Handle 'response' of type ConversationsKicksuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsKickError &&
      err.payload.kind === "conversationsKickerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsKickerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsKicksuccessschema](src/models/conversations-kicksuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsKickError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsLeave({ contentType });
  // TODO: Handle 'response' of type ConversationsLeavesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsLeaveError &&
      err.payload.kind === "conversationsLeaveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsLeaveerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsLeavesuccessschema](src/models/conversations-leavesuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsLeaveError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsList({ contentType });
  // TODO: Handle 'response' of type ConversationsListsuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsListError &&
      err.payload.kind === "conversationsListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsListerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsListsuccessschema](src/models/conversations-listsuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsListError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsMark({ contentType });
  // TODO: Handle 'response' of type ConversationsMarksuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsMarkError &&
      err.payload.kind === "conversationsMarkerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsMarkerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsMarksuccessschema](src/models/conversations-marksuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsMarkError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsMembers({ contentType });
  // TODO: Handle 'response' of type ConversationsMemberssuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsMembersError &&
      err.payload.kind === "conversationsMemberserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsMemberserrorschema1
  }
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

**OnSuccess**: <code>[ConversationsMemberssuccessschema](src/models/conversations-memberssuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsMembersError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsOpen({ contentType });
  // TODO: Handle 'response' of type ConversationsOpensuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsOpenError &&
      err.payload.kind === "conversationsOpenerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsOpenerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsOpensuccessschema](src/models/conversations-opensuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsOpenError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsRename({ contentType });
  // TODO: Handle 'response' of type ConversationsRenamesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsRenameError &&
      err.payload.kind === "conversationsRenameerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsRenameerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsRenamesuccessschema](src/models/conversations-renamesuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsRenameError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsReplies({ contentType });
  // TODO: Handle 'response' of type ConversationsRepliessuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsRepliesError &&
      err.payload.kind === "conversationsReplieserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsReplieserrorschema1
  }
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

**OnSuccess**: <code>[ConversationsRepliessuccessschema](src/models/conversations-repliessuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsRepliesError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsSetPurpose({ contentType });
  // TODO: Handle 'response' of type ConversationsSetPurposesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsSetPurposeError &&
      err.payload.kind === "conversationsSetPurposeerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsSetPurposeerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsSetPurposesuccessschema](src/models/conversations-set-purposesuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsSetPurposeError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsSetTopic({ contentType });
  // TODO: Handle 'response' of type ConversationsSetTopicsuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsSetTopicError &&
      err.payload.kind === "conversationsSetTopicerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsSetTopicerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsSetTopicsuccessschema](src/models/conversations-set-topicsuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsSetTopicError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.conversations.conversationsUnarchive({ contentType });
  // TODO: Handle 'response' of type ConversationsUnarchivesuccessschema
} catch (err) {
  if (
    err instanceof Conversations.ConversationsUnarchiveError &&
      err.payload.kind === "conversationsUnarchiveerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type ConversationsUnarchiveerrorschema1
  }
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

**OnSuccess**: <code>[ConversationsUnarchivesuccessschema](src/models/conversations-unarchivesuccessschema.ts)</code>

**OnError**: <code>[Conversations.ConversationsUnarchiveError](src/resources/conversations.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dialog.dialogOpen({ dialog, triggerId, token, contentType });
  // TODO: Handle 'response' of type DialogOpenschema
} catch (err) {
  if (err instanceof Dialog.DialogOpenError && err.payload.kind === "dialogOpenerrorschema1") {
    // TODO: Handle 'err.payload.body' of type DialogOpenerrorschema1
  }
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

**OnSuccess**: <code>[DialogOpenschema](src/models/dialog-openschema.ts)</code>

**OnError**: <code>[Dialog.DialogOpenError](src/resources/dialog.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndEndDnd({ token, contentType });
  // TODO: Handle 'response' of type DndEndDndschema
} catch (err) {
  if (err instanceof Dnd.DndEndDndError && err.payload.kind === "dndEndDnderrorschema1") {
    // TODO: Handle 'err.payload.body' of type DndEndDnderrorschema1
  }
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

**OnSuccess**: <code>[DndEndDndschema](src/models/dnd-end-dndschema.ts)</code>

**OnError**: <code>[Dnd.DndEndDndError](src/resources/dnd.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndEndSnooze({ token, contentType });
  // TODO: Handle 'response' of type DndEndSnoozeschema
} catch (err) {
  if (err instanceof Dnd.DndEndSnoozeError && err.payload.kind === "dndEndSnoozeerrorschema1") {
    // TODO: Handle 'err.payload.body' of type DndEndSnoozeerrorschema1
  }
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

**OnSuccess**: <code>[DndEndSnoozeschema](src/models/dnd-end-snoozeschema.ts)</code>

**OnError**: <code>[Dnd.DndEndSnoozeError](src/resources/dnd.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndInfo({ contentType });
  // TODO: Handle 'response' of type DndInfoschema
} catch (err) {
  if (err instanceof Dnd.DndInfoError && err.payload.kind === "dndInfoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type DndInfoerrorschema1
  }
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

**OnSuccess**: <code>[DndInfoschema](src/models/dnd-infoschema.ts)</code>

**OnError**: <code>[Dnd.DndInfoError](src/resources/dnd.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndSetSnooze({ contentType, token, numMinutes });
  // TODO: Handle 'response' of type DndSetSnoozeschema
} catch (err) {
  if (err instanceof Dnd.DndSetSnoozeError && err.payload.kind === "dndSetSnoozeerrorschema1") {
    // TODO: Handle 'err.payload.body' of type DndSetSnoozeerrorschema1
  }
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

**OnSuccess**: <code>[DndSetSnoozeschema](src/models/dnd-set-snoozeschema.ts)</code>

**OnError**: <code>[Dnd.DndSetSnoozeError](src/resources/dnd.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.dnd.dndTeamInfo({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Dnd.DndTeamInfoError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Dnd.DndTeamInfoError](src/resources/dnd.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.emoji.emojiList({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Emoji.EmojiListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Emoji.EmojiListError](src/resources/emoji.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesComments.filesCommentsDelete({ contentType });
  // TODO: Handle 'response' of type FilesCommentsDeleteschema
} catch (err) {
  if (
    err instanceof FilesComments.FilesCommentsDeleteError &&
      err.payload.kind === "filesCommentsDeleteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type FilesCommentsDeleteerrorschema1
  }
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

**OnSuccess**: <code>[FilesCommentsDeleteschema](src/models/files-comments-deleteschema.ts)</code>

**OnError**: <code>[FilesComments.FilesCommentsDeleteError](src/resources/files-comments.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesCommentsDelete({ contentType });
  // TODO: Handle 'response' of type FilesCommentsDeleteschema
} catch (err) {
  if (
    err instanceof Files.FilesCommentsDeleteError && err.payload.kind === "filesCommentsDeleteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type FilesCommentsDeleteerrorschema1
  }
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

**OnSuccess**: <code>[FilesCommentsDeleteschema](src/models/files-comments-deleteschema.ts)</code>

**OnError**: <code>[Files.FilesCommentsDeleteError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesDelete({ contentType });
  // TODO: Handle 'response' of type FilesDeleteschema
} catch (err) {
  if (err instanceof Files.FilesDeleteError && err.payload.kind === "filesDeleteerrorschema1") {
    // TODO: Handle 'err.payload.body' of type FilesDeleteerrorschema1
  }
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

**OnSuccess**: <code>[FilesDeleteschema](src/models/files-deleteschema.ts)</code>

**OnError**: <code>[Files.FilesDeleteError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesInfo({ contentType });
  // TODO: Handle 'response' of type FilesInfoschema
} catch (err) {
  if (err instanceof Files.FilesInfoError && err.payload.kind === "filesInfoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type FilesInfoerrorschema1
  }
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

**OnSuccess**: <code>[FilesInfoschema](src/models/files-infoschema.ts)</code>

**OnError**: <code>[Files.FilesInfoError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesList({ contentType });
  // TODO: Handle 'response' of type FilesListschema
} catch (err) {
  if (err instanceof Files.FilesListError && err.payload.kind === "filesListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type FilesListerrorschema1
  }
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

**OnSuccess**: <code>[FilesListschema](src/models/files-listschema.ts)</code>

**OnError**: <code>[Files.FilesListError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteAdd({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Files.FilesRemoteAddError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Files.FilesRemoteAddError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteInfo({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Files.FilesRemoteInfoError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Files.FilesRemoteInfoError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteList({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Files.FilesRemoteListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Files.FilesRemoteListError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteRemove({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Files.FilesRemoteRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Files.FilesRemoteRemoveError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteShare({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Files.FilesRemoteShareError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Files.FilesRemoteShareError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRemoteUpdate({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Files.FilesRemoteUpdateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Files.FilesRemoteUpdateError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesRevokePublicUrl({ contentType });
  // TODO: Handle 'response' of type FilesRevokePublicUrLschema
} catch (err) {
  if (
    err instanceof Files.FilesRevokePublicUrlError && err.payload.kind === "filesRevokePublicUrLerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type FilesRevokePublicUrLerrorschema1
  }
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

**OnSuccess**: <code>[FilesRevokePublicUrLschema](src/models/files-revoke-public-ur-lschema.ts)</code>

**OnError**: <code>[Files.FilesRevokePublicUrlError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesSharedPublicUrl({ contentType });
  // TODO: Handle 'response' of type FilesSharedPublicUrLschema
} catch (err) {
  if (
    err instanceof Files.FilesSharedPublicUrlError && err.payload.kind === "filesSharedPublicUrLerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type FilesSharedPublicUrLerrorschema1
  }
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

**OnSuccess**: <code>[FilesSharedPublicUrLschema](src/models/files-shared-public-ur-lschema.ts)</code>

**OnError**: <code>[Files.FilesSharedPublicUrlError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.files.filesUpload({ contentType });
  // TODO: Handle 'response' of type FilesUploadschema
} catch (err) {
  if (err instanceof Files.FilesUploadError && err.payload.kind === "filesUploaderrorschema1") {
    // TODO: Handle 'err.payload.body' of type FilesUploaderrorschema1
  }
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

**OnSuccess**: <code>[FilesUploadschema](src/models/files-uploadschema.ts)</code>

**OnError**: <code>[Files.FilesUploadError](src/resources/files.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteAdd({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof FilesRemote.FilesRemoteAddError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[FilesRemote.FilesRemoteAddError](src/resources/files-remote.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteInfo({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof FilesRemote.FilesRemoteInfoError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[FilesRemote.FilesRemoteInfoError](src/resources/files-remote.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteList({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof FilesRemote.FilesRemoteListError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[FilesRemote.FilesRemoteListError](src/resources/files-remote.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteRemove({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof FilesRemote.FilesRemoteRemoveError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[FilesRemote.FilesRemoteRemoveError](src/resources/files-remote.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteShare({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof FilesRemote.FilesRemoteShareError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[FilesRemote.FilesRemoteShareError](src/resources/files-remote.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.filesRemote.filesRemoteUpdate({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof FilesRemote.FilesRemoteUpdateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[FilesRemote.FilesRemoteUpdateError](src/resources/files-remote.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.migration.migrationExchange({ token, users, contentType });
  // TODO: Handle 'response' of type MigrationExchangesuccessschema
} catch (err) {
  if (
    err instanceof Migration.MigrationExchangeError && err.payload.kind === "migrationExchangeerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type MigrationExchangeerrorschema1
  }
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

**OnSuccess**: <code>[MigrationExchangesuccessschema](src/models/migration-exchangesuccessschema.ts)</code>

**OnError**: <code>[Migration.MigrationExchangeError](src/resources/migration.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauth.oauthAccess({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Oauth.OauthAccessError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Oauth.OauthAccessError](src/resources/oauth.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauth.oauthToken({ contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Oauth.OauthTokenError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Oauth.OauthTokenError](src/resources/oauth.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauth.oauthV2Access({ code, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Oauth.OauthV2AccessError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Oauth.OauthV2AccessError](src/resources/oauth.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.oauthV2.oauthV2Access({ code, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof OauthV2.OauthV2AccessError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[OauthV2.OauthV2AccessError](src/resources/oauth-v2.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pinsAdd({ token, contentType, channel });
  // TODO: Handle 'response' of type PinsAddschema
} catch (err) {
  if (err instanceof Pins.PinsAddError && err.payload.kind === "pinsAdderrorschema1") {
    // TODO: Handle 'err.payload.body' of type PinsAdderrorschema1
  }
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

**OnSuccess**: <code>[PinsAddschema](src/models/pins-addschema.ts)</code>

**OnError**: <code>[Pins.PinsAddError](src/resources/pins.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pinsList({ token, channel, contentType });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Pins.PinsListError && err.payload.kind === "pinsListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type PinsListerrorschema1
  }
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

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Pins.PinsListError](src/resources/pins.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.pins.pinsRemove({ token, contentType, channel });
  // TODO: Handle 'response' of type PinsRemoveschema
} catch (err) {
  if (err instanceof Pins.PinsRemoveError && err.payload.kind === "pinsRemoveerrorschema1") {
    // TODO: Handle 'err.payload.body' of type PinsRemoveerrorschema1
  }
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

**OnSuccess**: <code>[PinsRemoveschema](src/models/pins-removeschema.ts)</code>

**OnError**: <code>[Pins.PinsRemoveError](src/resources/pins.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsAdd({ token, contentType, channel, name, timestamp });
  // TODO: Handle 'response' of type ReactionsAddschema
} catch (err) {
  if (err instanceof Reactions.ReactionsAddError && err.payload.kind === "reactionsAdderrorschema1") {
    // TODO: Handle 'err.payload.body' of type ReactionsAdderrorschema1
  }
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

**OnSuccess**: <code>[ReactionsAddschema](src/models/reactions-addschema.ts)</code>

**OnError**: <code>[Reactions.ReactionsAddError](src/resources/reactions.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsGet({ token, contentType });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Reactions.ReactionsGetError && err.payload.kind === "reactionsGeterrorschema1") {
    // TODO: Handle 'err.payload.body' of type ReactionsGeterrorschema1
  }
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

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Reactions.ReactionsGetError](src/resources/reactions.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsList({ token, contentType });
  // TODO: Handle 'response' of type ReactionsListschema
} catch (err) {
  if (err instanceof Reactions.ReactionsListError && err.payload.kind === "reactionsListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ReactionsListerrorschema1
  }
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

**OnSuccess**: <code>[ReactionsListschema](src/models/reactions-listschema.ts)</code>

**OnError**: <code>[Reactions.ReactionsListError](src/resources/reactions.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reactions.reactionsRemove({ token, contentType, name });
  // TODO: Handle 'response' of type ReactionsRemoveschema
} catch (err) {
  if (err instanceof Reactions.ReactionsRemoveError && err.payload.kind === "reactionsRemoveerrorschema1") {
    // TODO: Handle 'err.payload.body' of type ReactionsRemoveerrorschema1
  }
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

**OnSuccess**: <code>[ReactionsRemoveschema](src/models/reactions-removeschema.ts)</code>

**OnError**: <code>[Reactions.ReactionsRemoveError](src/resources/reactions.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersAdd({ token, contentType, text, time });
  // TODO: Handle 'response' of type RemindersAddschema
} catch (err) {
  if (err instanceof Reminders.RemindersAddError && err.payload.kind === "remindersAdderrorschema1") {
    // TODO: Handle 'err.payload.body' of type RemindersAdderrorschema1
  }
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

**OnSuccess**: <code>[RemindersAddschema](src/models/reminders-addschema.ts)</code>

**OnError**: <code>[Reminders.RemindersAddError](src/resources/reminders.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersComplete({ contentType });
  // TODO: Handle 'response' of type RemindersCompleteschema
} catch (err) {
  if (
    err instanceof Reminders.RemindersCompleteError && err.payload.kind === "remindersCompleteerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type RemindersCompleteerrorschema1
  }
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

**OnSuccess**: <code>[RemindersCompleteschema](src/models/reminders-completeschema.ts)</code>

**OnError**: <code>[Reminders.RemindersCompleteError](src/resources/reminders.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersDelete({ contentType });
  // TODO: Handle 'response' of type RemindersDeleteschema
} catch (err) {
  if (err instanceof Reminders.RemindersDeleteError && err.payload.kind === "remindersDeleteerrorschema1") {
    // TODO: Handle 'err.payload.body' of type RemindersDeleteerrorschema1
  }
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

**OnSuccess**: <code>[RemindersDeleteschema](src/models/reminders-deleteschema.ts)</code>

**OnError**: <code>[Reminders.RemindersDeleteError](src/resources/reminders.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersInfo({ contentType });
  // TODO: Handle 'response' of type RemindersInfoschema
} catch (err) {
  if (err instanceof Reminders.RemindersInfoError && err.payload.kind === "remindersInfoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type RemindersInfoerrorschema1
  }
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

**OnSuccess**: <code>[RemindersInfoschema](src/models/reminders-infoschema.ts)</code>

**OnError**: <code>[Reminders.RemindersInfoError](src/resources/reminders.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.reminders.remindersList({ contentType });
  // TODO: Handle 'response' of type RemindersListschema
} catch (err) {
  if (err instanceof Reminders.RemindersListError && err.payload.kind === "remindersListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type RemindersListerrorschema1
  }
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

**OnSuccess**: <code>[RemindersListschema](src/models/reminders-listschema.ts)</code>

**OnError**: <code>[Reminders.RemindersListError](src/resources/reminders.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.rtm.rtmConnect({ token, contentType });
  // TODO: Handle 'response' of type RtmConnectschema
} catch (err) {
  if (err instanceof Rtm.RtmConnectError && err.payload.kind === "rtmConnecterrorschema1") {
    // TODO: Handle 'err.payload.body' of type RtmConnecterrorschema1
  }
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

**OnSuccess**: <code>[RtmConnectschema](src/models/rtm-connectschema.ts)</code>

**OnError**: <code>[Rtm.RtmConnectError](src/resources/rtm.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchMessages({ token, query, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Search.SearchMessagesError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Search.SearchMessagesError](src/resources/search.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.stars.starsAdd({ token, contentType });
  // TODO: Handle 'response' of type StarsAddschema
} catch (err) {
  if (err instanceof Stars.StarsAddError && err.payload.kind === "starsAdderrorschema1") {
    // TODO: Handle 'err.payload.body' of type StarsAdderrorschema1
  }
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

**OnSuccess**: <code>[StarsAddschema](src/models/stars-addschema.ts)</code>

**OnError**: <code>[Stars.StarsAddError](src/resources/stars.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.stars.starsList({ contentType });
  // TODO: Handle 'response' of type StarsListschema
} catch (err) {
  if (err instanceof Stars.StarsListError && err.payload.kind === "starsListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type StarsListerrorschema1
  }
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

**OnSuccess**: <code>[StarsListschema](src/models/stars-listschema.ts)</code>

**OnError**: <code>[Stars.StarsListError](src/resources/stars.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.stars.starsRemove({ token, contentType });
  // TODO: Handle 'response' of type StarsRemoveschema
} catch (err) {
  if (err instanceof Stars.StarsRemoveError && err.payload.kind === "starsRemoveerrorschema1") {
    // TODO: Handle 'err.payload.body' of type StarsRemoveerrorschema1
  }
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

**OnSuccess**: <code>[StarsRemoveschema](src/models/stars-removeschema.ts)</code>

**OnError**: <code>[Stars.StarsRemoveError](src/resources/stars.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamAccessLogs({ token, contentType });
  // TODO: Handle 'response' of type TeamAccessLogsschema
} catch (err) {
  if (err instanceof TeamApi.TeamAccessLogsError && err.payload.kind === "teamAccessLogserrorschema1") {
    // TODO: Handle 'err.payload.body' of type TeamAccessLogserrorschema1
  }
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

**OnSuccess**: <code>[TeamAccessLogsschema](src/models/team-access-logsschema.ts)</code>

**OnError**: <code>[TeamApi.TeamAccessLogsError](src/resources/team-api.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamBillableInfo({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof TeamApi.TeamBillableInfoError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[TeamApi.TeamBillableInfoError](src/resources/team-api.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamInfo({ token, contentType });
  // TODO: Handle 'response' of type TeamInfoschema
} catch (err) {
  if (err instanceof TeamApi.TeamInfoError && err.payload.kind === "teamInfoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type TeamInfoerrorschema1
  }
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

**OnSuccess**: <code>[TeamInfoschema](src/models/team-infoschema.ts)</code>

**OnError**: <code>[TeamApi.TeamInfoError](src/resources/team-api.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamIntegrationLogs({ token, contentType });
  // TODO: Handle 'response' of type TeamIntegrationLogsschema
} catch (err) {
  if (
    err instanceof TeamApi.TeamIntegrationLogsError && err.payload.kind === "teamIntegrationLogserrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type TeamIntegrationLogserrorschema1
  }
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

**OnSuccess**: <code>[TeamIntegrationLogsschema](src/models/team-integration-logsschema.ts)</code>

**OnError**: <code>[TeamApi.TeamIntegrationLogsError](src/resources/team-api.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamApi.teamProfileGet({ token, contentType });
  // TODO: Handle 'response' of type TeamProfileGetsuccessschema
} catch (err) {
  if (err instanceof TeamApi.TeamProfileGetError && err.payload.kind === "teamProfileGeterrorschema1") {
    // TODO: Handle 'err.payload.body' of type TeamProfileGeterrorschema1
  }
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

**OnSuccess**: <code>[TeamProfileGetsuccessschema](src/models/team-profile-getsuccessschema.ts)</code>

**OnError**: <code>[TeamApi.TeamProfileGetError](src/resources/team-api.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.teamProfile.teamProfileGet({ token, contentType });
  // TODO: Handle 'response' of type TeamProfileGetsuccessschema
} catch (err) {
  if (err instanceof TeamProfile.TeamProfileGetError && err.payload.kind === "teamProfileGeterrorschema1") {
    // TODO: Handle 'err.payload.body' of type TeamProfileGeterrorschema1
  }
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

**OnSuccess**: <code>[TeamProfileGetsuccessschema](src/models/team-profile-getsuccessschema.ts)</code>

**OnError**: <code>[TeamProfile.TeamProfileGetError](src/resources/team-profile.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsCreate({ token, contentType, name });
  // TODO: Handle 'response' of type UsergroupsCreateschema
} catch (err) {
  if (
    err instanceof Usergroups.UsergroupsCreateError && err.payload.kind === "usergroupsCreateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsCreateerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsCreateschema](src/models/usergroups-createschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsCreateError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsDisable({ token, contentType, usergroup });
  // TODO: Handle 'response' of type UsergroupsDisableschema
} catch (err) {
  if (
    err instanceof Usergroups.UsergroupsDisableError && err.payload.kind === "usergroupsDisableerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsDisableerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsDisableschema](src/models/usergroups-disableschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsDisableError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsEnable({ token, contentType, usergroup });
  // TODO: Handle 'response' of type UsergroupsEnableschema
} catch (err) {
  if (
    err instanceof Usergroups.UsergroupsEnableError && err.payload.kind === "usergroupsEnableerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsEnableerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsEnableschema](src/models/usergroups-enableschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsEnableError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsList({ token, contentType });
  // TODO: Handle 'response' of type UsergroupsListschema
} catch (err) {
  if (err instanceof Usergroups.UsergroupsListError && err.payload.kind === "usergroupsListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsergroupsListerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsListschema](src/models/usergroups-listschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsListError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsUpdate({ token, contentType, usergroup });
  // TODO: Handle 'response' of type UsergroupsUpdateschema
} catch (err) {
  if (
    err instanceof Usergroups.UsergroupsUpdateError && err.payload.kind === "usergroupsUpdateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsUpdateerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsUpdateschema](src/models/usergroups-updateschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsUpdateError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsUsersList({ token, usergroup, contentType });
  // TODO: Handle 'response' of type UsergroupsUsersListschema
} catch (err) {
  if (
    err instanceof Usergroups.UsergroupsUsersListError &&
      err.payload.kind === "usergroupsUsersListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsUsersListerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsUsersListschema](src/models/usergroups-users-listschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsUsersListError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroups.usergroupsUsersUpdate({ token, contentType, usergroup, users });
  // TODO: Handle 'response' of type UsergroupsUsersUpdateschema
} catch (err) {
  if (
    err instanceof Usergroups.UsergroupsUsersUpdateError &&
      err.payload.kind === "usergroupsUsersUpdateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsUsersUpdateerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsUsersUpdateschema](src/models/usergroups-users-updateschema.ts)</code>

**OnError**: <code>[Usergroups.UsergroupsUsersUpdateError](src/resources/usergroups.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroupsUsers.usergroupsUsersList({ token, usergroup, contentType });
  // TODO: Handle 'response' of type UsergroupsUsersListschema
} catch (err) {
  if (
    err instanceof UsergroupsUsers.UsergroupsUsersListError &&
      err.payload.kind === "usergroupsUsersListerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsUsersListerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsUsersListschema](src/models/usergroups-users-listschema.ts)</code>

**OnError**: <code>[UsergroupsUsers.UsergroupsUsersListError](src/resources/usergroups-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usergroupsUsers.usergroupsUsersUpdate({
    token,
    contentType,
    usergroup,
    users,
  });
  // TODO: Handle 'response' of type UsergroupsUsersUpdateschema
} catch (err) {
  if (
    err instanceof UsergroupsUsers.UsergroupsUsersUpdateError &&
      err.payload.kind === "usergroupsUsersUpdateerrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsergroupsUsersUpdateerrorschema1
  }
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

**OnSuccess**: <code>[UsergroupsUsersUpdateschema](src/models/usergroups-users-updateschema.ts)</code>

**OnError**: <code>[UsergroupsUsers.UsergroupsUsersUpdateError](src/resources/usergroups-users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersConversations({ contentType });
  // TODO: Handle 'response' of type UsersConversationssuccessschema
} catch (err) {
  if (err instanceof Users.UsersConversationsError && err.payload.kind === "usersConversationserrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersConversationserrorschema1
  }
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

**OnSuccess**: <code>[UsersConversationssuccessschema](src/models/users-conversationssuccessschema.ts)</code>

**OnError**: <code>[Users.UsersConversationsError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersDeletePhoto({ contentType, token });
  // TODO: Handle 'response' of type UsersDeletePhotoschema
} catch (err) {
  if (err instanceof Users.UsersDeletePhotoError && err.payload.kind === "usersDeletePhotoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersDeletePhotoerrorschema1
  }
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

**OnSuccess**: <code>[UsersDeletePhotoschema](src/models/users-delete-photoschema.ts)</code>

**OnError**: <code>[Users.UsersDeletePhotoError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersGetPresence({ token, contentType });
  // TODO: Handle 'response' of type ApImethodusersGetPresence
} catch (err) {
  if (err instanceof Users.UsersGetPresenceError && err.payload.kind === "usersCountserrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersCountserrorschema1
  }
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

**OnSuccess**: <code>[ApImethodusersGetPresence](src/models/ap-imethodusers-get-presence.ts)</code>

**OnError**: <code>[Users.UsersGetPresenceError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersIdentity({ contentType });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  if (err instanceof Users.UsersIdentityError && err.payload.kind === "usersIdentityerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersIdentityerrorschema1
  }
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

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[Users.UsersIdentityError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersInfo({ token, contentType });
  // TODO: Handle 'response' of type UsersInfosuccessschema
} catch (err) {
  if (err instanceof Users.UsersInfoError && err.payload.kind === "usersInfoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersInfoerrorschema1
  }
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

**OnSuccess**: <code>[UsersInfosuccessschema](src/models/users-infosuccessschema.ts)</code>

**OnError**: <code>[Users.UsersInfoError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersList({ contentType });
  // TODO: Handle 'response' of type UsersListschema
} catch (err) {
  if (err instanceof Users.UsersListError && err.payload.kind === "usersListerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersListerrorschema1
  }
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

**OnSuccess**: <code>[UsersListschema](src/models/users-listschema.ts)</code>

**OnError**: <code>[Users.UsersListError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersLookupByEmail({ token, email, contentType });
  // TODO: Handle 'response' of type UsersLookupByEmailsuccessschema
} catch (err) {
  if (err instanceof Users.UsersLookupByEmailError && err.payload.kind === "usersLookupByEmailerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersLookupByEmailerrorschema1
  }
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

**OnSuccess**: <code>[UsersLookupByEmailsuccessschema](src/models/users-lookup-by-emailsuccessschema.ts)</code>

**OnError**: <code>[Users.UsersLookupByEmailError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersProfileGet({ token, contentType });
  // TODO: Handle 'response' of type UsersProfileGetschema
} catch (err) {
  if (err instanceof Users.UsersProfileGetError && err.payload.kind === "usersProfileGeterrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersProfileGeterrorschema1
  }
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

**OnSuccess**: <code>[UsersProfileGetschema](src/models/users-profile-getschema.ts)</code>

**OnError**: <code>[Users.UsersProfileGetError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersProfileSet({ token, contentType });
  // TODO: Handle 'response' of type UsersProfileSetschema
} catch (err) {
  if (err instanceof Users.UsersProfileSetError && err.payload.kind === "usersProfileSeterrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersProfileSeterrorschema1
  }
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

**OnSuccess**: <code>[UsersProfileSetschema](src/models/users-profile-setschema.ts)</code>

**OnError**: <code>[Users.UsersProfileSetError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSetActive({ token, contentType });
  // TODO: Handle 'response' of type UsersSetActiveschema
} catch (err) {
  if (err instanceof Users.UsersSetActiveError && err.payload.kind === "usersSetActiveerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersSetActiveerrorschema1
  }
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

**OnSuccess**: <code>[UsersSetActiveschema](src/models/users-set-activeschema.ts)</code>

**OnError**: <code>[Users.UsersSetActiveError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSetPhoto({ contentType, token });
  // TODO: Handle 'response' of type UsersSetPhotoschema
} catch (err) {
  if (err instanceof Users.UsersSetPhotoError && err.payload.kind === "usersSetPhotoerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersSetPhotoerrorschema1
  }
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

**OnSuccess**: <code>[UsersSetPhotoschema](src/models/users-set-photoschema.ts)</code>

**OnError**: <code>[Users.UsersSetPhotoError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.users.usersSetPresence({ token, contentType, presence });
  // TODO: Handle 'response' of type UsersSetPresenceschema
} catch (err) {
  if (err instanceof Users.UsersSetPresenceError && err.payload.kind === "usersSetPresenceerrorschema1") {
    // TODO: Handle 'err.payload.body' of type UsersSetPresenceerrorschema1
  }
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

**OnSuccess**: <code>[UsersSetPresenceschema](src/models/users-set-presenceschema.ts)</code>

**OnError**: <code>[Users.UsersSetPresenceError](src/resources/users.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersProfile.usersProfileGet({ token, contentType });
  // TODO: Handle 'response' of type UsersProfileGetschema
} catch (err) {
  if (
    err instanceof UsersProfile.UsersProfileGetError && err.payload.kind === "usersProfileGeterrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsersProfileGeterrorschema1
  }
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

**OnSuccess**: <code>[UsersProfileGetschema](src/models/users-profile-getschema.ts)</code>

**OnError**: <code>[UsersProfile.UsersProfileGetError](src/resources/users-profile.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.usersProfile.usersProfileSet({ token, contentType });
  // TODO: Handle 'response' of type UsersProfileSetschema
} catch (err) {
  if (
    err instanceof UsersProfile.UsersProfileSetError && err.payload.kind === "usersProfileSeterrorschema1"
  ) {
    // TODO: Handle 'err.payload.body' of type UsersProfileSeterrorschema1
  }
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

**OnSuccess**: <code>[UsersProfileSetschema](src/models/users-profile-setschema.ts)</code>

**OnError**: <code>[UsersProfile.UsersProfileSetError](src/resources/users-profile.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsOpen({ triggerId, view, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Views.ViewsOpenError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Views.ViewsOpenError](src/resources/views.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsPublish({ userId, view, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Views.ViewsPublishError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Views.ViewsPublishError](src/resources/views.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsPush({ triggerId, view, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Views.ViewsPushError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Views.ViewsPushError](src/resources/views.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.views.viewsUpdate({ token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Views.ViewsUpdateError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Views.ViewsUpdateError](src/resources/views.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.workflowsStepCompleted({
    workflowStepExecuteId,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Workflows.WorkflowsStepCompletedError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Workflows.WorkflowsStepCompletedError](src/resources/workflows.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.workflowsStepFailed({
    workflowStepExecuteId,
    error,
    token,
    contentType,
  });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Workflows.WorkflowsStepFailedError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Workflows.WorkflowsStepFailedError](src/resources/workflows.ts)</code>

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

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.workflows.workflowsUpdateStep({ workflowStepEditId, token, contentType });
  // TODO: Handle 'response' of type Defaultsuccesstemplate
} catch (err) {
  if (err instanceof Workflows.WorkflowsUpdateStepError && err.payload.kind === "defaulterrortemplate1") {
    // TODO: Handle 'err.payload.body' of type Defaulterrortemplate1
  }
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

**OnSuccess**: <code>[Defaultsuccesstemplate](src/models/defaultsuccesstemplate.ts)</code>

**OnError**: <code>[Workflows.WorkflowsUpdateStepError](src/resources/workflows.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

