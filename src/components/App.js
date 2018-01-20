/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import Footer from './Footer';
import HomePage from './HomePage';
import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-head">
            <header className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a className="navbar-item">
                    <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                  </a>
                  {/* <span className="navbar-burger burger" data-target="navbarMenuHeroC">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span> */}
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <NavLink className="navbar-item" exact to="/" activeClassName="is-active">Home</NavLink>
                    <NavLink className="navbar-item" to="/fuel-savings" activeClassName="is-active">Demo App</NavLink>
                    <NavLink className="navbar-item" to="/about" activeClassName="is-active">About</NavLink>
                    <span className="navbar-item">
                      <a className="button is-success is-inverted">
                        <span className="icon">
                          <i className="fa fa-github"></i>
                        </span>
                        <span>Download</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Title
              </h1>
              <h2 className="subtitle">
                Subtitle
              </h2>
            </div>
          </div>
        </section>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
