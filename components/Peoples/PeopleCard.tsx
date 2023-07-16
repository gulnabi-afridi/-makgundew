import React from "react";
import styles from "../../styles/people.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

const PeopleCard = ({ name, height, mass, gender }: Props) => {
  return (
    <div className={styles.peopleCard}>
      <Image
        src="/assets/man.png"
        width={250}
        height={250}
        alt=""
        style={{ marginTop: "-30px" }}
      />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}> Name: </span> {name}
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>height:</span> {height}
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>mass:</span> {mass}
        </p>
        {/* gender */}
        <p className={styles.text}>
          <span className={styles.textType}>gender:</span> {gender}
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
