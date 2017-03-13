import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region: 'na',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.props.user.pos) {
      this.props.actions.fetchUserData({...this.state});
      this.props.actions.fetchNearbyUsers(this.state.region);
    }
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column"></div>
        <div className="column is-half is-fullheight marged">
          <form className="whitesmoke" onSubmit={this.handleSubmit}>
            <label className="label">Name</label>
            <p className="control">
              <input className="input" type="text" placeholder="SuperEvilUsername" name="name" value={this.state.name} onChange={this.handleInputChange} />
            </p>
            <label className="label">Region</label>
            <p className="control">
              <span className="select">
                <select name="region" value={this.state.region} onChange={this.handleInputChange}>
                  <option value="na">North America</option>
                  <option value="eu">Europe</option>
                  <option value="sa">South America</option>
                  <option value="ea">East Asia</option>
                  <option value="sea">Southeast Asia</option>
                </select>
              </span>
            </p>
            <p className="control">
              <input className={"button is-primary" + (!this.props.user.pos? " is-disabled" : "")} type="submit" value="Submit"/>
            </p>
          </form>
        </div>
        <div className="column"></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form);
