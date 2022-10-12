import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {

  const [total, setTotal] = useState([]);

  useEffect(() => {
    axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
          const topics = data.data.data;
          console.log(topics);
          const topicsData = topics.map(topic => {
            const topicName = topic.name;
            const totalQuiz = topic.total;

            const singleTopic = {
              name: topicName,
              total: totalQuiz
            }

            return singleTopic;
          })

          console.log(topicsData);
          setTotal(topicsData);
        });
  }, [])

  console.log(total);

  return (
    <div className='flex justify-center items-center lg:w-1/2 mx-auto md:w-10/12'>
      <div>
        <BarChart width={400} height={450} data={total}>
          <Bar dataKey="total" fill="#8884d8"></Bar>
          <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;