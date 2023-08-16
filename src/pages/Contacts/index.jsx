import React from 'react';
import styles from './Contacts.module.scss';
import Contact from '../../components/Contact';
import { Link } from 'react-router-dom';

const Contacts = (props) => {
  const { contacts } = props;
  console.log(contacts);

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.contacts}>
          {contacts.map((e, i) => (
            <Link className={styles.contact} to={`/contacts/${e.firstName}`}>
              <Contact key={e.firstName} props={e} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;
