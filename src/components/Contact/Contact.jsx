import css from "./Contact.module.css";
import { Hourglass } from "react-loader-spinner";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectContactDeleter } from "../../redux/contacts/selectors";
export default function Contact({ data }) {
  const dispatch = useDispatch();
  const contactDeleter = useSelector(selectContactDeleter);
  // function deleteItem() {}
  return (
    <div>
      {contactDeleter === data.id ? (
        <div className={css.deleteContainer}>
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
      ) : (
        <div className={css.contact}>
          <div>
            <p>
              <IoIosContact className={css.icon} />
              {data.name}
            </p>
            <p>
              <FaPhoneAlt className={css.icon} />
              {data.number}
            </p>
          </div>
          <button onClick={() => dispatch(deleteContact(data.id))}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
