import { useState, useEffect, useRef } from 'react';

import './Actor.css'

import List from '../../components/List/List';
import Button from '../../components/Button/Button';

import loadData from '../../services/load-data.js';
import { baseURL } from '../../constants';

export default function Actor () {
  
  const [actorsList, setActorsList] = useState([])
  const [nextPage, setNextPage] = useState("");

  useEffect(() => {
    const getActors = async () => {
      const response = await loadData(baseURL + "people/");
      setActorsList(response.results)
      setNextPage(response.next)
    }
    getActors()

    return () => {
      setActorsList([])
      setNextPage()
    }
  }, [])

  const viewMore = async () => {
    if (nextPage) {
      const response = await loadData(nextPage);
      setActorsList([...actorsList, ...response.results])
      setNextPage(response.next);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        actorsList && (
          <>
            <List list={actorsList} page={'actors'} />
            {
              actorsList.length < 80 ? (
                <Button open={viewMore} text={'More'} name={'view__button'} />
              ) : (
                <Button open={goToTop} text={'Top'} name={'view__button'} />
              )
            }
          </>
        )
      }
    </>
  )
}
