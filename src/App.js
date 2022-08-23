import "./App.scss";
import NavSideBar from "./components/NavSideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./components/Episodes";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Character from "./components/Character";

function App() {
  return (
    <Router>
      <div className="app">
        <NavSideBar />
        <Routes>
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes/:episodeId" element={<Episodes />} />
          <Route path="/characters/:characterId" element={<Character />} />
          <Route path="/locations/:locationId" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
