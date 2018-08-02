import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { get } from 'lodash';


const propTypes = {
  isFull: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      common: PropTypes.shape({
        width: PropTypes.shape({
          full: PropTypes.string.isRequired,
          fold: PropTypes.string.isRequired,
        }).isRequired,
        borderWidth: PropTypes.string.isRequired,
        borderColor: PropTypes.string.isRequired,
        shadowX: PropTypes.string.isRequired,
        shadowY: PropTypes.string.isRequired,
        shadowColor: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const MenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: ${({ isFull, menuTheme }) => {
    const { full, fold } = menuTheme.width;
    return isFull ? full : fold;
  }}
  background-color: ${({ menuTheme }) => menuTheme.backgroundColor};
  transition: 0.5s all;
  border-right:
    ${({ menuTheme }) => menuTheme.borderWidth}
    solid
    ${({ menuTheme }) => menuTheme.borderColor};
  box-shadow:
      ${({ menuTheme }) => menuTheme.shadowX}
      ${({ menuTheme }) => menuTheme.shadowY}
      0
      0
      ${({ menuTheme }) => menuTheme.shadowColor};
`;


const MenuWrapper = props => (
  <MenuDiv
    menuTheme={get(props, 'theme.Menu.common', {})}
    {...props}
  />
);

MenuWrapper.propTypes = propTypes;
export default withTheme(MenuWrapper);
