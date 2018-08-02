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
  it('should render with correct isFull', () => {
    const component = shallow(<Menu isFull />);
    expect(
      component
        .find('WithTheme(MenuWrapper)')
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false });
    expect(
      component
        .find('WithTheme(MenuWrapper)')
        .prop('isFull'),
    ).toEqual(false);
  });
});

describe('Header', () => {
  it('should render with correct isFull', () => {
    const component = shallow(<Menu isFull />);
    expect(
      component
        .find('Header')
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false });
    expect(
      component
        .find('Header')
        .prop('isFull'),
    ).toEqual(false);
  });

  it('should render with correct content', () => {
    const headerContent = jest.fn();
    const component = shallow(<Menu isFull footer={headerContent} />);
    expect(
      component
        .find('Footer')
        .prop('content'),
    ).toEqual(headerContent);
  });
});

describe('Footer', () => {
  it('should render with correct isFull', () => {
    const component = shallow(<Menu isFull />);
    expect(
      component
        .find('Footer')
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false });
    expect(
      component
        .find('Footer')
        .prop('isFull'),
    ).toEqual(false);
  });

  it('should render with correct content', () => {
    const footerContent = jest.fn();
    const component = shallow(<Menu isFull footer={footerContent} />);
    expect(
      component
        .find('Footer')
        .prop('content'),
    ).toEqual(footerContent);
  });

  it('should call callback on click', () => {
    const onClick = jest.fn();
    const component = shallow(<Menu isFull onFullModeClick={onClick} />);
    component.find('Footer').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('MenuItems', () => {
  it('should render with correct isFull', () => {
    const component = shallow(<Menu isFull />);
    expect(
      component
        .find('MenuItems')
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false });
    expect(
      component
        .find('MenuItems')
        .prop('isFull'),
    ).toEqual(false);
  });

  it('should render with correct content', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];

    const component = shallow(<Menu isFull menuItems={items} />);
    expect(
      component
        .find('MenuItems')
        .prop('content'),
    ).toEqual(items);
  });
});
