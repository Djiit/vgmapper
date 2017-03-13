import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import * as userActions from '../actions/user';

import './Profile.css';

class Profile extends Component {
  render() {
    return this.props.user.currentPlayer ? (
      <div className="has-text-left">
        <p className="title is-4 has-text-centered">{this.props.user.currentPlayer.attributes.name}</p>
        <p>Level {this.props.user.currentPlayer.attributes.stats.level || "?"}</p>
        <p>Lifetime Gold : {this.props.user.currentPlayer.attributes.stats.lifetimeGold || "?"}</p>
        <p>Distance : {Math.round(this.props.user.currentPlayer.distance)} m</p>
        <p>Last seen :  {moment(this.props.user.currentPlayer.timestamp).fromNow()}</p>
      </div>
    ) : (
      <div>
        <p>
          {this.props.user.name
            ? "Click on any player name to see his profile."
            : "Let's find the VainGlory players around you ! \nFirst, tell me who you are."
          }
        </p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
