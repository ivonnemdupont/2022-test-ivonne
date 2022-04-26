import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";

import "./PlanetDetails.css";

import loadData from "../../services/load-data.js";
import loadDataList from "../../services/load-data-list.js";

import DetailsList from "../../components/DetailsList/DetailsList";

import { baseURL, filmsDetailsList, actorsDetailsList } from "../../constants";

export default function PlanetDetails() {
  const { id } = useParams();
  const [planet, setPlanets] = useState(null);
  const [actors, setActors] = useState(null);
  const [films, setFilms] = useState(null);

  useEffect(() => {
    const getPlanets = async () => {
      const dataPlanet = await loadData(baseURL + `planets/${id}/`);
      setPlanets(dataPlanet);

      const dataActors = await loadDataList(dataPlanet.residents);
      setActors(dataActors);

      const dataFilms = await loadDataList(dataPlanet.films);
      setFilms(dataFilms);
    };

    getPlanets();

    return () => {
      setPlanets(null);
      setFilms(null);
    };
  }, [id]);

  return (
    <>
      <main>
        <div className="section">
          <div className="details">
            {planet && (
              <>
                <h2 className="page-title-name"> {planet.name} </h2>
                <div className="details__info">
                  <div className="details__planets">
                    <div>
                      <p className="details__planets">
                        Rotation period: {planet.rotation_period}
                      </p>
                      <p className="details__planets">
                        Orbital Period: {planet.orbital_period}
                      </p>
                      <p className="details__planets">
                        Diameter: {planet.diameter}
                      </p>
                      <p className="details__planets">
                        Gravity: {planet.gravity}
                      </p>
                    </div>
                    <div>
                      <p className="details__planets">
                        Terrain: {planet.terrain}
                      </p>
                      <p className="details__planets">
                        Surface water: {planet.surface_water}
                      </p>
                      <p className="details__planets">
                        Population: {planet.population}
                      </p>
                      <p className="details__planets">
                        Climate: {planet.climate}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="section">
          {films && films.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title"> FILMS </h2>
              </div>
              <DetailsList list={films} names={filmsDetailsList} id={"films"} />
            </>
          )}
        </div>


        <div className="section">
          {actors && actors.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title">  ACTORS </h2>
              </div>
              <DetailsList list={actors} names={actorsDetailsList} id={"people"} />
            </>
          )}
        </div>


      </main>
    </>
  );
}
