import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ShowContact.module.scss';
import Chat from '../../components/Chat';

const ShowContact = ({ contacts }) => {
  const params = useParams();
  const contact = contacts.filter((e) => e.firstName === params.test)[0];
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2 style={{ textAlign: 'center' }}>Info</h2>
        <img
          className={styles.avatar}
          src="https://hips.hearstapps.com/hmg-prod/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.552xw:0.368xh;0.378xw,0.0295xh&resize=1200:*"
          alt=""
        />
        <p>name : {contact.firstName}</p>
        <p>lastname : {contact.lastName} </p>
        <p>phone : {contact.phone} </p>
        <p>gender : {contact.gender} </p>
      </div>
      <div>
        <Chat />
        {/* <h2 style={{ textAlign: 'center' }}>Chat</h2>
        <div className={styles.chat}>
          <div className={styles.textBg}>
            <p className={styles.text}>Where's the money, Lebowski?</p>
          </div>
          <div className={styles.textBg1}>
            <p className={styles.text1}>it's down there somewhere, let me take another look.</p>
          </div>
          <input className={styles.textInput} placeholder="type..." />
          <button className={styles.btn}>SEND</button>
        </div> */}
      </div>
    </div>
  );
};

export default ShowContact;
