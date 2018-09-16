import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PageTitle from '../../component/PageTitle';
import IngredientList from '../../component/ingredient/IngredientList';
import IngredientShape from '../../shape/IngredientShape';
import { fetchIngredientsAction } from '../../flux/ingredient/fetchIngredientAction';

@connect(state => ({
  ingredients: state.ingredients,
}), dispatch => ({
  fetchIngredients: () => dispatch(fetchIngredientsAction()),
}))
export default class IngredientListPage extends React.PureComponent {
  static propTypes = {
    ingredients: PropTypes.arrayOf(IngredientShape),
    fetchIngredients: PropTypes.func.isRequired,
  }

  static defaultProps = {
    ingredients: [],
  }

  componentDidMount() {
    const { fetchIngredients } = this.props;
    fetchIngredients();
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
