import { createStore, combineReducers } from 'redux';
import cocktailReducer from './cocktail/cocktailReducer';
import cocktailInCreationReducer from './cocktail/cocktailInCreationReducer';
import ingredientReducer from './ingredient/ingredientReducer';
import ingredientCreationReducer from './ingredient/ingredientCreationReducer';
import cocktailInViewReducer from './cocktail/cocktailInViewReducer';

export default createStore(
  combineReducers({
    cocktails: cocktailReducer,
    cocktailInCreation: cocktailInCreationReducer,
    cocktailInView: cocktailInViewReducer,
    ingredients: ingredientReducer,
    ingredientInCreation: ingredientCreationReducer,
  }),
  /* eslint-disable-next-line no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
