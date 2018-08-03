import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MenuItemsWrapper from '../styled/MenuItemsWrapper';
import MenuItemWrapper from '../styled/MenuItemWrapper';

export default class MenuItems extends PureComponent {
  displayName = 'MenuItems';

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        component: PropTypes.func.isRequired,
        isSelected: PropTypes.bool.isRequired,
      }).isRequired,
    ).isRequired,
  };

  render() {
    const {
      isOpen,
      content,
    } = this.props;

    return (
      <MenuItemsWrapper>
        {content.map((Item, i) => (
          <MenuItemWrapper key={i} isOpen={isOpen} isSelected={Item.isSelected}>
            <Item.component isOpen={isOpen} />
          </MenuItemWrapper>
        ))}
      </MenuItemsWrapper>
    );
  }
}
