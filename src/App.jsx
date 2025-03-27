// src/App.jsx
import React, { useState } from 'react';
import './App.css'; // New global styles
import TestCredentials from './components/TestCredentials';
import Chat from './components/Chat';
import Workspaces from './components/Workspaces';

function App() {
  const [currentTab, setCurrentTab] = useState('chat');

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header">
        <h1>Ozwell AI Sample App</h1>
      </header>

      {/* Navigation */}
      <nav className="tab-nav">
        <button
          onClick={() => setCurrentTab('test')}
          className={currentTab === 'test' ? 'active-tab' : ''}
        >
          Test Credentials
        </button>
        <button
          onClick={() => setCurrentTab('chat')}
          className={currentTab === 'chat' ? 'active-tab' : ''}
        >
          Chat
        </button>
        <button
          onClick={() => setCurrentTab('workspaces')}
          className={currentTab === 'workspaces' ? 'active-tab' : ''}
        >
          Workspaces
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {currentTab === 'test' && (
          <section className="content-card">
            <TestCredentials />
          </section>
        )}
        {currentTab === 'chat' && (
          <section className="content-card">
            <Chat />
          </section>
        )}
        {currentTab === 'workspaces' && (
          <section className="content-card">
            <Workspaces />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;