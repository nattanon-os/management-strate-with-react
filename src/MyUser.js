import React, { Component } from 'react';
import { default as MyButton} from './myStatus';
class MyUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'A'
    }
  }

  render() {
    const myButton = new MyButton({status: this.state.status})
    return (
      <div>
        <h1>{this.state.status}</h1>
        <button onClick={()=>this.setState({status: this.state.status === 'A'? 'B': 'A' })}>
          Change Status
        </button>
        <button onClick={myButton.handleClick1}>test 1</button>
        <button onClick={myButton.handleClick2}>test 2</button>
      </div>
    )
  }
}



export default MyUser;
