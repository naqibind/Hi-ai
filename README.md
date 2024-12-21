# AI Chatbot Deployment

This project contains both the front-end and back-end for an AI chatbot.

## Features
- Text-based chatbot powered by OpenAI API.
- Voice input using Web Speech API.
- Modern and responsive design.

## Deployment
Follow the steps to deploy this project on free platforms like Render or Railway.

### 1. Back-end Setup
1. Replace `"your-openai-api-key"` in `app.py` with your OpenAI API key.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask app locally:
   ```bash
   python app.py
   ```

### 2. Front-end Setup
- Open `index.html` in a browser to test locally.
- Deploy to a hosting service like Netlify or Vercel.

### 3. Deployment with Docker
1. Build the Docker image:
   ```bash
   docker build -t ai-chatbot .
   ```
2. Run the container:
   ```bash
   docker run -p 5000:5000 ai-chatbot
   ```

### Notes
- Ensure the `API_URL` in `script.js` points to your deployed back-end URL.
