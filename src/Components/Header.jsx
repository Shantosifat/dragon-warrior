import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-5'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-bold text-accent'>{format(new Date(), 'EEEE, MMMM d, yyyy'	 )}</p>
            
        </div>
    );
};

export default Header;