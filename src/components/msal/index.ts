// Re-export Azure MSAL Browser
export {
  PublicClientApplication,
  InteractionRequiredAuthError,
  BrowserAuthError,
  EventType,
  InteractionStatus,
  InteractionType,
  LogLevel,
} from '@azure/msal-browser';

export type {
  Configuration,
  BrowserConfiguration,
  CacheOptions,
  BrowserSystemOptions,
  NavigationClient,
  INavigationClient,
  AuthorizationCodeRequest,
  AuthError,
  ServerError,
  ClientAuthError,
  ClientConfigurationError,
  PopupWindowAttributes,
  AuthenticationResult,
  AccountInfo,
  EventMessage,
  SilentRequest,
  EndSessionRequest,
  EndSessionPopupRequest,
  RedirectRequest,
  PopupRequest,
  SsoSilentRequest,
} from '@azure/msal-browser';

// Re-export Azure MSAL React
export {
  MsalProvider,
  useMsal,
  useMsalAuthentication,
  useAccount,
  useIsAuthenticated,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  MsalAuthenticationTemplate,
  withMsal,
} from '@azure/msal-react';

export type {
  MsalProviderProps,
  IMsalContext,
  AccountIdentifiers,
} from '@azure/msal-react';

// Common MSAL constants
export const MSAL_CONFIG_DEFAULTS = {
  auth: {
    clientId: '',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: typeof window !== 'undefined' ? window.location.origin : '',
  },
  cache: {
    cacheLocation: 'sessionStorage' as const,
    storeAuthStateInCookie: false,
  },
};

export const MSAL_SCOPES = {
  openid: 'openid',
  profile: 'profile',
  email: 'email',
  offlineAccess: 'offline_access',
};
