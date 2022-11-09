import React, { useState } from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoItem} from "./TodoItem";
import {TodoList} from "./TodoList";
import {CreateTodoItem} from "./CreateTodoItem";
import "./App.css";

function useLocalStorage (initialName, initialValue) {
  
  const localStorageTodos = localStorage.getItem(initialName);
  let parsedTodos;

  if(!localStorageTodos){ 
    localStorage.setItem(initialName,JSON.stringify(initialValue));
    parsedTodos = [];
  } else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [item, setItemList] = useState(parsedTodos);

  const setTodos = (newTodoList) => {
    localStorage.setItem(initialName, JSON.stringify(newTodoList))
    setItemList([...newTodoList])
  }

  return [item, setTodos]
}

function App() {

  const [todos, setTodos] = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = useState('');
  

  const completedItems = todos.filter(item =>item.completed == true).length;
  const totalItems = todos.length;

  let searchedItems = [];
  if(searchValue.length >= 1){
    searchedItems = todos?.filter(item => {
      const lowerSearch = searchValue.toLocaleLowerCase();
      const lowerItemText = item.text.toLocaleLowerCase();
      return lowerItemText.includes(lowerSearch);
    })
  } else {
    searchedItems = todos;
  }

  

  const addItemTodoList = () => {
    const newItem = {
      text: 'new item',
      completed: false,
    }
    let newArray = todos;
    newArray.push(newItem);
    setTodos(newArray)
  }

  const completeTodoItem = (indexItem) => {
    todos[indexItem].completed = !todos[indexItem].completed    
    setTodos(todos);

  }

  const deleteTodoItem = (todoIndex) => {
    // old way to delete an item from the todo list array
    // settodos(todos.filter(item => item.text.toLocaleLowerCase() != todoItem.text.toLocaleLowerCase()))
    let newtodos = todos;
    newtodos.splice(todoIndex, 1)
    setTodos(newtodos)
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
