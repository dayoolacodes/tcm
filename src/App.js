/* eslint-disable no-unused-vars */
import React, { lazy, Suspense, useEffect } from "react";
import { FullPageSpinner } from "components/loaders/index.js";
import { useUserDetails } from "lib/queries/auth";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loadAuthenticatedApp = () => import("app/authenticatedApp");
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import("app/unauthenticatedApp"));

function App() {
  const { user } = useUserDetails();

  return (
    <>
      <Suspense fallback={<FullPageSpinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        <ToastContainer transition={Slide} icon={true} />
      </Suspense>
    </>
  );
}

export default App;
