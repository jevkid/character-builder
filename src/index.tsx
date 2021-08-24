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

const StyledDesktopNavigation = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const StyledMobileNavigation = styled.nav`
  @media only screen and (min-width: 481px) {
    display: none;
  }
  @media only screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
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
  @media only screen and (max-width: 480px) {
    justify-content: center;
    &:first-child {
      left: 0;
      position: relative;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledAppContainer>
          <StyledDesktopNavigation>
            <StyledNavLink to="/">Randomi5E</StyledNavLink>
            <StyledNavLink to="/glossary">Glossary</StyledNavLink>
            <StyledNavLink to="/builder">Character builder</StyledNavLink>
          </StyledDesktopNavigation>
          <StyledMobileNavigation>
            <StyledNavLink to="/">Randomi5e</StyledNavLink>
          </StyledMobileNavigation>
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
