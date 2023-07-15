import React from "react";
import styles from "../styles/layout.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      {/* login button ---------- */}
      <button className={styles.signIn}>Login</button>
      <button className={styles.signUp}>SignUp</button>
    </div>
  );
};

export default Header;
