import React from "react";
import styles from "../styles/Characters.module.scss";

const Characters = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>All Characters</h1>
      <div className={styles.contentContainer}>
        <div className={styles.character}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick SRick SanchezRick Sanchezanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character + " " + styles.alive}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character + " " + styles.dead}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character + " " + styles.alive}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character + " " + styles.dead}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
        <div className={styles.character}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="coming soon"
            height="200px"
            width="200px"
          />
          <div className={styles.characterInfo}>
            <span>Rick Sanchez</span>
            <span>Human</span>
            <span>Male</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
