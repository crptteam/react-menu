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
  };

  static defaultProps = {
    isOpen: false,
    header: () => (<div />),
    footer: () => (<div />),
    menuItems: [{
      component: () => (<div />),
      isSelected: false,
    }],
    onFullModeClick: () => {},
  }

  render() {
    const {
      isOpen,
      onFullModeClick,
      header,
      footer,
      menuItems,
    } = this.props;

    return (
      <MenuWrapper isOpen={isOpen}>
        <Header isOpen={isOpen} content={header} />
        <MenuItems isOpen={isOpen} content={menuItems} />
        <Footer isOpen={isOpen} onClick={onFullModeClick} content={footer} />
      </MenuWrapper>
    );
  }
}

export default Menu;
