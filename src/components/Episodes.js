import React from "react";
import styles from "../styles/Episodes.module.scss";

const Episodes = () => {
  return (
    <div className={styles.container}>
      <h1>All Episodes</h1>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <h3>Episode</h3>
          <h3>Name</h3>
          <h3>Air Date</h3>
        </div>
        <ul className={styles.tableContent}>
          <li>
            <span>Pilot</span>
            <span>S01E01</span>
            <span>December 2, 2013</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Episodes;
