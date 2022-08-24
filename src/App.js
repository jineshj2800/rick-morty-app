import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavSideBar from "./components/navSideBar";
import Episodes from "./components/episodes";
import Characters from "./components/characters";
import Locations from "./components/locations";
import Character from "./components/character";
import Episode from "./components/episode";
import Location from "./components/location";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavSideBar />
        <Routes>
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes/:episodeId" element={<Episode />} />
          <Route path="/characters/:characterId" element={<Character />} />
          <Route path="/locations/:locationId" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
