import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // Функція фільтраціі контакту за іменем
  const findContactsByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // Масив відфільтрованих контактів
  const filteredContacts = findContactsByName();

  return (
    <ul className={css.contacts_cont}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contacts_item} key={id}>
          {name}: {number}
          <button
            className={css.contacts_item_btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleDeleteContact: PropTypes.func,
};

export default ContactList;
