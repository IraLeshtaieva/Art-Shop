import './quantity-button.css';

import { useState } from 'react';

const QuantityButton = () => {

    const [counter, setCounter] = useState(1);

    function addNumber() {
        setCounter(currentState => currentState + 1);
    }

    function deleteNumber() {
        setCounter(currentState => currentState > 0 ? currentState - 1 : 0 );
    }  
    
    return (
            <div className="buttonField">
                    <button 
                        className="button"
                        onClick={addNumber}
                        type="button">
                            + 
                    </button>
                    <button 
                        className="button"> {counter} </button>
                    <button 
                        className="button"
                        onClick={deleteNumber}
                        type="button">
                            - 
                    </button>
                    </div>
        )
}
export default QuantityButton;
