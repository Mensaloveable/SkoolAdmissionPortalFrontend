import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginPage = () => {
  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={styles.content}>
        <h1 className={styles.inknut}>Welcome to the Applicant Portal</h1>
        <form className={styles.form}>
          <DarkLogo />
          <h2 className={`m-4 ${styles.headline}`}>
            Login to the Applicant Portal
          </h2>
          <div style={{ width: "480px" }} className={styles.innerContent}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="************"
                id="password"
                required
              />
              <a className={styles.forgotPassword} href="#">
                Forgot Password
              </a>
            </div>
            <Button className={`btn btn-success btn-lg px-5 mt-3 w-100`}>
              Login
            </Button>

            <p className={`mt-3 text-secondary`}>
              No account?{" "}
              <span>
                <a className={`text-success text-decoration-none`} href="#">
                  Create One
                </a>
              </span>
            </p>
          </div>
        </form>
      </div>
      <AuthFooter />
    </div>
  );
};
