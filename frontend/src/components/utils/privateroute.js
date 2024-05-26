import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element: Element, authenticated, ...rest }) {
    return authenticated ? <Element {...rest} /> : <Navigate to="/user-login" replace />;
}

export default PrivateRoute;
