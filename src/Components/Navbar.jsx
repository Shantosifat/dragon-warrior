import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
// import {AuthContext} from '../Provider/AuthProvider'

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log('logout krte chai');
    logOut().then(() => {
        // Sign-out successful.
        alert('Sign-out successful.')
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex justify-between items-center">
      <div className="empty">{user && user.email}</div>
      <div className="middle flex text-accent gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      <div className="right flex gap-2">
        <img src={userLogo} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">LogOut</button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
