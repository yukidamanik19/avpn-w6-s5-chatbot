const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const conversation = [];

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  conversation.push({ role: 'user', message: userMessage });

  const thinkingMessage = appendMessage('bot', 'Thinking...');

  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ conversation }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from server.');
    }

    const data = await response.json();

    if (data.success && data.data) {
      thinkingMessage.textContent = data.data;
      conversation.push({ role: 'model', message: data.data });
    } else {
      thinkingMessage.textContent = 'Sorry, no response received.';
      // Remove the last user message from conversation history if the request fails
      conversation.pop(); 
    }
  } catch (error) {
    console.error('Error:', error);
    thinkingMessage.textContent = 'Failed to get response from server.';
    // Remove the last user message from conversation history if the request fails
    conversation.pop();
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}
