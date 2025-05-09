import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {signIn} = use(AuthContext);

  const handleLogIn = (e) => {
      e.preventDefault();
      console.log(e.target);
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);
      signIn(email, password).then(result=> {
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage)
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-xl text-center font-bold my-5">
            Login your account
          </h1>
          <form onSubmit={handleLogIn} className="form">
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="font-semibold text-center pt-4">
              Don't Have An Account ?{" "}
              <Link to="/auth/register" className="text-red-600">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
