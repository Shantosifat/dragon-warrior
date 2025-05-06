import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../assets/swimming.png'
import reading from '../assets/class.png'
import playground from '../assets/playground.png'

const Find = () => {
  return (
    <div>
      <h2 className="font-bold my-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-300 p-7  justify-start join-item"> <FaFacebook size={18}></FaFacebook> Facebook</button>
        <button className="btn bg-base-300 p-7  justify-start join-item"> <FaTwitter size={18}></FaTwitter> Twitter</button>
        <button className="btn bg-base-300 p-7  justify-start join-item"> <FaInstagram size={18}></FaInstagram> Instagram</button>
      </div>

      <div className="mt-5 bg-base-200 px-3 py-5 rounded-xl">
        <h1 className="font-bold text-xl">Q-Zone</h1>
        <img className="w-full" src={swimming} alt="" />
        <img className="w-full" src={reading} alt="" />
        <img className="w-full" src={playground} alt="" />
        
      </div>
    </div>
  );
};

export default Find;
