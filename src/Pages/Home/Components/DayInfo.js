import React,{useEffect,useState}from 'react'
import CardDayInfo from './CardDayInfo'

export const DayInfo = () => {
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
      <>
        {(typeof data.current != 'undefined') ? (
          <CardDayInfo weatherData={data} />
        ): (
          <div>Loading</div>
        )} 
      </>
    )
}
