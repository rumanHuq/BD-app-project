import styled, { keyframes } from 'styled-components';
import em from '../../../../../Styles/helpers';

const slideEffect = keyframes`
  0% {
    opacity: 0;
    transform: translate(100%);
  }

  100% {
    opacity: 1;
    transform: translate(0%);
  }
`;
const LanguageMenu = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  position: absolute;

  li {
    align-items: center;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    display: flex;
    font-size: ${em(48)};
    justify-content: center;
    margin-top: ${em(4)};
    opacity: 0;
    padding: ${em(4)};

    span {
      font-size: ${em(8)};

      :hover {
        color: ${({ theme }) => theme.red};
      }

      button {
        background: 0;
        border: 0;
        color: inherit;
        font-family: inherit;
      }
    }
  }

  li:first-child {
    border: ${em(1)} solid ${({ theme }) => theme.red};
    opacity: 1;
    width: ${em(30)};

    :hover {
      border: ${em(1)} solid ${({ theme }) => theme.white};
      color: ${({ theme }) => theme.red};
    }
  }

  li:nth-child(n + 2) {
    cursor: initial;
    display: none;
  }

  :hover {
    li {
      animation-fill-mode: forwards;
      animation-name: ${slideEffect};
      animation-timing-function: ease-in;
      cursor: pointer;
      display: initial;
    }

    li:nth-child(2) {
      animation-duration: 300ms;
    }

    li:nth-child(3) {
      animation-duration: 600ms;
    }
  }
`;

export default LanguageMenu;
