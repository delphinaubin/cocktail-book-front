import React from 'react';
import { Card } from 'antd';
import CocktailShape from '../../shape/CocktailShape';

const cardStyle = {
  width: '20rem',
  backgroundColor: '#FFF',
  margin: '1rem',
  fontSize: '1.8em',
};

export default class CocktailCard extends React.PureComponent {
  static propTypes = {
    cocktail: CocktailShape.isRequired,
  };

  render() {
    const { cocktail } = this.props;
    return (
      <Card.Grid
        style={cardStyle}
      >
        {cocktail.name}
      </Card.Grid>
    );
  }
}
