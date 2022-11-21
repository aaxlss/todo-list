import React from "react";
import "./TodoList.css"
function TodoList(props){
    return(
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos)&& props.onEmptyTodos()}
            {(!!props.totalTodos &&!props.searchedTodos.length) && props.onEmptySearchedTodos(props.searchText)}
            {props.render.length && props.searchedTodos.map(props.render)}
            
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList}