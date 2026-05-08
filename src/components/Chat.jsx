import React from 'react';
import { SendHorizontal, Users, Video, Phone, MoreVertical } from 'lucide-react';

const Chat = ({ messages, chatInput, setChatInput, onSendMessage, currentUsername }) => {
    return (
        <aside className="chat-pro glass">
            <div className="chat-header">
                <div className="chat-title"><Users size={18} /> Team Chat</div>
                <div className="chat-icons">
                    <Video size={16} className="pointer" />
                    <Phone size={16} className="pointer" />
                    <MoreVertical size={16} className="pointer" />
                </div>
            </div>
            <div className="chat-feed">
                {messages.map(m => (
                    <div key={m.id} className={`chat-bubble ${m.user === currentUsername ? 'me' : ''}`}>
                        <div className="msg-meta">
                            <span>{m.user}</span>
                            <span>{m.time}</span>
                        </div>
                        <div className="msg-text">{m.text}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input-pro">
                <input
                    placeholder="Message..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSendMessage()}
                />
                <SendHorizontal
                    size={22}
                    color="#a855f7"
                    className="pointer"
                    onClick={onSendMessage}
                />
            </div>
        </aside>
    );
};

export default Chat;