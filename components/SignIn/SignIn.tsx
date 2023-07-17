import React, { use, useState } from "react";
import styles from "../../styles/signIn.module.scss";
import { UseAuthContext } from "@/authContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Toast from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  setSignIn: (e: boolean) => void;
}

const SignIn = ({ setSignIn }: Props) => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const { setUserAuthenticated } = UseAuthContext();

  const handleSetFormData = (event: any) => {
    const { name, value } = event.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleFormSubmission = (e: any) => {
    e.preventDefault();
    const { email, password } = signInData;
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.email === email && userData.password === password) {
        setUserAuthenticated(true);
      } else {
        toast.error("Invalid username or password");
      }
    } else {
      toast.error("No user found, please signup");
    }
    setSignIn(false);
  };

  return (
    <React.Fragment>
      <div className={styles.signInParent}>
        <form onSubmit={handleFormSubmission} className={styles.signIn}>
          <p className={styles.text}>Sign In</p>

          {/* ===> email input */}
          <div className={styles.inputDiv}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              type="email"
              required
              name="email"
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
              required
              name="password"
              onChange={handleSetFormData}
              placeholder="Select the strong password"
            />
          </div>
          {/* =====> buttons */}
          <div className={styles.buttons}>
            <button type="submit" className={styles.signUpBtn}>
              Sign In
            </button>
          </div>
        </form>
      </div>
      <Toast />
    </React.Fragment>
  );
};

export default SignIn;
