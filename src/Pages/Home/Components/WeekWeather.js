import React , {useState, useEffect} from 'react'
import s from '../Home.module.scss'
import CardWeek from './CardWeek'

const WeekWeather = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
        await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely,hourly&lang=ru&appid=${process.env.REACT_APP_API_KEY}`)
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
        <div className={s.week}>
            {typeof data.daily != 'undefined' ? <CardWeek weatherData={data}/>
            : <div>Loading</div>}
        </div>
    )
}

export default WeekWeather
