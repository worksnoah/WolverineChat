const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

const messagesFile = path.join(__dirname, 'messages.json');

// Load messages from file
function loadMessages() {
    if (fs.existsSync(messagesFile)) {
        return JSON.parse(fs.readFileSync(messagesFile));
    }
    return [];
}

// Save messages to file
function saveMessages(messages) {
    fs.writeFileSync(messagesFile, JSON.stringify(messages));
}

// Get all messages
app.get('/messages', (req, res) => {
    res.json(loadMessages());
});

// Post a new message
app.post('/messages', (req, res) => {
    const newMessage = req.body;
    const messages = loadMessages();
    messages.push(newMessage);
    saveMessages(messages);
    res.status(201).json(newMessage);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
