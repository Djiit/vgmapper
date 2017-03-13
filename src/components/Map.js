import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from './Form';
import * as userActions from '../actions/user';

import './Map.css';

const PlayerMarker = ({ text }) => <span className="tag is-vg"> {text} </span>;

class VainLocatorMap extends Component {
  state = {
    center: {lat: 48.866667, lng: 2.333333},
    zoom: 14
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition( pos => {
      this.setState({
        center: {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        }
      });
      console.log('Found location. Processing...')
      this.props.actions.setUserPosition(pos.coords.latitude, pos.coords.longitude);
    })
  }

  // vriament utile ?
  _onChange = ({center, zoom}) => {
    this.setState({
      center: center,
      zoom: zoom,
    });
  }

  _onChildClick = (key, childProps) => {
    const player = this.props.user.players.filter((e) => e.id === key)[0];
    this.props.actions.setCurrentPlayer(player);
  }

  render() {
    let playersMarkers = [];
    if (this.props.user.players !== null) {
      playersMarkers = this.props.user.players.map(p => (
        <PlayerMarker
          key={p.id}
          lat={p.location[0]}
          lng={p.location[1]}
          text={p.attributes.name}
        />
      ));
    }
    return this.props.user.name ? (
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCXZQgUjng-e67r22xPL5XjRyaJoIuDQNg'}}
        center={this.state.center}
        zoom={this.state.zoom}
        onChange={this._onChange}
        onChildClick={this._onChildClick}
        options={{styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]}}
      >
        {playersMarkers}
      </GoogleMapReact>
    ) : (
      <Form/>
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
export default connect(mapStateToProps, mapDispatchToProps)(VainLocatorMap);
