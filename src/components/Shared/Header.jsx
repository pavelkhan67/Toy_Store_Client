import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleLogOut = () => {
        LogOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/alltoys">All Toys</NavLink></li>
        {
            user?.email ? <>
                <li><NavLink to="/mytoys">My Toys</NavLink></li>
                <li><NavLink to="/addtoy">Add Toy</NavLink></li>
            </> :
                <></>
        }
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div className='lg:flex flex-row-reverse'>
                    <NavLink to="/" className="btn btn-ghost normal-case font-bold text-lg lg:text-xl">ToyMania</NavLink>
                    <NavLink><img className='h-10 lg:h-12 ms-5 px-1' src={logo} alt="" /></NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="tooltip tooltip-left" data-tip={user.displayName}>
                            <button><label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" >
                                    <img src={user?.photoURL} />
                                </div>
                            </label></button>
                        </div>
                        <button onClick={handleLogOut} className='btn btn-sm ms-3 btn-secondary rounded-full normal-case text-sm'>Log Out</button>
                    </> : <> <NavLink to="/login"><button className='btn btn-circle w-16 btn-secondary normal-case text-base'>Login</button></NavLink> </>
                }
            </div>
        </div>
    );
};

export default Header;