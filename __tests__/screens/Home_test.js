import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/screens/Home';
import Store from "../../src/stores/Store";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//see https://github.com/mobxjs/mobx-react#testing-store-injection
/*
  //configure({adapter: new Adapter()});
  //const wrapper = shallow(<Home.wrappedComponent />);
  const mountedComponent = mount(
    <Home store={store} />
 );
 */
//Snapshot test
it('Home renders correctly', () => {  
  const store = Store;  
  const tree = renderer.create(<Home store={store} />).toJSON();
  expect(tree).toMatchSnapshot();
});
