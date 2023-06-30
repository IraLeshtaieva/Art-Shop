import './basket-button.css'

const BasketButton = (props) => {
    const active = props.itemsPutedBasket > 0;
    const clazz = active? "fa-solid fa-cart-plus fa-beat color" : "fa-solid fa-xl fa-cart-plus";
    return(
        <div>
            <button className="basket" 
                data-value={props.itemsPutedBasket}
                >
                <i className={clazz}>{props.itemsPutedBasket}</i>
            </button>
        </div>
    )
}

export default BasketButton;