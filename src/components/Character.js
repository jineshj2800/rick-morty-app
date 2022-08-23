import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Character.module.scss";
import { Link } from "react-router-dom";

const Character = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + characterId)
      .then((response) => response.ok && response.json())
      .then((data) => setCharacter(data))
      .catch((error) => {
        throw error;
      });
  }, [characterId]);

  useEffect(() => {
    if (!character || episodes.length === character.episode.length) return;
    const episodeApi = character.episode[episodes.length];
    fetch(episodeApi)
      .then((response) => response.ok && response.json())
      .then((data) => {
        console.log(data);
        setEpisodes([...episodes, data]);
      })
      .catch((error) => {
        throw error;
      });
  }, [character, episodes]);

  return (
    character && (
      <div className={styles.container}>
        <h1>{character.name}</h1>
        <div className={styles.detailsContainer}>
          <img src={character.image} alt="" height="400px" width="400px" />
          <div className={styles.details}>
            <span>
              <strong>Species: </strong>
              {character.species}
            </span>
            <span>
              <strong>Gender: </strong> {character.gender}
            </span>
            <span>
              <strong>Status: </strong> {character.status}
            </span>
            <span>
              <strong>Origin: </strong>
              {character.origin.name}
            </span>
            <span>
              <strong>Last Location: </strong> {character.location.name}
            </span>
          </div>
        </div>
        <div className={styles.episodeList}>
          <h2 style={{ textDecoration: "underline" }}>Episodes Featured</h2>
          {episodes &&
            episodes.map((episode) => {
              return (
                <Link key={episode.id} to={`/episodes/${episode.id}`}>
                  <li>
                    <span>{episode.episode}</span>
                    <span>{episode.name}</span>
                    <span>{episode.air_date}</span>
                  </li>
                </Link>
              );
            })}
        </div>
      </div>
    )
  );
};

export default Character;
