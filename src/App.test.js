import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

// shallow rendering tests
it('renders without crashing', () => {
    shallow(<App/>);
});

it('renders App-container div', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div.App-container')).toBePresent();
});

