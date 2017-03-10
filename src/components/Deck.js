import React, { Component } from 'react';

import Profile from './Profile';

import './Deck.css';

class Deck extends Component {
  render() {
    return (
        <div className="Deck has-text-centered">
          <h1 className="title is-3">VG Community Mapper</h1>
          <h2 className="subtitle">Players next door</h2>
          <div className="section Deck__main">
            <Profile/>
          </div>
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p className="Deck__footer"> v0.1.0 - Made with ♥️ by Djiit</p>
              </div>
            </div>
          </footer>
        </div>
    );
  }
}

export default Deck;
