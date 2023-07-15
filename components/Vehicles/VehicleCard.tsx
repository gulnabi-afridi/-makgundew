import React from "react";
import styles from "../../styles/vehicles.module.scss";
import Image from "next/image";

const VehicleCard = () => {
  return (
    <div className={styles.vehicleCard}>
      <Image src="/assets/vehicle.png" width={190} height={160} alt="" />
      {/* name */}
      <p className={styles.text}>
        <span className={styles.textType}> Vehicle Name: </span> Name mdc dn
        jdcjdbcjdc
      </p>
      {/* climate */}
      <p className={styles.text}>
        <span className={styles.textType}>Model:</span> Digger Crawler
      </p>
      {/* population */}
      <p className={styles.text}>
        <span className={styles.textType}>manufacturer:</span> Corellia Mining
        Corporation
      </p>
    </div>
  );
};

export default VehicleCard;
