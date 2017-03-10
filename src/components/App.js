import React, { Component } from 'react';

import VainLocatorMap from './Map';
import Deck from './Deck';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="columns is-gapless is-mobile">
        <div className="column is-two-thirds whitesmoke">
          <VainLocatorMap/>
        </div>
        <div className="column is-one-thirds">
          <Deck/>
        </div>
      </div>
    );
  }
}

export default App;
