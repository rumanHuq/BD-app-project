// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import em from '../../Styles/helpers';

const Border = styled.div`
  background: #fc354c;
  height: 5px;
  margin-top: ${em(1)};
  opacity: 0;
  transform: translateX(-100%);
  transition: all 300ms ease;
  width: 50%;
`;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  @media (min-width: 1268px) {
    flex-direction: row;
  }
`;

const H2 = styled.h2`
  color: #fff;
  font-family: 'Tillana', cursive;
  font-size: ${em(32)};

  :hover {
    text-shadow: 0 0 ${em(10)} #000;
    transform: scale(1.2);
  }

  @media (min-width: 1268px) {
    font-size: ${em(20, 16)};
  }
`;

const Panel = styled.div`
  align-items: center;
  background: ${(props) => {
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
  transition: all 300ms ease;

  > a {
    * {
      transition: all 300ms ease;
    }

    i {
      font-size: ${em(36)};
      padding: ${em(5)};
    }

    :hover {
      i {
        color: #fc354c;
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

    :hover {
      flex: 1.5;
    }
  }
`;

export default () => (
  <Home>
    <Panel panel1>
      <NavLink to="immigration">
        <H2>
          <i className="fa fa-globe" aria-hidden="true" />
          Immigration
        </H2>
      </NavLink>
      <Border />
    </Panel>
    <Panel panel2>
      <NavLink to="events">
        <H2>
          <i className="fa fa-calendar-check-o" aria-hidden="true" />
          Local Events
        </H2>
      </NavLink>
      <Border />
    </Panel>
    <Panel panel3>
      <NavLink to="jobs">
        <H2>
          <i className="fa fa-briefcase" aria-hidden="true" />
          Job Board
        </H2>
      </NavLink>
      <Border />
    </Panel>
  </Home>
);
