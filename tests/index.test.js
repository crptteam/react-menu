import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../src/components/index';

describe('Menu', () => {
  it('should render without parameters', () => {
    const component = shallow(<Menu />);
    expect(component).toMatchSnapshot();
  });
});

describe('MenuWrapper', () => {
  it('should render with correct isOpen', () => {
    const component = shallow(<Menu isOpen />);
    expect(
      component
        .find('WithTheme(MenuWrapper)')
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false });
    expect(
      component
        .find('WithTheme(MenuWrapper)')
        .prop('isOpen'),
    ).toEqual(false);
  });
});

describe('Header', () => {
  it('should render with correct isOpen', () => {
    const component = shallow(<Menu isOpen />);
    expect(
      component
        .find('Header')
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false });
    expect(
      component
        .find('Header')
        .prop('isOpen'),
    ).toEqual(false);
  });

  it('should render with correct content', () => {
    const headerContent = jest.fn();
    const component = shallow(<Menu isOpen footer={headerContent} />);
    expect(
      component
        .find('Footer')
        .prop('content'),
    ).toEqual(headerContent);
  });
});

describe('Footer', () => {
  it('should render with correct isOpen', () => {
    const component = shallow(<Menu isOpen />);
    expect(
      component
        .find('Footer')
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false });
    expect(
      component
        .find('Footer')
        .prop('isOpen'),
    ).toEqual(false);
  });

  it('should render with correct content', () => {
    const footerContent = jest.fn();
    const component = shallow(<Menu isOpen footer={footerContent} />);
    expect(
      component
        .find('Footer')
        .prop('content'),
    ).toEqual(footerContent);
  });

  it('should call callback on click', () => {
    const onClick = jest.fn();
    const component = shallow(<Menu isOpen onFullModeClick={onClick} />);
    component.find('Footer').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('MenuItems', () => {
  it('should render with correct isOpen', () => {
    const component = shallow(<Menu isOpen />);
    expect(
      component
        .find('MenuItems')
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false });
    expect(
      component
        .find('MenuItems')
        .prop('isOpen'),
    ).toEqual(false);
  });

  it('should render with correct content', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];

    const component = shallow(<Menu isOpen menuItems={items} />);
    expect(
      component
        .find('MenuItems')
        .prop('content'),
    ).toEqual(items);
  });
});
