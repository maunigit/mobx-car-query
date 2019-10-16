import React from 'react';
import renderer from 'react-test-renderer';
import Detail from '../../src/screens/Detail';
import Store from "../../src/stores/Store";

it('Detail renders correctly', () => {  
    const store = Store;  
    const tree = renderer.create(<Detail store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
});