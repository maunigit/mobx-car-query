import React from 'react';
import Make from '../../src/screens/Make';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = Store;
configure({adapter: new Adapter()});

it('Make renders correctly', () => {
    const wrapper = shallow(<Make.wrappedComponent store={store} />);
    expect(wrapper).toMatchSnapshot();
});

it('Make renders activityindicator-indicator', () => {     
    const wrapper = shallow(<Make.wrappedComponent store={store}/>); 
    expect(wrapper.exists('#ai-indicator')).toEqual(true);
});
