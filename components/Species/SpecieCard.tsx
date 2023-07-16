import React from "react";
import styles from "../../styles/species.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  classification: string;
  designation: string;
}

const SpecieCard = ({ name, classification, designation }: Props) => {
  return (
    <div className={styles.specieCard}>
      <Image
        src="/assets/species.jpg"
        width={210}
        height={190}
        alt=""
        style={{ borderRadius: "6px" }}
      />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}> name: </span> {name}
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>classification:</span>{" "}
          {classification}
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>designation:</span> {designation}
          Corporation
        </p>
      </div>
    </div>
  );
};

export default SpecieCard;
