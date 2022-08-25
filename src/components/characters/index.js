// Libraries
import React, { useState, useEffect } from "react";

// Components
import CharacterDetails from "./CharacterDetails";

// Styles
import styles from "./Characters.module.scss";

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
              <CharacterDetails key={character.id} character={character} />
            );
          })}
      </div>
    </div>
  );
};

export default Characters;
