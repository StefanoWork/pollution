import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <button
        className={styles.elemNav}
        onClick={() => navigate(`/temperature`)}
      >
        Temperature
      </button>
      <button className={styles.elemNav} onClick={() => navigate(`/methane`)}>
        Metano
      </button>
      <button className={styles.elemNav} onClick={() => navigate(`/Co2`)}>
        Co2
      </button>
      <button className={styles.elemNav} onClick={() => navigate(`/glacier`)}>
        Ghiacciai
      </button>
    </div>
  );
}
