import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
  TOGGLE_IMPORTANT,
  FILTER_CHANGE,
  SEARCH
} from '../constants';

export const addTask = text => {
  return {
    type: ADD_TASK,
    payload: {
      id: Date.now(),
      text: text,
      isCompleted: false,
      important: false
    }
  };
};

export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id
  };
};

export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    id
  };
};

export const toggleImportant = id => {
  return {
    type: TOGGLE_IMPORTANT,
    id
  };
};

export const filterChange = filter => {
  return {
    type: FILTER_CHANGE,
    filter
  };
};

export const search = text => {
  return {
    type: SEARCH,
    text
  };
};
