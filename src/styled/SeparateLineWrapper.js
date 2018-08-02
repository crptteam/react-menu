import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { get } from 'lodash';


const propTypes = {
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      separator: PropTypes.shape({
        height: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const SeparateLineDiv = styled.div`
  display: flex;
  height: ${({ separatorTheme }) => separatorTheme.height};
  width: ${({ separatorTheme }) => separatorTheme.width};
  background-color: ${({ separatorTheme }) => separatorTheme.color}
`;


const SeparateLineWrapper = props => (
  <SeparateLineDiv
    separatorTheme={get(props, 'theme.Menu.separator', {})}
    {...props}
  />
);

SeparateLineWrapper.propTypes = propTypes;
export default withTheme(SeparateLineWrapper);
