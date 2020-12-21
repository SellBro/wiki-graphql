import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'shared/components';

import { MobileHeaderStyled, BarsButton } from './styled';

const MobileHeader = ({ handleToggleBar, mobileBarIsOpen }) => {
  return (
    <MobileHeaderStyled mobileBarIsOpen={mobileBarIsOpen}>
      <BarsButton type="button" onClick={handleToggleBar}>
        <Icon type="trigram" size={24} />
      </BarsButton>
    </MobileHeaderStyled>
  );
};

MobileHeader.propTypes = {
  handleToggleBar: PropTypes.func,
  mobileBarIsOpen: PropTypes.bool,
};

MobileHeader.defaultProps = {
  handleToggleBar: () => {},
  mobileBarIsOpen: false,
};

export default MobileHeader;
