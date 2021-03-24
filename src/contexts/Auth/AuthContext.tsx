import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../../services/api';
import {
  AuthContext,
  AuthState,
  Credentials,
  SignInResponse,
} from './interfaces';

const AuthContextProvider = createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('@MenuOnline:access_token');
    const refreshToken = localStorage.getItem('@MenuOnline:refresh_token');
    const user = localStorage.getItem('@MenuOnline:user');

    if (accessToken && refreshToken && user) {
      return {
        tokens: { access_token: accessToken, refresh_token: refreshToken },
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: Credentials) => {
    const response = await api.post<SignInResponse>('/auth/login', {
      email,
      password,
    });

    const { tokens, user } = response.data;

    localStorage.setItem('@MenuOnline:access_token', tokens.access_token);
    localStorage.setItem('@MenuOnline:refresh_token', tokens.refresh_token);
    localStorage.setItem('@MenuOnline:user', JSON.stringify(user));

    setData({ tokens, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@MenuOnline:access_token');
    localStorage.removeItem('@MenuOnline:refresh_token');
    localStorage.removeItem('@MenuOnline:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContextProvider.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContextProvider.Provider>
  );
};

function useAuth(): AuthContext {
  const context = useContext(AuthContextProvider);

  if (!context) {
    throw new Error('useAuth must be used with in an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
