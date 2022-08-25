// Libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./Locations.module.scss";

const Locations = () => {
  const [locations, setLocations] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((response) => response.ok && response.json())
      .then((data) => {
        setLocations(data.results);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

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
          {locations &&
            locations.map((location) => {
              return (
                <Link key={location.id} to={`${location.id}`}>
                  <li>
                    <span>{location.name}</span>
                    <span>{location.type}</span>
                    <span>{location.dimension}</span>
                  </li>
                </Link>
              );
            })}
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
