export interface AuthContext {
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
  user: User;
}
export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  photo: string;
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
}

export interface SignInResponse {
  success: boolean;
  message: string;
  tokens: AuthTokens;
  user: User;
}

export interface AuthState {
  tokens: AuthTokens;
  user: User;
}
