import React from 'react';
import renderer from 'react-test-renderer';
import Make from '../../src/screens/Make';
import Store from "../../src/stores/Store";

it('Make renders correctly', () => {  
    const store = Store;  
    const tree = renderer.create(<Make store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
});