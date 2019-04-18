import React, { Component } from 'react';
import Webcam from './react-webcam';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      screenshot: null,
      tab: 0
    };
  }
  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot });
  }

  render() {
    return (
      <div className='App'>
        <h1>react-webcam</h1>
            <Webcam
              audio={true}
              ref={node => this.webcam = node}
            />
      </div>
    );
  }
}
