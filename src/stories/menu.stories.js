import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '../components/index';

const storiesOfMenu = storiesOf('Menu', module);

storiesOfMenu.add('simple', () => (
  <Menu />
));
