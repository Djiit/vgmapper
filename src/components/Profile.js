import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

import './Profile.css';

class Profile extends Component {
  render() {
    return this.props.user.currentPlayer ? (
      <div>
        <p className="title is-4">{this.props.user.currentPlayer.attributes.name}</p>
        <p>lvl {this.props.user.currentPlayer.attributes.stats.level || "?"}</p>
        <p>Lifetime Gold {this.props.user.currentPlayer.attributes.stats.lifetimeGold || "?"}</p>
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
