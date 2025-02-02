const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");

// Create message element with dynamic classes and return it
const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
  e.preventDefault();

  // Create and display user message
  const messageContent = `<div class="message-text">${userMessage}</div>`;
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  chatBody.appendChild(outgoingMessageDiv);
};

//Handle Enter Key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim(); // trim elimina los espacios en blanco
  if (e.key === "Enter" && userMessage) {
    handleOutgoingMessage(e);
  }
});

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));
