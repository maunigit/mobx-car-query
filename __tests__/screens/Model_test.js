import React from 'react';
import Model from '../../src/screens/Model';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = Store;
configure({adapter: new Adapter()});

it('Model renders correctly', () => {  
    const wrapper = shallow(<Model.wrappedComponent store={store} />);
    expect(wrapper).toMatchSnapshot();
});

it('Model renders activityindicator-indicator', () => {     
    const wrapper = shallow(<Model.wrappedComponent store={store}/>); 
    expect(wrapper.exists('#ai-indicator')).toEqual(true);
});
