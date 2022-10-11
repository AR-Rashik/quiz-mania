import React, { useState } from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid';

const Quiz = ({quiz, questions}) => {

  const {id, correctAnswer, options, question} = quiz;

  const quizIndex = questions.indexOf(quiz);
  let quizNumber = quizIndex + 1;

  const [answer, setAnswer] = useState();

  const handleBtn = () => {
    const message = <p>Correct answer is: {correctAnswer}</p>
    setAnswer(message);
  }

  

  return (
    <div className='mx-auto mb-5'>
      <div className='bg-gray-300 relative'>
        <h4>Quiz {quizNumber} : {question}</h4>
        <EyeIcon onClick={handleBtn}  className="h-6 w-6 text-gray-700 absolute top-1 right-2"/>
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