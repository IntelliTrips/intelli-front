import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import { createContext, useContext, useMemo } from 'react';

export const AuthContext = createContext<{
  sessionId: string | null;
  login: (data: string) => void;
  logout: () => void;
}>(
  {} as {
    sessionId: string | null;
    login: (data: string) => void;
    logout: () => void;
  }
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useLocalStorage('sessionId', '');

  const navigate = useNavigate();

  const login = (data: string) => {
    setSessionId(data);
    navigate('/');
  };

  const logout = () => {
    setSessionId('');
    navigate('/login', { replace: true });
  };

  const value = useMemo(
    () => ({
      sessionId,
      login,
      logout,
    }),
    [sessionId]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
