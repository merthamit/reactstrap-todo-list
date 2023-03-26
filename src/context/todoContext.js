import { createContext, useReducer } from 'react';
import useTodoStates from '../hooks/useTodoStates';
import { v4 as uuidv4 } from 'uuid';
import { reducer } from '../reducers/todoReducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

export const TodosContext = createContext();

const defaultTodos = [
  {
    id: uuidv4(),
    title: 'Markete git.',
    isCompleted: false,
  },
];

export const TodosProvider = (props) => {
  const [todos, dispatch] = useLocalStorageReducer(reducer, defaultTodos);
  const todosStuff = useTodoStates(defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};
