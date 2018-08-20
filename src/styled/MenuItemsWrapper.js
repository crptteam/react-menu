import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { get } from 'lodash';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      items: PropTypes.shape({
        alignItems: PropTypes.string.isRequired,
        paddingLeft: PropTypes.string.isRequired,
        paddingRight: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const MenuItemsDiv = styled.div`
  display: flex;
  -js-display: flex;
  flex-direction: column;
  align-items: ${({itemsTheme}) => itemsTheme.alignItems};
  padding-left: ${({itemsTheme}) => itemsTheme.paddingLeft};
  padding-right: ${({itemsTheme}) => itemsTheme.paddingRight};
`;

const MenuItemsWrapper = props => (
  <MenuItemsDiv
    itemsTheme={get(props, 'theme.Menu.items', {})}
    {...props}
  />
);

MenuItemsWrapper.propTypes = propTypes;
export default withTheme(MenuItemsWrapper);
