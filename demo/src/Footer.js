import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isFull: PropTypes.bool,
};

const defaultProps = {
  isFull: false,
};

const Footer = ({ isFull }) => (
  isFull
    ? (<div>BIG FOOOOTER!!!</div>)
    : (<div>small footer</div>)
);

Footer.displayName = 'Example footer';
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
