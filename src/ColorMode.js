import { useState } from 'react';

const ColorMode = () => {
    const [toggleOn, setToggleOn] = useState(true);

    const handleToggle = () => {
        setToggleOn(prevIsOn => {
            const newIsOn = !prevIsOn;
            if (newIsOn) {
                setDarkMode();
            }
            else {
                setLightMode();
            }
            return newIsOn;
        });
    };
    
    const setDarkMode = () => {
        const root = document.documentElement;
        root.style.setProperty("--primary", "#10114A");
        root.style.setProperty("--secondary", "#090a31");
        root.style.setProperty("--accent", "#6F1313");
        root.style.setProperty("--dark-accent", "#360909");
        root.style.setProperty("--font", "white");
    }
    const setLightMode = () => {
        const root = document.documentElement;
        root.style.setProperty("--primary", "#CBE3F5");
        root.style.setProperty("--secondary", "#DFF3FF");
        root.style.setProperty("--accent", "#FFBFE3");
        root.style.setProperty("--dark-accent", "white");
        root.style.setProperty("--font", "black");
    }
    

        
    return ( 
         <div className = "button">
            <input type="checkbox" checked={toggleOn} onChange={handleToggle} id="toggle_checkbox" />
            <label for="toggle_checkbox">
            <div id="star">
                <div class="star" id="star-1">★</div>
                <div class="star" id="star-2">★</div>
            </div>
            <div id="moon"></div>
            </label>
            
         </div>
     );
}
 
export default ColorMode;


