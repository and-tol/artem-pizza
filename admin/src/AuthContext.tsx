import { createContext, useState, useContext } from 'react';

type AuthProviderProps = { children: React.ReactNode };
type State = {
  login: (newToken: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
  token: string | null;
};

const AuthContext = createContext<State | null>(null);

export const AuthProvider = (props: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const isLoggedIn: boolean = !!token;

  const login = (newToken: string): void => {
    setToken(newToken);
  };

  const logout = (): void => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn, token }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=> useContext(AuthContext)