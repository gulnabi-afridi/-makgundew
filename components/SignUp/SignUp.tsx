import React, { useState } from "react";
import styles from "../../styles/signUp.module.scss";
import { UseAuthContext } from "@/authContext/AuthContext";
import { toast } from "react-toastify";
import Toast from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  signUp: boolean;
  setSignUp: (e: boolean) => void;
}

const SignUp = ({ signUp, setSignUp }: Props) => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { setUserAuthenticated } = UseAuthContext();

  const handleSetFormData = (event: any) => {
    const { name, value } = event.target;
    console.log(event);
    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  };

  const handleFormSubmission = (event: any) => {
    event.preventDefault();
    const { name, email, password } = signUpData;
    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    setSignUp(false);
    setUserAuthenticated(true);
    toast.success("Hurrh!! you are registered successfully");
  };

  return (
    <React.Fragment>
      <div className={styles.signUpParent}>
        <form onSubmit={handleFormSubmission} className={styles.signUp}>
          <p className={styles.text}>Sign Up</p>
          {/* ===> name input */}
          <div className={styles.inputDiv}>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              type="text"
              onChange={handleSetFormData}
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          {/* ===> email input */}
          <div className={styles.inputDiv}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              name="email"
              required
              onChange={handleSetFormData}
              placeholder="Enter your email"
            />
          </div>
          {/* ===> password input */}
          <div className={styles.inputDiv}>
            <label className={styles.label} htmlFor="email">
              Password
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              required
              onChange={handleSetFormData}
              placeholder="Select the strong password"
            />
          </div>
          {/* =====> buttons */}
          <div className={styles.buttons}>
            <button type="submit" className={styles.signUpBtn}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <Toast />
    </React.Fragment>
  );
};

export default SignUp;
