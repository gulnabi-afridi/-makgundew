import React from "react";
import styles from "../../styles/films.module.scss";
import Image from "next/image";

const FilmCard = () => {
  return (
    <div className={styles.filmCard}>
      <Image src="/assets/film.jpg" width={190} height={160} alt="" />
      {/* name */}
      <p className={styles.text}>
        <span className={styles.textType}> title: </span> A New Hope
      </p>
      {/* climate */}
      <p className={styles.text}>
        <span className={styles.textType}>director:</span> George Lucas
      </p>
      {/* population */}
      <p className={styles.text}>
        <span className={styles.textType}>producer:</span> Gary Kurtz, Rick
        McCallum Corporation
      </p>
    </div>
  );
};

export default FilmCard;
