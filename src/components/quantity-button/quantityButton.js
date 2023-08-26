import './quantity-button.css';


const QuantityButton = ({currentItem, setItemsList}) => {


    function addNumber() {
        setItemsList((itemsList) => itemsList.map((item) => {
            if (item.itemId === currentItem.itemId) {
                return {...item, itemQuantity: item.itemQuantity+1};
            } else {
                return item;
            }
        }))
    }

    function deleteNumber() {
        setItemsList((itemsList) => itemsList.map((item) => {
            if (item.itemId === currentItem.itemId && item.itemQuantity > 0) {
                return {...item, itemQuantity: item.itemQuantity-1};
            } else {
                return item;
            }
        }))
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
                        className="button"> {currentItem.itemQuantity} </button>
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
