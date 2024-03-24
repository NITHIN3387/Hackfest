"use client";

import { createContext, useContext } from "react";
import { AuthContextTypes, AuthProviderTypes } from "./auth.types";

const authContext = createContext<AuthContextTypes | null>(null);

export function useAuth() {
  return useContext(authContext)
}

export function AuthProvider({ children }: AuthProviderTypes): JSX.Element {
  const user: AuthContextTypes | null = {
    name: "Adam"
  };

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
}
