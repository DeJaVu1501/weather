import React, {useState, useEffect} from 'react';
import { SvgSelector } from '../../../Components/SvgSelector';
import s from '../Home.module.scss'
import CardDay from './CardDay';

export const Day = () => {
    
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });

        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&lang=ru&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        })
        .catch(err => console.log(err))
        
      }
      fetchData();
      }, [lat,long])

    return (
      <>
        {(typeof data.main != 'undefined') ? (
          <CardDay weatherData={data} />
        ): (
          <div>Loading</div>
        )} 
      </>
    )
}
