import React, { useState } from "react";
import styles from "../../styles/home.module.scss";
import Planets from "@/components/Planets/Planets";
import Vehicles from "@/components/Vehicles/Vehicles";
import Starships from "@/components/Starships/Starships";
import Peoples from "@/components/Peoples/Peoples";
import Films from "@/components/Films/Films";
import Species from "@/components/Species/Species";
import Gif from "@/components/Gif/Gif";
import { Data } from "../../data/JSON";
import SignUp from "@/components/SignUp/SignUp";
import SignIn from "@/components/SignIn/SignIn";
import { UseAuthContext } from "@/authContext/AuthContext";

// types declaration
interface Props {
  selectedButton: string;
  setSelectedButton: (component: string) => void;
  signIn: boolean;
  setSignIn: (a: boolean) => void;
  signUp: boolean;
  setSignUp: (a: boolean) => void;
}

const Home = ({
  selectedButton,
  setSelectedButton,
  signIn,
  setSignIn,
  signUp,
  setSignUp,
}: Props) => {
  const { userAuthenticated } = UseAuthContext();

  return (
    <div className={styles.parent}>
      {/* left navigation */}
      <div className={styles.leftNavigation}>
        {Data.navigationData.map((item, index) => {
          return (
            <button
              onClick={() => {
                setSelectedButton(item.name);
                setSignUp(false);
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
      {/* ===> right portion */}
      <div className={styles.rightPortion}>
        {userAuthenticated &&
          selectedButton === "home" &&
          !signIn &&
          !signUp && <Gif />}

        {signUp === true && <SignUp setSignUp={setSignUp} />}
        {signIn === true && <SignIn setSignIn={setSignIn} />}
        {!userAuthenticated && <SignIn setSignIn={setSignIn} />}

        {userAuthenticated && selectedButton === "planets" && <Planets />}
        {userAuthenticated && selectedButton === "vehicles" && <Vehicles />}
        {userAuthenticated && selectedButton === "starShips" && <Starships />}
        {userAuthenticated && selectedButton === "people" && <Peoples />}
        {userAuthenticated && selectedButton === "films" && <Films />}
        {userAuthenticated && selectedButton === "species" && <Species />}
      </div>
    </div>
  );
};

export default Home;
