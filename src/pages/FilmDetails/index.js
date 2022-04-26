import { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./FilmDetails.css";

import loadData from "../../services/load-data.js";
import loadDataList from "../../services/load-data-list.js";

import {
  baseURL,
  starshipsDetailsList,
  vehiclesDetalsList,
  speciesDetailsList,
  actorsDetailsList,
} from "../../constants";

import DetailsList from "../../components/DetailsList/DetailsList";

export default function FilmDetails() {
  const { id } = useParams();
  const [film, setFilms] = useState(null);
  const [person, setPerson] = useState(null);
  const [starships, setStarships] = useState(null);
  const [species, setSpecies] = useState(null);
  const [vehicles, setVehicles] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      const filmsData = await loadData(baseURL + `films/${id}/`);
      setFilms(filmsData);

      const personData = await loadDataList(filmsData.characters);
      setPerson(personData);

      const starshipsData = await loadDataList(filmsData.starships);
      setStarships(starshipsData);

      const speciesData = await loadDataList(filmsData.species);
      setSpecies(speciesData);

      const vehiclesData = await loadDataList(filmsData.vehicles);
      setVehicles(vehiclesData);
    };

    getFilms();

    return () => {
      setFilms(null);
      setPerson(null);
      setStarships(null);
      setSpecies(null);
      setVehicles(null);
    };
  }, [id]);

  return (
    <>
      <main>
        <div className="section">
          <div className="details">
            {film && (
              <>
                <h2 className="page-title-name"> {film.title} </h2>

                <div className="details__info">
                  <div className="details__film">
                    <div>
                      <p className="details__film">
                        {" "}
                        Episode: {film.episode_id}{" "}
                      </p>
                      <p className="details__film">Director: {film.director}</p>
                    </div>
                    <div>
                      <p className="person__detail">
                        {" "}
                        Release Date: {film.release_date}{" "}
                      </p>
                      <p className="details__film">Producer: {film.producer}</p>
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
          {person && person.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title"> ACTORS </h2>
              </div>
              <DetailsList
                list={person}
                names={actorsDetailsList}
                id={"people"}
              />
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
              <DetailsList
                list={species}
                names={speciesDetailsList}
                id={"people"}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
}
