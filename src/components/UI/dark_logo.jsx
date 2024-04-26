import dark_logo from "../../assets/dark_logo.jpeg";
import styles from "./styles.module.css";

export const DarkLogo = () => {
  return (
    <div className={styles.maxContent}>
      <img className={styles.logo} src={dark_logo} alt="logo.png" />
    </div>
  );
};
