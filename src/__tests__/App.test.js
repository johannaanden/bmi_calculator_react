import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';

import App from '../App';

describe ('<App />', () => {

    it('Starts with metric as the standard calculator', () => {
        const component = shallow(<App />);
        const weightLabel = <label>Weight (kg)</label>;
        const heightLabel = <label>Height (cm)</label>;
        expect(component.contains(weightLabel)).toEqual(true);
        expect(component.contains(heightLabel)).toEqual(true);
    })

    it('Can change calculation method', () => {
        const component = shallow(<App />);
        component.setState({methodType: 'Imperial'})
        const weightLabel = <label>Weight (lbs)</label>;
        const heightLabel = <label>Height (inch)</label>;
        expect(component.contains(weightLabel)).toEqual(true);
        expect(component.contains(heightLabel)).toEqual(true);
    })
})