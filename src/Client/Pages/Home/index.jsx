// @flow

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import em from '../../Styles/helpers';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Panel = styled.div`
  align-items: center;
  background-image: ${(props) => {
    if (props.panel1) return "url('../../../Assets/4.jpg')";
    if (props.panel2) return "url('../../../Assets/2.jpg')";
    if (props.panel3) return "url('../../../Assets/3.jpg')";
    return 'red';
  }};
  background-position: center center;
  background-size: cover;
  display: flex;
  flex: 1;
  justify-content: center;

  h2 {
    color: #fff;
    font-family: 'Tillana', cursive;
    font-size: ${em(64, 16)};
  }

  > * {
    text-shadow: 0 0 #ddd;
    transition: all 300ms ease;

    :hover {
      text-shadow: 0 0 ${em(128, 16)} #eee;
      transform: scale(1.5);
    }
  }

  @media (min-width: 1024px) {
    background-position: bottom center;

    h2 {
      font-size: ${em(32, 16)};
    }
  }
`;

export default () => (
  <Home>
    <Panel panel1>
      <NavLink to="immigration">
        <h2>Immigration</h2>
      </NavLink>
    </Panel>
    <Panel panel2>
      <NavLink to="events">
        <h2>Local Events</h2>
      </NavLink>
    </Panel>
    <Panel panel3>
      <NavLink to="jobs">
        <h2>Job Board</h2>
      </NavLink>
    </Panel>
  </Home>
);
