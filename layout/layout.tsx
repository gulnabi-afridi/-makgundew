import React, { ReactNode } from "react";
import Header from "./Header";

interface Props {
  children: ReactNode;
  selectedButton: string;
  setSelectedButton: (component: string) => void;
}

const Layout = ({ children, selectedButton, setSelectedButton }: Props) => {
  return (
    <>
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {children}
    </>
  );
};

export default Layout;
