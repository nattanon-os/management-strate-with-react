class Status {
  handleClick1() { throw new Error('No implementtion'); }
  handleClick2() { throw new Error('No implementtion'); }
}


class AStatus extends Status {
  handleClick1() {
    const callAPI = 'A1'
    console.log('is', callAPI)
  }
  handleClick2() {
    const callAPI = 'A2'
    console.log('is', callAPI)
  }
}

class BStatus extends Status {
  handleClick1() { 
    const callAPI = 'B1'
    console.log('is', callAPI)
  }
  handleClick2() {
    const callAPI = 'B2'
    console.log('is', callAPI)
  }
}

class MyStatus {
  constructor(props) {
    console.log('status', props)
    switch (props.status) {
      case 'A':
        return new AStatus();
      case 'B':
        return new BStatus();
      default:
        return new AStatus();
    }
  }
}
export default MyStatus;
