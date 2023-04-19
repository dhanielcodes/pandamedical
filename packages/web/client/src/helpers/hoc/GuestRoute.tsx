import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../store/context';

const GuestRoute = (props: any) => {
  const { component, ...rest } = props;
  const RouteComponent: any = component;
  const { state } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-confusing-arrow
      render={(routeProps) =>
        !state.authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: '/dashboard', state: { prevPath: rest.path } }}
          />
        )
      }
    />
  );
};

export default GuestRoute;
