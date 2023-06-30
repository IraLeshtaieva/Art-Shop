
import logo2 from './logo2.svg';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Footer from './components/footer/footer';
import ItemToSell from './components/items-to-sell/ItemsToSell';
import BasketButton from './components/basket-button/basketButton';

import { useState } from 'react';





function App() {

  const [itemsList, setItemsList] = useState([]);
  const [filter, setFilter] = useState("all");
  
  console.log(filter);

  const items = [
    { photo: require('./item-magnet-1.jpg'), size: "10x15", type: "magnet", price: 11, description: "Beautiful view of the mountain river", id: 1 },
    { photo: require('./item-magnet-2.jpg'), size: "10x15", type: "magnet", price: 10, description: "Old city. View of the bridge and the ship floating on the river", id: 2 },
    { photo: require('./item-magnet-3.jpg'), size: "10x15", type: "magnet", price: 12, description: "Boat on the sea framed by palm leaves", id: 3 },
    { photo: require('./item-painting-1.jpg'), size: "10x15", type: "painting", price: 11, description: "Pink flower", id: 4 },
    { photo: require('./item-painting-2.jpg'), size: "10x15", type: "painting", price: 10, description: "Violett flower", id: 5 },
    { photo: require('./item-painting-3.jpg'), size: "15x10", type: "painting", price: 12, description: "Beautiful view of the mountain", id: 6 }
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
        key={item.id}
        {...item}
        onBasket={setItemsList}
      />
    )
  })

  return (

    <div className='App'>
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <Header />
      </header>
      <div className="body">
        {elements}
        <Body itemsPutedBasket={itemsList.length} />
        <BasketButton itemsPutedBasket={itemsList.length}/>
      </div>
      <div className='App-footer'>
        <Footer setFilter={setFilter}/>
        <p className='footer'>
          Welcome to my {<a href="https://instagram.com/smuzi_u_luzi?igshid=NzMyMjgxZWIzNw==">Instagram</a>}.
        </p>
      </div>
    </div>
  );
}

export default App;
