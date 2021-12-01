import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ErrorBoundary, { ErrorBoundaryFallback } from "components/errorBoundary";
import routesList from "routes/routesList";
import { FullPageSpinner } from "components/loaders/index.js";
import AppLayout from "layout/AppLayout";

const AuthenticatedApp = () => {
  const privateRoutes = routesList.filter(route => route.isPrivate);

  return (
    <>
      <Router>
        <ErrorBoundary fallbackComponent={ErrorBoundaryFallback}>
          <AppLayout>
            <Suspense fallback={<FullPageSpinner />}>
              <Switch>
                {privateRoutes.map(({ component, ...rest }, index) => (
                  <Route component={component} {...rest} key={`authenticated-route-${index}`} />
                ))}
              </Switch>
            </Suspense>
          </AppLayout>
        </ErrorBoundary>
      </Router>
    </>
  );
};

export default AuthenticatedApp;
