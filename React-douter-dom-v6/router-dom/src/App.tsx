import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/login'}>Login</NavLink>

            <Routes>
                <Route path={'/'} element={<div>main</div>}></Route>
                <Route path={'/profile'} element={<div>Profile</div>}></Route>
                <Route path={'/login'} element={<div>Login</div>}></Route>
            </Routes>

        </div>
    );
}

export default App;
