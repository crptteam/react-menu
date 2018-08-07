import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const DemoMenuItemDiv = styled.div`
  display: flex;
  -js-display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? 'flex-start' : 'center')};
`;

const DemoMenuItemWrapper = (props) => {
  const { isOpen, ...othersProps } = props;

  return (
    <DemoMenuItemDiv
      isOpen={isOpen}
      {...othersProps}
    />
  );
};

DemoMenuItemWrapper.propTypes = propTypes;
export default DemoMenuItemWrapper;
