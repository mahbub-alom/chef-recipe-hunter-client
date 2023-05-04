import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <Spinner animation="border" variant="warning" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoute;