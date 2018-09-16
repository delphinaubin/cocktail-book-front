import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CocktailShape from '../../shape/CocktailShape';
import CocktailList from '../../component/cocktail/CocktailList';
import PageTitle from '../../component/PageTitle';
import { fetchCocktailAction } from '../../flux/cocktail/fetchCocktailAction';


@connect(
  state => ({ cocktails: state.cocktails }),
  dispatch => ({
    fetchCocktails: () => {
      dispatch(fetchCocktailAction());
    },
  }),
)
export default class CocktailListPage extends React.PureComponent {
  static propTypes = {
    cocktails: PropTypes.arrayOf(CocktailShape),
    fetchCocktails: PropTypes.func.isRequired,
  };

  static defaultProps = {
    cocktails: [],
  };

  componentDidMount() {
    const { fetchCocktails } = this.props;
    fetchCocktails();
  }

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
