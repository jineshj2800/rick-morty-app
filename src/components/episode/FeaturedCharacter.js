// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Styles
import styles from "./Episode.module.scss";

const FeaturedCharacter = ({ character }) => {
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

export default FeaturedCharacter;
