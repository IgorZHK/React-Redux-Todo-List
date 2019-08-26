import { load } from 'redux-localstorage-simple';

import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT
} from '../constants';

let localStorageState = load({ namespace: 'todos' });

if (
  !localStorageState ||
  !localStorageState.tasks ||
  !localStorageState.tasks.length
) {
  localStorageState.tasks = [
    { id: 1, text: 'React', isCompleted: false, important: true },
    { id: 2, text: 'Vue', isCompleted: false, important: false },
    { id: 3, text: 'Angular', isCompleted: true, important: false }
  ];
}

const tasks = (state = localStorageState.tasks, action) => {
  const { type, id, payload } = action;

  const toggle = param => {
    return state.map(item =>
      item.id === id ? { ...item, [param]: !item[param] } : item
    );
  };

  switch (type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
          isCompleted: payload.isCompleted,
          important: payload.important
        }
      ];

    case DELETE_TASK:
      return [...state].filter(item => item.id !== id);

    case TOGGLE_COMPLETED:
      return toggle('isCompleted');

    case TOGGLE_IMPORTANT:
      return toggle('important');

    default:
      return state;
  }
};

export default tasks;
