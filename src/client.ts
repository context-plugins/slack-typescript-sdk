import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AdminAppsApproved } from "./resources/admin-apps-approved.js";
import { AdminAppsRequests } from "./resources/admin-apps-requests.js";
import { AdminAppsRestricted } from "./resources/admin-apps-restricted.js";
import { AdminApps } from "./resources/admin-apps.js";
import { AdminConversationsEkm } from "./resources/admin-conversations-ekm.js";
import { AdminConversationsRestrictAccess } from "./resources/admin-conversations-restrict-access.js";
import { AdminConversations } from "./resources/admin-conversations.js";
import { AdminEmoji } from "./resources/admin-emoji.js";
import { AdminInviteRequestsApproved } from "./resources/admin-invite-requests-approved.js";
import { AdminInviteRequestsDenied } from "./resources/admin-invite-requests-denied.js";
import { AdminInviteRequests } from "./resources/admin-invite-requests.js";
import { AdminTeamsAdmins } from "./resources/admin-teams-admins.js";
import { AdminTeamsOwners } from "./resources/admin-teams-owners.js";
import { AdminTeamsSettings } from "./resources/admin-teams-settings.js";
import { AdminTeams } from "./resources/admin-teams.js";
import { AdminUsergroups } from "./resources/admin-usergroups.js";
import { AdminUsersSession } from "./resources/admin-users-session.js";
import { AdminUsers } from "./resources/admin-users.js";
import { Admin } from "./resources/admin.js";
import { Api } from "./resources/api.js";
import { AppsEventAuthorizations } from "./resources/apps-event-authorizations.js";
import { AppsPermissionsResources } from "./resources/apps-permissions-resources.js";
import { AppsPermissionsScopes } from "./resources/apps-permissions-scopes.js";
import { AppsPermissionsUsers } from "./resources/apps-permissions-users.js";
import { AppsPermissions } from "./resources/apps-permissions.js";
import { Apps } from "./resources/apps.js";
import { Auth } from "./resources/auth.js";
import { Bots } from "./resources/bots.js";
import { CallsParticipants } from "./resources/calls-participants.js";
import { Calls } from "./resources/calls.js";
import { ChatScheduledMessages } from "./resources/chat-scheduled-messages.js";
import { Chat } from "./resources/chat.js";
import { Conversations } from "./resources/conversations.js";
import { Dialog } from "./resources/dialog.js";
import { Dnd } from "./resources/dnd.js";
import { Emoji } from "./resources/emoji.js";
import { FilesComments } from "./resources/files-comments.js";
import { FilesRemote } from "./resources/files-remote.js";
import { Files } from "./resources/files.js";
import { Migration } from "./resources/migration.js";
import { OauthV2 } from "./resources/oauth-v2.js";
import { Oauth } from "./resources/oauth.js";
import { Pins } from "./resources/pins.js";
import { Reactions } from "./resources/reactions.js";
import { Reminders } from "./resources/reminders.js";
import { Rtm } from "./resources/rtm.js";
import { Search } from "./resources/search.js";
import { Stars } from "./resources/stars.js";
import { TeamApi } from "./resources/team-api.js";
import { TeamProfile } from "./resources/team-profile.js";
import { UsergroupsUsers } from "./resources/usergroups-users.js";
import { Usergroups } from "./resources/usergroups.js";
import { UsersProfile } from "./resources/users-profile.js";
import { Users } from "./resources/users.js";
import { Views } from "./resources/views.js";
import { Workflows } from "./resources/workflows.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * One way to interact with the Slack platform is its HTTP RPC-based Web API, a collection of
 * methods requiring OAuth 2.0-based user, bot, or workspace tokens blessed with related OAuth
 * scopes.
 */
