import React, { useContext } from 'react';
import { Alert, ListGroup } from 'reactstrap';
import { TodosContext } from '../../context/todoContext';
import Todo from '../Todo/Todo';

const Todos = () => {
  const { todos } = useContext(TodosContext);
  const todosLen = todos ? todos.length : 0;
  return (
    <ListGroup style={{ backgroundColor: '#EDEDF7' }} className="p-3">
      {todosLen ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isCompleted={todo.isCompleted}
          />
        ))
      ) : (
        <Alert className="mb-0" color="warning">
          There is no todo here.
        </Alert>
      )}
    </ListGroup>
  );
};

export default Todos;
