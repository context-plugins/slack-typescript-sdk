import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme } from "./core/auth/oauth2-schemes.js";
import { oauth2AuthorizationCodeStrategy } from "./core/auth/oauth2-strategies.js";
import type { RawClient } from "./core/raw-client.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly slackAuth: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    slackAuth: oauth2RefreshableScheme(
      options.slackAuth,
      options.slackAuthStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/authorize"),
          tokenUrl: servers.default("/oauth.access"),
          rawClient,
          placement: "header",
        }),
    ),
  };
}
