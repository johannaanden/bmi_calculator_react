import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator'

class DisplayResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bmiMessage: '',
            methodType: 'Metric'
        };
    }

    calculate() {
        var method = this.state.methodType;
        var weight= this.props.weight;
        var height= this.props.height;
        this.setState({ bmiMessage: bmiCalculation(method, weight, height) });
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
            <div>
                <button onClick={() => this.calculateMethod()}>Change method</button>
                <button onClick={() => this.calculate()}>Calculate</button>
                <div>{this.state.bmiMessage}</div>
            </div>
        )
    }
}

export default DisplayResult