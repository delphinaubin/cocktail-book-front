import React from 'react';
import { Card } from 'antd';
import IngredientShape from '../../shape/IngredientShape';

const containerStyle = {
  margin: '1rem',
  fontFamily: 'Open Sans Condensed, cursive',
  fontSize: '1.5em',
};

export default class IngredientCard extends React.PureComponent {
  static defaultProps = {
    ingredient: {
      name: '',
    },
  };

  static propTypes = {
    ingredient: IngredientShape,
  };

  render() {
    const { ingredient } = this.props;

    return (
      <Card
        key={ingredient.id}
        style={containerStyle}
      >
        { ingredient.name }
      </Card>
    );
  }
}
