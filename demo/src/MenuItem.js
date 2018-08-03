import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@crpt/react-icon';

const propTypes = {
  isOpen: PropTypes.bool,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const defaultProps = {
  isOpen: false,
};

const MenuItem = ({ isOpen, text, iconName }) => (
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: isOpen ? 'flex-start' : 'center',
    }}
    onClick={() => console.log(`Clicked to ${text}.`)}
  >
    <Icon type={iconName} />
    {isOpen ? text : null}
  </div>
);

MenuItem.displayName = 'Example menu item';
MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
