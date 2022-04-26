import { useState, useEffect } from 'react';

import './Planets.css'

import List from '../../components/List/List';
import Button from '../../components/Button/Button';

import loadData from '../../services/load-data.js';
import { baseURL } from '../../constants';

export default function Planets () {
  const [planetsList, setPlanetsList] = useState([])
  const [nextPage, setNextPage] = useState()

  useEffect(() => {

    const getPlanets = async () => {
      const response = await loadData(baseURL + "planets/");
      
      setPlanetsList(response.results)
      setNextPage(response.next)
    }
    getPlanets()

    return () => {
      setPlanetsList([])
      setNextPage()
    }
  }, [])

  const viewMore = async () => {
    if (nextPage) {
      const response = await loadData(nextPage);
      setPlanetsList([...planetsList, ...response.results])
      setNextPage(response.next);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        planetsList && (
          <>
            <List list={planetsList} page={'planets'} />
            {
              planetsList.length < 36 ? (
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