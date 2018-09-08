import React from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';

import './CocktailViewPage.css';
import CocktailShape from '../../shape/CocktailShape';

@connect(state => ({
  cocktail: state.cocktailInView,
}))
export default class CocktailView extends React.PureComponent {
  static propTypes = {
    cocktail: CocktailShape,
  }

  static defaultProps = {
    cocktail: {
      components: [],
    },
  }

  render() {
    const { cocktail } = this.props;
    return (
      <Card>
        <h1 className="cocktail-name">{cocktail.name}</h1>
        <h2>Ingrédients</h2>
        <ul>
          {
            cocktail.components
              .map(
                component => (
                  <li key={component.ingredient.id}>
                    {`${component.quantity} ${component.ingredient.unit === 'pièce' ? '' : component.ingredient.unit} ${component.ingredient.name}`}
                  </li>
                ),
              )
          }
        </ul>
        <h2>Notes</h2>
        <p className="cocktail-notes">
          {cocktail.note}
        </p>
      </Card>
    );
  }
}
