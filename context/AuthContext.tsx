import React, { createContext, useContext, useState } from 'react';

interface AuthData {
  token: string;
  email: string;
  nombre: string;
}

interface AuthContextType {
  auth: AuthData | null;
  setAuth: (data: AuthData | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthData | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
