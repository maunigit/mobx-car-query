import React from 'react';
import Home from '../../src/screens/Home';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const store = Store; 
configure({adapter: new Adapter()});

it('Home renders correctly', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  expect(wrapper).toMatchSnapshot();
});

it('Home renders listitem-make', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>); 
  expect(wrapper.exists('#li-make')).toEqual(true);
});

it('Home renders listitem-year', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>); 
  expect(wrapper.exists('#li-year')).toEqual(true);
});

it('Home renders listitem-model disabled', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  const listItemElement = wrapper.find('#li-model');  
  expect(listItemElement.props().disabled).toBe(true);
});

it('Home renders listitem-trim disabled', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  const listItemElement = wrapper.find('#li-trim');  
  expect(listItemElement.props().disabled).toBe(true);
});

it('Home renders button-details disabled', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  const listItemElement = wrapper.find('#button-details');  
  expect(listItemElement.props().disabled).toBe(true);
});

it('Home renders button-reset', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  expect(wrapper.exists('#button-reset')).toEqual(true);
});
