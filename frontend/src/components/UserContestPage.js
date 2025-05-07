import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserContestPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [participants, setParticipants] = useState([]);
  const [userId] = useState("12345"); // Example static userId (replace with real auth)
  const [votedIndex, setVotedIndex] = useState(null);

  // Fetch the contest details from backend
  useEffect(() => {
    fetch(`http://localhost:5000/api/contest/${name}`)
      .then(response => response.json())
      .then(data => {
        if (data.participants && Array.isArray(data.participants)) {
          setParticipants(data.participants);
        } else {
          console.error('Participants data is not an array:', data);
        }
      })
      .catch(err => console.error('Error fetching contest data:', err));
  }, [name]);

  const handleVote = (index) => {
    const participantId = participants[index]._id;

    // Make API call to record the vote
    fetch(`http://localhost:5000/api/vote/${participants[index].contestId}/${participantId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }) // Pass userId for validation
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Vote successfully recorded') {
          setVotedIndex(index);  // Disable the vote button after voting
          alert('Your vote has been recorded!');
          navigate('/');  // Redirect to login page after voting
        } else {
          alert(data.message);
        }
      })
      .catch(err => console.error('Error recording vote:', err));
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Contest: {decodeURIComponent(name)}</h1>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {Array.isArray(participants) && participants.length > 0 ? (
          participants.map((participant, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '1rem',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <img
                src={participant.photo}
                alt={participant.name}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h3>{participant.name}</h3>
              <p>{participant.description}</p>
              <button
                disabled={votedIndex !== null}
                onClick={() => handleVote(index)}
                style={{
                  padding: '0.5rem 1rem',
                  background: votedIndex === null ? '#4caf50' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: votedIndex === null ? 'pointer' : 'not-allowed',
                }}
              >
                {votedIndex === index ? 'Voted' : 'Vote'}
              </button>
            </div>
          ))
        ) : (
          <p>No participants available.</p>
        )}
      </div>
    </div>
  );
}

export default UserContestPage;
