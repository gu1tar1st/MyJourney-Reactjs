import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'

function ChatInput({chatMessages, setChatMessage}) {
  const [inputText, setInputText] = useState('');

  // Event is an object containing details about changes
  function saveInputText(event) {
    // event.target.value;
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessage = [
      ...chatMessages, // ... is a spread operator, which copies the values from one array to a new one
      {
        message: inputText,
        sender: 'user',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ]
    setChatMessage(newChatMessage);

    const response = Chatbot.getResponse(inputText);
    setChatMessage([
      ...newChatMessage,
      {
        message: response,
        sender: 'robot',
        key: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ])

    // Controlled input
    setInputText(''); //Empty input after sending
  }

  function clearMessages() {
    localStorage.clear();
    setChatMessage([]);
  }

  /**
   * Lifting the state up:
   * A technique that moves React state into a
   * higher-ranked component so that more components
   * can access that state
   * Ex: move sendChatMessage feature to App component
   * so chatInput can also access it
   * */
  
  return (
    <div className="chat-container"> {/* FRAGMENT <> changed to div */}
      <input 
        required 
        placeholder="Send a message to Chatbot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="input"
      />
      <button onClick={sendMessage} className="send-button">Send</button>
      <button onClick={clearMessages} className="clear-button">Clear</button>
    </div>
    // Class is a reserved keyword, so use className
  );
}

export default ChatInput