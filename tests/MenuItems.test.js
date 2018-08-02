import React from 'react';
import { shallow } from 'enzyme';

import MenuItems from '../src/components/MenuItems';

describe('MenuItems', () => {
  it('should renders without problem', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }, {
      component: jest.fn(),
      isSelected: true,
    }, {
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isFull content={items} />);
    expect(component).toMatchSnapshot();
  });

  it('should render every component from items in wrapper', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }, {
      component: jest.fn(),
      isSelected: true,
    }, {
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isFull content={items} />);
    expect(
      component
        .find('mockConstructor')
        .length,
    ).toEqual(items.length);

    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .length,
    ).toEqual(items.length);
  });

  it('should render component from items with isFull value', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isFull content={items} />);
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false, content: items });
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isFull'),
    ).toEqual(false);
  });

  it('should render MenuItemWrapper with isFull value', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isFull content={items} />);
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false, content: items });
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isFull'),
    ).toEqual(false);
  });


  it('should render MenuItemWrapper with isSelected value', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isFull content={items} />);
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isSelected'),
    ).toEqual(false);

    items[0].isSelected = true;
    component.setProps({ isFull: false, content: items });
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isSelected'),
    ).toEqual(true);
  });
});
