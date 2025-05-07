// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import ContestPage from './components/ContestPage';
import UserContestPage from './components/UserContestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"        element={<Login />} />
        <Route path="/admin"   element={<AdminDashboard />} />
        <Route path="/user"    element={<UserDashboard />} />
        <Route path="/contest/:name"      element={<ContestPage />} />
        <Route path="/user/contest/:name" element={<UserContestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
