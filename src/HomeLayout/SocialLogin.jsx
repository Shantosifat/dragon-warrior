import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
           <h1 className='font-bold mb-3'> Login With</h1>
           <button className='btn btn-secondary btn-outline w-full my-3'> <FaGoogle size={18}></FaGoogle> LogIn with Google</button>
           <button className='btn btn-primary btn-outline w-full'> <FaGithub size={18}></FaGithub> LogIn with GitHub</button>
        </div>
    );
};

export default SocialLogin;