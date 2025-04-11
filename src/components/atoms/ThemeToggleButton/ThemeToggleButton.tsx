import React from 'react';
import { ReactComponent as MoonIcon } from "../../../assets/icons/moonWhite.svg";
import { useDarkMode } from '../../../hooks/useDarkMode';
 

function ThemeToggleButton() {

    const [darkMode, setDarkMode] = useDarkMode();
    function handleChangeTheme() {
        setDarkMode(!darkMode);
    }
    return (
        <button onClick={handleChangeTheme}>
            <MoonIcon width={16} height={16} />
        </button>
    );
}; 

export { ThemeToggleButton };