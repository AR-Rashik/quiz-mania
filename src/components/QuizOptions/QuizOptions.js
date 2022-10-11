import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOptions = ({option, options, correctAnswer}) => {

  // const optionNumber = options.indexOf(option);
  // console.log(optionNumber);

  const showSuccessToastMessage = () => {
    toast.success('You are correct!', {
        position: toast.POSITION.TOP_CENTER
    });
    console.log("Correct")
  };

  const showErrorToastMessage = () => {
    toast.error('You are not correct!', {
        position: toast.POSITION.TOP_CENTER
    });
    console.log("Incorrect")
  };


  return (
    <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
        <label onClick={option === correctAnswer ? showSuccessToastMessage : showErrorToastMessage} class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">
          <span className='pr-3'>
            <input type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
          </span>
        {option}</label>
        <ToastContainer />
    </div>
  );
};

export default QuizOptions;