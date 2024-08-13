import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getRandomNumber } from '../../../utils.js';
import { DepartmentBarChart } from './DepartmentBarChart.jsx';

export const Feedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // get employee feedback for n employees where 0 <= n < 100
    const randomNumberOfEmployees = getRandomNumber(0, 100);
    const url = '/api/feedback/' + randomNumberOfEmployees

    axios.get(url)
      .then(({ data }) => {
        setFeedback(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const departmentCount = Object.entries(
    feedback.reduce((acc, { department }) => ({
      ...acc,
      [department]: (acc[department] ?? 0) + 1,
    }), {}
  )).map(([ department, countOfEmployees ]) => ({ department, countOfEmployees }));

  return (
    <div id='data-container'>
      <p>Number of Employees: {feedback.length}</p>
      <DepartmentBarChart departmentCount={departmentCount} />
    </div>
  )
}