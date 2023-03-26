import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";

const useTodoStates = () => {
  const [todos, setTodos] = useLocalStorage([
    {
      id: uuidv4(),
      title: "Markete git.",
      isCompleted: false,
    },
  ]);

  const addTodo = (val) => {
    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        title: val,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const toggleTodo = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId)
        return { ...todo, isCompleted: !todo.isCompleted };
      return todo;
    });
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) return { ...todo, title: newValue };
      return todo;
    });
    setTodos(newTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
  };
};

export default useTodoStates;
