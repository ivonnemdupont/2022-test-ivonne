import { useState, useEffect, useRef } from 'react';

import './Films.css'

import List from '../../components/List/List';
import Button from '../../components/Button/Button';

import loadData from '../../services/load-data.js';
import { baseURL } from '../../constants';

export default function Films () {
  const [filmList, setFilmList] = useState([])
  const [nextPage, setNextPage] = useState()

  useEffect(() => {

    const getFilms = async () => {
      const response = await loadData(baseURL + "films/");
     
      setFilmList (response.results)
      setNextPage (response.next)
    }
    getFilms()

    return () => {
      setFilmList([])
      setNextPage ()
    }
  }, [])

  const viewMore = async () => {
    if (nextPage) {
      const response = await loadData(nextPage);
      setFilmList([...filmList, ...response.results])
      setNextPage(response.next);
    }
  };

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        filmList && (
          <>
            <List list={filmList} page={'films'} />
            {
              filmList.length < 7 ? (
                <Button open={viewMore} text={'More'} name={'view__button'} />
              ) : (
                <Button open={setNextPage} text={'Top'} name={'view__button'} />
              )
            }

          </>
        )
      }
    </>
  )
}