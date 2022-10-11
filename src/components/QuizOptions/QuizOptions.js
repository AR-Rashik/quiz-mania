import React from 'react';

const QuizOptions = ({option, options, handleCorrectAnswer}) => {

  // const optionNumber = options.indexOf(option);
  // console.log(optionNumber);

  return (
    <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
     
      <label onClick={() => handleCorrectAnswer(option)} class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-900">
        <span className='pr-3'>
          <input type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        </span>
       {option}</label>
    </div>
  );
};

export default QuizOptions;