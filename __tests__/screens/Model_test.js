import React from 'react';
import renderer from 'react-test-renderer';
import Model from '../../src/screens/Model';
import Store from "../../src/stores/Store";

it('Model renders correctly', () => {  
    const store = Store;  
    const tree = renderer.create(<Model store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
});