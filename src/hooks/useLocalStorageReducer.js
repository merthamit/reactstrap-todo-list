import { useEffect, useReducer, useState } from 'react';
import { reducer } from '../reducers/todoReducer';

const useLocalStorageReducer = (initialVal) => {
  const [state, dispatch] = useReducer(reducer, initialVal, () => {
    let val;

    try {
      val = JSON.parse(window.localStorage.getItem('todos')) || state;
    } catch (error) {
      val = state;
    }

    return val;
  });

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
