import { useEffect, useState } from "react";

const useLocalStorage = (initialVal) => {
  const [localTodos, setLocalTodos] = useState(() => {
    let val;

    try {
      val = JSON.parse(window.localStorage.getItem("todos")) || initialVal;
    } catch (error) {
      val = initialVal;
    }

    return val;
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(localTodos));
  }, [localTodos]);

  return [localTodos, setLocalTodos];
};

export default useLocalStorage;
