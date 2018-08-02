import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isFull: PropTypes.bool,
};

const defaultProps = {
  isFull: false,
};

const Header = ({ isFull }) => (
  isFull
    ? (<div>BIG HEADER!!!</div>)
    : (<div>small header</div>)
);
Header.displayName = 'Example header';
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
