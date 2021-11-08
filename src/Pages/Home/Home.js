import React from 'react'
import {Day} from './Components/Day'
import { DayInfo } from './Components/DayInfo'
import WeekWeather from './Components/WeekWeather'
import s from './Home.module.scss'
export default function Home() {
    return (
        <>
            <div className={s.home}>
                <Day />
                <DayInfo />
            </div>
            <WeekWeather />
        </>
    )
}
