 // A simple chatbot that responds with some predefined answers
 function chatbot(input) {
    // let output = "";
    // if (input.includes("hello") || input.includes("hi")) {
    //   output = "Hello, nice to meet you!";
    // } else if (input.includes("how are you")) {
    //   output = "I'm doing fine, thank you for asking.";
    // } else if (input.includes("what is your name")) {
    //   output = "My name is Jarvis, I'm a chatbot.";
    // } else if (input.includes("what can you do")) {
    //   output = "I can chat with you and answer some simple questions.";
    // } else if (input.includes("tell me a joke")) {
    //   output = "Why did the chicken go to the seance? To get to the other side.";
    // }else if (input) {
    //     output = input;
    // }else {
    //   output = "Sorry, I don't understand that. Please try something else.";
    // }
    return input;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");

    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");

    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;

    let timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.innerText = new Date().toLocaleTimeString();

    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    userMessage.appendChild(timestamp);

    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");

    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");

    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;

    let timestamp = document.createElement("div");
    timestamp.classList.add("timestamp");
    timestamp.innerText = new Date().toLocaleTimeString();

    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    botMessage.appendChild(timestamp);

    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

function showTypingIndicator() {
    let chat = document.getElementById("chat");
    let typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typing-indicator");
    typingIndicator.innerText = "ChatPot is typing...";
    chat.appendChild(typingIndicator);
    chat.scrollTop = chat.scrollHeight;
}

function hideTypingIndicator() {
    let typingIndicator = document.querySelector(".typing-indicator");
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        document.getElementById("input").value = "";

        // Simulate bot response with delay
        showTypingIndicator();
        setTimeout(function() {
            hideTypingIndicator();
            displayBotMessage("This is a response from ChatPot.");
        }, 1000);
    }
}

function clearChat() {
    let chat = document.getElementById("chat");
    chat.innerHTML = "";
}

function sendQuickMessage(event) {
    let message = event.target.getAttribute('data-message');
    if (message) {
        displayUserMessage(message);

        // Simulate bot response with delay
        showTypingIndicator();
        setTimeout(function() {
            hideTypingIndicator();
            displayBotMessage("This is a response from ChatPot.");
        }, 2000);
    }
}

// Add event listeners to quick message buttons
document.querySelectorAll('.quick-message').forEach(button => {
    button.addEventListener('click', sendQuickMessage);
});

// Add event listener to the send button
document.getElementById("button").addEventListener("click", sendMessage);

// Add event listener to the clear button
document.getElementById("clear-button").addEventListener("click", clearChat);

// Add a keypress event listener to the input for the Enter key
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});
