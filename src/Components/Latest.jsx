import React from "react";
import Marquee from "react-fast-marquee";

const Latest = () => {
  return (
    <div className="flex justify-center items-center gap-5 bg-base-200 p-3">
      <p className="bg-secondary text-white px-3 py-2">Latest</p>

      <Marquee className="flex" speed={100} pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa
          officiis eos, facilis id distinctio earum consectetur, molestias
          ducimus enim,
        </p>
      </Marquee>
    </div>
  );
};

export default Latest;
