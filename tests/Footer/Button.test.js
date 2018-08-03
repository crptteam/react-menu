import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../src/theme/defaultTheme';

import Button from '../../src/components/Footer/Button';

describe('Footer/Button', () => {
  it('should renders without problem', () => {
    const onClick = jest.fn();
    const component = mount(
      <ThemeProvider theme={defaultTheme}>
        <Button onClick={onClick} />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should call onClick', () => {
    const onClick = jest.fn();
    const component = mount(
      <ThemeProvider theme={defaultTheme}>
        <Button onClick={onClick} />
      </ThemeProvider>
    );
    component.find('svg').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
