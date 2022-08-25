import React from "react";

import { Link, useParams } from "react-router-dom";
import { useEpisodeDataById } from "./useEpisodeDataById";
import { useCharacterByApi } from "../../hooks/useCharacterByApi";

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

const Episode = () => {
  const { episodeId } = useParams();
  const { episode } = useEpisodeDataById(episodeId);
  const { characters } = useCharacterByApi(episode && episode.characters);
  return (
    episode && (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{episode.name}</h1>
          <span>Episode - {episode.episode}</span>
          <span>Air Date - {episode.air_date}</span>
        </div>
        <div className={styles.charactersContainer}>
          <h2>Characters Featured</h2>
          <div className={styles.featuredCharacters}>
            {characters &&
              characters.map((character) => {
                return (
                  <FeaturedCharacter key={character.id} character={character} />
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default Episode;
