import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);
  console.log('inputValue', inputValue);

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isCompleted: false,
    };
    setItems([...items, newItem]);
    setInputValue(''); // Clear the input field after adding the item
  }

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isCompleted = !newItems[index].isCompleted;

    setItems(newItems);
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++

    setItems(newItems);
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
  };
  return (
    <div className='app-background'>
      <div className='main-container'>
        <div className='add-item-box'>
          <input className='add-item-input' value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder='Add an item...' />
          <FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
        </div>
        <div className='item-list'>
          {items.map((item, index) => {
            console.log('item', item);
            return (
              <div className='item-container' key={index}>

                <div className='item-name' onClick={() => toggleComplete(index)}>
                  {item.isCompleted ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className='completed'>{item.itemName}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} />
                      <span>{item.itemName}</span>
                    </>
                  )}
                </div>
                <div className='quantity'>
                  <button>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
                  </button>
                  <span> {item.quantity} </span>
                  <button>
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
                  </button>
                </div>
              </div>
            )

          })}

        </div>
        <div className='total'>Total: {items.length}</div>
      </div>
    </div>
  );
};

export default App;
