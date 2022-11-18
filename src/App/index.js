import React, { useEffect, useState } from "react";
// import {TodoProvider} from '../TodoContext'
// import { TodoItem } from "../TodoItem";
// import { TodoList } from "../TodoList";
import "./App.css";
import { AppUI } from "./AppUI";



function App() {

  const [state, setState] = useState('Estado compartido');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter/>
        <TodoSearch/>
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}/>
      </TodoList>
      </React.Fragment>
  );
}

function TodoHeader ({children}){
  return (
    <header>
      {children}
    </header>
  )
}

function TodoCounter(){
  return(
    <p>TodoCounter</p>
  )
}

function TodoSearch(){
  return (
    <p>TodoSearch</p>
  )
}

function TodoList({children}){
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

function TodoItem({state}){
  return (
    <p>TodoItem: {state}</p>
  )

}


export default App;
