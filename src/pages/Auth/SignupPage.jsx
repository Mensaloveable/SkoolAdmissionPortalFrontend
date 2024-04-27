import styles from "./styles.module.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { DarkLogo } from "../../components/UI/dark_logo";
import { AuthFooter } from "../../components/UI/authFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextInput } from "../../components/UI/text_input";
import { useMutation } from "react-query";
import { postSignup } from "../../mutations/authMutations";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [signupData, setSignupDate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
  });
  const updateData = (e) => {
    setSignupDate({ ...signupData, [e.target.name]: e.target.value });
  };
  const signup = useMutation(
    () =>
      postSignup({
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,
        phoneNumber: signupData.phoneNumber,
        countryOfPermanentResidence: signupData.country,
      }),
    {
      onSuccess(data) {
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/create-password");
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
    signup.mutate();
  };
  return (
    <div className={`${styles.background} ${styles.container}`}>
      <div className={`mt-1 ${styles.content}`}>
        <h1 style={{ lineHeight: "1.3" }} className={styles.inknut}>
          Register to the Applicant Portal
        </h1>
        <form
          style={{ marginTop: "3px" }}
          className={styles.form}
          onSubmit={handleSubmit}
        >
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
              handleInputChange={updateData}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              key="lastName"
              placeholder="Enter your last name"
              required
              handleInputChange={updateData}
            />
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              key="email"
              placeholder="Enter your email"
              required
              handleInputChange={updateData}
            />
            <TextInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              key="phoneNumber"
              placeholder="Enter your phone number"
              required
              handleInputChange={updateData}
            />
            <TextInput
              label="Country of permanent residence"
              name="country"
              type="text"
              key="country"
              placeholder="Enter your country of permanent residence"
              required
              handleInputChange={updateData}
            />
            <Button
              className={`btn btn-success btn-lg px-5 mt-3 w-100`}
              disabled={
                signupData.firstName.length < 1 ||
                signupData.lastName.length < 1 ||
                signupData.email.length < 1 ||
                signupData.phoneNumber.length < 10 ||
                signupData.country.length < 1
              }
              type="submit"
            >
              Signup
            </Button>

            <p className={`mt-3 text-secondary`}>
              Already have an account?{" "}
              <span>
                <Link
                  className={`text-success text-decoration-none fw-semibold`}
                  to="/login"
                >
                  Login here
                </Link>
              </span>
            </p>
          </div>
        </form>
      </div>
      <AuthFooter />
    </div>
  );
};
