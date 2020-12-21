import React, { useState, useCallback } from 'react';

import { scrollTo } from 'shared/utils/helpers';

import { DesktopOnly, MobileOnly } from 'shared/components';

import DesktopHeader from './Desktop';
import { MobileHeader, MobileNavBar } from './Mobile';

import { Container } from './styled';

const paths = [
  { name: 'Characters', path: '/characters' },
  { name: 'Episodes', path: '/episodes' },
  { name: 'Locations', path: '/locations' },
];

const Header = () => {
  const [mobileBarIsOpen, setMobileBarIsOpen] = useState(false);

  const handleToggleBar = () => {
    setMobileBarIsOpen(prev => !prev);
  };

  const handleLinkClick = useCallback(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <DesktopOnly>
        <DesktopHeader paths={paths} handleLinkClick={handleLinkClick} />
      </DesktopOnly>
      <MobileOnly>
        <MobileHeader mobileBarIsOpen={mobileBarIsOpen} handleToggleBar={handleToggleBar} />
        <MobileNavBar isOpen={mobileBarIsOpen} handleToggleBar={handleToggleBar} paths={paths} />
      </MobileOnly>
    </Container>
  );
};

export default Header;
