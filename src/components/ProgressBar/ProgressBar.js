import React, { useContext } from 'react';
import { Progress } from 'reactstrap';
import { TodosContext } from '../../context/todoContext';

const ProgressBar = () => {
  const { todos } = useContext(TodosContext);
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted === true).length
    : 0;

  const todosLen = todos ? todos.length : 0;

  const percentage = ((completedTodos * 100) / todosLen).toFixed();

  return (
    <Progress className="mb-3" value={todosLen ? percentage : 0}>
      {percentage}%
    </Progress>
  );
};

export default ProgressBar;
