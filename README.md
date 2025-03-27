# Ozwell AI Sample App

A sample application built with React and Vite that integrates with the Ozwell API. This project demonstrates how to:
- Test Ozwell API credentials.
- Chat with Ozwell using a typewriter effect.
- Manage workspaces (list and create).
- Maintain a persistent conversation history similar to ChatGPT.

## Features

- **Test Credentials**: Quickly test your Ozwell API key.
- **Chat Interface**: Interact with Ozwell's AI via a chat interface featuring a typewriter animation for responses.
- **Chat History**: Keep a log of the conversation so you can scroll through previous messages.
- **Workspace Management**: List and create workspaces through the Ozwell API.
- **Modern Dark UI**: A centered, clean, black-and-white theme inspired by ChatGPT and OpenWebUI.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/ozwell-test-app.git
   ```

2. **Navigate to the Project Folder:**
   ```bash
   cd ozwell-test-app
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set Up Environment Variables:** Create a .env file in the project root and add your Ozwell API key:
   ```bash
   VITE_OZWELL_API_KEY="BHSK-sandbox-<YOUR-API-KEY>"
   ```

Ensure .env is included in your .gitignore to avoid committing sensitive information.


## Running the Application
Start the development server with:
```bash
npm run dev
# or
yarn run dev
```
Open your browser and navigate to http://localhost:5173 to see the app in action.


## Project Structure
```bash
ozwell-test-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── ozwell.js         # Ozwell API integration functions
│   ├── components/
│   │   ├── Chat.jsx          # Chat component with typewriter effect
│   │   ├── TestCredentials.jsx  # Component to test API credentials
│   │   └── Workspaces.jsx    # Component for workspace management (list/create)
│   ├── App.jsx               # Main app component with tab navigation
│   ├── App.css               # Global styles
│   └── main.jsx              # Entry point
├── .env                      # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md
```

## Usage
### Testing API Credentials
1. Switch to the Test Credentials tab.

2. Click the Test Credentials button to verify that your Ozwell API key is valid. A success message will be displayed if the credentials are correct.

### Chat with Ozwell
1. Go to the Chat tab.

2. Enter your prompt in the input field and click Send to Ozwell.

3. The chat interface will display your prompt and animate Ozwell's response using a typewriter effect.

### Managing Workspaces
1. Open the Workspaces tab.

2. Click List Workspaces to retrieve existing workspaces.

3. Use the provided form to create a new workspace by entering a name (and optionally, an external ID).

Contributing
Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- [Ozwell API Documentation](https://ozwell.ai/docs-category/api/?utm_source=bluehive&utm_medium=developers&utm_campaign=api-docs)
- [Vite](https://vitejs.dev)
- [React](https://reactjs.org)
- [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)