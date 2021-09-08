import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TOKEN } from '../utils/variables';

const CommonRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => TOKEN ? (
        <Redirect to="/d/" />
      ) : (
        <Component {...props} />
      )}
    />
  );
}
 
export default CommonRoute;