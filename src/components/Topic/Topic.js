import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {

  const {id, name, logo, total} = topic;

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${id}`);
  }

  return (
    <div>
      <div className="rounded flex items-center justify-center w-full">
        <div className=" rounded-md shadow-md bg-rose-200">
          <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md bg-rose-800" />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <div className='flex items-center justify-between mb-5'>
                  <div className='text-rose-800 font-semibold'>{name}</div>
                  <div className='text-rose-800 font-semibold'>Total Quiz: {total}</div>
                </div>
                <button onClick={handleNavigate} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-rose-800 hover:bg-rose-700 text-rose-50">Start practice</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;