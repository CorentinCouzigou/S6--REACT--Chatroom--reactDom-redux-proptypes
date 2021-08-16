import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Chat({ messageUser }) {
  const messagesRef = useRef();
  // useEffect (() => {
    let tabMessage = messageUser.map((element) => {
      if (element.text.length > 1) {
      return(
      <>
        <h1 className="chat__userName">{element.nameUser}</h1>
        <p className="chat__userText">{element.text}</p>
      </>
    );
  };
  });
// }, [messageUser]);
// const element = document.querySelector('.chat__container');
// element.scrollTop = element.scrollHeight;
// messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  return (
    <div className="chat__container">
      {tabMessage}
      <div ref={messagesRef} />
    </div>
  );
}
Chat.propTypes = {
  messageUser: PropTypes.array.isRequired,
};
export default Chat;
