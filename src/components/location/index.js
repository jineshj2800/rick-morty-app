// Libraries
import React from "react";
import { useParams } from "react-router-dom";

// Components
import Resident from "./Resident";

// Hooks
import { useLocationDataById } from "./useLocationDataById";
import { useCharacterByApi } from "../../hooks/useCharacterByApi";

// Styles
import styles from "./Location.module.scss";

const Location = () => {
  const { locationId } = useParams();
  const { location } = useLocationDataById(locationId);
  const { characters: residents } = useCharacterByApi(
    location && location.residents
  );

  return (
    location && (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{location.name}</h1>
          <span>Type - {location.type}</span>
          <span>Dimension - {location.dimension}</span>
        </div>
        <div className={styles.residentsContainer}>
          <h2>Residents</h2>
          <div className={styles.residents}>
            {residents &&
              residents.map((resident) => {
                return <Resident key={resident.id} character={resident} />;
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default Location;
