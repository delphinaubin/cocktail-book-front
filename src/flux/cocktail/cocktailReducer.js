import { ACTION_TYPES } from './fetchCocktailAction';

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_COCKTAILS_SUCCESS: {
      return action.cocktails;
    }
    default: {
      return state;
    }
  }
};
