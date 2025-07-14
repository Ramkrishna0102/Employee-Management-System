import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const createdTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((user) => {
      if (user.firstName === asignTo) {
        user.tasks.push(createdTask);
        user.taskCounts.newTask += 1;
      }
      return user;
    });

    setUserData(updatedData);

    // Reset form fields
    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div className='bg-[#1c1c1c] p-6 mt-5 rounded-xl shadow-lg'>
      <h2 className='text-2xl font-bold text-white mb-4'>Create New Task</h2>

      <form onSubmit={submitHandler} className='flex flex-col md:flex-row gap-8'>
        {/* Left Section */}
        <div className='w-full md:w-1/2 space-y-4'>

          <div>
            <label className='block text-sm text-gray-300 mb-1'>Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Make a UI design"
              className='w-full py-2 px-3 rounded bg-[#2a2a2a] text-white border border-gray-500 outline-none focus:border-emerald-500 transition-all'
              required
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300 mb-1'>Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className='w-full py-2 px-3 rounded bg-[#2a2a2a] text-white border border-gray-500 outline-none focus:border-emerald-500 transition-all'
              required
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300 mb-1'>Assign to</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              placeholder="Employee Name"
              className='w-full py-2 px-3 rounded bg-[#2a2a2a] text-white border border-gray-500 outline-none focus:border-emerald-500 transition-all'
              required
            />
          </div>

          <div>
            <label className='block text-sm text-gray-300 mb-1'>Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc"
              className='w-full py-2 px-3 rounded bg-[#2a2a2a] text-white border border-gray-500 outline-none focus:border-emerald-500 transition-all'
              required
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full md:w-1/2 flex flex-col'>
          <label className='block text-sm text-gray-300 mb-1'>Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder='Write detailed task description...'
            className='w-full h-44 p-3 rounded bg-[#2a2a2a] text-white border border-gray-500 outline-none focus:border-emerald-500 resize-none transition-all'
            required
          ></textarea>

          <button
            type='submit'
            className='mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
