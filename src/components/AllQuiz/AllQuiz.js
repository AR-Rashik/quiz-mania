import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const AllQuiz = () => {

  const quizzesObject = useLoaderData();
  // console.log(quizes);
  const quizzes = quizzesObject.data;
  console.log(quizzes)

  const {name, questions} = quizzes;
  return (
    <div className='lg:w-7/12 md:w-10/12 w-10/12 mx-auto'>
      <h2 className='text-center'>Quiz of: {name}</h2>
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