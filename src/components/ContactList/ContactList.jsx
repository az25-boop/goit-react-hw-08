import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { Hourglass } from "react-loader-spinner";
import { useSelector } from "react-redux";
import {
  selectContactLoader,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";

export default function ContactList() {
  const isLoading = useSelector(selectContactLoader);
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
      {isLoading && (
        <div className={css.loader}>
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      )}
    </>
  );
}
