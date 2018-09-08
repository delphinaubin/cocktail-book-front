import React from 'react';
import PropTypes from 'prop-types';
import IngredientCard from './IngredientCard';
import IngredientShape from '../../shape/IngredientShape';

export default class IngredientList extends React.PureComponent {
  static defaultProps = {
    ingredients: [],
  };

  static propTypes = {
    ingredients: PropTypes.arrayOf(IngredientShape),
  };

  render() {
    const { ingredients } = this.props;
    return (
      <React.Fragment>
        {
          ingredients.map(ingredient => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))
        }
      </React.Fragment>
    );
  }
}
