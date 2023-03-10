import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AllQuiz from './components/AllQuiz/AllQuiz';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`)
          },
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/:topicID',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicID}`)
          },
          element: <AllQuiz></AllQuiz>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
