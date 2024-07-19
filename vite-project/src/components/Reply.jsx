import React from "react";
import "../modules/Reply.css"
import juliusomo from "../assets/images/avatars/image-juliusomo.png"

const Reply = ({ setInputValue, buttonTxt, addComment, addReply, index, action }) => {
    
  const handleButtonClick = () => {
    if (buttonTxt === 'send') {
      addComment();
    } else if (buttonTxt === 'reply') {
      addReply(index, action);
    }
  };


  return (
    <div className="reply-container">
      <img src={juliusomo} alt="" />

      <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Add a comment..." />

      <button className='button-send' onClick={handleButtonClick}>{buttonTxt}</button>
    </div>
  );
};

export default Reply;