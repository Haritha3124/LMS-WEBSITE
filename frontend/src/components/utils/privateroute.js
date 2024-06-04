import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Course_Details/context';

function PrivateRoute({ element: Element, authenticated, ...rest }) {

    let {loguser} = useContext(AuthContext)

    return loguser ? <Element {...rest} /> : <Navigate to="/user-login" replace />;
}

export default PrivateRoute;
