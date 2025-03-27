// src/api/ozwell.js

export async function testOzwellCredentials() {
    try {
      const response = await fetch("https://ai.bluehive.com/api/v1/test-credentials", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OZWELL_API_KEY}`,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        // If the response code isn't 2xx, handle it
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to test credentials");
      }

      const data = await response.json();
      // Expecting something like:
      // { logId: "...", message: "Credentials test successful", status: 200 }
      return data;
    } catch (error) {
      console.error("Test credentials error:", error);
      throw error;
    }
}


export async function getOzwellCompletion(promptText) {
    try {
      const response = await fetch("https://ai.bluehive.com/api/v1/completion", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OZWELL_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: promptText,
          systemMessage: "You are a helpful chatbot named Will. Can you confirm this please, Will?"
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error calling Ozwell Completions API");
      }

      const data = await response.json();
      return data; // typically { logId, status, choices: [ ... ] }
    } catch (error) {
      console.error("Completions API error:", error);
      throw error;
    }
}




// 1. List Workspaces
export async function listWorkspaces() {
    try {
      const response = await fetch("https://ai.bluehive.com/api/v1/workspaces/list", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OZWELL_API_KEY}`,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error listing workspaces");
      }

      const data = await response.json();
      // Expected structure:
      // {
      //   "logId": "...",
      //   "status": 200,
      //   "workspaces": [ ...list of workspaces... ]
      // }
      return data;
    } catch (error) {
      console.error("Workspaces list error:", error);
      throw error;
    }
  }

  // 2. Create Workspace
  export async function createWorkspace(name, metaData = {}) {
    try {
      const response = await fetch("https://ai.bluehive.com/api/v1/workspaces/create", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OZWELL_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          metaData
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error creating workspace");
      }

      const data = await response.json();
      // Expected structure:
      // {
      //   "logId": "...",
      //   "status": 200,
      //   "workspaceId": "..."
      // }
      return data;
    } catch (error) {
      console.error("Workspaces create error:", error);
      throw error;
    }
  }
