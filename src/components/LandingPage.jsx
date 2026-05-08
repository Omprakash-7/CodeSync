import React from 'react';

const LandingPage = ({ roomId, setRoomId, username, setUsername, onJoin, onGenerateId }) => {
    return (
        <div className="landing-wrapper">
            <div className="landing-card glass">
                <div className="landing-logo">💠 CodeSync</div>
                <h3>Create or Join a Room</h3>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Room ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="landing-actions">
                    <button className="join-btn" onClick={onJoin}>Join Workspace</button>
                    <p className="create-link">
                        No ID? <span onClick={onGenerateId} className="pointer">Generate Unique ID</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;