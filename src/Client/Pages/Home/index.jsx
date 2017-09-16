// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import LanguageMenu from './Language-menu';
import { Border, H2 } from '../../Styles/Typography';
import { Home, Panel } from './Style';

export default (props: { getLocale: Function }) => (
  <Home>
    <LanguageMenu getLocale={props.getLocale} />
    <Panel panel1>
      <NavLink to="immigration">
        <H2>
          <i className="fa fa-globe" aria-hidden="true" />
          <FormattedMessage id="indexPage.immigration" />
        </H2>
      </NavLink>
      <Border />
    </Panel>
    <Panel panel2>
      <NavLink to="events">
        <H2>
          <i className="fa fa-calendar-check-o" aria-hidden="true" />
          <FormattedMessage id="indexPage.events" />
        </H2>
      </NavLink>
      <Border />
    </Panel>
    <Panel panel3>
      <NavLink to="jobs">
        <H2>
          <i className="fa fa-briefcase" aria-hidden="true" />
          <FormattedMessage id="indexPage.jobs" />
        </H2>
      </NavLink>
      <Border />
    </Panel>
  </Home>
);
