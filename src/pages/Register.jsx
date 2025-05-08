import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const { createUser, setUser } = use(AuthContext)

  const handleRegister = (e) => {
    
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password);

    createUser(email, password).then(result => {
      const user = result.user;
      setUser(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-xl text-center font-bold my-5">Register your account</h1>
              <form onSubmit={handleRegister} className="">
                {/* Name */}
                <label className="label">Name</label>
                <input type="text" name='name' className="input w-full mb-3" placeholder="Name" required />
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input name='photo' type="text" className="input w-full mb-3" placeholder="Photo" required/>
                {/* Email */}
                <label className="label">Email</label>
                <input name='email' type="email" className="input w-full mb-3" placeholder="Email" required />
                {/* password */}
                <label className="label">Password</label>
                <input name='password' type="password" className="input w-full mb-3" placeholder="Password" required />
                <div>
                  <a className="link link-hover"></a>
                </div>
                <button type='submit'  className="btn btn-neutral mt-4 w-full">Register</button>
                <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to='/auth/login' className="text-green-600">Login</Link></p>
              </form>
             
            </div>
          </div>
      </div>
    );
};

export default Register;