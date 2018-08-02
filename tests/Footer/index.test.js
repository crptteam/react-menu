import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../src/components/Footer';

describe('Footer', () => {
  it('should renders without problem', () => {
    const content = jest.fn();
    const onClick = jest.fn();
    const component = shallow(<Footer isFull content={content} onClick={onClick} />);
    expect(component).toMatchSnapshot();
  });

  it('calling content render with isFull', () => {
    const content = jest.fn();
    const onClick = jest.fn();
    const component = shallow(<Footer isFull content={content} onClick={onClick} />);
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isFull'),
    ).toEqual(true);

    component.setProps({ isFull: false, content, onClick });
    expect(
      component
        .find('mockConstructor')
        .at(0)
        .prop('isFull'),
    ).toEqual(false);
  });

  it('calling callback on click to Button', () => {
    const content = jest.fn();
    const onClick = jest.fn();
    const component = shallow(<Footer isFull content={content} onClick={onClick} />);
    component.find('Button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
