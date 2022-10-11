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
        <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md dark:bg-gray-700" />
          <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <div className='flex items-center justify-between mb-5'>
                  <div>{name}</div>
                  <div>Total Quiz: {total}</div>
                </div>
                <button onClick={handleNavigate} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Start practice</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;