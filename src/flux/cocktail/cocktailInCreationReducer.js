import { ACTION_TYPES } from './cocktailCreationAction';

const initialState = {
  name: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE: {
      return action.cocktailInCreation;
    }
    default: {
      return state;
    }
  }
};
