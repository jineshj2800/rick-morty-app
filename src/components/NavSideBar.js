import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavSideBar.module.scss";

const NavSideBar = () => {
  return (
    <div className={styles.navSideBar}>
      <Link to="/episodes">Episodes</Link>
      <Link to="/characters">Characters</Link>
      <Link to="locations">Locations</Link>
    </div>
  );
};

export default NavSideBar;
