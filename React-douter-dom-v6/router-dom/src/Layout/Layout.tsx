import React from 'react';
import { NavLink, Outlet} from 'react-router-dom';
import CustomLink from './CustomLink';



const Layout = () => {
 //   const setActive = ({isActive} : any) => isActive ? 'active-link' : ''
  //  const setActive = ({isActive})=>({color : isActive ? 'red' : 'white'})
    return (
        <div>
            <header>
                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/posts" >Blog</CustomLink>
                <CustomLink to="/about" >About</CustomLink>
            </header>

            <main className="container">
                <Outlet/>
            </main>


            <footer className={'container'}>2021</footer>
        </div>
    );
};

export default Layout;