import React from 'react';
import './App.css';
import {NavLink, Route, Routes, useParams} from 'react-router-dom';

function App() {
    {/* ----------- useParams ------------  */}

    // const Profile = () => {
    //     const some = useParams()
    //
    //     console.log(some)
    //     return <div>profile</div>
    // }

    {/* ----------- useParams ------------  */}

    return (
        <div className="App">
            {/*<NavLink to={'/'}>main</NavLink>*/}
            {/*<NavLink to={'/profile'}>Profile</NavLink>*/}
            {/*<NavLink to={'/login'}>Login</NavLink>*/}
            {/*<NavLink to={'/profile/settings'}>settings</NavLink>*/}

            {/*<Routes>*/}
            {/*    /!*<Route path={'/'} element={<div>main</div>}></Route>*!/*/}
            {/*    /!*<Route path={'/*'} element={<div>404</div>}></Route>*!/*/}
            {/*    /!*<Route path={'/login'} element={<div>Login</div>}></Route>*!/*/}
            {/*    /!*<Route path={'/profile/*'} element={*!/*/}
            {/*    /!*    <div>*!/*/}
            {/*    /!*        Profile*!/*/}
            {/*    /!*        <Routes>*!/*/}
            {/*    /!*            <Route path={'/settings'} element={<div>settings</div>}></Route>*!/*/}
            {/*    /!*        </Routes>*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*}>*!/*/}
            {/*    /!*</Route>*!/*/}

            {/*    /!*----------second nest---------------*!/*/}
            {/*    /!*<Route path={'/profile'} element={*!/*/}
            {/*    /!*    <div>*!/*/}
            {/*    /!*        Profile*!/*/}
            {/*    /!*        <Outlet/>*!/*/}
            {/*    /!*    </div>}>*!/*/}
            {/*    /!*    <Route path={'/profile/settings'} element={<div>settings</div>}></Route>*!/*/}
            {/*    /!*</Route>*!/*/}

            {/*    /!*----------third nest---------------*!/*/}
            {/*    /!*<Route path={'/profile'} element={*!/*/}
            {/*    /!*    <div>*!/*/}
            {/*    /!*        Profile*!/*/}
            {/*    /!*        <Outlet/>*!/*/}
            {/*    /!*    </div>}>*!/*/}
            {/*    /!*    <Route path={'*'} element={<div>profile page not found</div>}></Route>*!/*/}
            {/*    /!*    <Route index element={<div>check id</div>}></Route>*!/*/}
            {/*    /!*    <Route path={':id'} element={<div>profile page not found</div>}></Route>*!/*/}
            {/*    /!*    <Route path={'settings'} element={<div>settings</div>}></Route>*!/*/}
            {/*    /!*</Route>*!/*/}
            {/*</Routes>*/}

            {/* ----------- useParams ------------  */}
            {/*<NavLink to={'/'}>main</NavLink>*/}
            {/*<NavLink to={'/profile'}>Profile</NavLink>*/}
            {/*<NavLink to={'/login'}>Login</NavLink>*/}
            {/*<NavLink to={'/profile/1'}>Profile/1</NavLink>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/'} element={<div>main</div>}></Route>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}></Route>*/}
            {/*    <Route path={'/login'} element={<div>Login</div>}></Route>*/}
            {/*    <Route path={'/profile/:id'} element={<Profile/>}></Route>*/}
            {/*</Routes>*/}
            {/* ----------- useParams ------------  */}

         {/*------------ link NavLink -------------*/}
            <NavLink to={'/'} >main</NavLink>
            <NavLink to={'/profile'} style={(params)=>{ return {color : params.isActive?'lime' : 'orange'}}}>Profile</NavLink>
            <NavLink to={'/login'} className={({isActive})=>isActive ? 'def' : 'act'}>Login</NavLink>
            <NavLink to={'/profile/settings'}>settings</NavLink>


            <Routes>
                <Route path={'/'} element={<div>main</div>}></Route>
                <Route path={'/*'} element={<div>404</div>}></Route>
                <Route path={'/login'} element={<div>Login</div>}></Route>
                <Route path={'/profile'} element={<div>profile</div>}></Route>
                <Route path={'/profile/settings'} element={<div>settings</div>}></Route>
            </Routes>

        </div>
    );
}

export default App;
