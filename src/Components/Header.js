import React, { useState , useEffect} from 'react'
import s from './Header.module.scss'
import { SvgSelector } from './SvgSelector'
import Select from 'react-select';
import theme_light from '../images/theme-light.png'
import theme_dark from '../images/theme-dark.png'
import { THEME_DARK, THEME_LIGHT, useTheme } from '../context/ThemeProvider';

export default function Header() {

    const isTheme = useTheme()

    const [iconChange,setIconchange] = useState(null)

    // const [theme,setTheme] = useState()

    // function ChangeTheme() {
    //     setTheme(isTheme.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT)
    // }

    

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIconchange(theme_light); break;
            case THEME_DARK: setIconchange(theme_dark); break;
            default: setIconchange(theme_light);
        }
    }, [isTheme.theme])

    // const options = [
    //     { value: 'chocolate', label: 'Kiev' },
    //     { value: 'strawberry', label: 'Kharkiv' },
    //     { value: 'vanilla', label: 'Lviv' }
    //   ]

    // const colourStyles = {
    //     control : styles => ({
    //         ...styles, 
    //         backgroundColor: 'rgba(71, 147, 255, 0.2)',
    //         height: '37px',
    //         width: '194px',
    //         border: 'none',
    //         borderRadius: '10px',
    //         zIndex: 100,
    //     })
    // }

    // const [theme,setTheme] = useState()

    // function ChangeTheme() {
    //     setTheme(isTheme.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT)
    // }


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <SvgSelector id='header-logo'/>
                </div>
                <div className={s.title}>Weather</div> 
            </div>
            <div className={s.wrapper}>
                <div className={s.changetheme} >
                    <img onClick={isTheme.theme === THEME_LIGHT ? () => isTheme.change(THEME_DARK) : () => isTheme.change(THEME_LIGHT)} src={iconChange} /> 
                    {/* <img onClick={() => ChangeTheme(theme)} src={iconChange} /> */}
                </div>
                {/* <div className={s.select}> */}
                    {/* <Select styles={colourStyles} options={options} /> */}
                {/* </div> */}
            </div>
        </header>
    )
}
