import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  //const contacts = useSelector(getContacts);
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);

  // Функція фільтраціі контакту за іменем
  const findContactsByName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // Масив відфільтрованих контактів
  const filteredContacts = findContactsByName();
  //console.log(filteredContacts);

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

export default ContactList;
