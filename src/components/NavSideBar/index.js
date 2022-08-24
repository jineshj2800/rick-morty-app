import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavSideBar.module.scss";
/* Could organize imports, see App.js comments */

/* Could use arrow function here */
const NavSideBar = () => {
  return (
    <div className={styles.navSideBar}>
      <Link to="/episodes">Episodes</Link>
      <Link to="/characters">Characters</Link>
      <Link to="locations">Locations</Link> {/* This should have been /locations right ? */}
    </div>
  );
};

export default NavSideBar;
