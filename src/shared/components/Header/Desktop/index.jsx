import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { Logo } from 'shared/components';

import * as S from './styled';

const DesktopHeader = ({ paths, handleLinkClick }) => {
  const { pathname } = useLocation();

  return (
    <S.Nav isFull={!paths.every(({ path }) => pathname !== path)}>
      <S.Links>
        {paths.map(({ path, name }, index) => (
          <S.LinkContainer key={index} active={pathname.startsWith(path)}>
            <S.ALink onClick={handleLinkClick} to={path}>
              {name}
            </S.ALink>
          </S.LinkContainer>
        ))}
      </S.Links>
      <Logo />
    </S.Nav>
  );
};

DesktopHeader.propTypes = {
  paths: PropTypes.array.isRequired,
  handleLinkClick: PropTypes.func,
};

DesktopHeader.defaultProps = {
  handleLinkClick: () => {},
};

export default DesktopHeader;
