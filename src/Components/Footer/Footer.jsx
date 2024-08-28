import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p className={styles.pFooter}>Polluion in the World, 2023</p>
      <p className={styles.pFooter}>Dati forniti da GlobalWarming</p>
    </section>
  );
}
