import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../src/theme/defaultTheme';

import SeparateLine from '../../src/components/Footer/SeparateLine';

describe('Footer/SeparateLine', () => {
  it('should renders without problem', () => {
    const component = mount(
      <ThemeProvider theme={defaultTheme}>
        <SeparateLine />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });
});
