import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './contacts.module.css';
import { deleteContact } from 'redux/phoneBookSlice';

const Contacts = () => {
  const contactsArray = useSelector(getContacts);
  const dispatch = useDispatch();
  const normilizedFilter = useSelector(getFilter).toLowerCase();
  const filterContacts = contactsArray.filter(contact =>
    contact.nameUser.toLowerCase().includes(normilizedFilter)
  );

  return (
    <ul className={css.contactsList}>
      {filterContacts.map(contact => {
        return (
          <li className={css.contactsItem} key={contact.id}>
            {contact.nameUser}: {contact.number}
            <button
              className={css.btnDelete}
              onClick={() => dispatch(deleteContact(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contacts;
