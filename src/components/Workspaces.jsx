// src/components/Workspaces.jsx
import React, { useState } from 'react';
import { listWorkspaces, createWorkspace } from '../api/ozwell';

function Workspaces() {
  const [workspaces, setWorkspaces] = useState([]);
  const [workspaceName, setWorkspaceName] = useState('');
  const [externalId, setExternalId] = useState('');

  // List existing workspaces
  const handleListWorkspaces = async () => {
    try {
      const data = await listWorkspaces();
      setWorkspaces(data.workspaces || []);
    } catch (err) {
      console.error("Error listing workspaces:", err);
      alert(`Error: ${err.message}`);
    }
  };

  // Create a new workspace
  const handleCreateWorkspace = async (e) => {
    e.preventDefault();
    try {
      const metaData = externalId ? { externalId } : {};
      const data = await createWorkspace(workspaceName, metaData);
      alert(`Workspace created! ID: ${data.workspaceId}`);
      // Refresh the list after creation
      handleListWorkspaces();
    } catch (err) {
      console.error("Error creating workspace:", err);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Workspaces</h2>

      {/* Button to list workspaces */}
      <button type="submit" onClick={handleListWorkspaces}>
        List Workspaces
      </button>

      {/* Display workspace list */}
      {workspaces.length > 0 && (
        <ul style={{ marginTop: '1rem' }}>
          {workspaces.map((ws, idx) => (
            <li key={idx}>
              {ws.name} (ID: {ws.id || 'N/A'})
            </li>
          ))}
        </ul>
      )}

      {/* Form to create a workspace */}
      <form onSubmit={handleCreateWorkspace} style={{ marginTop: '1rem' }}>
        <div>
          <label>Workspace Name:</label>
          <input
            type="text"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <label>External ID (optional):</label>
          <input
            type="text"
            value={externalId}
            onChange={(e) => setExternalId(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>
          Create Workspace
        </button>
      </form>
    </div>
  );
}

export default Workspaces;