import { useState } from 'react'
import './App.css'

// Components
import ChatInput from './components/ChatInput'
import Chat from './components/Chat'

function App() {
  const array = useState(
    [
      // {
      //   message: 'hello chatbot',
      //   sender: 'user',
      //   key: 'id1'
      // }, {
      //   message: 'how can i help you?',
      //   sender: 'robot',
      //   key: 'id2'
      // }, {
      //   message: 'can you get me todays date?',
      //   sender: 'user',
      //   key: 'id3'
      // }, {
      //   message: 'today is September 27',
      //   sender: 'robot',
      //   key: 'id4'
      // }
    ]
  ); // Array: list of values, group values in objects as {}
  
  // React.useState() returns an array of 2 rows, row 0 contains all data, row 1 contains function that helps update data in row 0
  // const chatMessages = array[0];
  // const setChatMessage = array[1]; // The only way to update data and also HTML
  
  // Array Destructuring
  const [chatMessages, setChatMessage] = array;

  return (
    <div className="app-container"> {/* container */}
      
      <Chat 
        chatMessages={chatMessages}
      />
      <ChatInput 
        chatMessages={chatMessages}
        setChatMessage={setChatMessage}
      />
    </div>
  );
}

export default App
