import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders Display', () => {
    const wrapper = shallow(<Display name='hunter' followers={1} following={2} html_url='www.github.com/hunterdanielson' repos={[]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
