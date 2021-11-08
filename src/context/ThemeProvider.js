import React, { useContext, useState } from 'react'
import ChangeScssVariables from '../ChangeScssVariables'
import { storage } from '../localTheme'

export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'


const ThemeContext = React.createContext()

const ThemeProvider = ({children, ...props}) => {

    const [theme,setTheme] = useState(
        storage.getItem('theme') || THEME_LIGHT
    )
    ChangeScssVariables(theme)
    const change = (name) => {
        setTheme(name)
        ChangeScssVariables(name)
        storage.setItem('theme',name)
        
    }

    return (
        <ThemeContext.Provider value={{
            change,
            theme:theme,
            
        }}
        {...props}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext)
