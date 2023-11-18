import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);

  // Функція додавання контакту
  const handleAddContact = contact => {
    const finalContacts = {
      ...contact,
      id: nanoid(),
    };

    // Перевірка на наявніть контакту у збережених
    const hasRepeateContact = contacts.some(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (hasRepeateContact) {
      alert(`${contact.name} is already in contacts!`);
    } else {
      dispatch(addContact(finalContacts));
    }
  };

  // Функція обробки подіі сабміту форми
  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    //const contact = { name, number };
    //handleAddContact(contact);
    handleAddContact({ name, number });
    event.target.reset();
  };

  return (
    <form className={css.contact_form_cont} onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          className={css.contact_form_inp}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          //value={contacts.name}
        />
      </label>

      <label>
        <p>Number</p>
        <input
          className={css.contact_form_inp}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          // value={contacts.number}
        />
      </label>
      <button type="submit" className={css.contact_form_btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
