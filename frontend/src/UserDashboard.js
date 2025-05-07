import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [contests, setContests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/contests')
      .then(res => res.json())
      .then(data => {
        console.log(data); // Log the contests data to check what is being returned
        setContests(data);
      })
      .catch(err => console.error('Error fetching contests:', err));
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {contests.length > 0 ? (
        contests.map((c, i) => (
          <div key={i}>
            <button onClick={() => navigate(`/user/contest/${encodeURIComponent(c.name)}`)}>
              {c.name}
            </button>
          </div>
        ))
      ) : (
        <p>No contests available</p>
      )}
    </div>
  );
}

export default UserDashboard;
