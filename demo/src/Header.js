import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
};

const Header = ({ isOpen }) => (
  isOpen
    ? (<div>BIG HEADER!!!</div>)
    : (<div>small header</div>)
);
Header.displayName = 'Example header';
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
