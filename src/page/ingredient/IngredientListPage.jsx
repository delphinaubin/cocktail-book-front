import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTitle from '../../component/PageTitle';
import IngredientList from '../../component/ingredient/IngredientList';
import IngredientShape from '../../shape/IngredientShape';

@connect(state => ({
  ingredients: state.ingredients,
}))
export default class IngredientListPage extends React.PureComponent {
  static propTypes = {
    ingredients: PropTypes.arrayOf(IngredientShape),
  }

  static defaultProps = {
    ingredients: [],
  }

  render() {
    const { ingredients } = this.props;
    return (
      <React.Fragment>
        <PageTitle style={{ marginBottom: '1em' }}>Ingredients</PageTitle>
        <IngredientList ingredients={ingredients} />
      </React.Fragment>
    );
  }
}
