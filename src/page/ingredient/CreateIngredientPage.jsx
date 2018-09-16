import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Input, Select, Button,
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTitle from '../../component/PageTitle';
import ColorSelect from '../../component/color/ColorSelect';
import { changeIngredientInCreation as changeIngredientInCreationAction, saveIngredientAction } from '../../flux/ingredient/ingredientCreationAction';
import IngredientShape from '../../shape/IngredientShape';

const { Option } = Select;

const containerStyle = { margin: '1rem' };
const inputTitleStyle = {
  fontFamily: 'Open Sans Condensed, cursive',
  fontSize: '1.5em',
};
const inputStyle = {
  fontFamily: 'Open Sans Condensed, cursive',
};
const buttonStyle = {
  fontFamily: 'Open Sans Condensed, cursive',
  marginTop: '2rem',
};


@connect(state => ({
  ingredient: state.ingredientInCreation,
}), dispatch => ({
  ...bindActionCreators(
    { changeIngredientInCreation: changeIngredientInCreationAction },
    dispatch,
  ),
  saveIngredient: ingredient => dispatch(saveIngredientAction(ingredient)),
}))
export default class CreateIngredientPage extends React.PureComponent {
  static propTypes = {
    ingredient: IngredientShape.isRequired,
    changeIngredientInCreation: PropTypes.func.isRequired,
    saveIngredient: PropTypes.func.isRequired,
  }

  onNameChange = (event) => {
    const { changeIngredientInCreation, ingredient } = this.props;
    changeIngredientInCreation({
      ...ingredient,
      name: event.target.value,
    });
  };

  onUnitChange = (changedValue) => {
    const { changeIngredientInCreation, ingredient } = this.props;
    changeIngredientInCreation({
      ...ingredient,
      unit: changedValue,
    });
  };

  onColorChange = (changedValue) => {
    const { changeIngredientInCreation, ingredient } = this.props;
    changeIngredientInCreation({
      ...ingredient,
      color: changedValue,
    });
  };

  saveIngredient = () => {
    const { saveIngredient, ingredient } = this.props;
    saveIngredient(ingredient);
  }

  render() {
    const { ingredient } = this.props;
    return (
      <React.Fragment>
        <PageTitle>Add an ingredient to the book</PageTitle>
        <Card style={containerStyle}>
          <Input
            placeholder="Ingredient's name"
            style={inputTitleStyle}
            value={ingredient.name}
            onChange={this.onNameChange}
          />
          <Select
            placeholder="unit"
            style={{ ...inputStyle, width: '100%', marginTop: '1rem' }}
            value={ingredient.unit}
            onChange={this.onUnitChange}
          >
            <Option value="ml">ml</Option>
            <Option value="piece">pièce</Option>
            <Option value="leaf">feuille</Option>
            <Option value="dash">dash</Option>
          </Select>
          <ColorSelect
            value={ingredient.color}
            style={inputStyle}
            onChange={this.onColorChange}
          />
          <Button
            style={buttonStyle}
            onClick={this.saveIngredient}
          >
            Add to the book
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}
