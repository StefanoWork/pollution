import LogoImg from "../../assets/images/logo.png";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.btLogo} onClick={() => navigate(`/`)}>
        <img className={styles.imgLogo} src={LogoImg} alt="Logo" />
      </button>
    </>
  );
}
