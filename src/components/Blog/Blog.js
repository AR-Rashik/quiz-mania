import React from 'react';

const Blog = () => {
  return (
    <div className='mt-10'>
      <div className='text-3xl text-center mb-5 border-b-2 w-9/12 pb-3 mx-auto font-bold'>Blog</div>
      <div className='w-9/12 mx-auto border-2 border-gray-400 p-3 mb-8 rounded-md shadow-md'>
        <h3 className='font-semibold text-xl mb-4 border-b-2 pb-2'>1. What is the purpose of react router?</h3>
        <div className='text-lg'>
        Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br />
        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. <br />
        React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
        </div>
      </div>
      <div className='w-9/12 mx-auto border-2 border-gray-400 p-3 mb-8 rounded-md shadow-md'>
        <h3 className='font-semibold text-xl mb-4'>2. How does context API works?</h3>
        <div className='text-lg'>
          React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it (usually you are only able to pass data from parent to child via props). <br />
          Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it. <br />
          React context API, In this article you will explore what is Context API and how to use it in your React project. The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. <br />
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

          Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. <br />
          React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.
        </div>
      </div>
      <div className='w-9/12 mx-auto border-2 border-gray-400 p-3 mb-8 rounded-md shadow-md'>
        <h3 className='font-semibold text-xl mb-4'>3. What is useRef hook?</h3>
        <div className='text-lg'>
        useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.<br />
        Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br />

        You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes. <br />

        However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes. <br />

        This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render. <br />

        Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead. <br />
        </div>
      </div>
    </div>
  );
};

export default Blog;