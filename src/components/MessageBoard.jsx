import { useState } from "react";

function MessageBoard() {
  const [messageData, setMessage] = useState([
    "Hello all ! This is first message.",
  ]);
  const [addData, setAddData] = useState("");
  // Not work
  /*   const handleSubmit = (e) => {
    e.preventDefault()
    setAddData(e.target.messageText.value)
    const ghostArr = [...messageData]
    ghostArr.push(addData)
    setMessage(ghostArr)
  } */
  const handleSubmit = (e) => {
    e.preventDefault();
    const ghostArr = [...messageData];
    ghostArr.push(addData);
    setMessage(ghostArr);
  };
  const hadleDelete = (index) => {
    const ghostArr = [...messageData];
    ghostArr.splice(index,1);
    setMessage(ghostArr)
  }
  return (
      <div className="app-wrapper">
        <h1 class="app-title">Message board</h1>
        <div class="message-input-container">
          <label>
            <input
              id="message-text"
              name="messageText"
              type="text"
              placeholder="Enter message here"
              value={addData}
              onChange={(event) => setAddData(event.target.value)}
            />
          </label>
          <button className="submit-message-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div class="board">
          {messageData.map((msg, index) => {
            return (
              <div className="message">
                <h1 key={index}>{msg}</h1>
                <button className="delete-button" onClick={() => hadleDelete(index)}>x</button>
              </div>
            );
          })}
        </div>
      </div>
  );
}

export default MessageBoard;
