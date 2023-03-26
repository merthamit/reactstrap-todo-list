import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.val,
          isCompleted: false,
        },
      ];
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return state.map((todo) => {
        if (todo.id === action.id)
          return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      });
    case 'EDIT':
      return state.map((todo) => {
        if (todo.id === action.id) return { ...todo, title: action.newTask };
        return todo;
      });
    default:
      return state;
  }
};
