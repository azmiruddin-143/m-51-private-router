import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { contextForm } from '../Auth Contect/Authcontext';
import { auth } from '../../Firebase Setup/Firebase.init';

const Header = () => {
    const { user, logOut } = useContext(contextForm)

    const logOutButton = () => {
        logOut(auth)
            .then(() => {
                console.log("User Log Out");
            })
            .catch(() => {
                console.log("Error Khaico");
            })

    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li><a>Submenu 3</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/signup">SignUp</NavLink></li>
                        <li><NavLink to="/signin">SignIn</NavLink></li>
                         {
                            user && <li><NavLink to="/shop">Shop</NavLink></li>
                         }
                         
                         {
                            user && <li><NavLink to="/order">Order</NavLink></li>
                         }
                        <li><NavLink to="/contact">Contact</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ?
                            <div className='flex gap-4 items-center'>
                                <h1>{user?.email}</h1>
                                <a onClick={logOutButton} className="btn">LogOut</a>
                            </div>
                            :
                            <NavLink to="/signin"><a className="btn">Login</a></NavLink>
                    }



                </div>
            </div>
        </div>
    );
};

export default Header;