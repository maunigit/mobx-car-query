import React from 'react';
import Home from '../../src/screens/Home';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { List } from 'react-native-paper';

//see https://github.com/mobxjs/mobx-react#testing-store-injection
const store = Store; 
configure({adapter: new Adapter()});

//render with enzyme
it('Home renders correctly', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  expect(wrapper).toMatchSnapshot();
});

it('Home renders X', () => {     
  const wrapper = shallow(<Home.wrappedComponent store={store}/>);
  const listItemElement = wrapper.find(List.Item);  
  //expect(listItemElement.props().disabled).toBe(false);
});

/*
//render without enzyme (you have to import renderer)
it('Home renders correctly', () => {     
  const tree = renderer.create(<Home store={store}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
*/
