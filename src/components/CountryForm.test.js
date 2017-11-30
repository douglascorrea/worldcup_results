import React from 'react';
import {Provider} from 'react-redux'
import {shallow} from 'enzyme';
import ConnectedCountryForm, { CountryForm } from './CountryForm';

// shallow NOT connected rendering tests
it('renders without crashing', () => {
    shallow(<CountryForm />);
});

it('checking receiving props on correct input', () => {
    const wrapper = shallow(<CountryForm currentSearch='Search' />);
    expect(wrapper.find('input')).toHaveValue('Search');
});

