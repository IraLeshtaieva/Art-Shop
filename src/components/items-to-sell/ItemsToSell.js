import './items-to-sell.css';

import QuantityButton from '../quantity-button/quantityButton';


const ItemToSell = ({photo, type, size, description, price, id, itemsInBasket, setItemsList}) => {


const toUrl = (type) => {
    if (type === "magnet") {
      return "https://en.wikipedia.org/wiki/Refrigerator_magnet"
    } 
    
    if (type === "painting") {
      return "https://en.wikipedia.org/wiki/Painting"
    }

    if (type === "postcard") {
      return "https://en.wikipedia.org/wiki/Postcard"
    }
  }
   
const isItemInBasket = itemsInBasket.find(element => element.itemId===id);
const text =  isItemInBasket === undefined ? "Put item in" : "Delete from";
const clazz = isItemInBasket === undefined ? "btn-new" : "btn-new-delete";

function showButton() { 
  if (isItemInBasket !== undefined) {
    return <QuantityButton currentItem = {isItemInBasket} setItemsList={setItemsList}/>;
  } else {
    return null;
  }
}
      
function filterItemsList(itemsList) {
  return itemsList.filter(
    element => element.itemId!==id
  ) 
}

function onClickAdd() {
  if (isItemInBasket === undefined) {
    setItemsList(itemsList => [...itemsList, {itemId:id, itemQuantity:1}])
  } else {
    setItemsList(filterItemsList)
  }
} 
    
  return (

      <div className="divTable"><img className='photo' src={String(photo)} alt="magnet with view" />
          <ul>
            <li className='text'>Type: <a href={toUrl(type)}>{type}</a> </li>    
            <li className='text'>Size: {size +"cm"} </li>  
            <li className='text'>Description: {description} </li>  
            <li className='text'>Price: {price +"$"} </li> 
            <li className='text'>
              <button 
                className= {clazz}
                onClick={onClickAdd}
                type="button">
                  {text} <i className="fa-solid fa-cart-plus"></i>
                </button>
                {showButton(isItemInBasket)}  
              </li> 
            </ul>
          </div>      
        )
}
export default ItemToSell;