import React from "react";
import styles from "../../styles/films.module.scss";
import FilmCard from "./FilmCard";

const Films = () => {
  return (
    <div className={styles.filmParent}>
      {/* ===> vehicles  */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
        return <FilmCard key={index} />;
      })}
    </div>
  );
};

export default Films;
