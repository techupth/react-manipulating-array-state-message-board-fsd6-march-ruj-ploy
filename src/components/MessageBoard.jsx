import { useState } from "react";
function MessageBoard() {
  const [messageList, setMessageList] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const handleInput = (event) => {
    setMessageInput(event.target.value);
  };
  const handleSubmit = (event) => {
    if (messageInput !== "") {
      event.preventDefault;
      const newMessageList = [...messageList];
      newMessageList.push(messageInput);
      setMessageList(newMessageList);
      setMessageInput("");
    } else {
      alert("⚠️ Please enter message.");
    }
  };
  const handleDeleteMessage = (messageIndex) => {
    const newMessageList = [...messageList];
    newMessageList.splice(messageIndex, 1);
    setMessageList(newMessageList);
  };
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={handleInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((item, index) => {
          return (
            <>
              <div className="message">
                <h1>{item}</h1>
                <button
                  className="delete-button"
                  onClick={() => {
                    handleDeleteMessage(index);
                  }}
                >
                  x
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
