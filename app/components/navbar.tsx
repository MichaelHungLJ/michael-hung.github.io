"use client";
import React, { useContext } from "react";
import { themeContext } from "./theme-provider";


export function Navbar() {
    const { theme, toggleTheme } = useContext(themeContext);

    return (
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
         </div>
    )
}