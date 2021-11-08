import React from 'react'
import s from '../Home.module.scss'
import cloud from '../../../images/Cloud image.png'
import { SvgSelector } from '../../../Components/SvgSelector'

const CardDayInfo = ({weatherData}) => {
    return (
        <div className={s.dayInfo}>
            <div className={s.cloud} >
                <img src={cloud} alt='cloud'/>
            </div>
            <div className={s.cardDayInfo}>
                <div className={s.infoTemp}>
                    <div className={s.bgSvg}>
                        <SvgSelector id='temp' />
                    </div>
                    <div><p>Температура</p></div>
                    <div><b>{Math.round(weatherData.current.temp)}°  Ощущаться как - {Math.round(weatherData.current.feels_like)}°</b></div>
                </div>
                <div className={s.infoPress}>
                    <div className={s.bgSvg}>
                        <SvgSelector id='pressure' />
                    </div>
                    <div><p>Давление</p></div>
                    <div><b>{weatherData.current.pressure} мм рт.ст.</b></div>
                </div>
                <div className={s.infoPrecip}>
                    <div className={s.bgSvg}>
                        <SvgSelector id='precipitation' />
                    </div>
                    <div><p>Осадки</p></div>
                    <div><b>{weatherData.current.weather[0].description}</b></div>
                </div>
                <div className={s.infoWind}>
                    <div className={s.bgSvg}>
                        <SvgSelector id='wind' />
                    </div>
                    <div><p>Ветер</p></div>
                    <div><b>{weatherData.current.wind_speed} м/с</b></div>
                </div>
            </div>

    </div>
    )
}

export default CardDayInfo
