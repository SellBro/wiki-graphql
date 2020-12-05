import styled from 'styled-components';

import { color, font, device } from 'shared/utils/styles';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;

  @media ${device.mobileS} {
    padding: 20px 10px;
  }

  @media ${device.laptop} {
    padding: 30px;
  }

  @media ${device.desktop} {
    padding: 50px;
  }
`;

export const ErrorText = styled.div`
  margin-top: 20px;
  text-align: center;
  ${font.size(40)};
  color: ${color.textPrimary};

  @media ${device.mobileS} {
    margin-top: 10px;
    ${font.size(16)};
  }
`;

export const Img = styled.img`
  border-radius: 8px;

  @media ${device.mobileS} {
    width: 100%;
  }
`;
