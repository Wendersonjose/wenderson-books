import logo from '../../assets/logo.svg'
import styles from './styles.module.css'

function Icons() {
  return (
    <div className={styles.logo}>
      <img
        src={logo}
        alt="Logo Wenderson Books"
        className={styles.imageIcons}
      />

      <p className={styles.nameIcons}>
        <strong>Wenderson</strong> Books
      </p>
    </div>
  );
}

export default Icons