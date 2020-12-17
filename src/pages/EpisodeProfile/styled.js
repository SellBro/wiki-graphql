import styled from 'styled-components';

import { font, device, color } from 'shared/utils/styles';

export const EpisodeInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
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

export const EpisodeTitle = styled.h1`
  margin: 0;
  ${font.size(24)};

  @media ${device.mobileS} {
    margin-bottom: 5px;
  }
`;

export const PlotTitle = styled.h2`
  margin: 0 0 15px 0;
  text-transform: capitalize;

  ${font.size(24)};
  color: ${color.orange};
`;

export const PlotContainer = styled.div`
  margin-top: 10px;
  line-height: 1.7em;

  ${font.size(16)};

  @media ${device.mobileS} {
    margin-top: 20px;
  }

  @media ${device.laptop} {
    margin-top: 40px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 2px 0 2px 0px;
  ${font.size(16)};

  @media ${device.mobileS} {
    margin-bottom: 0;
  }
`;

export const ImdbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${font.size(20)};
  color: ${color.textPrimary};

  span {
    &:last-of-type {
      margin-left: 20px;

      img {
        vertical-align: -0.225em;
        margin-left: 10px;
      }
    }
  }
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  ${font.size(14)};
  color: ${color.textExtra};

  span:last-of-type {
    margin-left: 20px;

    svg {
      margin-right: 5px;
    }
  }
`;

export const ShortInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
  ${font.size(24)};
  color: ${color.textPrimary};

  span:last-of-type {
    margin-left: 20px;
    ${font.size(16)};
    color: ${color.textPrimary};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 300px;
  min-height: 170px;
  margin-right: 15px;
  margin-bottom: 10px;
  background-color: ${color.background};
  border-radius: 8px;

  @media ${device.mobileS} {
    width: 100%;
    margin-bottom: 15px;
    margin-right: 0;

    & img {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    margin-right: 30px;
  }
`;
