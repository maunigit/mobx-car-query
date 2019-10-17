import React from 'react';
import Detail from '../../src/screens/Detail';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = Store;
configure({adapter: new Adapter()});

it('Detail renders correctly', () => {  
    const wrapper = shallow(<Detail.wrappedComponent store={store} />);
    expect(wrapper).toMatchSnapshot();
});

it('Detail renders activityindicator-indicator', () => {     
    const wrapper = shallow(<Detail.wrappedComponent store={store}/>); 
    expect(wrapper.exists('#ai-indicator')).toEqual(true);
});
