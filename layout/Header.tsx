import React, { useState } from "react";
import styles from "../styles/layout.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";
import { Data } from "@/data/JSON";
import { UseAuthContext } from "../authContext/AuthContext";

interface Props {
  selectedButton: string;
  setSelectedButton: (component: string) => void;
  setSignIn: (a: boolean) => void;
  setSignUp: (a: boolean) => void;
}

const Header = ({
  selectedButton,
  setSelectedButton,
  setSignIn,
  setSignUp,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { userAuthenticated, setUserAuthenticated } = UseAuthContext();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={styles.header}>
        {/* login button ---------- */}
        <button
          onClick={() => {
            setSignUp(false);
            setSignIn(true);
          }}
          className={` ${
            userAuthenticated === true ? styles.logined : styles.signIn
          }`}
        >
          Login
        </button>
        <button
          onClick={() => {
            setSignUp(true);
            setSignIn(false);
          }}
          className={` ${
            userAuthenticated === true ? styles.logined : styles.signUp
          }`}
        >
          SignUp
        </button>
        {userAuthenticated && (
          <p className={styles.loginText}>You are log in.....😎</p>
        )}
        <div className={styles.hamburgerParent}>
          <Hamburger
            color="white"
            rounded
            size={34}
            toggled={isOpen}
            toggle={setIsOpen}
          />
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className={styles.drawer}
          >
            {/* =========>top bar */}
            <div className={styles.iconDiv}>
              <RxCross2 onClick={toggleDrawer} className={styles.crossIcon} />
            </div>
            {/* ========> sections links */}
            <div className={styles.leftNavigation}>
              {Data.navigationData.map((item, index) => {
                return (
                  <button
                    onClick={() => {
                      setSelectedButton(item.name);
                      setIsOpen(false);
                    }}
                    key={index}
                    className={`${styles.tab} ${
                      selectedButton === item.name ? styles.selected : ""
                    }`}
                  >
                    {/* icon */}
                    {item.icon}
                    <p>{item.name}</p>
                  </button>
                );
              })}
            </div>
          </Drawer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
