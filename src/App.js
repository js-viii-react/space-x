import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Missions from "./pages/Missions";
import Launches from "./pages/Launches";
import Rockets from "./pages/Rockets";
import LaunchDetails from "./components/LauncheDetails";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Da bi rutovanje moglo da radi, da se koristi unutar nase aplikacije
        neophodno je sve da bude wrapp-ovano Router-om
      */}
      <Router>
        {/* Navigacioni linkovi START */}

        {/* <a href="/">Home</a> */}
        {/* ono sto se nalazi u `to=""` pod navodnicima, tu nas vodi click event,to dodaje na nas URL */}
        <div className="my-links">
          <Link to="/">Home</Link>
          <Link to="/missions">Missions</Link>
          <Link to="/rockets">Rockets</Link>
          <Link to="/launches">Launches</Link>
        </div>

        {/* Navigacioni linkovi END */}

        {/* Nase Route START */}
        {/* Route moraju biti wrapp-ovane izmedju Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launchdetails/:id" element={<LaunchDetails />} />
        </Routes>

        {/* Nase Route END */}
      </Router>
    </div>
  );
}

export default App;
