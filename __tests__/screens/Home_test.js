import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../src/screens/Home';

//Snapshot test
it('App test against snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
