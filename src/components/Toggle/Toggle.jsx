import React, { useContext } from 'react';
import './toggle.css';
import Sun from '../../img/sun.png'
import Moon from '../../img/moon.png'
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleToggle=()=> {
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <div className='t'>
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <div className="t-button" onClick={handleToggle} style={{left: theme.state.darkMode ? 0 : 25, transition: 'all 0.25s ease'}}></div>
        </div>
    )
}

export default Toggle
