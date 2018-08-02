import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { get } from 'lodash';

const propTypes = {
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      fullModeButton: PropTypes.shape({
        height: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  height: ${({ fullModeButtonTheme }) => fullModeButtonTheme.height};
}};
`;


const ButtonWrapper = props => (
  <ButtonDiv
    fullModeButtonTheme={get(props, 'theme.Menu.fullModeButton', {})}
    {...props}
  />
);
ButtonWrapper.propTypes = propTypes;

export default withTheme(ButtonWrapper);
