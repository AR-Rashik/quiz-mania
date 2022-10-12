import React, { useState } from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({quiz, questions}) => {

  const {id, correctAnswer, options, question} = quiz;
  const slicedQuestion = question.slice(3, -4);

  const quizIndex = questions.indexOf(quiz);
  let quizNumber = quizIndex + 1;

  const [answer, setAnswer] = useState();

  const handleBtn = () => {
    const message = <p className='text-center mt-4 text-rose-800'>Correct answer: <span className='font-semibold text-md'>{correctAnswer}</span></p>
    setAnswer(message);
  }

  

  return (
    <div className='mx-auto mb-5'>
      <div className='bg-rose-100 relative p-4 rounded-md'>
        <h4 className='text-center text-rose-800 text-lg font-medium my-3 mx-16'>Quiz {quizNumber} : {slicedQuestion}</h4>
        <EyeIcon onClick={handleBtn}  className="h-6 w-6 text-rose-800 hover:text-rose-600 absolute top-2 right-2 cursor-pointer"/>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-3 gap-3'>
          {
            options.map(option => <QuizOptions
              key={id}
              option={option}
              options={options}
              correctAnswer={correctAnswer}
            ></QuizOptions>)
          }
        </div>
        {
          answer
        }
      </div>
      
    </div>
  );
};

export default Quiz;