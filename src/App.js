/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useEffect } from "react";
import { FullPageSpinner } from "components/loaders/index.js";
import { useUserDetails } from "lib/queries/auth";

const loadAuthenticatedApp = () => import("app/authenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("app/unauthenticatedApp"));

function App() {
  const { user } = useUserDetails();
  // load authenticated app in bg while user completes auth form
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  return (
    <>
      <Suspense fallback={<FullPageSpinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </>
  );
}

export default App;
