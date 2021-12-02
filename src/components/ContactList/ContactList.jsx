import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFiltredContacts } from '../../redux/phonebook/phonebook-selectors';
import { deleteContact, fetchContacts } from '../../redux/phonebook/phonebook-operations';

import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFiltredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.text}>
              {name}:<span className={s.number}>{number}</span>
            </p>
            <button
              type="button"
              className={s.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
};
  
export default ContactList;
