import React from 'react';
import { NavLink } from 'react-router';
import userLogo from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="empty">

            </div>
            <div className="middle flex text-accent gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>

            <div className="right flex gap-2">
                <img src={userLogo} alt="" />
                <button className='btn btn-primary px-10'>LogIn</button>
            </div>
        </div>
    );
};

export default Navbar;