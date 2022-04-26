import { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./StarshipDetails.css";

import loadData from "../../services/load-data.js";
import loadDataList from "../../services/load-data-list.js";

import DetailsList from "../../components/DetailsList/DetailsList";

import { baseURL, filmsDetailsList, actorsDetailsList } from "../../constants";

export default function StarshipDetails() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [actors, setActors] = useState(null);
  const [films, setFilms] = useState(null);

  useEffect(() => {

    const getStarship = async () => {
      const starshipData = await loadData(baseURL + `starships/${id}/`);
      setStarship(starshipData);

      const actorsData = await loadDataList(starshipData.pilots);
      setActors(actorsData);

      const filmsData = await loadDataList(starshipData.films);
      setFilms(filmsData);
    };

    getStarship();

    return () => {
      setStarship(null);
      setActors(null);
      setFilms(null);
    };
  }, [id]);

  return (
    <>
      <main>
        <div className="section">
          <div className="details">
            {starship && (
              <>
                <h2 className="page-title-name"> {starship.name} </h2>
                <div className="details__info">
                  <div className="details__starship">
                    <div>
                      <p>Model: {starship.model}</p>
                      <p>Manufacturer: {starship.manufacturer}</p>
                      <p>Cost in credits: {starship.cost_in_credits}</p>
                    </div>
                    <div>
                      <p>Length: {starship.length}</p>
                      <p>
                        Atmospheric Speed: {starship.max_atmosphering_speed}
                      </p>
                      <p>Crew: {starship.crew}</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {
          <div className="section">
            {actors && actors.length > 0 && (
              <>
                <div className="container">
                  <h2 className="page-title"> ACTORS </h2>
                </div>
                <DetailsList
                  list={actors}
                  names={actorsDetailsList}
                  id={"people"}
                />
              </>
            )}
          </div>
        }

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
