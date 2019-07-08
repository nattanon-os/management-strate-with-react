import React, { Component, Fragment } from 'react';
import { RedState } from './trafficLight';

function UserGroupButton() {
  return (
    <Fragment>
      <button>B</button>
      <button>C</button>
    </Fragment>
  );
};

function AdminGroupButton() {
  return (
    <Fragment>
      <button>A</button>
      <UserGroupButton />
    </Fragment>
  );
};

class Traffic extends Component {
  constructor(props) {
    super(props);
    // this.trafficLight = new TrafficLight();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // color: this.trafficLight.color()
      currentState: new RedState()
    }
  }

  handleClick() {
    // this.trafficLight.handleChange();
    // this.setState({ color: this.trafficLight.color() });
    this.state.currentState.handleChange(this);
  }

  render() {
    // user admin, user
    const user = 'Admin'

    const groupButtons = (user === 'Admin') ? <AdminGroupButton /> : <UserGroupButton />

    return (
      <div>
        { this.state.currentState.component() }
        <button onClick={this.handleClick}>Change</button>
        <div>{groupButtons}</div>
      </div>
    )
  }
}



export default Traffic;
