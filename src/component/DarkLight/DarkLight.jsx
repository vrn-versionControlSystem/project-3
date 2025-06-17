import React, { createContext, use, useState } from 'react';
import './DarkLight.css';
import { GoSun } from 'react-icons/go';
import { FaMoon } from 'react-icons/fa';
import { CiSettings } from 'react-icons/ci';


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light');

    const toggleMoonSun = () => {

        return setTheme((preTheme) => preTheme === "light" ? "dark" : "light");

    }


    return <ThemeContext.Provider value={{ theme, toggleMoonSun }}>
        {children}
    </ThemeContext.Provider>
}




const DarkLight = () => {



    const toggleBtn = () => {

        alert("setting is open");

    }

    const { theme, toggleMoonSun } = use(ThemeContext);


    return (<>
        <CiSettings className='setting' onClick={toggleBtn} />
        <div className='theme' >

            {theme === 'dark' ? <GoSun className='sun' onClick={toggleMoonSun} /> : <FaMoon className='moon' onClick={toggleMoonSun} />

            }





        </div>

    </>

    )
}

export default DarkLight