import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {

  const quizzesObject = useLoaderData();
  // console.log(quizes);
  const quizzes = quizzesObject.data;
  console.log(quizzes);

  const {total, name, questions} = quizzes;
  return (
    <div className='lg:w-7/12 md:w-10/12 w-10/12 mx-auto'>
      <h2 className='text-center mt-8 text-rose-800 text-3xl'>Quiz of <span className='font-semibold'>{name}</span></h2>
      <h3 className='text-center font-semibold mt-3 mb-3 text-rose-800 text-xl'>Total quiz {total}</h3>
      <div className='border-b-2 border-rose-200 mb-8'></div>
      {
        questions.map(quiz => <Quiz
          key={quiz.id}
          quiz={quiz}
          questions={questions}
        ></Quiz>)
      }
    </div>
  );
};

export default AllQuiz;