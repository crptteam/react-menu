import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { get } from 'lodash';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      item: PropTypes.shape({
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        marginTop: PropTypes.string.isRequired,
        marginBottom: PropTypes.string.isRequired,
        justifyContentOnFull: PropTypes.string.isRequired,
        justifyContentOnFold: PropTypes.string.isRequired,
        borderRadius: PropTypes.string.isRequired,
        hoverBorderWidth: PropTypes.string.isRequired,
        hoverBorderColor: PropTypes.string.isRequired,
        shadowX: PropTypes.string.isRequired,
        shadowY: PropTypes.string.isRequired,
        shadowColor: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const MenuItemDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: 
  ${({ isOpen, itemTheme }) => (
    isOpen ? itemTheme.justifyContentOnFull : itemTheme.justifyContentOnFold
  )};
  width: ${({ itemTheme }) => itemTheme.width};
  height: ${({ itemTheme }) => itemTheme.height};
  margin-top: ${({ itemTheme }) => itemTheme.marginTop};
  margin-bottom: ${({ itemTheme }) => itemTheme.marginBottom};
  border-radius: ${({ itemTheme }) => itemTheme.borderRadius};
  border:
    ${({ itemTheme }) => itemTheme.hoverBorderWidth} 
    solid 
    rgba(0,0,0,0);
`;

const MenuItemWrapper = props => (
  <MenuItemDiv
    itemTheme={get(props, 'theme.Menu.item', {})}
    {...props}
  />
);

MenuItemWrapper.propTypes = propTypes;
export default withTheme(MenuItemWrapper);
