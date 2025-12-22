import { useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage';

function Chat({chatMessages}) {
  // State: data connected to html
  // Use State so that chat message can reset every time it is updated

  // const array = React.useState(
  //   [
  //     {
  //       message: 'hello chatbot',
  //       sender: 'user',
  //       key: 'id1'
  //     }, {
  //       message: 'how can i help you?',
  //       sender: 'robot',
  //       key: 'id2'
  //     }, {
  //       message: 'can you get me todays date?',
  //       sender: 'user',
  //       key: 'id3'
  //     }, {
  //       message: 'today is September 27',
  //       sender: 'robot',
  //       key: 'id4'
  //     }
  //   ]
  // ); // Array: list of values, group values in objects as {}
  
  // // React.useState() returns an array of 2 rows, row 0 contains all data, row 1 contains function that helps update data in row 0
  // // const chatMessages = array[0];
  // // const setChatMessage = array[1]; // The only way to update data and also HTML
  
  // // Array Destructuring
  // const [chatMessages, setChatMessage] = array;
  
  // function sendMessage() {
  //   // Copy the messages array and modify the copy
  //   setChatMessage([
  //     ...chatMessages, // ... is a spread operator, which copies the values from one array to a new one
  //     {
  //       message: 'test',
  //       sender: 'user',
  //       key: crypto.randomUUID()
  //     }
  //   ]);
  // }

  // Automatically safe HTML element from component
  const chatMessagesRef = useRef(null);

  // Every time the component is called, this hook will run
  // Empty array parameter, only run once after the component is created
  // Dynamic array parameter (dependency array), runs after the update of array
  useEffect(() => {
    const containerElement = chatMessagesRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight; // Go to the latest message segment
    }
  }, [chatMessages]);
  
  const chatMessageComponents = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage 
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.key} // React track changes in data
        time={chatMessage.time}
      />
    )
  }); // Go through each value, run the function, and return new value

  return (
    <div className="message-container" ref={chatMessagesRef}>
      {chatMessageComponents}
    </div>
  )
}

export default Chat