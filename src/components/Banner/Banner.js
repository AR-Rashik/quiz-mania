import React from 'react';

const Banner = () => {
  return (
        <div className="w-10/12 mx-auto my-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-rose-100 p-8 rounded-md">
              <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
                  <h1 className="text-3xl lg:text-4xl font-semibold text-rose-800">Trust yourself...</h1>
                  <p className="text-base lg:text-xl text-rose-800 mt-2">
                  And test yourself by playing the <span className="font-bold">Quiz.</span>
                  </p>
              </div>
              <div className="h-32 md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                  <img src="https://www.pngmart.com/files/19/Quiz-Logo-PNG-HD.png" alt="" />
              </div>
              </div>
        </div>
  );
};

export default Banner;