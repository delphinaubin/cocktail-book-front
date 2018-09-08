import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import CocktailShape from '../../shape/CocktailShape';
import CocktailList from '../../component/cocktail/CocktailList';
import PageTitle from '../../component/PageTitle';


@connect(state => ({ cocktails: state.cocktails }))
export default class CocktailListPage extends React.PureComponent {
  static propTypes = {
    cocktails: PropTypes.arrayOf(CocktailShape),
  };

  static defaultProps = {
    cocktails: [],
  };

  render() {
    const { cocktails } = this.props;
    return (
      <React.Fragment>
        <PageTitle>Cocktails</PageTitle>
        <CocktailList cocktails={cocktails} />
      </React.Fragment>
    );
  }
}
