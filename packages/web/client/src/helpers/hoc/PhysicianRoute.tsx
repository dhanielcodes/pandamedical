import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../../shared/components/Loader';
import { AuthContext } from '../../store/context';

const PhysicianRoute = (props: any) => {
  const { component, ...rest } = props;
  const RouteComponent: any = component;
  const { state, verifyUser } = useContext(AuthContext);

  const { user } = state;

  const isUser = user?.role === 'USER';
  const isPhysician = user?.role === 'PHYSICIAN';

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyUser();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? <Loader /> : <div />}
      <Route
        {...rest}
        render={(routeProps) => {
          if (state.authenticated && isPhysician) {
            return <RouteComponent {...routeProps} />;
          }
          if (state.authenticated && isUser) {
            return (
              <Redirect
                to={{
                  pathname: '/dashboard',
                  state: { prevPath: rest.path },
                }}
              />
            );
          }
          return (
            <Redirect
              to={{
                pathname: '/auth/doctor/login',
                state: { prevPath: rest.path },
              }}
            />
          );
        }}
      />
    </>
  );
};

export default PhysicianRoute;
