import React from "react";
import styles from "../../styles/signIn.module.scss";

interface Props {
  signIn: boolean;
  setSignIn: (e: boolean) => void;
}

const SignIn = ({ signIn, setSignIn }: Props) => {
  return <div>SignIn</div>;
};

export default SignIn;
