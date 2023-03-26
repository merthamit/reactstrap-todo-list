import React, { useContext } from 'react';
import { Button, Input, ListGroupItem } from 'reactstrap';
import useToggle from '../../hooks/useToggle';
import { UpdateForm } from '../Form/UpdateForm';
import { AiFillDelete } from 'react-icons/ai';
import { RxPencil2 } from 'react-icons/rx';
import { TodosContext } from '../../context/todoContext';

const Todo = ({ title, id, isCompleted }) => {
  const { dispatch } = useContext(TodosContext);
  const [state, toggle] = useToggle();

  const handleRemove = () => {
    dispatch({ type: 'REMOVE', id });
  };

  const handleComplete = () => {
    dispatch({ type: 'TOGGLE', id });
  };

  const handleToggle = () => {
    toggle();
  };

  const handleUpdate = (id, val) => {
    dispatch({ type: 'EDIT', id, newTask: val });
    toggle();
  };

  return (
    <ListGroupItem
      className="bg-light border mb-2"
      style={
        state === false
          ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }
          : {}
      }
    >
      {state === false ? (
        <>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Input
              type="checkbox"
              checked={isCompleted}
              onChange={handleComplete}
              style={{ marginRight: '5px' }}
            />
            <p
              style={{
                textDecoration: isCompleted ? 'line-through' : 'None',
                marginBottom: '0px',
              }}
            >
              {title}
            </p>
          </div>
          {
            <>
              <div size="sm">
                <Button
                  style={{ marginRight: '4px' }}
                  onClick={handleRemove}
                  color="secondary"
                  size="sm"
                >
                  <AiFillDelete />
                </Button>
                <Button onClick={handleToggle} size="sm" color="secondary">
                  <RxPencil2 color="white" />
                </Button>
              </div>
            </>
          }
        </>
      ) : (
        <UpdateForm id={id} currVal={title} updateTodo={handleUpdate} />
      )}
    </ListGroupItem>
  );
};

export default Todo;
