import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator'

class DisplayResult extends Component {
    calculate() {
        var weight= this.props.weight;
        var height= this.props.height;

        return bmiCalculation(weight, height);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.calculate()}Calculate></button>
            </div>
        )
    }
}

export default DisplayResult