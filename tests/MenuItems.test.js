import React from 'react';
import { shallow } from 'enzyme';

import MenuItems from '../src/components/MenuItems';

describe('MenuItems', () => {
  it('should renders without problem', () => {
    const items = [jest.fn(), jest.fn(), jest.fn()];
    const component = shallow(<MenuItems isOpen content={items} onClick={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });

  it('should render every component from items in wrapper', () => {
    const items = [jest.fn(), jest.fn(), jest.fn()];
    const component = shallow(<MenuItems isOpen content={items} onClick={jest.fn()} />);
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
    const items = [jest.fn()];
    const component = shallow(<MenuItems isOpen content={items} onClick={jest.fn()} />);
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
    const items = [jest.fn()];
    const component = shallow(<MenuItems isOpen content={items} onClick={jest.fn()} />);
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

  it('should call onClick', () => {
    const items = [jest.fn()];
    const onClick = jest.fn();
    const component = shallow(<MenuItems isOpen content={items} onClick={onClick} />);
    component.find('MenuItemsWrapper').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
