import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Home from '../../src/screens/Home';
import Adapter from 'enzyme-adapter-react-16';

//Snapshot test
//configure({adapter: new Adapter()});
it('App test against snapshot', () => {
  //const wrapper = shallow(<Home.wrappedComponent />);
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
