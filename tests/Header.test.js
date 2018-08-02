import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/components/Header';

describe('Header', () => {
  it('should render without problem', () => {
    const component = shallow(<Header isFull content={() => (<div />)} />);
    expect(component).toMatchSnapshot();
  });
});

describe('HeaderContent', () => {
  it('should render with correct isFull', () => {
    const headerContent = jest.fn();
    const component = shallow(<Header isFull content={headerContent} />);

    expect(
      component
        .find('WithTheme(HeaderWrapper)')
        .children()
        .at(0)
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false });
    expect(
      component
        .find('WithTheme(HeaderWrapper)')
        .children()
        .at(0)
        .prop('isFull'),
    ).toEqual(false);
  });
});
