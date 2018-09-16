import { fetchIngredients } from '../../api/IngredientApi';

export const ACTION_TYPES = {
  FETCH_INGREDIENT_START: 'FETCH_INGREDIENT_START',
  FETCH_INGREDIENT_SUCCESS: 'FETCH_INGREDIENT_SUCCESS',
};

const fetchIngredientStart = () => ({
  type: ACTION_TYPES.FETCH_INGREDIENT_START,
});

const fetchIngredientSuccess = ingredients => ({
  type: ACTION_TYPES.FETCH_INGREDIENT_SUCCESS,
  ingredients,
});

export const fetchIngredientsAction = () => async (dispatch) => {
  dispatch(fetchIngredientStart());
  const ingredients = await fetchIngredients();
  dispatch(fetchIngredientSuccess(ingredients));
};
