import React, { useState } from "react";
import styles from "../../styles/home.module.scss";
import { AiFillHome } from "react-icons/ai";
import { BiSolidPlanet } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { GiFilmSpool } from "react-icons/gi";
import { GiSpectre } from "react-icons/gi";
import Planets from "@/components/Planets/Planets";
import Vehicles from "@/components/Vehicles/Vehicles";
import Starships from "@/components/Starships/Starships";
import Peoples from "@/components/Peoples/Peoples";
import Films from "@/components/Films/Films";
import Species from "@/components/Species/Species";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  return (
    <div className={styles.parent}>
      {/* left navigation */}
      <div className={styles.leftNavigation}>
        {leftNavigationData.map((item, index) => {
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

const leftNavigationData = [
  {
    icon: <AiFillHome />,
    name: "home",
  },
  {
    icon: <BiSolidPlanet />,
    name: "planets",
  },
  {
    icon: <AiFillHome />,
    name: "starShips",
  },
  {
    icon: <BsFillCarFrontFill />,
    name: "vehicles",
  },
  {
    icon: <IoIosPeople />,
    name: "people",
  },
  {
    icon: <GiFilmSpool />,
    name: "films",
  },
  {
    icon: <GiSpectre />,
    name: "species",
  },
];

export default Home;
