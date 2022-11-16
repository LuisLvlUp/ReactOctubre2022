import { createContext } from "react";

export const initTheme = {
    dark: {
        nav: 'dark',
        body: '#0a1929',
        form: 'light'
    },
    light: {
        nav: 'primary',
        body: 'white',
        form: 'light'
    },
    
    state: false
}

export const ThemeContext = createContext();