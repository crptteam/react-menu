import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';


const propTypes = {
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      header: PropTypes.shape({
        height: PropTypes.string.isRequired,
        marginTop: PropTypes.string.isRequired,
        marginBottom: PropTypes.string.isRequired,
        alignItems: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const HeaderDiv = styled.div`
  display: flex;
  height: ${({ headerTheme }) => headerTheme.height};
  margin-top: ${({ headerTheme }) => headerTheme.marginTop};
  margin-bottom: ${({ headerTheme }) => headerTheme.marginBottom};
}};
  justify-content: ${({ headerTheme }) => headerTheme.alignItems};
`;


const HeaderWrapper = props => (
  <HeaderDiv
    headerTheme={get(props, 'theme.Menu.header', {})}
    {...props}
  />
);
HeaderWrapper.propTypes = propTypes;
export default withTheme(HeaderWrapper);
