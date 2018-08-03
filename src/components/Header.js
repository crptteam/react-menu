import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderWrapper from '../styled/HeaderWrapper';


export default class Header extends PureComponent {
  displayName = 'Header';

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    content: PropTypes.func.isRequired,
  };

  render() {
    const {
      isOpen,
      content: HeaderContent,
    } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContent isOpen={isOpen} />
      </HeaderWrapper>
    );
  }
}
