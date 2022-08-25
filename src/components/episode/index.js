// Libraries
import React from "react";
import { useParams } from "react-router-dom";

// Components
import FeaturedCharacter from "./FeaturedCharacter";

// Hooks
import { useEpisodeDataById } from "./useEpisodeDataById";
import { useCharacterByApi } from "../../hooks/useCharacterByApi";

// Styles
import styles from "./Episode.module.scss";

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
