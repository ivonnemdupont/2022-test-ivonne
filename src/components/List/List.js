import { Link } from "react-router-dom";

import "./List.css";

export default function List({ list, page }) {
  return (
    <main>
      <div className="container">
        <h2 className="page-title"> {page.toUpperCase() } </h2>
      </div>

      <ul className="list" aria-label="starships list">

        {list &&
          page === "starships" &&
          list.map((starship, index) => {
            return (
              <li
                key={index}
                className="list__item"
                data-testid={`element-${index}`}
              >

              <Link to={`/2022-test-ivonne/starships/${starship.url.match(/[0-9]+/)}`}>
                  <h3>{starship.name}</h3>
                </Link>
              </li>
            );
          })}

        {list &&
          page === "actors" &&
          list.map((person, index) => {
            return (
              <li key={index} className="list__item list__item--people">
                <Link to={`/2022-test-ivonne/people/${person.url.match(/[0-9]+/)}`}>
                  <h3>{person.name}</h3>
                </Link>
              </li>
            );
          })}

        {list &&
          page === "planets" &&
          list.map((planet, index) => {
            return (
              <li key={index} className="list__item list__item--planet">
                <Link to={`/2022-test-ivonne/planets/${planet.url.match(/[0-9]+/)}`}>
                  <h3>{planet.name}</h3>
                </Link>
              </li>
            );
          })}

        {list &&
          page === "films" &&
          list.map((film, index) => {
            return (
              <li key={index} className="list__item list__item--film">
                <Link to={`/2022-test-ivonne/films/${film.url.match(/[0-9]+/)}`}>
                  <h3>{film.title}</h3>
                </Link>
              </li>
            );
          })}

        {list &&
          page === "vehicles" &&
          list.map((vehicle, index) => {
            return (
              <li key={index} className="list__item list__item--vehicle">
                <Link to={`/2022-test-ivonne/vehicles/${vehicle.url.match(/[0-9]+/)}`}>
                  <h3>{vehicle.name}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
