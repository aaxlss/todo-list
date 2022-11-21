import React from "react";

import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onChangeText = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      value={searchValue}
      onChange={onChangeText}
      disabled={loading}
    ></input>
  );
}

export { TodoSearch };
