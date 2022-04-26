import "./App.css";
import "./assets/base/base.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
//import Footer from "./components/Footer";

import Home from "./pages/Home/";
import Actor from "./pages/Actor/";
import Starships from "./pages/Starships/";
import Planets from "./pages/Planets/";
import Films from "./pages/Films/";
import Vehicles from "./pages/Vehicles/";
import StarshipDetails from "./pages/StarshipDetails/";
import ActorDetails from "./pages/ActorDetails/";
import PlanetDetails from "./pages/PlanetDetails/";
import FilmDetails from "./pages/FilmDetails/";
import VehiclesDetails from "./pages/VehiclesDetails/";
import About from "./pages/About/";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/people" element={<Actor />} />
        <Route exact path="/people/:id" element={<ActorDetails />} />
        <Route exact path="/starships" element={<Starships />} />
        <Route exact path="/starships/:id" element={<StarshipDetails />} />
        <Route exact path="/planets" element={<Planets />} />
        <Route exact path="/planets/:id" element={<PlanetDetails />} />
        <Route exact path="/films" element={<Films />} />
        <Route exact path="/films/:id" element={<FilmDetails />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/vehicles/:id" element={<VehiclesDetails />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
