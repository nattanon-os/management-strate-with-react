
import React from 'react';

class State {
  color() { throw new Error('No implementation.'); }
  handleChange() { throw new Error('No implementtion'); }
  component() { throw new Error('No implementation'); }
}


class RedState extends State {
  color() { return "red"}

  component() {
    return (
      <div style={{"backgroundColor": "red"}}>Red</div>
    )
  }

  handleChange(trafficLight) {
    console.log('Light is red. Changing to green.');
    // trafficLight.setState(new GreenState());
    trafficLight.setState({ currentState: new GreenState() });
  }
}

class GreenState extends State {
  color() { return "green"}

  component() {
    return (
      <div style={{"backgroundColor": "green"}}>Green</div>
    )
  }

  handleChange(trafficLight) {
    console.log('Light is green. Changing to yellow.');
    // trafficLight.setState(new YellowState());
    trafficLight.setState({ currentState: new YellowState() });
  }
}

class YellowState extends State {
  color() { return "yellow" }

  component() {
    return (
      <div style={{"backgroundColor": "yellow"}}>Yello</div>
    )
  }

  handleChange(trafficLight) {
    console.log('Light is yello. Changing to red.');
    // trafficLight.setState(new RedState());
    trafficLight.setState({ currentState: new RedState() });
  }
}

class TrafficLight {
  constructor() {
    this.state = new RedState();
    // this.state = 'red';
  }

  handleChange() {
    this.state.handleChange(this);
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  color() {
    return this.state.color();
  }

  component() {
    return this.state.component();
  }
}

export { RedState, GreenState, YellowState };
export default TrafficLight;
