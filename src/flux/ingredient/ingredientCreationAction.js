import { saveIngredient } from '../../api/IngredientApi';

export const ACTION_TYPES = {
  CHANGE: 'INGREDIENT_IN_CREATION_CHANGE',
  INGREDIENT_SAVE_START: 'INGREDIENT_SAVE_START',
  INGREDIENT_SAVE_SUCCESS: 'INGREDIENT_SAVE_SUCCESS',
};

export const ingredientSaveStart = () => ({
  type: ACTION_TYPES.INGREDIENT_SAVE_START,
});

export const ingredientSaveSuccess = () => ({
  type: ACTION_TYPES.INGREDIENT_SAVE_SUCCESS,
});

export const saveIngredientAction = ingredient => async (dispatch) => {
  dispatch(ingredientSaveStart());
  await saveIngredient(ingredient);
  dispatch(ingredientSaveSuccess());
};

export const changeIngredientInCreation = ingredientInCreation => ({
  type: ACTION_TYPES.CHANGE,
  ingredientInCreation,
});
