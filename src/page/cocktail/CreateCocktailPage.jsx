import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Input } from 'antd';
import PropTypes from 'prop-types';
import {
  changeCocktailInCreation as changeCocktailInCreationAction,
} from '../../flux/cocktail/cocktailCreationAction';
import PageTitle from '../../component/PageTitle';
import CocktailComponentInput from '../../component/cocktail/CocktailComponentInput';
import CocktailShape from '../../shape/CocktailShape';
import IngredientShape from '../../shape/IngredientShape';
import { fetchIngredientsAction } from '../../flux/ingredient/fetchIngredientAction';


const containerStyle = {
  margin: '1rem',

};
const inputStyle = {
  fontFamily: 'Open Sans Condensed, cursive',
  fontSize: '2em',
};

@connect(
  state => ({
    cocktail: state.cocktailInCreation,
    ingredients: state.ingredients,
  }), dispatch => ({
    ...bindActionCreators(
      { changeCocktailInCreation: changeCocktailInCreationAction }, dispatch,
    ),
    fetchIngredients: () => dispatch(fetchIngredientsAction()),
  }),
)
export default class CreateCocktailPage extends React.PureComponent {
  static defaultPros = {
    cocktail: {
      name: '',
    },
    ingredients: [],
  };

  static propTypes = {
    cocktail: CocktailShape,
    ingredients: PropTypes.arrayOf(IngredientShape),
    changeCocktailInCreation: PropTypes.func.isRequired,
    fetchIngredients: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cocktail: { name: '' },
    ingredients: [],
  }

  componentDidMount() {
    const { fetchIngredients } = this.props;
    fetchIngredients();
  }

  onCocktailNameChange = (event) => {
    const { cocktail, changeCocktailInCreation } = this.props;
    changeCocktailInCreation({
      ...cocktail,
      name: event.target.value,
    });
  };

  render() {
    const { cocktail, ingredients } = this.props;
    return (
      <React.Fragment>
        <PageTitle>Add a cocktail to the book</PageTitle>
        <Card style={containerStyle}>
          <Input
            placeholder="Your cocktail's name"
            style={inputStyle}
            size="large"
            value={cocktail.name}
            onChange={this.onCocktailNameChange}
          />
          <CocktailComponentInput
            ingredients={ingredients}
          />
        </Card>
      </React.Fragment>
    );
  }
}
