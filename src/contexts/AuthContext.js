import React from "react";
import * as authClient from "lib/api/authRequests";
import { useQueryCache } from "react-query";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const { Provider } = AuthContext;
  const queryCache = useQueryCache();

  const [user, setUser] = React.useState(null);

  async function handleLogout() {
    await authClient.logout();
    queryCache.clear();
    window.location.href = "/";
  }

  const values = {
    user,
    setUser,
    handleLogout
  };

  return <Provider value={values} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
