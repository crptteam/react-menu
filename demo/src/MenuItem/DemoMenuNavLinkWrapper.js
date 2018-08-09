import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { NavLink } from 'react-router-dom';

const DemoMenuItemDiv = styled.div`
  display: flex;
  -js-display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
`;


const DemoStyledNavLink = styled(NavLink)`
  display: flex;
  -js-display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content:
  ${({ isOpen, itemTheme }) => (
    isOpen ? itemTheme.justifyContentOnFull : itemTheme.justifyContentOnFold
  )};
  border-radius: ${({ itemTheme }) => itemTheme.borderRadius};
  border:
    ${({ itemTheme }) => itemTheme.hoverBorderWidth}
    solid
    rgba(0,0,0,0);

  :hover {
    border-color: ${({ itemTheme }) => itemTheme.hoverBorderColor};
    box-shadow:
      ${({ itemTheme }) => itemTheme.shadowX}
      ${({ itemTheme }) => itemTheme.shadowY}
      0
      0
      ${({ itemTheme }) => itemTheme.shadowColor};
  }
  :link {
    text-decoration: none;
    color: ${({ itemTheme }) => itemTheme.textColor};
  }
  :visited {
    text-decoration: none;
    color: ${({ itemTheme }) => itemTheme.textColor};;
  }
`;

const DemoStyledNavLinkWrapper = (props) => {
  return (
    <DemoStyledNavLink
      itemTheme={props.theme.Menu.item}
      {...props}
    />
  );
};

export default withTheme(DemoStyledNavLinkWrapper);
