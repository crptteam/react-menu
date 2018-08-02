import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../svg/buttonIcon.svg';
import ButtonWrapper from '../../styled/ButtonWrapper';

const propTypes = {
  onClick: PropTypes.func.isRequired,
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

export default Button;
