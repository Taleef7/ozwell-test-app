// src/components/TestCredentials.jsx
import React from 'react';
import { testOzwellCredentials } from '../api/ozwell';

function TestCredentials() {
  const handleTestCredentials = async () => {
    try {
      const data = await testOzwellCredentials();
      alert(`Credentials test success: ${data.message}`);
      console.log("Credentials test response:", data);
    } catch (err) {
      alert(`Error testing credentials: ${err.message}`);
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Test Credentials</h2>
      <button type="submit" onClick={handleTestCredentials}>
        Test Credentials
      </button>
    </div>
  );
}

export default TestCredentials;