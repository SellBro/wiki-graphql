import styled from 'styled-components';

import { device } from 'shared/utils/styles';

export const CharacterListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 10px;

  & > span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .react-loading-skeleton {
      margin-bottom: 15px;
      border-radius: 8px;
    }
  }

  @media ${device.mobileS} {
    padding: 20px 10px 10px 10px;

    .react-loading-skeleton {
      width: calc(100vw - 20px) !important;
      height: calc(100vw - 20px) !important;
    }
  }

  @media ${device.desktop} {
    padding: 20px 10px;
  }
`;

export const PageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1260px;
  margin: 10px auto 20px auto;
  padding: 0 7.5px;

  @media ${device.mobileS} {
    margin-top: 0;
    height: 60px;
  }
`;
