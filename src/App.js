import React, { Component } from 'react';
import './App.css';
import DisplayResult from './DisplayResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      methodType: 'Metric'
    }
  }

  calculateMethod () {
    if (this.state.methodType === 'Metric') {
      this.setState({ methodType: 'Imperial' });
    } else {
      this.setState({ methodType: 'Metric'})
    }
  }

  render() {
    return (
      <div className="App">
        <div>
        <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
        <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
        </div>

        <button onClick={() => this.calculateMethod()}>{this.state.methodType === 'Metric' ? 'Change to Imperial' : 'Change to Metric'}</button>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          methodType={this.state.methodType}
        />
        
      </div>
    );
  }
}

export default App;