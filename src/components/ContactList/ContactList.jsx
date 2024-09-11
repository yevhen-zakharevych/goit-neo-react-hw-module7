import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
