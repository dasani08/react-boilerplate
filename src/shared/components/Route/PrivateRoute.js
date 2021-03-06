import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getStoredAccessToken } from 'shared/utils/authToken';
import { routeConfig } from 'configs/route';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      render={(props) =>
        getStoredAccessToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={routeConfig.LOGIN} />
        )
      }
      {...rest}
    />
  );
};
