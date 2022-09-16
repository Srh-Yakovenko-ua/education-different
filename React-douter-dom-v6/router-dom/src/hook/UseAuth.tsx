import React, {useContext} from 'react';
import {AuthContext} from '../hoc/AuthProvider';

const UseAuth = () => {
    return useContext(AuthContext)

};

export default UseAuth;