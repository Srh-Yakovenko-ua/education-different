import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/profile/settings'}>settings</NavLink>

            <Routes>
                <Route path={'/'} element={<div>main</div>}></Route>
                <Route path={'/*'} element={<div>404</div>}></Route>
                <Route path={'/login'} element={<div>Login</div>}></Route>
                {/*<Route path={'/profile/*'} element={*/}
                {/*    <div>*/}
                {/*        Profile*/}
                {/*        <Routes>*/}
                {/*            <Route path={'/settings'} element={<div>settings</div>}></Route>*/}
                {/*        </Routes>*/}
                {/*    </div>*/}
                {/*}>*/}
                {/*</Route>*/}

                {/*----------second nest---------------*/}
                {/*<Route path={'/profile'} element={*/}
                {/*    <div>*/}
                {/*        Profile*/}
                {/*        <Outlet/>*/}
                {/*    </div>}>*/}
                {/*    <Route path={'/profile/settings'} element={<div>settings</div>}></Route>*/}
                {/*</Route>*/}

                {/*----------third nest---------------*/}
                {/*<Route path={'/profile'} element={*/}
                {/*    <div>*/}
                {/*        Profile*/}
                {/*        <Outlet/>*/}
                {/*    </div>}>*/}
                {/*    <Route path={'*'} element={<div>profile page not found</div>}></Route>*/}
                {/*    <Route index element={<div>check id</div>}></Route>*/}
                {/*    <Route path={':id'} element={<div>profile page not found</div>}></Route>*/}
                {/*    <Route path={'settings'} element={<div>settings</div>}></Route>*/}
                {/*</Route>*/}


            </Routes>

        </div>
    );
}

export default App;
