import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    if (messageInput !== "") {
      setMessages((prev) => {
        return [...prev, messageInput];
      });
      setMessageInput("");
    } else {
      alert("Please enter something");
    }
  };

  const deleteMessageHandle = (messageIndex) => {
    const newMessages = messages.filter((item, index) => {
      return index !== messageIndex;
    });

    setMessages(newMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form onSubmit={submitHandle} className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button">Submit</button>
      </form>
      <div className="board">
        {messages.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                onClick={() => deleteMessageHandle(index)}
                className="delete-button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
