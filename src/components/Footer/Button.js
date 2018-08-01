import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../svg/buttonIcon.svg';
import ButtonWrapper from '../../styled/ButtonWrapper';

const propTypes = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => {},
};

const Button = ({
  onClick,
}) => (
  <ButtonWrapper onClick={onClick}>
    <ButtonIcon />
  </ButtonWrapper>
);

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
