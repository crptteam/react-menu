import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderWrapper from '../styled/HeaderWrapper';


export default class Header extends PureComponent {
  displayName = 'Header';

  static propTypes = {
    isFull: PropTypes.bool.isRequired,
    content: PropTypes.func.isRequired,
  };

  render() {
    const {
      isFull,
      content: HeaderContent,
    } = this.props;
    return (
      <HeaderWrapper>
        <HeaderContent isFull={isFull} />
      </HeaderWrapper>
    );
  }
}
