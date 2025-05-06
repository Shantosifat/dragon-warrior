import React from 'react';
import SocialLogin from './SocialLogin';
import Find from '../Components/Find';

const RightAside = () => {
    return (
        <div className='mt-5 space-y-8'>
            <SocialLogin></SocialLogin>
            <Find></Find>
        </div>
    );
};

export default RightAside;