import React from "react";
import styles from "../../styles/people.module.scss";
import Image from "next/image";

const PeopleCard = () => {
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
          <span className={styles.textType}> Name: </span> Luke Skywalker
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>height:</span> 172
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>mass:</span> 77 Corporation
        </p>
        {/* gender */}
        <p className={styles.text}>
          <span className={styles.textType}>gender:</span> male
        </p>
      </div>
    </div>
  );
};

export default PeopleCard;
