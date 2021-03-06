import styled from 'styled-components';

export const Image = styled.img`
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
`;
