import React, { useState } from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import {CreateTodoItem} from "./CreateTodoItem";
import "./App.css";

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(!localStorageTodos){ 
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  } else{
    parsedTodos = JSON.parse(localStorageTodos);
  }
  
  const [searchValue, setSearchValue] = useState('');
  const [todoItems, setTodoItems] = useState(parsedTodos);

  const completedItems = todoItems.filter(item =>item.completed == true).length;
  const totalItems = todoItems.length;

  let searchedItems = [];
  if(searchValue.length >= 1){
    searchedItems = todoItems?.filter(item => {
      const lowerSearch = searchValue.toLocaleLowerCase();
      const lowerItemText = item.text.toLocaleLowerCase();
      return lowerItemText.includes(lowerSearch);
    })
  } else {
    searchedItems = todoItems;
  }

  const setTodos = (newTodoList) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodoList))
    setTodoItems([...newTodoList])
  }

  const addItemTodoList = () => {
    const newItem = {
      text: 'new item',
      completed: false,
    }
    parsedTodos.push(newItem);
    setTodos(parsedTodos)
  }

  const completeTodoItem = (indexItem) => {
    todoItems[indexItem].completed = !todoItems[indexItem].completed    
    setTodos(todoItems);

  }

  const deleteTodoItem = (todoIndex) => {
    // old way to delete an item from the todo list array
    // setTodoItems(todoItems.filter(item => item.text.toLocaleLowerCase() != todoItem.text.toLocaleLowerCase()))
    let newTodoItems = todoItems;
    newTodoItems.splice(todoIndex, 1)
    setTodos(newTodoItems)
  }

  
  return (
    <React.Fragment>
      <TodoCounter totalComplete = {completedItems} totalItems={totalItems}/>
      <TodoSearch searchValue={searchValue}
      setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedItems.map((item, index) => (
          <TodoItem key={index} text={item.text} completed={item.completed} onCompletedClick={ () =>completeTodoItem(index)} onDeleteTodoItem={() => deleteTodoItem(index)}/>
        ))}
      </TodoList>
      <CreateTodoItem addItemTodoList={addItemTodoList}/>
    </React.Fragment>
  );
}

export default App;
