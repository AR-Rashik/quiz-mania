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
    <div className=' lg:w-1/2 mx-auto md:w-10/12'>
      <h2 className='text-rose-800 text-3xl text-center mt-8 mb-3'>Quiz Statistics</h2>
      <div className='border-b-2 border-rose-200 mb-8'></div>
      <div className='flex justify-center items-center mt-10'>
        <div>
          <BarChart width={500} height={450} data={total}>
            <Bar dataKey="total" fill="#be123c"></Bar>
            <XAxis dataKey="name" />
              <YAxis dataKey="total" />
              <Tooltip></Tooltip>
          </BarChart>
        </div>
    </div>
    </div>
  );
};

export default Statistics;