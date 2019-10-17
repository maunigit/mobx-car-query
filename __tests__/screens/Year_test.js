import React from 'react';
import Year from '../../src/screens/Year';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = Store;
configure({adapter: new Adapter()});

it('Year renders correctly', () => {  
    const wrapper = shallow(<Year.wrappedComponent store={store} />);
    expect(wrapper).toMatchSnapshot();
});

it('Year renders activityindicator-indicator', () => {     
    const wrapper = shallow(<Year.wrappedComponent store={store}/>); 
    expect(wrapper.exists('#ai-indicator')).toEqual(true);
});
