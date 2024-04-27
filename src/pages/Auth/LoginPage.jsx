import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextInput } from "../../components/UI/text_input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "react-query";
import { postLogin } from "../../mutations/authMutations";
import toast from "react-hot-toast";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const updateData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const loginUser = useMutation(
    () => postLogin({ email: loginData.email, password: loginData.password }),
    {
      onSuccess(data) {
        localStorage.setItem("user", JSON.stringify(data));
        toast.success(data.message);
        navigate("/dashboard");
      },
      onError(error) {
        console.log(error);
        toast.error(error.message);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser.mutate();
  };

  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={styles.content}>
        <h1 className={styles.inknut}>Welcome to the Applicant Portal</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <DarkLogo />
          <h2 className={`m-4 ${styles.headline}`}>
            Login to the Applicant Portal
          </h2>
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
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="************"
                id="password"
                required
              />
              <a className={styles.forgotPassword} href="/forgot-password">
                Forgot Password
              </a>
            </div>
            <Button
              className={`btn btn-success btn-lg px-5 mt-3 w-100`}
              type="submit"
              disabled={loginUser.email < 1 || loginUser.password < 1}
            >
              Login
            </Button>

            <p className={`mt-3 text-secondary`}>
              No account?{" "}
              <span>
                <a
                  className={`text-success text-decoration-none fw-semibold`}
                  href="/sign-up"
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
