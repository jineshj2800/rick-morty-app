import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Episodes.module.scss";

const Episodes = () => {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.ok && response.json())
      .then((data) => {
        setEpisodes(data.results);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

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
          {episodes &&
            episodes.map((episode) => {
              return (
                <Link key={episode.id} to={`${episode.id}`}>
                  <li>
                    <span>{episode.episode}</span>
                    <span>{episode.name}</span>
                    <span>{episode.air_date}</span>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Episodes;
