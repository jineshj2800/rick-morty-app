import React from "react";

import { Link, useParams } from "react-router-dom";
import { useLocationDataById } from "./useLocationDataById";
import { useCharacterByApi } from "../../hooks/useCharacterByApi";

import styles from "./Location.module.scss";

const Resident = ({ character }) => {
  return (
    <Link to={"/characters/" + character.id}>
      <div
        className={`${styles.character} ${
          styles[character.status.toLowerCase()]
        }`}
      >
        <img src={character.image} alt="" height="150px" width="150px" />
        <div className={styles.characterInfo}>
          <span className={styles.characterName}>{character.name}</span>
          <span>Species - {character.species}</span>
          <span>Gender - {character.gender}</span>
        </div>
      </div>
    </Link>
  );
};

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
