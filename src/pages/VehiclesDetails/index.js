import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";

import "./VehiclesDetails.css";

import loadData from "../../services/load-data.js";
import loadDataList from "../../services/load-data-list.js";

import { baseURL, filmsDetailsList, actorsDetailsList } from "../../constants";

import DetailsList from "../../components/DetailsList/DetailsList";

export default function VehiclesDetails() {
  const { id } = useParams();
  const [vehicle, setVehicles] = useState(null);
  const [films, setFilms] = useState(null);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getVehicles = async () => {
      const vehiclesData = await loadData(baseURL + `vehicles/${id}/`);
      setVehicles(vehiclesData);

      const personData = await loadDataList(vehiclesData.pilots);
      setPerson(personData);

      const filmsData = await loadDataList(vehiclesData.films);
      setFilms(filmsData);
    };

    getVehicles();

    return () => {
      setVehicles(null);
      setPerson(null);
      setFilms(null);
    };
  }, [id]);

  return (
    <>
      <main>
        <div className="section">
          <div className="details">
            {vehicle && (
              <>
                <h2 className="page-title-name"> {vehicle.model} </h2>
                <div className="details__info">
                  <div className="details__vehicles">
                    <div >
                      <p>Model: {vehicle.model}</p>
                      <p>Manufacturer: {vehicle.manufacturer}</p>
                      <p>Cost in credits: {vehicle.cost_in_credits}</p>
                      <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                    </div>
                    <div>
                      <p>Length: {vehicle.length}</p>
                      <p>Atmospheric Speed: {vehicle.max_atmosphering_speed}</p>
                      <p>Crew: {vehicle.crew}</p>
                      <p>Passengers: {vehicle.passengers}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
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
          {films && films.length > 0 && (
            <>
              <div className="container">
                <h2 className="page-title"> FILMS </h2>
              </div>
              <DetailsList list={films} names={filmsDetailsList} id={"films"} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
