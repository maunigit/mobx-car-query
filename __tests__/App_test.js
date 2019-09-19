import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

//Unit test
it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

//Snapshot test
it('App test against snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
