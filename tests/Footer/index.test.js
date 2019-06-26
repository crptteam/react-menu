import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../src/components/Footer';

describe('Footer', () => {
  it('should renders without problem', () => {
    const content = jest.fn();
    const onClick = jest.fn();
    const isShowButton = jest.fn();
    const component = shallow(<Footer isOpen content={content} onClick={onClick} isShowButton={isShowButton} />);
    expect(component).toMatchSnapshot();
  });

  it('calling content render with isOpen', () => {
    const content = jest.fn();
    const onClick = jest.fn();
    const isShowButton = jest.fn();
    const component = shallow(<Footer isOpen content={content} onClick={onClick} isShowButton={isShowButton} />);
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isOpen'),
    ).toEqual(true);

    component.setProps({ isOpen: false, content, onClick });
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isOpen'),
    ).toEqual(false);
  });

  it('calling callback on click to Button', () => {
    const content = jest.fn();
    const onClick = jest.fn();
    const isShowButton = jest.fn();
    const component = shallow(<Footer isOpen content={content} onClick={onClick} isShowButton={isShowButton} />);
    component.find('Button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
