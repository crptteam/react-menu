import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { get } from 'lodash';

const propTypes = {
  theme: PropTypes.shape({
    Menu: PropTypes.shape({
      footer: PropTypes.shape({
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
  flex-direction: column;
  
  height: ${({ footerTheme }) => footerTheme.height};
  margin-top: ${({ footerTheme }) => footerTheme.marginTop};
  margin-bottom: ${({ footerTheme }) => footerTheme.marginBottom};
}};
  display: flex;
  align-items: ${({ footerTheme }) => footerTheme.alignItems};
`;


const FooterWrapper = props => (
  <HeaderDiv
    footerTheme={get(props, 'theme.Menu.footer', {})}
    {...props}
  />
);
FooterWrapper.propTypes = propTypes;
export default withTheme(FooterWrapper);
