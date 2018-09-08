import React from 'react';
import PropTypes from 'prop-types';
import CocktailShape from '../../shape/CocktailShape';
import CocktailCard from './CocktailCard';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};


export default class CocktailList extends React.PureComponent {
  static propTypes = {
    cocktails: PropTypes.arrayOf(CocktailShape),
  };

  static defaultProps = {
    cocktails: [],
  };

  render() {
    const { cocktails } = this.props;
    return (
      <div style={containerStyle}>
        {
          cocktails.map(
            cocktail => (
              <CocktailCard
                cocktail={cocktail}
                key={cocktail.id}
              />
            ),
          )
        }
      </div>
    );
  }
}
