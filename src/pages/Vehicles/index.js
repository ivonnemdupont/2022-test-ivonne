import { useState, useEffect, useRef } from 'react';

import './Vehicles.css'

import List from '../../components/List/List';
import Button from '../../components/Button/Button';

import loadData from '../../services/load-data.js';
import { baseURL } from '../../constants';

export default function Vehicles () {
  
  const [vehiclesList, setVehiclesList] = useState([])
  const [nextPage, setNextPage] = useState()

  useEffect(() => {

    const getVehicles = async () => {
      const response = await loadData(baseURL + "vehicles/");
      
      setVehiclesList(response.results)
      setNextPage (response.next)
    }

    getVehicles()

    return () => {
      setVehiclesList([])
      setNextPage ()
    }
  }, [])

  const viewMore = async () => {
    if (nextPage) {
      const response = await loadData(nextPage)
      setVehiclesList([...vehiclesList, ...response.results])
      setNextPage (response.next)
    }
  }

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      {
        vehiclesList && (
          <>
            <List list={vehiclesList} page={'vehicles'} />
            {
              vehiclesList.length < 36 ? (
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