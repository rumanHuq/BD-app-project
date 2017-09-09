// @flow

import styled from 'styled-components';
import em from '../../Styles/helpers';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  @media (min-width: 1268px) {
    flex-direction: row;
  }
`;

export const Panel = styled.div`
  align-items: center;
  background: ${(props: { panel1: string, panel2: string, panel3: string }) => {
    /* eslint-disable */
    if (props.panel1) return 'url(' + require('../../../Assets/4.jpg') + ')';
    if (props.panel2) return 'url(' + require('../../../Assets/2.jpg') + ')';
    if (props.panel3) return 'url(' + require('../../../Assets/3.jpg') + ')';
    /* eslint-enable */
    return 'red';
  }};
  background-position: center center;
  background-size: cover;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  > a {
    i {
      font-size: ${em(36)};
      padding: ${em(5)};
    }

    :hover {
      i {
        color: ${({ theme }) => theme.red};
        font-size: ${em(48)};
        text-shadow: none;
      }

      ~ div {
        /* This is Border Component */
        opacity: 1;
        pointer-events: none;
        transform: translate(0%);
      }
    }
  }

  @media (min-width: 1268px) {
    background-position: bottom center;
  }
`;
