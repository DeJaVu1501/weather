import React from 'react'
import s from '../Home.module.scss'
import { SvgSelector } from '../../../Components/SvgSelector'

const CardWeek = ({weatherData}) => {
    return (
        <>
        {weatherData?.daily?.map(day=>
            <div className={s.card}>
                <div className={s.card__day}>Сегодня</div>
                <div className={s.card__day__info}>08 ноября</div>
                <div className={s.img}>
                    <SvgSelector id='small_rain' />
                </div>
                <div className={s.temp__day}>{Math.round(day.temp.day)}°</div>
                <div className={s.temp__night}>{Math.round(day.temp.eve)}°</div>
                <div className={s.description}>{day.weather[0].description}</div>
            </div>)}
        </>
    )
}

export default CardWeek
