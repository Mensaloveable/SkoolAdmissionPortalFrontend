import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextInput } from "../../components/UI/text_input";
import { useNavigate, useParams } from "react-router-dom";
import { patchCreatePassword } from "../../mutations/authMutations";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";

export const CreatePassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const userData = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userData && !token) {
      navigate("/forgot-password");
    } else {
      setUser(userData);
      console.log(userData?.email);
    }
  }, [navigate, token, userData]);

  const [passwordData, setPasswordData] = useState({
    email: userData?.email,
    passwordResetToken: token,
    password: "",
    confirmPassword: "",
  });

  const updateData = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const createPassword = useMutation(
    () =>
      patchCreatePassword({
        email: passwordData.email,
        password: passwordData.password,
        passwordResetToken: passwordData.passwordResetToken,
      }),
    {
      onSuccess(data) {
        localStorage.removeItem("user");
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
    if (passwordData.password !== passwordData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    createPassword.mutate();
  };

  if (!user && !token) return null;

  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={styles.content}>
        <h1 className={styles.inknut}>Choose a new password</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
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
              handleInputChange={updateData}
            />
            <TextInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              key="confirmPassword"
              placeholder="************"
              required
              handleInputChange={updateData}
            />
            <Button
              className={`btn btn-success btn-lg px-5 mt-3 w-100`}
              disabled={
                passwordData.password < 7 || passwordData.confirmPassword < 7
              }
              type="submit"
            >
              Create Password
            </Button>

            <p className={`d-none mt-3 text-secondary`}>
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
