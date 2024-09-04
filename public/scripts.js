async function fetchMessages() {
    const response = await fetch('/messages');
    const messages = await response.json();
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    messages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message.text;
        messagesDiv.appendChild(messageDiv);
    });
}

async function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    if (messageText) {
        const response = await fetch('/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: messageText })
        });
        if (response.ok) {
            messageInput.value = '';
            fetchMessages();
        }
    }
}

// Load messages on page load
window.onload = fetchMessages;
