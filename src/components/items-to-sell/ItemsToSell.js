import './items-to-sell.css';

import { useState } from 'react';

const ItemToSell = ({photo, type, size, description, price, id, itemsInBasket, onBasket}) => {

const [counter, setCounter] = useState(1);

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

function showButton(isItemInBasket) { //непонятно со скобочками и аргументами
  if (isItemInBasket !== undefined) {  //ПОЧЕМУ НАОБОРОТ????
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
    } else {
      return null;
    }
  }



function onClickAdd() {
  if (isItemInBasket === undefined) {
      onBasket(itemsList => [...itemsList, {itemId:id}])
  } else {
    onBasket(itemsList => itemsList.filter(element => element.itemId!==id))
  }
} 


function addNumber() {
    setCounter(counter => counter + 1);
}

function deleteNumber() {
    setCounter(counter => counter - 1);
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