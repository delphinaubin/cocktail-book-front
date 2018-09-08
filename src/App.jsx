import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';
import store from './flux/store';
import './App.css';
import CocktailListPage from './page/cocktail/CocktailListPage';
import CreateCocktailPage from './page/cocktail/CreateCocktailPage';
import IngredientListPage from './page/ingredient/IngredientListPage';
import CreateIngredientPage from './page/ingredient/CreateIngredientPage';
import CocktailViewPage from './page/cocktail/CocktailViewPage';

const { Header, Content } = Layout;

const headerStyle = {
  backgroundColor: '#FFF',
  height: 'auto',
  textAlign: 'center',
  fontSize: '1.2em',
};
const titleStyle = {
  fontFamily: 'Fredericka the Great, cursive',
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Layout>
              <Layout>
                <Header style={headerStyle}>
                  <h1 style={titleStyle}>The Cocktail Book</h1>
                </Header>
                <Content>
                  <Switch>
                    <Route path="/cocktails" exact>
                      <CocktailListPage />
                    </Route>
                    <Route path="/cocktails/create">
                      <CreateCocktailPage />
                    </Route>
                    <Route path="/cocktails/view">
                      <CocktailViewPage />
                    </Route>
                    <Route path="/ingredients" exact>
                      <IngredientListPage />
                    </Route>
                    <Route path="/ingredients/create">
                      <CreateIngredientPage />
                    </Route>
                    <Redirect to="/cocktails" />

                  </Switch>
                </Content>
              </Layout>
            </Layout>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
