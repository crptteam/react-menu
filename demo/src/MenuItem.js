import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@crpt/react-icon';

const propTypes = {
  isFull: PropTypes.bool,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const defaultProps = {
  isFull: false,
};

const MenuItem = ({ isFull, text, iconName }) => (
  <div>
    <Icon type={iconName} />
    {isFull ? text : null}
  </div>
);

MenuItem.displayName = 'Example menu item';
MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
