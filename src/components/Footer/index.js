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
    isShowButton: PropTypes.bool.isRequired,
  };

  render() {
    const {
      isOpen,
      onClick,
      content: FooterContent,
      isShowButton,
    } = this.props;

    return (
      <FooterWrapper>
        {isShowButton && (<Button onClick={onClick} />)}
        <SeparateLine />
        <FooterContent isOpen={isOpen} />
      </FooterWrapper>
    );
  }
}
