import React, { Component } from 'react';
import moment from 'moment';

import './Profile.css';

class Profile extends Component {
  render() {
    const player = this.props.player;
    const defeatsCount = player.attributes.stats.played
      ? player.attributes.stats.played - player.attributes.stats.wins
      : 0;

    const mapperInfo = !this.props.isCurrentUser
      ? (
        <div>
          <br/>
          <p>
            <span className="icon"> <i className="fa fa-location-arrow"></i> </span>
            &nbsp;{player.distance.toFixed(2)} km
          </p>
          <p>
            <span className="icon"> <i className="fa fa-clock-o"></i> </span>
            &nbsp;{moment(player.timestamp).fromNow()}
          </p>
        </div>
      ) : null;
    return (
      <div className="has-text-left">
        <p className="title is-4 has-text-centered">{player.attributes.name}</p>
        <hr/>
        <p>
          <span className="icon"> <i className="fa fa-user"></i> </span>
          &nbsp;lvl {player.attributes.stats.level || "?"} ({player.attributes.stats.xp || "?"} xp)</p>
        <p>
          <span className="icon"> <i className="fa fa-trophy"></i> </span>
          &nbsp;{player.attributes.stats.wins || "?"} W / {defeatsCount} L
        </p>
        {/* <p>Lifetime Gold : {player.attributes.stats.lifetimeGold || "?"}</p> */}
        {mapperInfo}
      </div>
    );
  }
}

export default Profile;
