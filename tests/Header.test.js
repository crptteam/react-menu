import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/components/Header';

describe('Header', () => {
  it('should render without problem', () => {
    const component = shallow(<Header isOpen content={() => (<div />)} />);
    expect(component).toMatchSnapshot();
  });
});

describe('HeaderContent', () => {
  it('should render with correct isOpen', () => {
    const headerContent = jest.fn();
    const component = shallow(<Header isOpen content={headerContent} />);

    expect(
      component
        .find('WithTheme(HeaderWrapper)')
        .children()
        .at(0)
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false });
    expect(
      component
        .find('WithTheme(HeaderWrapper)')
        .children()
        .at(0)
        .prop('isOpen'),
    ).toEqual(false);
  });
});
