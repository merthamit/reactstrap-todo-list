import React from 'react';
import { Container } from 'reactstrap';
import { TodoForm } from './components/Form/TodoForm';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Todos from './components/Todos/Todos';
import { TodosProvider } from './context/todoContext';
import useTodoStates from './hooks/useTodoStates';

const TodoApp = () => {
  return (
    <TodosProvider>
      <Container>
        <TodoForm />
        <ProgressBar />
        <Todos />
      </Container>
    </TodosProvider>
  );
};

export default TodoApp;
