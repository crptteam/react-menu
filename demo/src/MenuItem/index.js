import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@crpt/react-icon';
import activeStyle from './DemoMenuNavLinkActiveStyle';

import DemoMenuItemWrapper from './DemoMenuItemWrapper';
import DemoStyledNavLinkWrapper from './DemoMenuNavLinkWrapper';

const propTypes = {
  isOpen: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const defaultProps = {
  isOpen: false,
};

const selectedTheme = {
  width: '100%',
  height: '100%',
  marginTop: '10px',
  marginBottom: '10px',
  backgroundColor: '#F8EC31',
  boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  border: '1px solid rgba(248,236,49,1)',
};

const MenuItem = ({
  isOpen,
  link,
  text,
  iconName,
}) => {
  return (
    <DemoStyledNavLinkWrapper
      activeStyle={activeStyle()}
      to={link}
    >
      <DemoMenuItemWrapper
        isOpen={isOpen}
      >
        <Icon type={iconName} spacingLeft={16} spacingRight={16} />
        {isOpen ? text : null}
      </DemoMenuItemWrapper>
    </DemoStyledNavLinkWrapper>
  );
};

MenuItem.displayName = 'Example menu item';
MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
