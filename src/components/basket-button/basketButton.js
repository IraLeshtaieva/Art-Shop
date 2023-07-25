import './basket-button.css'


const BasketButton = (props) => {

    function sellItem() {
        alert(`Thank you for bying ${props.itemsPutedBasket} pictures!`);
    }

    const active = props.itemsPutedBasket > 0;
    const clazz = active? "fa-solid fa-cart-plus fa-beat color" : "fa-solid fa-xl fa-cart-plus";
    const message = active? sellItem : null;

    return(
        <div>
            <button className="basket" 
                data-value={props.itemsPutedBasket}
                onClick={message}
                >
                <i className={clazz}>{props.itemsPutedBasket}</i>
            </button>
        </div>
    )
}

export default BasketButton;