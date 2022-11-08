import React, { useState } from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import {CreateTodoItem} from "./CreateTodoItem";
import "./App.css";

const defaultTodos = [{
  text: "curso ecma",
  completed: true,
},
{
  text: "Curso javascript",
  completed: false,
},
{
  text: "Curso react",
  completed: false,
},
{
  text: "Curso react 2",
  completed: false,
}
]

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [todoItems, setTodoItems] = useState(defaultTodos);

  const completedItems = todoItems.filter(item =>item.completed == true).length;
  const totalItems = todoItems.length;

  let searchedItems = [];
  if(searchValue.length >= 1){
    searchedItems = todoItems.filter(item => {
      const lowerSearch = searchValue.toLocaleLowerCase();
      const lowerItemText = item.text.toLocaleLowerCase();
      return lowerItemText.includes(lowerSearch);
    })
  } else {
    searchedItems = todoItems;
  }

  const addItemTodoList = () => {
    setTodoItems(prev => {
      console.log(prev)
      const newItem = {
        text: 'new item',
        completed: false,
      }
      return [...prev, newItem]
    })
  }

  const completeTodoItem = () => {
    
  }
  return (
    <React.Fragment>
      <TodoCounter totalComplete = {completedItems} totalItems={totalItems}/>
      <TodoSearch searchValue={searchValue}
      setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedItems.map((item, index) => (
          <TodoItem key={index} text={item.text} completed={item.completed}/>
        ))}
      </TodoList>
      <CreateTodoItem addItemTodoList={addItemTodoList}/>
    </React.Fragment>
  );
}

export default App;
