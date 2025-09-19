import styles from './statusScreen.styles.module.scss';

const StatusScreen = ({ message, variant = 'info' }) => (
  <div className={styles.wrapper} role="status">
    <div className={styles[variant]}>{message}</div>
  </div>
);

export default StatusScreen;
