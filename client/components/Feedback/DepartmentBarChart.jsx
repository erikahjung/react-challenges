import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

export const DepartmentBarChart = ({ departmentCount }) => {
  return (
    <BarChart height={600} width={1200} data={departmentCount}>
      <CartesianGrid/>
      <XAxis dataKey='department'/>
      <YAxis />
      <Tooltip/>
      <Bar dataKey='countOfEmployees' fill='blue'/>
      <Legend/>
    </BarChart>    
  )
}