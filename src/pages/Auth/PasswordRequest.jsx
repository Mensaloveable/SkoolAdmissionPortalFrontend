import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import { TextInput } from "../../components/UI/text_input";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { patchForgotPassword } from "../../mutations/authMutations";
import toast from "react-hot-toast";

export const PasswordRequest = () => {
  const [emailData, setEmailData] = useState({ email: "" });
  const navigate = useNavigate();

  const updateData = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const sendRequestPasswordReset = useMutation(
    () =>
      patchForgotPassword({
        email: emailData.email,
      }),
    {
      onSuccess(data) {
        navigate("/login");
        toast.success(data.message);
      },
      onError(error) {
        console.log(error);
        toast.error(error.message);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequestPasswordReset.mutate();
  };

  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={styles.content}>
        <h1 className={styles.inknut}>Welcome to the Applicant Portal</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <DarkLogo />
          <h2 className={`m-4 ${styles.headline}`}>Reset your password</h2>
          <p className={`m-1 fs-6 text-secondary`}>
            Enter your email below and we’ll send you instructions on how to
            reset your password.
          </p>
          <div style={{ width: "480px" }} className={styles.innerContent}>
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              key="email"
              placeholder="Enter your email"
              required
              handleInputChange={updateData}
            />
            <Button
              className={`btn btn-success btn-lg px-5 mt-3 w-100`}
              disabled={emailData.email === ""}
              type="submit"
            >
              Send reset instructions
            </Button>

            <p className={`mt-3 text-secondary`}>
              Go back to{" "}
              <span>
                <a
                  className={`text-success text-decoration-none fw-semibold`}
                  href="/login"
                >
                  Login
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
