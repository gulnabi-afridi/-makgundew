import React from "react";
import styles from "../../styles/home.module.scss";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  return (
    <div className={styles.parent}>
      {/* left navigation */}
      <div className={styles.leftNavigation}>
        <div className={styles.tab}>
          {/* icon */}
          <AiFillHome />
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
