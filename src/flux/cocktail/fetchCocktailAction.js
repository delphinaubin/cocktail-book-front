import { fetchCocktails } from '../../api/CocktailApi';

export const ACTION_TYPES = {
  FETCH_COCKTAILS_START: 'FETCH_COCKTAILS_START',
  FETCH_COCKTAILS_SUCCESS: 'FETCH_COCKTAILS_SUCCESS',
};

const fetchCocktailsStart = () => ({
  type: ACTION_TYPES.FETCH_COCKTAILS_START,
});

const fetchCocktailsSuccess = cocktails => ({
  type: ACTION_TYPES.FETCH_COCKTAILS_SUCCESS,
  cocktails,

});


export const fetchCocktailAction = () => async (dispatch) => {
  dispatch(fetchCocktailsStart());
  const fetchedCocktails = await fetchCocktails();
  dispatch(fetchCocktailsSuccess(fetchedCocktails));
};
