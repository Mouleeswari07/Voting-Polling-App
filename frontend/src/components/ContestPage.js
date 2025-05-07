// ContestPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ContestPage() {
    const { name } = useParams();

    return (
        <div style={{ padding: '20px' }}>
            <h1>Manage Contest: {decodeURIComponent(name)}</h1>
            <p>This is where you'll add participants or manage voting for this contest.</p>
            {/* You can add forms and features here */}
        </div>
    );
}

export default ContestPage;
