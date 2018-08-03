import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FooterWrapper from '../../styled/FooterWrapper';
import Button from './Button';
import SeparateLine from './SeparateLine';


export default class Footer extends PureComponent {
  displayName = 'Footer';

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    content: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const {
      isOpen,
      onClick,
      content: FooterContent,
    } = this.props;

    return (
      <FooterWrapper>
        <Button onClick={onClick} />
        <SeparateLine />
        <FooterContent isOpen={isOpen} />
      </FooterWrapper>
    );
  }
}
