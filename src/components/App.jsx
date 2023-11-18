import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app_cont}>
      <h1 className={css.app_cont_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.app_cont_subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
