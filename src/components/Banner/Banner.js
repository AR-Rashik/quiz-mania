import React from 'react';

const Banner = () => {
  return (
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
              <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                  <div className="flex flex-col justify-center md:w-1/2">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Trust yourself...</h1>
                      <p className="text-base lg:text-xl text-gray-800 mt-2">
                      And test yourself by playing the <span className="font-bold">Quiz.</span>
                      </p>
                  </div>
                  <div className="h-32 md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                      <img src="https://www.pngmart.com/files/19/Quiz-Logo-PNG-HD.png" alt="" />
                  </div>
              </div>
          </div>
        </div>
  );
};

export default Banner;