import { ACTION_TYPES } from './ingredientCreationAction';

const initialState = {
  name: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE: {
      return action.ingredientInCreation;
    }
    default: {
      return state;
    }
  }
};
