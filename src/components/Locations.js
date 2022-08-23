import React from "react";
import styles from "../styles/Locations.module.scss";

const Locations = () => {
  return (
    <div className={styles.container}>
      <h1>All Locations</h1>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>Name</h3>
          <h3>Type</h3>
          <h3>Dimension</h3>
        </div>
        <ul className={styles.tableContent}>
          <li>
            <span>Earth</span>
            <span>Planet</span>
            <span>Dimension C-137</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Locations;
