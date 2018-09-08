import React from 'react';
import { AutoComplete, InputNumber, Button } from 'antd';
import PropTypes from 'prop-types';
import IngredientShape from '../../shape/IngredientShape';
import './CocktailComponentInput.css';

const containerStyle = {
  width: '100%',
  display: 'flex',
  marginTop: '1rem',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const autoCompleteStyle = {
  fontFamily: 'Open Sans Condensed, cursive',
  fontSize: '1.3em',
  width: '50%',
};
const inputQuantityStyle = {
  width: '20%',
};

const unitStyle = {
  width: '20%',

};

export default class CocktailComponentInput extends React.PureComponent {
  static defaultProps = {
    ingredients: [],
  };

  static propTypes = {
    ingredients: PropTypes.arrayOf(IngredientShape),
  };

  constructor() {
    super();
    this.state = {
      ingredientFilter: '',
      selectedIngredient: null,
    };
  }


  handleIngredientSelection = (selectedIngredient) => {
    const { ingredients } = this.props;

    this.setState({
      ingredientFilter: selectedIngredient,
      selectedIngredient: ingredients.find(ingredient => ingredient.name === selectedIngredient),
    });
  };

  handleIngredientSearchChange = (value) => {
    const { ingredients } = this.props;
    this.setState({ ingredientFilter: value });
    const existingIngredient = ingredients
      .find(ingredient => ingredient.name.toLowerCase() === value.toLowerCase());
    if (existingIngredient) {
      this.handleIngredientSelection(existingIngredient.name);
    }
  };

  render() {
    const { ingredients, style, ...propsRest } = this.props;
    const { ingredientFilter, selectedIngredient } = this.state;
    return (
      <div style={containerStyle}>
        <AutoComplete
          placeholder="Ingredient"
          dataSource={
            ingredients.map(ingredient => ingredient.name)
              .filter(ingredient => ingredient
                .toLowerCase().includes(ingredientFilter.toLowerCase()))
          }
          onSearch={this.handleIngredientSearchChange}
          value={ingredientFilter}
          onSelect={this.handleIngredientSelection}
          style={{
            ...autoCompleteStyle,
            ...style,
          }}
          {...propsRest}
        />
        <InputNumber
          min={0}
          style={inputQuantityStyle}
        />
        <span style={unitStyle}>
          {(selectedIngredient || { unit: '' }).unit}
        </span>
        <Button type="primary" shape="circle" icon="plus" />
      </div>
    );
  }
}
