import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

export const LightLogo = () => {
  return (
    <div className={styles.maxContent}>
      <img className={styles.logo} src={logo} alt="logo.png" />
    </div>
  );
};
