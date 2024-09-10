import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

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
