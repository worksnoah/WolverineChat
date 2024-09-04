function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messagesDiv = document.getElementById('messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = messageText;
        messagesDiv.appendChild(messageDiv);
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
