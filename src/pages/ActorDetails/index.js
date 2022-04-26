import { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./ActorDetails.css";

import loadData from "../../services/load-data.js";
import loadDataList from "../../services/load-data-list.js";

import {
  baseURL,
  filmsDetailsList,
  starshipsDetailsList,
  vehiclesDetalsList,
  speciesDetailsList,
} from "../../constants";

import DetailsList from "../../components/DetailsList/DetailsList";

export default function ActorDetails() {
  const { id } = useParams();
  const [actor, setActors] = useState(null);
  const [starships, setStarships] = useState(null);
  const [films, setFilms] = useState(null);
  const [species, setSpecies] = useState(null);
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    const getActors = async () => {
      const actorData = await loadData(baseURL + `people/${id}/`);
      setActors(actorData);

      const starshipsData = await loadDataList(actorData.starships);
      setStarships(starshipsData);

      const filmsData = await loadDataList(actorData.films);
      setFilms(filmsData);

      const speciesData = await loadDataList(actorData.species);
      setSpecies(speciesData);

      const vehiclesData = await loadDataList(actorData.vehicles);
      setVehicles(vehiclesData);
    };

    getActors();

    return () => {
      setActors(null);
      setStarships(null);
      setFilms(null);
      setSpecies(null);
      setVehicles(null);
    };
  }, [id]);

  return (
    <>
      <main>
        <div className="section">
          <div className="details">
            {actor && (
              <>

            
                <h2 className="page-title-name"> {actor.name} </h2>
              
                <div className="details__info">
                  <div className="details__actor">
                    <div>
                      <p className="details__actor">Height: {actor.height}</p>
                      <p className="details__actor">Mass: {actor.mass}</p>
                      <p className="details__actor">

                        Hair color: {actor.hair_color}
                      </p>
                    </div>
                    <div>
                      <p className="details__actor">
                        {" "}
                        Eye color: {actor.skin_color}{" "}
                      </p>
                      <p className="details__actor">
                        {" "}
                        Birth year: {actor.birth_year}{" "}
                      </p>
                      <p className="details__actor">Gender: {actor.gender}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="section">
          {starships && starships.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title"> STARSHIPS </h2>
              </div>

              <DetailsList
                list={starships}
                names={starshipsDetailsList}
                id={"starships"}
              />
            </>
          )}
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
          {vehicles && vehicles.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title"> VEHICLES </h2>
              </div>
              <DetailsList
                list={vehicles}
                names={vehiclesDetalsList}
                id={"vehicles"}
              />
            </>
          )}
        </div>

        <div className="section">
          {species && species.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title"> SPECIES </h2>
              </div>
              <DetailsList list={species} names={speciesDetailsList} id={"people"}/>
            </>
          )}
        </div>


      </main>
    </>
  );
}
