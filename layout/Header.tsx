import React, { useState } from "react";
import styles from "../styles/layout.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross2 } from "react-icons/rx";
import { Data } from "@/data/JSON";

interface Props {
  selectedButton: string;
  setSelectedButton: (component: string) => void;
}

const Header = ({ selectedButton, setSelectedButton }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.header}>
      {/* login button ---------- */}
      <button className={styles.signIn}>Login</button>
      <button className={styles.signUp}>SignUp</button>
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
  );
};

export default Header;
