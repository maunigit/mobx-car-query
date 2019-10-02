import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

//Unit test
it('App renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toBeTruthy();
});

//Snapshot test
it('App test against snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
