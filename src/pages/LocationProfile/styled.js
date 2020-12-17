import styled from 'styled-components';

import { font, color, device } from 'shared/utils/styles';

export const LocationContainer = styled.div`
  max-width: 940px;
  margin: 15px auto;
  padding: 0 20px;

  @media ${device.mobileS} {
    padding: 0 10px;
  }

  @media ${device.laptop} {
    margin: 40px auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const LocationTitle = styled.h1`
  margin: 0;
  ${font.size(24)};
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-transform: capitalize;
  ${font.size(20)};
  color: ${color.textExtra};
`;
