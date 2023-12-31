import './header.css';
import logo2 from './logo2.svg';

import { useState } from 'react';

const Header = () => {

    const [hidden, setHidden] = useState(false);
    console.log(hidden);
    function onClickHandler() {
        setHidden(!hidden); 
    }

    return(
        <header className="App-header">
            {!hidden? 
            <> 
                <img src={logo2} className="App-logo" alt="logo"/> 
                <div className="header">
                    <h3>
                    Looking for a unique gift or want to decorate your interior?
                    Original watercolor magnets and Paintings will improve the mood of you and your friends and add zest to your home. 
                    Unique postcards will delight your friends and relatives</h3>
                </div>
            </>: null}
            
            
            <button className="hideHeader">
                <i className={'fa-solid fa-2x fa-circle-' + (hidden ? 'down': 'up')}
                   onClick={onClickHandler}>
                    </i>  
            </button>
        </header>
    )
}
export default Header;