import React from 'react';
import Trim from '../../src/screens/Trim';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = Store;
configure({adapter: new Adapter()});

it('Trim renders correctly', () => {   
    const wrapper = shallow(<Trim.wrappedComponent store={store} />);
    expect(wrapper).toMatchSnapshot();
});

it('Trim renders activityindicator-indicator', () => {     
    const wrapper = shallow(<Trim.wrappedComponent store={store}/>); 
    expect(wrapper.exists('#ai-indicator')).toEqual(true);
});
