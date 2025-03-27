// src/components/Chat.jsx
import React, { useState } from 'react';
import { getOzwellCompletion } from '../api/ozwell';
import Typewriter from 'typewriter-effect';

function Chat() {
  const [prompt, setPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [error, setError] = useState('');

  const handleGetCompletion = async (e) => {
    e.preventDefault();
    setError('');
    setAiResponse(''); // clear old response

    try {
      const data = await getOzwellCompletion(prompt);
      const content = data.choices?.[0]?.message?.content || "No content found";
      setAiResponse(content);
    } catch (err) {
      setError(err.message);
      console.error("Error calling getOzwellCompletion:", err);
    }
  };

  return (
    <div>
      <h2>Chat with Ozwell</h2>
      <form onSubmit={handleGetCompletion} style={{ marginTop: '1rem' }}>
        <label>
          Prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            style={{ marginLeft: '0.5rem', width: '300px' }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '1rem' }}>
          Send to Ozwell
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '1rem' }}>
          Error: {error}
        </p>
      )}

      {/* If there's a response, show it in a chat bubble with typewriter animation */}
      {aiResponse && (
        <div className="chat-response" style={{ marginTop: '1rem' }}>
          <strong>Ozwell Response:</strong>
          <div style={{ marginTop: '0.5rem' }}>
            <Typewriter
              // Force re-initialization whenever `aiResponse` changes
              key={aiResponse}
              options={{
                delay: 40,     // typing speed (ms per character)
                cursor: '|',   // you can change or remove the blinking cursor
                // loop: false, // if you want it to repeat, you can set loop: true
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(aiResponse)
                  .start();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;