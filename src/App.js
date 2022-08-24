import "./App.scss";
import NavSideBar from "./components/NavSideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./components/Episodes";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Character from "./components/Character";
/* 
  You should create directories with camel case names 
  (i.e. first letter should be small) instead of using pascal case.

  Example:
  import NavSideBar from "./components/navSideBar"; 
  import Episodes from "./components/episodes";
  import Characters from "./components/characters";
  import Locations from "./components/locations";
  import Character from "./components/character";
*/

/*
  Try to organize your imports and use comments for grouping them. This would
  improve the readability of your code, and make other developers easily 
  understand what all code this module is importing. 

  Also, you should follow the same group order pattern in all the files you
  implement. 
  For example, I follow this grouping order: 
  1. Libraries
  2. Components
  3. Hooks
  4. Utils
  5. Constants
  6. Styles
  7. Types
  
  Usage example:

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
