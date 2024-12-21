const messagesContainer = document.getElementById("messages");
const textInput = document.getElementById("textInput");
const sendButton = document.getElementById("sendButton");
const micButton = document.getElementById("micButton");

// Back-end API URL
const API_URL = "https://9adf603d-dd8d-4891-9025-2160580ea71d-00-3hh2b81e16l3g.worf.replit.dev/";

// Add a message to the chat box
function addMessage(content, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = content;
  messagesContainer.appendChild(message);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send message to back-end
async function sendMessage() {
  const userInput = textInput.value;
  if (!userInput) return;

  addMessage(userInput, "user");
  textInput.value = "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: userInput }),
    });
    const data = await response.json();
    addMessage(data.result, "bot");
  } catch (error) {
    addMessage("Error: Unable to connect to server.", "bot");
  }
}

// Handle Send button
sendButton.addEventListener("click", sendMessage);

// Handle Enter key press
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

// Handle Voice Input
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "id-ID";

micButton.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const voiceInput = event.results[0][0].transcript;
  textInput.value = voiceInput;
};
