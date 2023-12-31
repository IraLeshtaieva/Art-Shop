
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import ItemToSell from './components/items-to-sell/ItemsToSell';
import BasketButton from './components/basket-button/basketButton';
import FindForm from './components/find-form/findForm';






import { useState } from 'react';


function App() {

  const [itemsList, setItemsList] = useState([]);
  const [filter, setFilter] = useState("all");
  

  const items = [
    { photo: require('./item-magnet-1.jpg'), size: "10x15", type: "magnet", price: 11, description: "Beautiful view of the mountain river", id: 1 },
    { photo: require('./item-magnet-2.jpg'), size: "10x15", type: "magnet", price: 10, description: "Old city. View of the bridge and the ship floating on the river", id: 2 },
    { photo: require('./item-magnet-3.jpg'), size: "10x15", type: "magnet", price: 12, description: "Boat on the sea framed by palm leaves", id: 3 },
    { photo: require('./item-painting-1.jpg'), size: "10x15", type: "painting", price: 11, description: "Pink flower", id: 4 },
    { photo: require('./item-painting-2.jpg'), size: "10x15", type: "painting", price: 11, description: "Violett flower", id: 5 },
    { photo: require('./item-painting-3.jpg'), size: "15x10", type: "painting", price: 12, description: "Beautiful view of the mountain", id: 6 },
    { photo: require('./item-postcard-1.jpg'), size: "10x15", type: "postcard", price: 10, description: "Nautical postcard with a lighthouse", id: 7 },
    { photo: require('./item-postcard-2.jpg'), size: "10x15", type: "postcard", price: 10, description: "New Year's postcard with a car", id: 8 },
    { photo: require('./item-postcard-3.jpg'), size: "10x15", type: "postcard", price: 10, description: "New Year's postcard with a X-mass tree", id: 9 },
    { photo: require('./item-postcard-4.jpg'), size: "10x15", type: "postcard", price: 10, description: "Nautical postcard with a house in the sea", id: 10 },
    { photo: require('./item-postcard-5.jpg'), size: "10x15", type: "postcard", price: 10, description: "Birthday postcard with balloons", id: 11 },
    { photo: require('./item-postcard-6.jpg'), size: "10x15", type: "postcard", price: 10, description: "Carnival postcard with pancakes", id: 12 },
    { photo: require('./item-postcard-7.jpg'), size: "10x15", type: "postcard", price: 10, description: "Sommer postcard with a house", id: 13 },
    { photo: require('./item-postcard-8.jpg'), size: "10x15", type: "postcard", price: 10, description: "Nautical postcard with palms", id: 14 },
    { photo: require('./item-postcard-9.jpg'), size: "10x15", type: "postcard", price: 10, description: "Nautical postcard with a coconut", id: 15 },
    { photo: require('./item-postcard-10.jpg'), size: "10x15", type: "postcard", price: 10, description: "City postcard with a house", id: 16 },
    { photo: require('./item-postcard-11.jpg'), size: "10x15", type: "postcard", price: 10, description: "New Year's postcard with a glass bowl", id: 17 },
    { photo: require('./item-painting-4.jpg'), size: "42x30", type: "painting", price: 35, description: "Landscape with bridge and lily pond(based on Monet)", id: 18 },
    { photo: require('./item-painting-5.jpg'), size: "10x15", type: "painting", price: 11, description: "Pink flower", id: 19 },
    { photo: require('./item-postcard-12.jpg'), size: "10x15", type: "postcard", price: 15, description: "Peony", id: 20 },
    { photo: require('./item-postcard-13.jpg'), size: "10x15", type: "postcard", price: 20, description: "Poppies ", id: 21 },
    { photo: require('./item-postcard-14.jpg'), size: "10x15", type: "postcard", price: 10, description: "Tulips in rubber boots", id: 22 },
  ]

  const visiblePictures = items.filter((picture) => {
    if (filter === "all") {
      return true;
    }
    return picture.type === filter;
  });

  const elements = visiblePictures.map(item => {
    return (
      <ItemToSell
        key={item.id}   //запуталась что здесь происходит
        {...item}   //запуталась что здесь происходит
        setItemsList={setItemsList}
        itemsInBasket={itemsList}
      />
    )
  })

  return (

    <div className='App'>
      <Header/>
      <div className="App-content">
        <div className='App-menu'>
          <Body className='App-menu-row1' /> 
          <BasketButton className='App-menu-row2' itemsPutedBasket={itemsList.map((item) => item.itemQuantity)
                                                                             .reduce((sum, currenrelem) => sum + currenrelem, 0)}/>
          <FindForm/>
        </div>
        <div className='App-elements'>
          <div className='App-tile'>{elements}</div>
        </div>
      </div>
      <div className='App-footer'>
        <Footer setFilter={setFilter} filter={filter}/>
        <p className='footer'>
          Welcome to my {<a href="https://instagram.com/smuzi_u_luzi">Instagram</a>}.
        </p>
      </div>
    </div>
  );
}

export default App;
