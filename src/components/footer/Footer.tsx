import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>chiadev</div>
      <div className={styles.text}>
        Chia creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
}