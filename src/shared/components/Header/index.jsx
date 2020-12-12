import React from 'react';
import { useLocation } from 'react-router-dom';

import { scrollTo } from 'shared/utils/helpers';

import * as S from './styled';

const paths = [
  { name: 'Characters', path: '/characters' },
  { name: 'Episodes', path: '/episodes' },
  { name: 'Locations', path: '/locations' },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.Nav isFull={!paths.every(({ path }) => pathname !== path)}>
        <S.Links>
          {paths.map(({ path, name }, index) => (
            <S.LinkContainer key={index} active={pathname.startsWith(path)}>
              <S.ALink onClick={scrollTo(0, 0)} to={path}>
                {name}
              </S.ALink>
            </S.LinkContainer>
          ))}
        </S.Links>
      </S.Nav>
    </S.Container>
  );
};

export default Header;
