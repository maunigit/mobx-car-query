import React from 'react';
import renderer from 'react-test-renderer';
import Trim from '../../src/screens/Trim';
import Store from "../../src/stores/Store";

it('Trim renders correctly', () => {  
    const store = Store;  
    const tree = renderer.create(<Trim store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
});