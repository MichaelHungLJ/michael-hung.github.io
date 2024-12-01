"use client";
import { createContext } from 'react'
import { useState } from 'react'


export const themeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
})

export const ThemeProvider = ({children}: {
    children: React.ReactNode
}) => {

    const [ theme, setTheme ] = useState('light')

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <themeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </themeContext.Provider>
    )
}