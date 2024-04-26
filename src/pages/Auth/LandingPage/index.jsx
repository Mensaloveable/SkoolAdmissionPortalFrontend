import styles from "../styles.module.css";
import { LightLogo } from "../../../components/UI/light_logo";
import { Button } from "react-bootstrap";
import { AuthFooter } from "../../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";

export const LandingPage = () => {
  return (
    <div className={`${styles.background} ${styles.container}`}>
      <nav className={styles.nav}>
        <LightLogo />
        <ul>
          <li>Study</li>
          <li>Life on Campus</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div>
        <div className={styles.content}>
          <h1 className={styles.inknut}>Forge Your Legacy at Decagon</h1>
          <div className={styles.innerContent}>
            <p className={styles.text}>
              Forge your heroic legacy at Decagon, where diverse passions meet
              cutting-edge education, propelling you towards an extraordinary
              future.
            </p>
          </div>
          <Button className={`btn btn-success btn-lg px-5 mt-3`}>
            Apply Now!
          </Button>
        </div>
      </div>
      <div className={styles.authSearchContainer}>
        <input
          className={styles.authSearch}
          type="text"
          placeholder="Search Course or Study Mode"
        />
        <svg
          width="108"
          height="100"
          viewBox="0 0 108 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="108" height="100" rx="16" fill="#34A853" />
          <path
            d="M65.7096 61.7797C66.5149 60.9799 67.8057 60.9799 68.611 61.7797L73.9332 66.0759H74.0256C75.1024 67.1642 75.1024 68.9287 74.0256 70.0171C72.9489 71.1054 71.2031 71.1054 70.1263 70.0171L65.7096 64.9551L65.542 64.766C65.2298 64.3708 65.0574 63.8781 65.0574 63.3674C65.0574 62.7716 65.2921 62.2003 65.7096 61.7797ZM51.0366 29.1667C55.776 29.1667 60.3214 31.0696 63.6726 34.457C67.0239 37.8443 68.9067 42.4386 68.9067 47.229C68.9067 57.2046 60.906 65.2913 51.0366 65.2913C41.1672 65.2913 33.1665 57.2046 33.1665 47.229C33.1665 37.2534 41.1672 29.1667 51.0366 29.1667Z"
            fill="white"
          />
        </svg>
      </div>
      <AuthFooter />
    </div>
  );
};
