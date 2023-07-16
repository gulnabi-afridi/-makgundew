import React from "react";
import styles from "../../styles/films.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  director: string;
  producer: string;
}

const FilmCard = ({ name, director, producer }: Props) => {
  return (
    <div className={styles.filmCard}>
      <Image src="/assets/film.jpg" width={190} height={160} alt="" />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}> title: </span> {name}
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>director:</span> {director}
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>producer:</span> {producer}
        </p>
      </div>
    </div>
  );
};

export default FilmCard;
