import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos';

describe('Repos component', () => {
  it('renders Repos', () => {
    const wrapper = shallow(<Repos repos={[{ name: 'test', id: 1 }, { name: 'tester', id: 2 }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
