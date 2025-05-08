import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-xl text-center font-bold my-5">Login your account</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input w-full" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input w-full" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <p className="font-semibold text-center pt-4">Don't Have An Account ? <Link to='/auth/register' className="text-red-600">Register</Link></p>
            </fieldset>
            
          </div>
        </div>
    </div>
  );
};

export default Login;
