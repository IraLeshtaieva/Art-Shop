import './items-to-sell.css';
import { Component } from 'react';


class ItemToSell extends Component {

  constructor (props) {
    super(props);
    this.state = {
        photo: props.photo,
        type: props.type,
        size: props.size,
        description: props.description,
        price: props.price,
        id: props.id
    }
  }


  render() {
    const setItemsList = this.props.onBasket;
    
    const {photo, type, size, description, price, id} = this.state;
    return (
            <div className="divTable"><img className='photo' src={String(photo)} alt="magnet with view" />
              <ul>
                <li className='text'>Type: <a href="https://en.wikipedia.org/wiki/Refrigerator_magnet">{type}</a> </li>    
                <li className='text'>Size: {size +"cm"} </li>  
                <li className='text'>Description: {description} </li>  
                <li className='text'>Price: {price +"$"} </li> 
                <li className='text'>
                  <button 
                  className="btn-new btn-new:hover"
                  onClick={() => setItemsList(itemsList => [...itemsList, {itemId:id}])}
                  type="button">
                    Put item in basket
                  </button>
                </li> 
              </ul>
            </div>      
            )
            }
}

export default ItemToSell;