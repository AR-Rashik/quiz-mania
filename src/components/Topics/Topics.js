import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Topic from '../Topic/Topic';

const Topics = () => {

  const topicsObject = useLoaderData();
  // console.log(topicsObject);
  const topics = topicsObject.data;
  console.log(topics);

  return (
    <div>
      <Banner></Banner>
      <div className="container w-10/12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 pt-6 gap-6 mb-10">
        {
          topics.map( topic => <Topic
            key={topic.id}
            topic={topic}
          ></Topic>)
        }
      </div>
    </div>
  );
};

export default Topics;