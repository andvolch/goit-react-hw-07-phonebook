import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';



function App() {
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 >Contacts</h2>
      <ContactList />
    </>
  );
}

export default App;