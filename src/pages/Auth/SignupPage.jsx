import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextInput } from "../../components/UI/text_input";

export const SignupPage = () => {
  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={`mt-1 ${styles.content}`}>
        <h1 className={styles.inknut}>Register to the Applicant Portal</h1>
        <form style={{ marginTop: "5px" }} className={styles.form}>
          <DarkLogo />
          <h2 className={`m-1 ${styles.headline}`}>Create a new account</h2>
          <div
            style={{ width: "480px", marginTop: "5px" }}
            className={styles.innerContent}
          >
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              key="firstName"
              placeholder="Enter your first name"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              key="lastName"
              placeholder="Enter your last name"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              key="email"
              placeholder="Enter your email"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <TextInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              key="phoneNumber"
              placeholder="Enter your phone number"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <TextInput
              label="Country of permanent residence"
              name="country"
              type="text"
              key="country"
              placeholder="Enter your country of permanent residence"
              required
              handleInputChange={(e) => console.log(e.target.value)}
            />
            <Button className={`btn btn-success btn-lg px-5 mt-3 w-100`}>
              Sign Up
            </Button>

            <p className={`mt-3 text-secondary`}>
              Already have an account?{" "}
              <span>
                <a
                  className={`text-success text-decoration-none fw-semibold`}
                  href="#"
                >
                  Login here
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
