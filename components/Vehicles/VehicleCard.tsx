import React from "react";
import styles from "../../styles/vehicles.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  model: string;
  manufacturer: string;
}

const VehicleCard = ({ name, model, manufacturer }: Props) => {
  return (
    <div className={styles.vehicleCard}>
      <Image src="/assets/vehicle.png" width={190} height={160} alt="" />
      <div className={styles.attributes}>
        {/* name */}
        <p className={styles.text}>
          <span className={styles.textType}> Name: </span> {name}
          jdcjdbcjdc
        </p>
        {/* climate */}
        <p className={styles.text}>
          <span className={styles.textType}>Model:</span>
          {model}
        </p>
        {/* population */}
        <p className={styles.text}>
          <span className={styles.textType}>manufacturer:</span> {manufacturer}
        </p>
      </div>
    </div>
  );
};

export default VehicleCard;
