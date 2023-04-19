export interface AuthState {
  error: any;
  user: {} | null;
  authenticated: boolean;
  loadingAuthState: boolean;
  auth_token: string | null;
}
