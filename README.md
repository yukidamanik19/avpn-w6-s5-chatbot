---

# Simple Web Chatbot with Gemini API

A simple web chatbot application powered by the Google Gemini API, built with a Node.js/Express backend and a pure Vanilla JavaScript frontend.

![Chatbot Screenshot](https://via.placeholder.com/700x400.png?text=Your+Chatbot+Screenshot+Here)
*(You can replace the placeholder image above with a screenshot or GIF of your project)*

## Description

This project is a basic implementation of a chatbot that allows users to interact with the Google Gemini AI model. The backend, built with Node.js and Express, serves as an intermediary to securely communicate with the Gemini API, while the lightweight, framework-less frontend (Vanilla JS) provides a responsive chat interface.

The main goal of this project is to demonstrate how to integrate a generative AI into a web application using a popular and minimalist tech stack.

## Tech Stack

-   **Frontend**:
    -   HTML5
    -   CSS3
    -   JavaScript (Vanilla)
-   **Backend**:
    -   Node.js
    -   Express.js
-   **AI**:
    -   Google Gemini API

## Features

-   **Interactive Chat Interface**: A clean and simple chat UI for sending and receiving messages.
-   **Real-time Communication (Simulated)**: User messages are displayed instantly, followed by a "Thinking..." indicator while waiting for the AI's reply.
-   **Gemini API Integration**: The backend handles requests from the frontend and forwards them to the Google Gemini API to get intelligent responses.
-   **Basic Error Handling**: Provides feedback to the user in case of a failure to retrieve a response from the server.
-   **Minimalist Design**: Focuses on core functionality without dependencies on external frontend libraries or frameworks.

## API Documentation

The project exposes a single API endpoint to handle the chat conversation.

-   **Endpoint**: `POST /api/chat`
-   **Description**: Sends the user's message to the backend to be processed by the Gemini API.
-   **Request Body**:
    ```json
    {
      "conversation": [
        {
          "role": "user",
          "message": "<user_message_content>"
        }
      ]
    }
    ```
-   **Success Response**:
    ```json
    {
      "sucess": true,
      "data": "<gemini_ai_response>",
      "message": null
    }
    ```

## Getting Started

To run this project in your local environment, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install backend dependencies:**
    ```bash
    npm install
    ```

3.  **Configure environment variables:**
    -   Create a `.env` file in the project's root directory.
    -   Add your Google Gemini API key to this file. You can get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```
    GOOGLE_API_KEY="YOUR_API_KEY_HERE"
    ```

4.  **Run the backend server:**
    ```bash
    npm start
    ```
    Or, if you are using `nodemon` for development:
    ```bash
    npm run dev
    ```

5.  **Open the application in your browser:**
    Open your browser and navigate to `http://localhost:3000` (or the port you have configured in your Express server).
