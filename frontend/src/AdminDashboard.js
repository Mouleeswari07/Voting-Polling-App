// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
    const [contestName, setContestName] = useState('');
    const [contests, setContests] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/contests')
            .then(res => res.json())
            .then(data => setContests(data))
            .catch(err => console.error('Error fetching contests:', err));
    }, []);

    const handleCreateContest = (e) => {
        e.preventDefault();
        if (contestName.trim()) {
            fetch('http://localhost:5000/api/contest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: contestName }),
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`);
                    }
                    return res.json();
                })
                .then(data => {
                    if (data.error) {
                        alert(`Error: ${data.error}`);
                    } else {
                        alert(data.message);
                        setContests([...contests, data.contest]);
                        setContestName('');
                        navigate(`/contest/${encodeURIComponent(data.contest.name)}`);
                    }
                })
                .catch(err => {
                    alert('Error creating contest');
                    console.error('Error details:', err);
                });
        }
    };

    return (
        <div className="admin-container">
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin! Here you can manage the voting system.</p>

            <form className="create-contest-form" onSubmit={handleCreateContest}>
                <h2>Create a New Contest</h2>
                <input
                    type="text"
                    placeholder="Enter contest name"
                    value={contestName}
                    onChange={(e) => setContestName(e.target.value)}
                />
                <button type="submit">Create Contest</button>
            </form>

            <div className="existing-contests">
                <h2>Existing Contests</h2>
                {contests.length === 0 ? (
                    <p>No contests created yet.</p>
                ) : (
                    <ul>
                        {contests.map((contest, index) => (
                            <li key={index}>
                                <button onClick={() => navigate(`/contest/${encodeURIComponent(contest.name)}`)}>
                                    {contest.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;

