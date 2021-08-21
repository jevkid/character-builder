import React from 'react';
import ReactDOM from 'react-dom';
import { CharacterBuilder } from './app/pages/characterBuilder';
import { Glossary } from './app/pages/glossary';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import { Home } from './app/pages/home';
import {
  StyledAppContainer,
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
} from './app/styles';
import './index.css';

const StyledNavigation = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  font-family: 'Urbanist';
  color: ${TEXT_COLOR_SECONDARY};
  margin: 12px 0;
  margin-right: 24px;
  &:first-child {
    left: 0;
    position: absolute;
  }
  &:hover {
    cursor: pointer;
    color: ${TEXT_COLOR_PRIMARY};
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledAppContainer>
          <StyledNavigation>
            <StyledNavLink to="/">Randomi5E</StyledNavLink>
            <StyledNavLink to="/glossary">Glossary</StyledNavLink>
            <StyledNavLink to="/builder">Character builder</StyledNavLink>
          </StyledNavigation>
          <Switch>
            <Route exact path={['/']}>
              <Home />
            </Route>
            <Route exact path={['/builder']}>
              <CharacterBuilder />
            </Route>
            <Route exact path="/glossary/:term">
              <h1>glossary</h1>
              <Glossary />
            </Route>
          </Switch>
        </StyledAppContainer>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
