import React, { useContext } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
import { TodosContext } from '../../context/todoContext';
import useInput from '../../hooks/useInput';

export const UpdateForm = ({ updateTodo, id, currVal }) => {
  const [val, handleChange, reset] = useInput(currVal);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(id, val);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input value={val} onChange={handleChange} />
        <Button>Update</Button>
      </InputGroup>
    </Form>
  );
};
