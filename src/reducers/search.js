import { SEARCH } from '../constants';

const initialState = {
  searchText: ''
};

const search = (state = initialState, action) => {
  const { type, text } = action;

  switch (type) {
    case SEARCH:
      return { ...state, searchText: text };

    default:
      return state;
  }
};

export default search;
