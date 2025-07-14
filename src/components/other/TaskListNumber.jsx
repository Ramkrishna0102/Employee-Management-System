import React from 'react'
// npm install recharts

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TaskListNumbers = ({ data }) => {
  const { newTask, completed, active, failed } = data.taskCounts;

  const totalAssigned = newTask + active + completed + failed;
  const completionRate = totalAssigned > 0 ? ((completed / totalAssigned) * 100).toFixed(1) : 0;

  const chartData = [
    { name: 'New', value: newTask },
    { name: 'Active', value: active },
    { name: 'Completed', value: completed },
    { name: 'Failed', value: failed },
  ];

  return (
    <div className='mt-10 bg-[#1c1c1c] p-6 rounded-xl shadow-lg text-white'>

      <h2 className='text-2xl font-bold mb-6'>Task Summary</h2>

      {/* Task Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='rounded-xl py-6 px-6 bg-blue-500 shadow-md'>
          <h2 className='text-3xl font-bold'>{newTask}</h2>
          <p className='text-lg mt-1 font-medium'>New Tasks</p>
        </div>
        <div className='rounded-xl py-6 px-6 bg-green-500 shadow-md'>
          <h2 className='text-3xl font-bold'>{completed}</h2>
          <p className='text-lg mt-1 font-medium'>Completed</p>
        </div>
        <div className='rounded-xl py-6 px-6 bg-yellow-400 text-black shadow-md'>
          <h2 className='text-3xl font-bold'>{active}</h2>
          <p className='text-lg mt-1 font-medium'>Active</p>
        </div>
        <div className='rounded-xl py-6 px-6 bg-red-500 shadow-md'>
          <h2 className='text-3xl font-bold'>{failed}</h2>
          <p className='text-lg mt-1 font-medium'>Failed</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className='mt-10'>
        <h3 className='text-lg font-semibold mb-2'>Employee Progress</h3>
        <div className='w-full bg-gray-700 h-6 rounded-full overflow-hidden'>
          <div
            className='bg-emerald-500 h-full text-xs text-center text-white flex items-center justify-center transition-all duration-300'
            style={{ width: `${completionRate}%` }}
          >
            {completionRate}% Completed
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className='mt-10'>
        <h3 className='text-lg font-semibold mb-4'>Task Breakdown</h3>
        <div className='w-full h-64'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" stroke='#ccc' />
              <YAxis stroke='#ccc' />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

export default TaskListNumbers;