export class SlackWebApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #adminApps?: AdminApps;
  #admin?: Admin;
  #adminAppsApproved?: AdminAppsApproved;
  #adminAppsRequests?: AdminAppsRequests;
  #adminAppsRestricted?: AdminAppsRestricted;
  #adminConversations?: AdminConversations;
  #adminConversationsEkm?: AdminConversationsEkm;
  #adminConversationsRestrictAccess?: AdminConversationsRestrictAccess;
  #adminEmoji?: AdminEmoji;
  #adminInviteRequests?: AdminInviteRequests;
  #adminInviteRequestsApproved?: AdminInviteRequestsApproved;
  #adminInviteRequestsDenied?: AdminInviteRequestsDenied;
  #adminTeamsAdmins?: AdminTeamsAdmins;
  #adminTeams?: AdminTeams;
  #adminTeamsOwners?: AdminTeamsOwners;
  #adminTeamsSettings?: AdminTeamsSettings;
  #adminUsergroups?: AdminUsergroups;
  #adminUsers?: AdminUsers;
  #adminUsersSession?: AdminUsersSession;
  #api?: Api;
  #appsEventAuthorizations?: AppsEventAuthorizations;
  #apps?: Apps;
  #appsPermissions?: AppsPermissions;
  #appsPermissionsResources?: AppsPermissionsResources;
  #appsPermissionsScopes?: AppsPermissionsScopes;
  #appsPermissionsUsers?: AppsPermissionsUsers;
  #auth2?: Auth;
  #bots?: Bots;
  #calls?: Calls;
  #callsParticipants?: CallsParticipants;
  #chat?: Chat;
  #chatScheduledMessages?: ChatScheduledMessages;
  #conversations?: Conversations;
  #dialog?: Dialog;
  #dnd?: Dnd;
  #emoji?: Emoji;
  #filesComments?: FilesComments;
  #files?: Files;
  #filesRemote?: FilesRemote;
  #migration?: Migration;
  #oauth?: Oauth;
  #oauthV2?: OauthV2;
  #pins?: Pins;
  #reactions?: Reactions;
  #reminders?: Reminders;
  #rtm?: Rtm;
  #search?: Search;
  #stars?: Stars;
  #teamApi?: TeamApi;
  #teamProfile?: TeamProfile;
  #usergroups?: Usergroups;
  #usergroupsUsers?: UsergroupsUsers;
  #users?: Users;
  #usersProfile?: UsersProfile;
  #views?: Views;
  #workflows?: Workflows;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SLACK_WEB_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "SlackWebApiClient/1.7.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.7.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get adminApps(): AdminApps {
    return (this.#adminApps ??= new AdminApps(this.#rawClient, this.#servers, this.#auth));
  }

  get admin(): Admin {
    return (this.#admin ??= new Admin(this.#rawClient, this.#servers, this.#auth));
  }

  get adminAppsApproved(): AdminAppsApproved {
    return (this.#adminAppsApproved ??= new AdminAppsApproved(this.#rawClient, this.#servers, this.#auth));
  }

  get adminAppsRequests(): AdminAppsRequests {
    return (this.#adminAppsRequests ??= new AdminAppsRequests(this.#rawClient, this.#servers, this.#auth));
  }

  get adminAppsRestricted(): AdminAppsRestricted {
    return (this.#adminAppsRestricted ??= new AdminAppsRestricted(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get adminConversations(): AdminConversations {
    return (this.#adminConversations ??= new AdminConversations(this.#rawClient, this.#servers, this.#auth));
  }

  get adminConversationsEkm(): AdminConversationsEkm {
    return (this.#adminConversationsEkm ??= new AdminConversationsEkm(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get adminConversationsRestrictAccess(): AdminConversationsRestrictAccess {
    return (this.#adminConversationsRestrictAccess ??= new AdminConversationsRestrictAccess(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get adminEmoji(): AdminEmoji {
    return (this.#adminEmoji ??= new AdminEmoji(this.#rawClient, this.#servers, this.#auth));
  }

  get adminInviteRequests(): AdminInviteRequests {
    return (this.#adminInviteRequests ??= new AdminInviteRequests(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get adminInviteRequestsApproved(): AdminInviteRequestsApproved {
    return (this.#adminInviteRequestsApproved ??= new AdminInviteRequestsApproved(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get adminInviteRequestsDenied(): AdminInviteRequestsDenied {
    return (this.#adminInviteRequestsDenied ??= new AdminInviteRequestsDenied(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get adminTeamsAdmins(): AdminTeamsAdmins {
    return (this.#adminTeamsAdmins ??= new AdminTeamsAdmins(this.#rawClient, this.#servers, this.#auth));
  }

  get adminTeams(): AdminTeams {
    return (this.#adminTeams ??= new AdminTeams(this.#rawClient, this.#servers, this.#auth));
  }

  get adminTeamsOwners(): AdminTeamsOwners {
    return (this.#adminTeamsOwners ??= new AdminTeamsOwners(this.#rawClient, this.#servers, this.#auth));
  }

  get adminTeamsSettings(): AdminTeamsSettings {
    return (this.#adminTeamsSettings ??= new AdminTeamsSettings(this.#rawClient, this.#servers, this.#auth));
  }

  get adminUsergroups(): AdminUsergroups {
    return (this.#adminUsergroups ??= new AdminUsergroups(this.#rawClient, this.#servers, this.#auth));
  }

  get adminUsers(): AdminUsers {
    return (this.#adminUsers ??= new AdminUsers(this.#rawClient, this.#servers, this.#auth));
  }

  get adminUsersSession(): AdminUsersSession {
    return (this.#adminUsersSession ??= new AdminUsersSession(this.#rawClient, this.#servers, this.#auth));
  }

  get api(): Api {
    return (this.#api ??= new Api(this.#rawClient, this.#servers, this.#auth));
  }

  get appsEventAuthorizations(): AppsEventAuthorizations {
    return (this.#appsEventAuthorizations ??= new AppsEventAuthorizations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get apps(): Apps {
    return (this.#apps ??= new Apps(this.#rawClient, this.#servers, this.#auth));
  }

  get appsPermissions(): AppsPermissions {
    return (this.#appsPermissions ??= new AppsPermissions(this.#rawClient, this.#servers, this.#auth));
  }

  get appsPermissionsResources(): AppsPermissionsResources {
    return (this.#appsPermissionsResources ??= new AppsPermissionsResources(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get appsPermissionsScopes(): AppsPermissionsScopes {
    return (this.#appsPermissionsScopes ??= new AppsPermissionsScopes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get appsPermissionsUsers(): AppsPermissionsUsers {
    return (this.#appsPermissionsUsers ??= new AppsPermissionsUsers(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get auth2(): Auth {
    return (this.#auth2 ??= new Auth(this.#rawClient, this.#servers, this.#auth));
  }

  get bots(): Bots {
    return (this.#bots ??= new Bots(this.#rawClient, this.#servers, this.#auth));
  }

  get calls(): Calls {
    return (this.#calls ??= new Calls(this.#rawClient, this.#servers, this.#auth));
  }

  get callsParticipants(): CallsParticipants {
    return (this.#callsParticipants ??= new CallsParticipants(this.#rawClient, this.#servers, this.#auth));
  }

  get chat(): Chat {
    return (this.#chat ??= new Chat(this.#rawClient, this.#servers, this.#auth));
  }

  get chatScheduledMessages(): ChatScheduledMessages {
    return (this.#chatScheduledMessages ??= new ChatScheduledMessages(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get conversations(): Conversations {
    return (this.#conversations ??= new Conversations(this.#rawClient, this.#servers, this.#auth));
  }

  get dialog(): Dialog {
    return (this.#dialog ??= new Dialog(this.#rawClient, this.#servers, this.#auth));
  }

  get dnd(): Dnd {
    return (this.#dnd ??= new Dnd(this.#rawClient, this.#servers, this.#auth));
  }

  get emoji(): Emoji {
    return (this.#emoji ??= new Emoji(this.#rawClient, this.#servers, this.#auth));
  }

  get filesComments(): FilesComments {
    return (this.#filesComments ??= new FilesComments(this.#rawClient, this.#servers, this.#auth));
  }

  get files(): Files {
    return (this.#files ??= new Files(this.#rawClient, this.#servers, this.#auth));
  }

  get filesRemote(): FilesRemote {
    return (this.#filesRemote ??= new FilesRemote(this.#rawClient, this.#servers, this.#auth));
  }

  get migration(): Migration {
    return (this.#migration ??= new Migration(this.#rawClient, this.#servers, this.#auth));
  }

  get oauth(): Oauth {
    return (this.#oauth ??= new Oauth(this.#rawClient, this.#servers, this.#auth));
  }

  get oauthV2(): OauthV2 {
    return (this.#oauthV2 ??= new OauthV2(this.#rawClient, this.#servers, this.#auth));
  }

  get pins(): Pins {
    return (this.#pins ??= new Pins(this.#rawClient, this.#servers, this.#auth));
  }

  get reactions(): Reactions {
    return (this.#reactions ??= new Reactions(this.#rawClient, this.#servers, this.#auth));
  }

  get reminders(): Reminders {
    return (this.#reminders ??= new Reminders(this.#rawClient, this.#servers, this.#auth));
  }

  get rtm(): Rtm {
    return (this.#rtm ??= new Rtm(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get stars(): Stars {
    return (this.#stars ??= new Stars(this.#rawClient, this.#servers, this.#auth));
  }

  get teamApi(): TeamApi {
    return (this.#teamApi ??= new TeamApi(this.#rawClient, this.#servers, this.#auth));
  }

  get teamProfile(): TeamProfile {
    return (this.#teamProfile ??= new TeamProfile(this.#rawClient, this.#servers, this.#auth));
  }

  get usergroups(): Usergroups {
    return (this.#usergroups ??= new Usergroups(this.#rawClient, this.#servers, this.#auth));
  }

  get usergroupsUsers(): UsergroupsUsers {
    return (this.#usergroupsUsers ??= new UsergroupsUsers(this.#rawClient, this.#servers, this.#auth));
  }

  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  get usersProfile(): UsersProfile {
    return (this.#usersProfile ??= new UsersProfile(this.#rawClient, this.#servers, this.#auth));
  }

  get views(): Views {
    return (this.#views ??= new Views(this.#rawClient, this.#servers, this.#auth));
  }

  get workflows(): Workflows {
    return (this.#workflows ??= new Workflows(this.#rawClient, this.#servers, this.#auth));
  }
}
