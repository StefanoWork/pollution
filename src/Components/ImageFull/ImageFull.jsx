import ImgPollution from "../../assets/images/pollution.png";
import styles from "./ImageFull.module.css";

export default function ImageFull() {
  return (
    <section className={styles.sectionImg}>
      <img className={styles.fullImg} src={ImgPollution} alt="Air pollution" />
      <h2 className={styles.titleImg}>
        Possiamo ancora <br />
        <span className={styles.changeText}>recuperare</span>?
      </h2>
    </section>
  );
}
