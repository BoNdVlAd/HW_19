import React from 'react';
import styles from './Chat.module.scss';

const Chat = () => {
  const [sendMessage, setSendMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const send = () => {
    if (!sendMessage) return;
    console.log('hello', sendMessage);
    setMessages([...messages, sendMessage]);
    setSendMessage('');
    console.log(messages);
  };

  return (
    <div className={styles.wrapper}>
      <h2 style={{ textAlign: 'center' }}>Chat</h2>
      <div className={styles.chat}>
        <div className={styles.textBg}>
          <p className={styles.text}>Where's the money, Lebowski?</p>
        </div>
        <div className={styles.textBg1}>
          <p className={styles.text1}>it's down there somewhere, let me take another look.</p>
        </div>
        {messages &&
          messages.map((e, i) => (
            <div key={e} className={styles.textBg1}>
              <p className={styles.text1}>{e}</p>
            </div>
          ))}
        <input
          value={sendMessage}
          onKeyDown={(e) => (e.key === 'Enter' ? send() : '')}
          onChange={(e) => setSendMessage(e.target.value)}
          className={styles.textInput}
          placeholder="type..."
        />
        <button onClick={send} className={styles.btn}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default Chat;
