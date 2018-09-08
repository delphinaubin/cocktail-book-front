import PropTypes from 'prop-types';
import IngredientShape from './IngredientShape';

export default PropTypes.shape({
  ingredient: IngredientShape,
  quantity: PropTypes.number,
});
