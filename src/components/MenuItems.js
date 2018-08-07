import React from 'react';
import PropTypes from 'prop-types';

import MenuItemsWrapper from '../styled/MenuItemsWrapper';
import MenuItemWrapper from '../styled/MenuItemWrapper';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.arrayOf(PropTypes.func).isRequired,
  onClick: PropTypes.func.isRequired,
};

const MenuItems = ({ isOpen, content, onClick }) => {
  return (
    <MenuItemsWrapper
      onClick={onClick}
    >
      {content.map((Item, i) => (
        <MenuItemWrapper key={i} isOpen={isOpen}>
          <Item isOpen={isOpen} />
        </MenuItemWrapper>
      ))}
    </MenuItemsWrapper>
  );
};

MenuItems.displayName = 'MenuItems';
MenuItems.propTypes = propTypes;

export default MenuItems;
