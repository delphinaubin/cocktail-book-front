export const ACTION_TYPES = {
  CHANGE: 'INGREDIENT_IN_CREATION_CHANGE',
};


export const changeIngredientInCreation = ingredientInCreation => ({
  type: ACTION_TYPES.CHANGE,
  ingredientInCreation,
});
