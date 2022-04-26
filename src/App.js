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
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/2022-test-ivonne/" element={<Home />} />
        <Route exact path="/2022-test-ivonne//people" element={<Actor />} />
        <Route exact path="/2022-test-ivonne/people/:id" element={<ActorDetails />} />
        <Route exact path="/2022-test-ivonne/starships" element={<Starships />} />
        <Route exact path="/2022-test-ivonne/starships/:id" element={<StarshipDetails />} />
        <Route exact path="/2022-test-ivonne/planets" element={<Planets />} />
        <Route exact path="/2022-test-ivonne/planets/:id" element={<PlanetDetails />} />
        <Route exact path="/2022-test-ivonne/films" element={<Films />} />
        <Route exact path="/2022-test-ivonne/films/:id" element={<FilmDetails />} />
        <Route exact path="/2022-test-ivonne/vehicles" element={<Vehicles />} />
        <Route exact path="/2022-test-ivonne/vehicles/:id" element={<VehiclesDetails />} />
        <Route exact path="/2022-test-ivonne/about" element={<About />} />
      </Routes>
      {/*<Footer />*/}
    </BrowserRouter>
  );
}

export default App;
