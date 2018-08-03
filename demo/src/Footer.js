import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
};

const Footer = ({ isOpen }) => (
  isOpen
    ? (<div>BIG FOOOOTER!!!</div>)
    : (<div>small footer</div>)
);

Footer.displayName = 'Example footer';
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
