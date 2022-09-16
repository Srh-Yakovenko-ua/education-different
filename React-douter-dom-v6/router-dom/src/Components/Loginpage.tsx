import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../hook/UseAuth';

const Loginpage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} : any = useAuth()

    const fromPage = location.state?.from?.pathname || '/'

    const handlerSubmit = (event: any) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user, ()=> navigate(fromPage, {replace : true}))

    }
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="">
                    name : <input name={'username'}/>
                </label>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    );
};

export default Loginpage;