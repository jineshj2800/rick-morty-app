// Libraries
import { Link } from "react-router-dom";

// Styles
import styles from "./Characters.module.scss";

const CharacterDetails = ({ character }) => {
  return (
    <Link to={`${character.id}`}>
      <div
        className={`${styles.character} ${
          styles[character.status.toLowerCase()]
        }`}
      >
        <img src={character.image} alt="" height="200px" width="200px" />
        <div className={styles.characterInfo}>
          <span style={{ fontSize: "20px", fontWeight: "600" }}>
            {character.name}
          </span>
          <span>Species - {character.species}</span>
          <span>Gender - {character.gender}</span>
        </div>
      </div>
    </Link>
  );
};

export default CharacterDetails;
