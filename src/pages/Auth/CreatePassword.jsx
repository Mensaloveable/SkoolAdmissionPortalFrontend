import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextInput } from "../../components/UI/text_input";

export const CreatePassword = () => {
  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={styles.content}>
        <h1 className={styles.inknut}>Choose a new password</h1>
        <form className={styles.form}>
          <DarkLogo />
          <h2 className={`m-4 px-5 ${styles.headline}`}>
            Enter a new password for your account.
          </h2>
          <div style={{ width: "480px" }} className={styles.innerContent}>
            <TextInput
              label="Password"
              name="password"
              type="password"
              key="password"
              placeholder="************"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              key="confirmPassword"
              placeholder="************"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <Button className={`btn btn-success btn-lg px-5 mt-3 w-100`}>
              Create Password
            </Button>

            <p className={`d-none mt-3 text-secondary`}>
              No account?{" "}
              <span>
                <a
                  className={`text-success text-decoration-none fw-semibold`}
                  href="#"
                >
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
