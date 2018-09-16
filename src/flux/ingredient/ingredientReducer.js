import { ACTION_TYPES } from './fetchIngredientAction';

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_INGREDIENT_SUCCESS: {
      return action.ingredients;
    }
    default: {
      return state;
    }
  }
};
