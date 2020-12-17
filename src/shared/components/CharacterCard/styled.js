import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { font, color, device } from 'shared/utils/styles';

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${color.cardInfo};

  @media ${device.mobileS} {
    width: 100%;
    height: calc(100vw - 20px);

    & img {
      width: 100%;
    }
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  transition: all 0.2s;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${font.size(20)};
  background-color: ${color.cardInfo};

  ${CardContainer}:hover & {
    color: ${color.orange};
    background-color: ${color.grayTransparent};
  }
`;

export const CharacterLink = styled(Link)`
  display: block;
  color: ${color.textPrimary};

  @media ${device.mobileS} {
    width: 100%;
  }
`;

export const Block = styled.li`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 15px;
  width: 315px;

  @media ${device.mobileS} {
    width: 100%;
  }
`;
