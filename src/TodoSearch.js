import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue,
    setSearchValue } = useContext(TodoContext);
  const onChangeText = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      onChange={onChangeText}
    ></input>
  );
}

export { TodoSearch };
