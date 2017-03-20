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
          {this.props.user.name
            ? "Click on any player name to see his profile."
            : (
              <div>
                <p>Let's find the VainGlory players around you !</p><br/>
                <p>First, tell me who you are and your location will be added to the Community Map.</p>
              </div>
            )
          }
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
            <span className="is-pulled-right">
              <a href="https://github.com/Djiit/vgmapper" target="_blank"><span className="icon"><i className="fa fa-github"></i></span></a>
              <a href="https://twitter.com/Djiit" target="_blank"><span className="icon"><i className="fa fa-twitter"></i></span></a>
            </span>
            <span className="is-pulled-left">v0.3.2</span>
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
