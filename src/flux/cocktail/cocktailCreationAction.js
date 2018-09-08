export const ACTION_TYPES = {
  CHANGE: 'COCKTAIL_IN_CREATION_CHANGE',
};


export const changeCocktailInCreation = cocktailInCreation => ({
  type: ACTION_TYPES.CHANGE,
  cocktailInCreation,
});
