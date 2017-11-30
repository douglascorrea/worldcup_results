import React from 'react';
import {shallow, mount, render} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {SEARCH_UPDATE} from '../reducers/results'
import {MESSAGE_SHOW} from '../reducers/messages'

import ConnectedCountryForm, {CountryForm} from './CountryForm';

const mockStore = configureMockStore( [ thunk ]);
const initialState = {
    result: {
        currentSearch: 'USA'
    },
    message: {
        message: ''
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
        const store = mockStore(initialState);
        const wrapper = shallow(<ConnectedCountryForm store={store}/>).dive();
        expect(wrapper.find('input')).toHaveValue('USA');
    });

    it('it dispatch SEARCH_UPDATE on typing',() => {
        const store = mockStore(initialState);
        const simulatedEvent = {target: {name: "searchInput", value: "BRA"}};
        const wrapper = shallow(<ConnectedCountryForm store={store}/>).dive();
        expect(wrapper.find('input')).toHaveValue('USA');
        wrapper.find('input').simulate('change', simulatedEvent);
        const actions = store.getActions()
        const expectedPayload = { type: SEARCH_UPDATE, payload: 'BRA'};
        expect(actions).toEqual([expectedPayload]);
    });

    it('it show loading message on submit', () => {
        const store = mockStore(initialState);
        const simulatedEvent = {preventDefault() {}};
        const wrapper = shallow(<ConnectedCountryForm store={store}/>).dive();
        expect(wrapper.find('input')).toHaveValue('USA');
        wrapper.find('form').simulate('submit', simulatedEvent);
        const actions = store.getActions();
        const expectedPayload = { type: MESSAGE_SHOW, payload: 'Loading results'};
        expect(actions).toEqual([expectedPayload]);
    })
});
