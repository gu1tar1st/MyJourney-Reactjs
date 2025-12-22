import dayjs from 'dayjs';

function ChatMessage(props) { // Can also be passed {message, sender}
  //const message = props.message;
  //const sender = props.sender;
  //Destructing (shortcut)
  const {message, sender, time} = props;
  
  // if (sender === "user") {
  //   return (
  //     <div>
  //       {message}
  //       <img src="https://supersimple.dev/projects/chatbot/user.png" alt="User.logo" width="50" />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       {sender === "robot" && <img src="https://supersimple.dev/projects/chatbot/robot.png" alt="Robot.logo" width="50" />}
  //       {message}
  //       {sender === "user" && <img src="https://supersimple.dev/projects/chatbot/user.png" alt="User.logo" width="50" />}
  //     </div>
  //   );
  // }
  return (
    <div className={
      sender === "robot" ? "robot-message" : "user-message"
    }>
      {sender === "robot" && (
        <img src="https://supersimple.dev/projects/chatbot/robot.png" alt="Robot.logo" className="profile-image" />
      )}
      <div className="chat-content">
        {message}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>
      {sender === "user" && (
        <img src="https://supersimple.dev/projects/chatbot/user.png" alt="User.logo" className="profile-image" />)}
    </div>
  );
}

export default ChatMessage;