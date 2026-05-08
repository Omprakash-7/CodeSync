import React, { useState } from 'react';
import './App.css';
import { Play, LogOut } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import Chat from './components/Chat';

function App() {
  const [isJoined, setIsJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const [files, setFiles] = useState([
    { name: 'App.jsx', content: '// CodeSync Room Ready\nconsole.log("Hello World");', type: 'file' },
    { name: 'styles.css', content: '/* Design here */', type: 'file' }
  ]);
  const [activeFile, setActiveFile] = useState('App.jsx');
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [output, setOutput] = useState("[System] Room connected successfully.");

  const handleGenerateId = () => {
    setRoomId(Math.random().toString(36).substring(2, 9).toUpperCase());
  };

  const handleJoin = () => {
    if (roomId.trim() && username.trim()) setIsJoined(true);
    else alert("Please enter Room ID and Username");
  };

  const handleCodeUpdate = (val) => {
    setFiles(files.map(f => f.name === activeFile ? { ...f, content: val } : f));
  };

  const sendMsg = () => {
    if (chatInput.trim()) {
      setMessages([...messages, {
        id: Date.now(),
        user: username,
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      }]);
      setChatInput("");
    }
  };

  if (!isJoined) {
    return <LandingPage roomId={roomId} setRoomId={setRoomId} username={username} setUsername={setUsername} onJoin={handleJoin} onGenerateId={handleGenerateId} />;
  }

  const currentFile = files.find(f => f.name === activeFile) || files[0];

  return (
    <div className="app-wrapper">
      <nav className="navbar-pro glass">
        <div className="logo">💠 CodeSync | <span style={{ opacity: 0.6, fontSize: '0.8rem' }}>Room: {roomId}</span></div>
        <div className="nav-right">
          <button className="logout-btn" onClick={() => setIsJoined(false)}><LogOut size={14} /> Leave</button>
          <button className="run-btn" onClick={() => setOutput(o => o + "\n>> Executing " + activeFile)}>
            <Play size={14} fill="white" /> Run
          </button>
        </div>
      </nav>

      <div className="main-content">
        <Sidebar files={files} activeFile={activeFile} setActiveFile={setActiveFile} onCreateFile={() => {
          const n = prompt("File Name:");
          if (n) setFiles([...files, { name: n, content: "// " + n, type: 'file' }]);
        }} />
        <main className="editor-console">
          <Editor activeFile={activeFile} code={currentFile.content} onCodeChange={handleCodeUpdate} username={username} />
          <div className="console-card glass">
            <pre className="console-body">{output}</pre>
          </div>
        </main>
        <Chat messages={messages} chatInput={chatInput} setChatInput={setChatInput} onSendMessage={sendMsg} currentUsername={username} />
      </div>
    </div>
  );
}

export default App;