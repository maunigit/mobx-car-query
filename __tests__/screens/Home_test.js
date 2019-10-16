import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/screens/Home';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//see https://github.com/mobxjs/mobx-react#testing-store-injection
//Snapshot test
configure({adapter: new Adapter()});
it('Home renders correctly', () => {  
  const store = Store;  
  const wrapper = shallow(<Home store={store} />);
  expect(wrapper).toMatchSnapshot();
});
