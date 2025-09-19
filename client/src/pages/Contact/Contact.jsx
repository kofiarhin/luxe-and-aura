import { useSelector } from '../../lib/reactRedux.js';
import { selectContactContent } from '../../store/slices/contentSlice.js';
import ContactDetails from '../../components/ContactDetails/ContactDetails';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './contact.styles.module.scss';

const Contact = () => {
  const { intro, details } = useSelector(selectContactContent);

  return (
    <div className={styles.contact}>
      <ContactDetails details={details} intro={intro} />
      <ContactForm />
    </div>
  );
};

export default Contact;
