import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { font, color } from 'shared/utils/styles';

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${color.cardInfo};
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  transition: all 0.2s;
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
`;

export const Block = styled.li`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  margin-bottom: 15px;
  width: 315px;
`;
