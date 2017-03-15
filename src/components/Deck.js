import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';
import Profile from './Profile';

import './Deck.css';



class Deck extends Component {
  render() {
    const mainSection = this.props.user.currentPlayer
      ? <Profile
          player={this.props.user.currentPlayer}
          isCurrentUser={this.props.user.name === this.props.user.currentPlayer.attributes.name}
        />
      : (
        <div>
          <p>
            {this.props.user.name
              ? "Click on any player name to see his profile."
              : "Let's find the VainGlory players around you ! First, tell me who you are."
            }
          </p>
        </div>
      )
    return (
        <div className="Deck has-text-centered">
          <h1 className="title is-3">VG Community Mapper</h1>
          <h2 className="subtitle">Players next door</h2>
          <div className="section Deck__main">
            {mainSection}
          </div>
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p className="Deck__footer">v0.2.1 - made with ♥️ by Djiit</p>
              </div>
            </div>
          </footer>
        </div>
    );
  }
}


function mapStateToProps(state, props) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deck);
