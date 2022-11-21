import React, { useEffect, useState } from "react";

function useLocalStorage(initialName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItemList] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(initialName);
        let parsedTodos;

        if (!localStorageTodos) {
          localStorage.setItem(initialName, JSON.stringify(initialValue));
          parsedTodos = [];
        } else {
          parsedTodos = JSON.parse(localStorageTodos);
        }

        setItemList(parsedTodos);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const setTodos = (newTodoList) => {
    try {
      localStorage.setItem(initialName, JSON.stringify(newTodoList));
      setItemList([...newTodoList]);
    } catch (error) {
      setError(error);
    }
  };

  return { item, setTodos, loading, error };
}

export { useLocalStorage };
