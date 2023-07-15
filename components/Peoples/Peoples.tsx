import React from "react";
import styles from "../../styles/people.module.scss";
import PeopleCard from "./PeopleCard";

const Peoples = () => {
  return (
    <div className={styles.peopleParent}>
      {/* ===> vehicles  */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <PeopleCard key={index} />;
      })}
    </div>
  );
};

export default Peoples;
