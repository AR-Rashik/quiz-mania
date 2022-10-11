import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const Quiz = ({quiz, questions}) => {

  const {id, correctAnswer, options, question} = quiz;

  const quizIndex = questions.indexOf(quiz);
  let quizNumber = quizIndex + 1;

  const handleCorrectAnswer = (option) => {
    if(correctAnswer === option){
      alert("Correct Answer")
    }
    else{
      alert("Not Correct");
    }
  }

  return (
    <div className='mx-auto mb-5'>
      <div className='bg-gray-300'>
        <h4>Quiz {quizNumber} : {question}</h4>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-3 gap-3'>
          {
            options.map(option => <QuizOptions
              key={id}
              option={option}
              options={options}
              handleCorrectAnswer={handleCorrectAnswer}
            ></QuizOptions>)
          }
        </div>
      </div>
    </div>
  );
};

export default Quiz;