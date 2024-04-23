import { createContext, useState } from "react";
export const MyContext = createContext('');  //THis is the context object
export const Theme = createContext(''); //THis is the theme object

const ThemeSetter = ()=>{
    const [theme, setTheme] = useState('Default');

    const toggleTheme = ()=>{
        setTheme((theme)=>(theme === 'Dark' ? "light" : "Dark"))
    }
    return {theme, toggleTheme}
}

export default ThemeSetter;





