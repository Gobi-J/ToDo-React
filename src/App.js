import React, { useState } from 'react';
import './App.css';
import Inputarea from './components/Inputs'
import TodoItem from './components/TodoItem'

function App() {
  const [item, setItem] = useState([])
  const addItems = (inputText) => {
    setItem((prevItems)=>{
      return (
        [...prevItems,inputText]
      )
    })
  };

  const deleteItem = (id) =>{
    setItem((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      })
    })
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <Inputarea addItems={addItems} />
      <span>No. of Pending Tasks: { item.length }</span>
      <div>
        <ul>
          {
            item.map((item,index)=>{
              return(
                <TodoItem key={index} text={item} deleteItem={deleteItem} id={index} />
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App; 