import React from 'react';
import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';

const Contact = ({ props }) => {
  console.log(props);
  const { firstName, lastName, phone, gender } = props;

  return (
    <>
      <div className={styles.contactBlock}>
        <p className={styles.text}>
          name: {firstName} {lastName}
        </p>
        <p className={styles.text}>phone: {phone}</p>
        <p className={styles.text}>gender: {gender}</p>
        <div className={styles.events}>
          <button className="call">call</button>
          <button className="send">send message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
