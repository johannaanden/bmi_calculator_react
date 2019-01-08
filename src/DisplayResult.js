import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator'

class DisplayResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bmiMessage: ''
        };
    }

    calculate() {
        var weight= this.props.weight;
        var height= this.props.height;
        this.setState({ bmiMessage: bmiCalculation(weight, height) });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.calculate()}Calculate></button>
                <div>{this.state.bmiMessage}</div>
            </div>
        )
    }
}

export default DisplayResult