import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import useAuth from '../hook/UseAuth';

const RequireAuth = ({children} : any ) => {
    const location = useLocation();

    const {user} : any = useAuth()

    if(user){
        return <Navigate to='/login' state={{from : location} } />
    }

    return children


};

export default RequireAuth;