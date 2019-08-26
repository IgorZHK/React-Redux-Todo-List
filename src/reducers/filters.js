import { FILTER_CHANGE } from '../constants';

const initialState = {
  filter: 'All'
};

const filters = (state = initialState, action) => {
  const { type, filter } = action;

  switch (type) {
    case FILTER_CHANGE:
      return { ...state, filter };

    default:
      return state;
  }
};

export default filters;
