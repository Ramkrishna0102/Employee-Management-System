import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-emerald-600 to-emerald-800 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-emerald-700 mb-8">Login</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 border border-emerald-500 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-5 py-3 border border-emerald-500 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition duration-300"
          />
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
