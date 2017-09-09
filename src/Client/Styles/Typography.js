// @flow

import styled from 'styled-components';
import em from './helpers';

export const Border = styled.div`
  background: ${({ theme }) => theme.red};
  height: 5px;
  margin-top: ${em(1)};
  opacity: 0;
  transform: translateX(-100%);
  width: 50%;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.white};
  font-family: 'Tillana', cursive;
  font-size: ${em(32)};

  :hover {
    text-shadow: 0 0 ${em(10)} ${({ theme }) => theme.black};
    transform: scale(1.2);
  }

  @media (min-width: 1268px) {
    font-size: ${em(20, 16)};
  }
`;
