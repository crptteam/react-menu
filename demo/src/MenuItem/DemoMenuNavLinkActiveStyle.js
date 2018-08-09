import { defaultTheme } from '../../../src/theme/index';

const activeStyle = (props) => {
  const itemTheme = defaultTheme.Menu.item;
  return ({
    backgroundColor: `${itemTheme.isSelectedColor}`,
  });
}

export default activeStyle;
