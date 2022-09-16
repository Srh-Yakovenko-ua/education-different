import React from 'react';
import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom';
import Homepage from './Components/Homepage';
import AboutPage from './Components/Aboutpage';
import Blogpage from './Components/Blogpage';
import Notfoundpage from './Components/Notfoundpage';
import Layout from './Layout/Layout';
import SinglePage from './Components/SinglePage';
import Createpost from './Components/Createpost';
import Editpost from './Components/Editpost';

// import {Navigate, NavLink, Route, Routes, useNavigate, useParams, useSearchParams} from 'react-router-dom';

function App() {
    // {/* ----------- useParams ------------  */
    // }
    // // const Profile = () => {
    // //     const some = useParams()
    // //
    // //     console.log(some)
    // //     return <div>profile</div>
    // // }
    // {/* ----------- useParams ------------  */
    // }
    //
    // {/*---------------------UseNavigation ----------------*/
    // }
    // // const Profile  = () => {
    // //     const navigate = useNavigate();
    // //
    // //
    // //
    // //     return (
    // //         <div>
    // //             profile
    // //             <button onClick={()=>{navigate(-1)}}>logout</button>
    // //         </div>
    // //     )
    // // }
    // {/*---------------------UseNavigation ----------------*/
    // }
    //
    //
    // {/*-------------------------UseSearchParams - query - -------------------------*/
    // }
    // // const Profile = () => {
    // //     const [searchParams, setSearchParams] = useSearchParams()
    // //
    // //     console.log(searchParams.get('name'))
    // //     console.log(Object.fromEntries(searchParams))
    // //     useEffect(() => {
    // //         console.log('research...')
    // //     }, [searchParams])
    // //
    // //     return (
    // //         <div>
    // //             profile
    // //             <button onClick={() => {
    // //                 setSearchParams({...Object.fromEntries(searchParams), age: '32'})
    // //             }}>logout</button>
    // //
    // //             add age
    // //         </div>
    // //     )
    // }
    // {/*-------------------------UseSearchParams - query - -------------------------*/
    // }

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
            {/*   <NavLink to={'/'} >main</NavLink>*/}
            {/*   <NavLink to={'/profile'} style={(params)=>{ return {color : params.isActive?'lime' : 'orange'}}}>Profile</NavLink>*/}
            {/*   <NavLink to={'/login'} className={({isActive})=>isActive ? 'def' : 'act'}>Login</NavLink>*/}
            {/*   <NavLink to={'/profile/settings'}>settings</NavLink>*/}


            {/*   <Routes>*/}
            {/*       <Route path={'/'} element={<div>main</div>}></Route>*/}
            {/*       <Route path={'/*'} element={<div>404</div>}></Route>*/}
            {/*       <Route path={'/login'} element={<div>Login</div>}></Route>*/}
            {/*       <Route path={'/profile'} element={<div>profile</div>}></Route>*/}
            {/*       <Route path={'/profile/settings'} element={<div>settings</div>}></Route>*/}
            {/*   </Routes>*/}
            {/*------------ link NavLink -------------*/}

            {/*---------------------UseNavigation ----------------*/}
            {/*    <NavLink to={'/'}>main</NavLink>*/}
            {/*    <NavLink to={'/login'}>login</NavLink>*/}
            {/*    <NavLink to={'/profile'}>profile</NavLink>*/}
            {/*    <NavLink to={'/profile/settings'}>settings</NavLink>*/}

            {/*    <Routes>*/}
            {/*        <Route path={'/*'} element={<div>404</div>}></Route>*/}
            {/*        <Route path={'/'} element={<div>main</div>}></Route>*/}
            {/*        <Route path={'/login'} element={<div>login</div>}></Route>*/}
            {/*        <Route path={'/profile'} element={<Profile/>}></Route>*/}
            {/*        <Route path={'/profile/settings'} element={<div>settings</div>}></Route>*/}
            {/*    </Routes>*/}
            {/*---------------------UseNavigation ----------------*/}


            {/*-------------------------UseSearchParams - query - -------------------------*/}
            {/*<NavLink to={'/'}>main</NavLink>*/}
            {/*<NavLink to={'/login'}>login</NavLink>*/}
            {/*<NavLink to={'/profile'}>profile</NavLink>*/}
            {/*<NavLink to={'/profile/settings'}>settings</NavLink>*/}

            {/*<Routes>*/}
            {/*    <Route path={'/*'} element={<div>404</div>}></Route>*/}
            {/*    <Route path={'/'} element={<div>main</div>}></Route>*/}
            {/*    <Route path={'/login'} element={<div>login</div>}></Route>*/}
            {/*    <Route path={'/profile'} element={<Profile/>}></Route>*/}
            {/*    <Route path={'/profile/settings'} element={<div>settings</div>}></Route>*/}
            {/*</Routes>*/}
            {/*-------------------------UseSearchParams - query - -------------------------*/}



            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Homepage/>}></Route>
                    <Route path={'about'} element={<AboutPage/>}></Route>
                    <Route path={'about-us'} element={<Navigate to={'/about'} replace/>}></Route>
                    <Route path={'posts'} element={<Blogpage/>}></Route>
                    <Route path={'posts/:id'} element={<SinglePage/>}></Route>
                    <Route path={'posts/:id/edit'} element={<Editpost/>}></Route>
                    <Route path={'posts/new'} element={<Createpost/>}></Route>
                    <Route path={'*'} element={<Notfoundpage/>}></Route>
                </Route>
            </Routes>


        </div>
    );
}

export default App;
