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
    const component = shallow(<MenuItems isOpen content={items} />);
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
    const component = shallow(<MenuItems isOpen content={items} />);
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

  it('should render component from items with isOpen value', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isOpen content={items} />);
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false, content: items });
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isOpen'),
    ).toEqual(false);
  });

  it('should render MenuItemWrapper with isOpen value', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isOpen content={items} />);
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false, content: items });
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isOpen'),
    ).toEqual(false);
  });


  it('should render MenuItemWrapper with isSelected value', () => {
    const items = [{
      component: jest.fn(),
      isSelected: false,
    }];
    const component = shallow(<MenuItems isOpen content={items} />);
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isSelected'),
    ).toEqual(false);

    items[0].isSelected = true;
    component.setProps({ isOpen: false, content: items });
    expect(
      component
        .find('WithTheme(MenuItemWrapper)')
        .at(0)
        .prop('isSelected'),
    ).toEqual(true);
  });
});
