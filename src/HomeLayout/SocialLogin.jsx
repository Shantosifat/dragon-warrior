import React from 'react';

const SocialLogin = () => {
    return (
        <div>
           <h1 className='font-bold'> Login With</h1>
           <button className='btn hover:btn-primary btn-outline w-full my-3'>LogIn with Google</button>
           <button className='btn hover:btn-secondary btn-outline w-full'>LogIn with GitHub</button>
        </div>
    );
};

export default SocialLogin;