import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Home = () => {
  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Welcome to Department Voting System
      </h1>
      <div className="login-buttons flex space-x-4">
        <Link to="/user-login">
          <button className="btn px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            User Login
          </button>
        </Link>
        <Link to="/admin-login">
          <button className="btn px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Admin Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
