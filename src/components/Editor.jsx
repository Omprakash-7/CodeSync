import React from 'react';

const Editor = ({ activeFile, code, onCodeChange, username }) => {
    return (
        <div className="editor-card glass">
            <div className="tab-bar">
                <div className="tab active-tab">{activeFile}</div>
                <div className="online-info">
                    Active: <span style={{ color: '#a855f7', marginLeft: '5px' }}>{username}</span>
                </div>
            </div>
            <div className="editor-body">
                <div className="lines">
                    {code.split('\n').map((_, i) => <div key={i}>{i + 1}</div>)}
                </div>
                <textarea
                    className="code-area"
                    value={code}
                    onChange={(e) => onCodeChange(e.target.value)}
                    spellCheck="false"
                />
            </div>
        </div>
    );
};

export default Editor;