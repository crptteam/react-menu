import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MenuWrapper from '../styled/MenuWrapper';
import Header from './Header';
import Footer from './Footer/index';
import MenuItems from './MenuItems';

class Menu extends PureComponent {
  displayName='Menu';

  static propTypes = {
    isFull: PropTypes.bool,
    onFullModeClick: PropTypes.func,
    header: PropTypes.func,
    footer: PropTypes.func,
    menuItems: PropTypes.arrayOf(
      PropTypes.shape({
        component: PropTypes.func.isRequired,
        isSelected: PropTypes.bool.isRequired,
      }),
    ),
    theme: PropTypes.object,
  };

  static defaultProps = {
    isFull: false,
    header: () => (<div>Header is absent</div>),
    footer: () => (<div>Footer is absent</div>),
    menuItems: [{
      component: () => (<div>Items are absent</div>),
      isSelected: false,
    }],
    onFullModeClick: () => {},
  }

  render() {
    const {
      isFull,
      onFullModeClick,
      header,
      footer,
      menuItems,
    } = this.props;

    return (
      <MenuWrapper isFull={isFull}>
        <Header isFull={isFull} content={header} />
        <MenuItems isFull={isFull} content={menuItems} />
        <Footer isFull={isFull} onClick={onFullModeClick} content={footer} />
      </MenuWrapper>
    );
  }
}

export default Menu;
