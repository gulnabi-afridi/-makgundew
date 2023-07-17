import React, { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
  selectedButton: string;
  signIn: boolean;
  setSignIn: (a: boolean) => void;
  signUp: boolean;
  setSignUp: (a: boolean) => void;
  setSelectedButton: (component: string) => void;
}

const Layout = ({
  children,
  selectedButton,
  setSelectedButton,
  setSignIn,
  signIn,
  signUp,
  setSignUp,
}: Props) => {
  return (
    <>
      <Header
        setSignIn={setSignIn}
        setSignUp={setSignUp}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {children}
    </>
  );
};

export default Layout;
