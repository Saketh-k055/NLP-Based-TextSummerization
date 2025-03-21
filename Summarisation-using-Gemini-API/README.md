# Text Summarizer with Gemini API

This project is a *Text Summarizer* application that takes a user-provided paragraph and generates a concise summary using the *Gemini API. It features a modern, interactive user interface built with **React.js* and a secure backend powered by *Node.js*. The design incorporates elements from [UIverse.io](https://uiverse.io).

---

## Features

- *Interactive User Interface*: Built with React.js and styled using UIverse.io components.
- *Accurate Summarization*: Utilizes the Gemini API for precise and concise text summarization.
- *Real-Time Results*: Submit a paragraph and instantly receive a summarized version.
- *Responsive Design*: Optimized for desktops, tablets, and mobile devices.
- *Secure Backend Integration*: Node.js backend handles API requests securely.

---

## Technologies Used

### Frontend:
- *React.js* for building the user interface.
- *CSS3* for styling.
- *UI Components* from [UIverse.io](https://uiverse.io).

### Backend:
- *Node.js* with Express for API handling.
- *Dotenv* for managing environment variables.

### API:
- *Gemini API* for performing text summarization.

---

## Prerequisites

Ensure you have the following installed:
- *Node.js* (v14+)
- *npm* or *yarn*
- Gemini API key

---

## Installation and Setup

Follow these steps to set up the project:

### 1. Clone the Repository
```bash
git clone https://github.com/DenzilSerrao/Summarisation-using-Gemini-API.git
cd Summarisation-using-Gemini-API
```

### 2. Backend Setup (Node.js)

Navigate to the backend folder:

```bash

cd server
```

#### 3.Install dependencies:

```bash

npm install
```

#### 4. Create a .env file in the server directory and add your Gemini API key:

```bash env
GEMINI_API_KEY=your_api_key_here
```

#### 5. Start the backend server:

```bash

npm start
```

The backend server will run on http://localhost:5000.

### Frontend Setup (React.js)

Navigate to the frontend folder:

```bash

cd ../client
```

#### 3.Install dependencies:

```bash

npm install
```

### Start the React development server:

#### 3.Install dependencies:

```bash

npm start
```

The frontend will run on http://localhost:3000.

## Usage

Start both the backend server (server) and the React frontend (client).
Open your browser and go to http://localhost:3000.
Enter a paragraph in the input field provided.
Click the "Summarize" button.
View the summarized text displayed below the input area.

## Acknowledgments

#### Gemini API: For providing advanced text summarization capabilities.
#### UIverse.io: For inspiring UI components.
#### The React.js and Node.js communities for their fantastic tools and resources.