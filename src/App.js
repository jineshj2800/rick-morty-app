import "./App.scss";
import NavSideBar from "./components/NavSideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./components/Episodes";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Character from "./components/Character";
/*
  Try to organize your imports and use comments for grouping them. This would
  improve the readability of your code, and make other developers easily 
  understand what all code this module is importing. For example:

  // Libraries
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  // Components
  import Episodes from "./components/Episodes";
  import Characters from "./components/Characters";
  import Locations from "./components/Locations";
  import Character from "./components/Character";

  // Styles
  import "./App.scss";
*/

/*
  You could have used an arrow function here
*/
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
