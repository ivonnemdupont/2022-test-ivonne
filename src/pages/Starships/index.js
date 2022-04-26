import { useState, useEffect, useRef } from "react";

import "./Starships.css";

import List from "../../components/List/List";
import Button from "../../components/Button/Button";

import loadData from "../../services/load-data.js";

import { baseURL } from "../../constants";

export default function Starships() {
  const [starshipList, setStarshipsList] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const getStarships = async () => {
      const response = await loadData(baseURL + "starships/");
      setStarshipsList(response.results);
      setNextPage(response.next);
      setPreviousPage(response.previous);
    };
    getStarships();

    return () => {
      setStarshipsList([]);
      setNextPage();
      setPreviousPage();
    };
  }, []);

  const viewMore = async () => {
    if (nextPage) {
      const response = await loadData(nextPage);
      setStarshipsList([...starshipList, ...response.results])
      setNextPage(response.next);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {starshipList && (
        <>
          <List list={starshipList} page={"starships"} />
          {
              starshipList.length < 50 ? (
                <Button open={viewMore} text={'More'} name={'view__button'} />
              ) : (
                <Button open={goToTop} text={'Top'} name={'view__button'} />
              )
            }
        </>
      )}
    </>
  );
}
