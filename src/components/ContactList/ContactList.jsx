import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
	const selectContacts = useSelector(state => state.contacts.items);
	const selectNameFilter = useSelector(state => state.filters.name);

	const filteredContacts = selectContacts.filter(contact =>
		contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
	);

	return (
		<div>
			<ul className={css.list}>
				{filteredContacts.map(contact => (
					<Contact key={contact.id} contacts={contact} />
				))}
			</ul>
		</div>
	);
};

export default ContactList;
