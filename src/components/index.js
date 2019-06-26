import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MenuWrapper from '../styled/MenuWrapper';
import Header from './Header';
import Footer from './Footer/index';
import MenuItems from './MenuItems';

class Menu extends PureComponent {
  displayName='Menu';

  static propTypes = {
    isOpen: PropTypes.bool,
    onFullModeClick: PropTypes.func,
    header: PropTypes.func,
    footer: PropTypes.func,
    menuItems: PropTypes.arrayOf(PropTypes.func),
    isShowButton: PropTypes.bool,
  };

  static defaultProps = {
    isOpen: false,
    isShowButton: true,
    header: () => (<div />),
    footer: () => (<div />),
    menuItems: [() => (<div />)],
    onFullModeClick: () => {},
  }

  onMenuItemsClick = () => {
    this.forceUpdate();
  }

  render() {
    const {
      isOpen,
      onFullModeClick,
      header,
      footer,
      menuItems,
      isShowButton,
    } = this.props;

    return (
      <MenuWrapper isOpen={isOpen}>
        <Header isOpen={isOpen} content={header} />
        <MenuItems isOpen={isOpen} content={menuItems} onClick={this.onMenuItemsClick} />
        <Footer
          isOpen={isOpen}
          onClick={onFullModeClick}
          content={footer}
          isShowButton={isShowButton}
        />
      </MenuWrapper>
    );
  }
}

export default Menu;
