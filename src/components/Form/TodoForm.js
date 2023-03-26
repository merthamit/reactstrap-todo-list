import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup, Label } from 'reactstrap';
import { TodosContext } from '../../context/todoContext';
import useInput from '../../hooks/useInput';
import FormAlert from './FormAlert';

export const TodoForm = () => {
  const [val, handleChange, reset] = useInput('');
  const [isValid, setIsValid] = useState(false);
  const { dispatch } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', val });
    reset();
    setIsValid(true);
  };

  useEffect(() => {
    const validTimeOut = setTimeout(() => {
      setIsValid(false);
    }, 2000);
    return () => {
      clearTimeout(validTimeOut);
    };
  }, [isValid]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mt-2">
          <Label for="todoInput">Add Todo</Label>
          <InputGroup>
            <Input
              valid={isValid}
              placeholder="Please write a task."
              type="text"
              value={val}
              id="todoInput"
              onChange={handleChange}
            />
            <Button color="primary">Add</Button>
          </InputGroup>
        </FormGroup>
      </Form>
      <FormAlert isValid={isValid} />
    </>
  );
};
