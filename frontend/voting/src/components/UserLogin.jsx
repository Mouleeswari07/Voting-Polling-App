// src/components/UserLogin.js
import React, { useState } from 'react';
import './UserLogin.css';

const UserLogin = () => {
  const [rollNo, setRollNo] = useState('');
  const [password, setPassword] = useState('');
  const [contests, setContests] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulate login API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rollNo, password }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        fetchContests(); // Fetch contests after successful login
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const fetchContests = async () => {
    try {
      // Simulate fetching contests from API
      const response = await fetch('/api/contests');
      if (response.ok) {
        const data = await response.json();
        setContests(data);
      } else {
        console.error('Failed to fetch contests');
      }
    } catch (error) {
      console.error('Error fetching contests:', error);
    }
  };

  const handleVote = async (contestId) => {
    try {
      // Simulate voting API call
      const response = await fetch(`/api/vote/${contestId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Vote submitted successfully!');
      } else {
        alert('Failed to submit vote');
      }
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">User Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Available Contests</h2>
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        {contests.length > 0 ? (
          contests.map((contest) => (
            <div key={contest.id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-bold">{contest.name}</h3>
              <p className="text-gray-700">{contest.description}</p>
              <button
                onClick={() => handleVote(contest.id)}
                className="mt-2 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
              >
                Vote
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No contests available.</p>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
