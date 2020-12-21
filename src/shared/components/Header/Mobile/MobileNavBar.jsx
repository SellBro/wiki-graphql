import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MobileOnly } from 'shared/components';

import { scrollTo } from 'shared/utils/helpers';

import { AsideStyled, NavList, NavListItem, LinkStyled } from './styled';

const MobileNavBar = ({ isOpen, paths, handleToggleBar }) => {
  const { pathname } = useLocation();

  const handleNavigation = () => {
    handleToggleBar();
    scrollTo(0, 0, 'auto');
  };

  return (
    <MobileOnly>
      <AsideStyled isOpen={isOpen}>
        <nav>
          <NavList>
            {paths.map(({ name, path }) => (
              <NavListItem
                onClick={handleNavigation}
                isActive={pathname.startsWith(path)}
                key={name}>
                <LinkStyled to={path}>
                  <span>{name}</span>
                </LinkStyled>
              </NavListItem>
            ))}
          </NavList>
        </nav>
      </AsideStyled>
    </MobileOnly>
  );
};

MobileNavBar.propTypes = {
  isOpen: PropTypes.bool,
  handleToggleBar: PropTypes.func,
  paths: PropTypes.array.isRequired,
};

MobileNavBar.defaultProps = {
  isOpen: false,
  handleToggleBar: () => {},
};

export default MobileNavBar;
