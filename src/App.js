import React, { useState } from 'react';
import './App.css'; 
import TodoList from './ToDoList';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, { text: inputList, completed: false }];
    });
    setInputList("");
  };

  const toggleItemCompletion = (id) => {
    setItems((oldItems) => {
      return oldItems.map((item, index) => {
        if (index === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add an Item" value={inputList} onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              Items.map((itemval, index) => {
                return (
                  <TodoList
                    key={index}
                    id={index}
                    item={itemval}
                    onToggle={toggleItemCompletion}
                  />
                );
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
