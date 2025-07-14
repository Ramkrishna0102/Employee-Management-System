import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className='bg-[#1c1c1c] p-6 rounded-xl mt-5 shadow-lg'>
      <h2 className='text-2xl font-bold text-white mb-4'>All Employee Tasks</h2>

      <div className='hidden md:flex bg-gradient-to-r from-red-500 to-red-400 text-white py-3 px-6 rounded-lg font-semibold shadow-sm'>
        <div className='w-1/5'>Employee Name</div>
        <div className='w-1/5 text-center'>New</div>
        <div className='w-1/5 text-center'>Active</div>
        <div className='w-1/5 text-center'>Completed</div>
        <div className='w-1/5 text-center'>Failed</div>
      </div>

      <div className='space-y-3 mt-4'>
        {userData && userData.length > 0 ? (
          userData.map((elem, idx) => (
            <div
              key={idx}
              className='flex flex-col md:flex-row items-start md:items-center bg-[#2c2c2c] p-4 rounded-lg hover:bg-[#333] transition-all duration-300 shadow-md'
            >
              <div className='w-full md:w-1/5 font-semibold text-white mb-2 md:mb-0'>{elem.firstName}</div>
              <div className='w-full md:w-1/5 text-center text-blue-400 font-medium'>{elem.taskCounts?.newTask ?? 0}</div>
              <div className='w-full md:w-1/5 text-center text-yellow-400 font-medium'>{elem.taskCounts?.active ?? 0}</div>
              <div className='w-full md:w-1/5 text-center text-green-400 font-medium'>{elem.taskCounts?.completed ?? 0}</div>
              <div className='w-full md:w-1/5 text-center text-red-500 font-medium'>{elem.taskCounts?.failed ?? 0}</div>
            </div>
          ))
        ) : (
          <div className='text-center text-gray-300 mt-10'>No employee data available.</div>
        )}
      </div>
    </div>
  );
};

export default AllTask;
