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

interface Props {
  selectedButton: string;
  setSelectedButton: (component: string) => void;
}

const Home = ({ selectedButton, setSelectedButton }: Props) => {
  return (
    <div className={styles.parent}>
      {/* left navigation */}
      <div className={styles.leftNavigation}>
        {Data.navigationData.map((item, index) => {
          return (
            <button
              onClick={() => setSelectedButton(item.name)}
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
        {selectedButton === "home" && <Gif />}
        {selectedButton === "planets" && <Planets />}
        {selectedButton === "vehicles" && <Vehicles />}
        {selectedButton === "starShips" && <Starships />}
        {selectedButton === "people" && <Peoples />}
        {selectedButton === "films" && <Films />}
        {selectedButton === "species" && <Species />}
      </div>
    </div>
  );
};

export default Home;
