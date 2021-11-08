import React from 'react'
import { SvgSelector } from '../../../Components/SvgSelector';
import s from '../Home.module.scss'
import moment from 'moment';
import 'moment/locale/ru'

const CardDay = ({weatherData}) => {

    let weatherIcon = null
    
    if(weatherData.weather[0].main === 'Clouds' || weatherData.weather[0].main === 'Mist' ) {
        weatherIcon = 'mainly_cloudy'
    }
    else if (weatherData.weather[0].main === 'Drizzle') {
      weatherIcon = 'small_rain_sun';
    } else if (weatherData.weather[0].main === 'Rain') {
      weatherIcon = 'rain';
    } else if (weatherData.weather[0].main === 'Snow') {
      weatherIcon = 'snow'
    } else if (weatherData.weather[0].main === 'Clear') {
      weatherIcon = 'sun'
    } else {
      weatherIcon = 'small_rain';
    }
    

    return (
        <div className={s.day}>
            <div className={s.top}>
                <div className={s.top__wrapper}>
                    <div className={s.temp}>{`${Math.round(weatherData.main.temp)}°`}</div>
                    <div className={s.day__day}>{moment().format('dddd').toUpperCase()}</div>
                </div>
               <SvgSelector id={weatherIcon} />
            </div>
            <div className={s.bottom}>
                <div className={s.time}>Время: <span>{moment().format('HH:MM')}</span></div>
                <div className={s.city}><span>{weatherData.name}</span></div>
            </div>
        </div>
    )
}

export default CardDay
