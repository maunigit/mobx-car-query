import React from 'react';
import renderer from 'react-test-renderer';
import Year from '../../src/screens/Year';
import Store from "../../src/stores/Store";

it('Year renders correctly', () => {  
    const store = Store;  
    const tree = renderer.create(<Year store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
});