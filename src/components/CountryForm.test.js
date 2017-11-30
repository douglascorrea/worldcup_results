import React from 'react';
import {Provider} from 'react-redux'
import {shallow, mount, render} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ConnectedCountryForm, {CountryForm} from './CountryForm';

const mockStore = configureMockStore( [ thunk ]);
const storeStateMock = {
    result: {
        currentSearch: 'USA'
    }
};

describe('ContryForm', () => {
// shallow NOT connected rendering tests
    it('renders without crashing', () => {
        shallow(<CountryForm/>);
    });

    it('checking receiving props on correct input', () => {
        const wrapper = shallow(<CountryForm currentSearch='Search'/>);
        expect(wrapper.find('input')).toHaveValue('Search');
    });

// connected comppnent
    it('render connected component',() => {
        const store = mockStore(storeStateMock);
        const wrapper = shallow(<ConnectedCountryForm store={store}/>).dive();
        expect(wrapper.find('input')).toHaveValue('USA');
    })
});
