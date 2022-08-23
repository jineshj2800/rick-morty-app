import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Characters.module.scss";

function Character({ character }) {
  return (
    <div
      className={`${styles.character} ${
        styles[character.status.toLowerCase()]
      }`}
    >
      <img src={character.image} alt="" height="200px" width="200px" />
      <div className={styles.characterInfo}>
        <span>{character.name}</span>
        <span>{character.species}</span>
        <span>{character.gender}</span>
      </div>
    </div>
  );
}

const Characters = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.ok && response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1>All Characters</h1>
      <div className={styles.contentContainer}>
        {characters &&
          characters.map((character) => {
            return (
              <Link to={`${character.id}`}>
                <Character key={character.id} character={character} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Characters;
