import React from "react";
import * as authClient from "lib/authRequests";
import { FullPageSpinner } from "components/loaders";
import { useQuery, useQueryCache } from "react-query";

/**
 * bootstrapAppData that fetches an authenticated user on load or refresh.
 * If there is no token, the user obj return null and is shown the un-authenticated app
 */
async function bootstrapAppData() {
  const response = await authClient.getUser();
  if (response !== null) return response;

  return Promise.reject("token not available");
}

const AuthContext = React.createContext();

function AuthProvider(props) {
  const { Provider } = AuthContext;
  const queryCache = useQueryCache();

  const [user, setUser] = React.useState(null);

  /** A decision to show the loading or error state on app initial load */
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);

  const { status } = useQuery("user", bootstrapAppData, {
    onSuccess: async data => {
      await queryCache.invalidateQueries("userDetails");
      const { user } = data;
      if (user == null) {
        setUser(data);
      } else {
        setUser(user);
      }
      // setUser({ ...data, is_developer: true });
    },
    onSettled: () => setFirstAttemptFinished(true),
    retry: 0
  });

  if (!firstAttemptFinished) {
    if (status === "loading") return <FullPageSpinner />;

    if (status === "error") {
      return (
        <div style={{ color: "red" }}>
          <p>Uh oh... There&apos;s a problem. Try refreshing the app.</p>
        </div>
      );
    }
  }

  async function handleLogout() {
    await authClient.logout();
    await queryCache.clear();
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
