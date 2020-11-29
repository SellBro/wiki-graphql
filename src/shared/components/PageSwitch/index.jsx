import React from 'react';

import { Button, Input, PageCountContainer } from './styled';

const PageSwitch = ({ allPages, page }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === allPages;

  return (
    <>
      <Button disabled={isFirstPage}>{'<'}</Button>
      <PageCountContainer>
        <Input value={`${page} of ${allPages}`} inputMode="numeric" />
      </PageCountContainer>
      <Button disabled={isLastPage}>{'>'}</Button>
    </>
  );
};

export default PageSwitch;
