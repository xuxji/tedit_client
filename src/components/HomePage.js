import React from 'react';

const HomePage = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <nav className="columns">
            <a className="column has-text-centered" href="https://bulma.io/documentation/overview/responsiveness/">
              <span className="icon is-large" style={{ marginRight: '-15px' }}>
                <i className="fa fa-3x fa-mobile" />
              </span>
              <span className="icon is-large">
                <i className="fa fa-3x fa-tablet" />
              </span>
              <span className="icon is-large" style={{ marginRight: '10px' }}>
                <i className="fa fa-3x fa-desktop" />
              </span>
              <p className="title is-4" style={{ marginTop: '0.5em' }}><strong>100% Responsive</strong></p>
              <p className="subtitle">Designed for <strong>mobile</strong> first</p>
            </a>
            <a className="column has-text-centered" href="https://bulma.io/documentation/overview/modular/">
              <span className="icon is-large">
                <i className="fa fa-3x fa-cubes" />
              </span>
              <p className="title is-4" style={{ marginTop: '0.5em' }}><strong>Modular</strong></p>
              <p className="subtitle">Just import what you <strong>need</strong></p>
            </a>
            <a className="column has-text-centered" href="https://bulma.io/documentation/columns/basics/">
              <span className="icon is-large">
                <i className="fa fa-3x fa-css3" />
              </span>
              <p className="title is-4" style={{ marginTop: '0.5em' }}><strong>Modern</strong></p>
              <p className="subtitle">Built with <strong>Flexbox</strong></p>
            </a>
            <a className="column has-text-centered" href="https://github.com/jgthms/bulma">
              <span className="icon is-large">
                <i className="fa fa-3x fa-github" />
              </span>
              <p className="title is-4" style={{ marginTop: '0.5em' }}><strong>Free</strong></p>
              <p className="subtitle">Open source on <strong>GitHub</strong></p>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
