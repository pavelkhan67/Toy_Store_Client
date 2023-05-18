import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"

const Header = () => {


    const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">All Toys</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    
    </>

    return (
        <div className="navbar bg-base-200 h-24">
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
                    <Link to="/" className="btn btn-ghost normal-case font-bold text-lg lg:text-xl">ToyMania</Link>
                    <Link><img className='h-10 lg:h-12 ms-5 px-1' src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                
            </div>
        </div>
    );
};

export default Header;