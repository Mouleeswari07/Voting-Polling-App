// src/components/UserDashboard.js
import React from 'react';

function UserDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Welcome User</h2>
                <p className="text-gray-600 text-center">This is the User Dashboard.</p>
            </div>
        </div>
    );
}

export default UserDashboard;
